/**
 * DATA ACCESS LAYER FOR ARTICLES
 * The UI only calls these async functions.
 * - VITE_WP_URL set  -> articles come live from WordPress (client publishes via wp-admin)
 * - not set          -> sample articles from src/data/articles.js
 * To use a different CMS (Sanity, Strapi, Spring Boot), add an adapter that returns the same
 * article shape and switch on it in loadAll() / fetchCategories().
 */
import { articles as mock, categories as mockCategories } from '../data/articles';
import { isWordPress, wpFetchAll, wpFetchCategories } from './wordpressAdapter';

const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const byDateDesc = (a, b) => new Date(b.date) - new Date(a.date);

async function loadAll() {
  if (isWordPress) return wpFetchAll();
  await wait(120);
  return mock;
}

export async function fetchCategories() {
  if (isWordPress) return wpFetchCategories();
  return mockCategories;
}

export async function fetchArticles({ category, query, limit } = {}) {
  let list = [...(await loadAll())].sort(byDateDesc);
  if (category && category !== 'All') list = list.filter((a) => a.category === category);
  if (query && query.trim()) {
    const q = query.trim().toLowerCase();
    list = list.filter((a) => [a.title, a.excerpt, a.category, a.author].join(' ').toLowerCase().includes(q));
  }
  return limit ? list.slice(0, limit) : list;
}

export async function fetchArticleBySlug(slug) {
  return (await loadAll()).find((a) => a.slug === slug) || null;
}

export async function fetchRelatedArticles(slug, limit = 3) {
  const all = await loadAll();
  const current = all.find((a) => a.slug === slug);
  const others = all.filter((a) => a.slug !== slug).sort(byDateDesc);
  if (!current) return others.slice(0, limit);
  const same = others.filter((a) => a.category === current.category);
  const rest = others.filter((a) => a.category !== current.category);
  return [...same, ...rest].slice(0, limit);
}
