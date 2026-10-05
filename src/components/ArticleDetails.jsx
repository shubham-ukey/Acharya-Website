import { useState } from 'react';
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Clock, Facebook, Link2, Linkedin, Twitter } from 'lucide-react';
import ArticleMedia, { formatDate } from './ArticleMedia';
import ArticleGrid from './ArticleGrid';
import SectionHeading from './SectionHeading';

function ShareButtons({ title }) {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const enc = encodeURIComponent;
  const btn = 'inline-flex h-10 w-10 items-center justify-center rounded-full border border-forest/20 text-forest transition hover:bg-forest hover:text-ivory';
  const copy = async () => {
    try { await navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch { /* clipboard blocked */ }
  };
  return (
    <div className="flex items-center gap-2" role="group" aria-label="Share this article">
      <a className={btn} aria-label="Share on LinkedIn" target="_blank" rel="noopener noreferrer" href={`https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`}><Linkedin size={16} /></a>
      <a className={btn} aria-label="Share on X" target="_blank" rel="noopener noreferrer" href={`https://twitter.com/intent/tweet?url=${enc(url)}&text=${enc(title)}`}><Twitter size={16} /></a>
      <a className={btn} aria-label="Share on Facebook" target="_blank" rel="noopener noreferrer" href={`https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`}><Facebook size={16} /></a>
      <button type="button" className={btn} onClick={copy} aria-label={copied ? 'Link copied' : 'Copy link'}>{copied ? <Check size={16} /> : <Link2 size={16} />}</button>
      <span className="sr-only" role="status">{copied ? 'Link copied' : ''}</span>
    </div>
  );
}

/** Renders any article object. `content` is HTML (as delivered by most CMS platforms). */
export default function ArticleDetails({ article, related = [] }) {
  return (
    <>
      <article>
        <header className="bg-ivory-deep/60 pb-12 pt-32 md:pt-40">
          <div className="container-x max-w-4xl">
            <Link to="/insights" className="inline-flex items-center gap-2 text-sm font-semibold text-forest"><ArrowLeft size={16} aria-hidden="true" /> All insights</Link>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-charcoal/65">
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-forest">{article.category}</span>
              <time dateTime={article.date}>{formatDate(article.date)}</time>
              <span className="inline-flex items-center gap-1"><Clock size={14} aria-hidden="true" />{article.readTime}</span>
            </div>
            <h1 className="mt-5 text-4xl leading-[1.1] sm:text-5xl">{article.title}</h1>
            <p className="lede mt-5 max-w-2xl">{article.excerpt}</p>
            <p className="mt-6 text-sm text-charcoal/70">Written by <span className="font-semibold text-forest">{article.author}</span></p>
          </div>
        </header>

        <div className="container-x -mt-2 max-w-5xl">
          <div className="aspect-[16/9] overflow-hidden rounded-[2rem] bg-sage-soft shadow-lift sm:aspect-[21/9]">
            <ArticleMedia article={article} eager className="h-full w-full" />
          </div>
        </div>

        <div className="container-x mt-14 grid max-w-5xl gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-forest/60">Share</p>
            <ShareButtons title={article.title} />
          </aside>
          <div className="prose-article" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.content) }} />
        </div>
      </article>

      {related.length > 0 && (
        <section className="section-pad" aria-labelledby="related-heading">
          <div className="container-x">
            <SectionHeading eyebrow="Keep Reading" title="Related Articles" />
            <div className="mt-12"><ArticleGrid articles={related} /></div>
          </div>
        </section>
      )}
    </>
  );
}
