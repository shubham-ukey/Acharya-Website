import ArtPlate from './ArtPlate';

const TONE_BY_CATEGORY = {
  Ayurveda: 'light', Yoga: 'sage', Research: 'paper', Healthcare: 'light', 'Clinical Studies': 'sage', 'Scientific Writing': 'paper',
};

/** Renders a real image (URL from CMS) or a built-in illustration when image is "art:<variant>". */
export default function ArticleMedia({ article, className = '', eager = false }) {
  if (article.image?.startsWith('art:')) {
    return (
      <div className={className}>
        <ArtPlate variant={article.image.slice(4)} tone={TONE_BY_CATEGORY[article.category] || 'light'} label={article.imageAlt || article.title} />
      </div>
    );
  }
  return (
    <img src={article.image} alt={article.imageAlt || article.title} loading={eager ? 'eager' : 'lazy'} decoding="async" className={`object-cover ${className}`} />
  );
}

export const formatDate = (iso) =>
  new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(iso));
