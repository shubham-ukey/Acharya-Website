# Publishing articles yourself — CMS setup (WordPress, headless)

Your team writes and publishes in WordPress. The website reads those posts automatically. No developer is needed for new articles.

## One-time setup (developer, ~30 min)
1. Install WordPress on a subdomain, e.g. `cms.your-domain.com` (any WordPress host works).
2. In **Settings → Permalinks**, choose **Post name**.
3. In **Posts → Categories**, create: Ayurveda, Yoga, Research, Healthcare, Clinical Studies, Scientific Writing.
4. Create login accounts for your team under **Users** with the **Author** or **Editor** role.
5. On the website host (Netlify / Vercel / etc.), set the environment variable
   `VITE_WP_URL = https://cms.your-domain.com` and redeploy once.
6. Optional: in **Settings → Reading**, set the WordPress homepage to a "This site is not public" page, and add a
   noindex/robots rule for the CMS subdomain so search engines only index the main website.

## Publishing a post (client team)
1. Log in at `cms.your-domain.com/wp-admin` → **Posts → Add New**.
2. Write the title and content in the editor (headings, lists, quotes and images all work).
3. In the right panel: pick **one Category**, set a **Featured image** (recommended 1600×900 px), and write a short **Excerpt** (1–2 sentences shown on cards).
4. Click **Publish**. The post appears on the website's Insights page on the next page load.

Tips: the URL slug (under Post → Permalink) becomes the article address, so keep it short and readable.
Posts without a featured image display a built-in illustration.

## Notes for the developer
- Adapter: `src/services/wordpressAdapter.js`. Mapping: title, slug, excerpt, content (sanitised with DOMPurify), featured image, first category, author name, date, read time (calculated).
- Fetches up to 100 published posts at once and filters/searches in the browser. If the blog grows past that, switch the adapter to server-side pagination (`page`, `search`, `categories` params).
- If WordPress is on a different domain, CORS for read-only REST GET requests works by default. If a security plugin blocks it, allow your website origin.
- SEO: this is a client-rendered app, so article pages depend on search engines running JavaScript. If organic search becomes a priority, add pre-rendering or move to Next.js later; the data layer will carry over.
