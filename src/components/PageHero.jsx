import SplitWords from './SplitWords';
import ArtPlate from './ArtPlate';
import OrganicShapes from './OrganicShapes';

/** Hero used by interior pages. Pass `art` to show an illustration on the right. */
export default function PageHero({ eyebrow, title, description, art, tone = 'light', children }) {
  return (
    <section className="relative overflow-hidden bg-ivory-deep/60 pb-16 pt-36 md:pb-24 md:pt-44">
      <OrganicShapes tone="light" />
      <div className={`container-x relative grid items-center gap-12 ${art ? 'lg:grid-cols-[1.25fr_0.75fr]' : ''}`}>
        <div>
          {eyebrow && <p className="eyebrow" data-hero-label>{eyebrow}</p>}
          <h1 className="h-display mt-6"><SplitWords text={title} /></h1>
          {description && <p className="lede mt-6 max-w-2xl" data-hero-fade>{description}</p>}
          {children && <div className="mt-8" data-hero-fade>{children}</div>}
        </div>
        {art && (
          <div className="mx-auto hidden aspect-[4/5] w-full max-w-sm overflow-hidden rounded-t-[999px] rounded-b-3xl shadow-lift lg:block" data-hero-art>
            <div className="h-full w-full" data-hero-art-inner><ArtPlate variant={art} tone={tone} /></div>
          </div>
        )}
      </div>
    </section>
  );
}
