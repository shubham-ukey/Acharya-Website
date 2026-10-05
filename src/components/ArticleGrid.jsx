import ArticleCard from './ArticleCard';

export default function ArticleGrid({ articles, emptyAction }) {
  if (!articles.length) {
    return (
      <div className="rounded-3xl border border-dashed border-forest/25 bg-white/60 px-6 py-16 text-center">
        <h3 className="text-2xl">No articles match your search</h3>
        <p className="mx-auto mt-3 max-w-md text-charcoal/70">Try a different keyword or choose another category to see more of our writing.</p>
        {emptyAction}
      </div>
    );
  }
  return (
    <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((a) => <ArticleCard key={a.id} article={a} />)}
    </div>
  );
}
