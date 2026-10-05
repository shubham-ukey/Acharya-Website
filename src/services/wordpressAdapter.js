/**
 * WORDPRESS (HEADLESS) ADAPTER
 * Turns WordPress REST API posts into the article shape used by the UI:
 * { id, title, slug, excerpt, content, image, imageAlt, category, author, date, readTime }
 * Enabled when VITE_WP_URL is set (see .env.example).
 */
const BASE = (import.meta.env.VITE_WP_URL || '').replace(/\/$/, '');
export const isWordPress = Boolean(BASE);

// Posts without a featured image get a built-in illustration so the layout never looks empty.
const ART_BY_CATEGORY = {
  Ayurveda: 'art:sprig', Yoga: 'art:rings', Research: 'art:rings',
  Healthcare: 'art:lattice', 'Clinical Studies': 'art:molecule', 'Scientific Writing': 'art:sprig',
};

const decode = (html = '') => new DOMParser().parseFromString(html, 'text/html').documentElement.textContent || '';
const stripTags = (html = '') => decode(html.replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim();

function mapPost(p) {
  const media = p._embedded?.['wp:featuredmedia']?.[0];
  const terms = p._embedded?.['wp:term']?.[0] || [];
  const category = (terms.find((t) => t.slug !== 'uncategorized') || {}).name || 'Insights';
  const words = stripTags(p.content?.rendered).split(' ').length;
  return {
    id: p.id,
    slug: p.slug,
    title: decode(p.title?.rendered),
    excerpt: stripTags(p.excerpt?.rendered).replace(/\s*\[…\]\s*$/, '…'),
    content: p.content?.rendered || '',
    image: media?.source_url || ART_BY_CATEGORY[category] || 'art:sprig',
    imageAlt: media?.alt_text || decode(p.title?.rendered),
    category,
    author: p._embedded?.author?.[0]?.name || 'Editorial Team',
    date: p.date,
    readTime: `${Math.max(1, Math.ceil(words / 200))} min read`,
  };
}

let postsPromise = null;
export function wpFetchAll() {
  if (!postsPromise) {
    postsPromise = fetch(`${BASE}/wp-json/wp/v2/posts?per_page=100&_embed=wp:featuredmedia,wp:term,author`)
      .then((res) => {
        if (!res.ok) throw new Error(`WordPress responded with ${res.status}`);
        return res.json();
      })
      .then((list) => list.map(mapPost))
      .catch((err) => { postsPromise = null; throw err; }); // don't cache failures
  }
  return postsPromise;
}

export async function wpFetchCategories() {
  const res = await fetch(`${BASE}/wp-json/wp/v2/categories?per_page=100&hide_empty=true`);
  if (!res.ok) throw new Error(`WordPress responded with ${res.status}`);
  return (await res.json()).filter((c) => c.slug !== 'uncategorized').map((c) => decode(c.name));
}
