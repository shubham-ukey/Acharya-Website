import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import ArticleMedia, { formatDate } from './ArticleMedia';

export default function FeaturedArticle({ article }) {
  if (!article) return null;
  return (
    <article className="group relative grid overflow-hidden rounded-[2rem] border border-forest/10 bg-white shadow-soft lg:grid-cols-2">
      <div className="aspect-[4/3] overflow-hidden bg-sage-soft lg:aspect-auto lg:min-h-[420px]">
        <ArticleMedia article={article} eager className="h-full w-full transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
        <p className="eyebrow">Featured</p>
        <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-charcoal/60">
          <span className="rounded-full bg-sage-soft px-3 py-1 font-semibold text-forest">{article.category}</span>
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <span className="inline-flex items-center gap-1"><Clock size={13} aria-hidden="true" />{article.readTime}</span>
        </div>
        <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">{article.title}</h2>
        <p className="lede mt-4">{article.excerpt}</p>
        <p className="mt-4 text-sm text-charcoal/60">By {article.author}</p>
        <Link to={`/insights/${article.slug}`} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-forest after:absolute after:inset-0">
          Read Article <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
