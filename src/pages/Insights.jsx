import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import FeaturedArticle from '../components/FeaturedArticle';
import CategoryFilter from '../components/CategoryFilter';
import ArticleGrid from '../components/ArticleGrid';
import Button from '../components/Button';
import CTASection from '../components/CTASection';
import { useGsapScope } from '../animations/gsapAnimations';
import useAsync from '../hooks/useAsync';
import { fetchArticles, fetchCategories } from '../services/articlesApi';

export default function Insights() {
  const ref = useGsapScope();
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const { data, loading, error } = useAsync(() => fetchArticles({ category, query }), [category, query]);
  const { data: cats } = useAsync(() => fetchCategories(), []);
  const list = data || [];
  const filtering = category !== 'All' || query.trim() !== '';
  const { featured, rest } = useMemo(
    () => (filtering ? { featured: null, rest: list } : { featured: list[0], rest: list.slice(1) }),
    [list, filtering]
  );
  const reset = () => { setCategory('All'); setQuery(''); };

  return (
    <div ref={ref}>
      <Seo title="Insights" description="Articles on Ayurveda, Yoga, research methodology, clinical studies, healthcare and scientific writing." />
      <PageHero eyebrow="Insights" title="Research, Ayurveda & Healthcare Perspectives" description="Practical writing on study design, evidence, publication and the science of traditional medicine." />

      <section className="section-pad !pt-12 md:!pt-16" aria-label="Articles">
        <div className="container-x">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <CategoryFilter categories={cats || []} active={category} onChange={setCategory} />
            <div className="relative w-full lg:max-w-xs">
              <label htmlFor="article-search" className="sr-only">Search articles</label>
              <Search size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-forest/60" aria-hidden="true" />
              <input id="article-search" type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search articles" className="input !rounded-full !py-3 pl-11" />
            </div>
          </div>

          <div className="mt-12 min-h-[24rem]" aria-live="polite" aria-busy={loading}>
            {error ? (
              <p role="alert" className="rounded-2xl border border-forest/15 bg-white p-8 text-center text-charcoal/75">We could not load the articles right now. Please refresh the page or try again in a few minutes.</p>
            ) : loading && !data ? null : (
              <>
                {featured && <div className="mb-16"><FeaturedArticle article={featured} /></div>}
                <ArticleGrid articles={rest} emptyAction={<Button variant="secondary" className="mt-6" onClick={reset}>Clear search and filters</Button>} />
              </>
            )}
          </div>
        </div>
      </section>
      <CTASection title="Have a topic you would like us to cover?" description="Tell us what you are working on and we may explore it in a future article." secondary={null} />
    </div>
  );
}
