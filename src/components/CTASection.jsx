import Button from './Button';
import OrganicShapes from './OrganicShapes';

export default function CTASection({
  title = 'Have a Research Idea or Healthcare Project?',
  description = "Let's explore how we can work together to turn your idea into meaningful research and practical outcomes.",
  primary = { label: 'Start a Conversation', to: '/contact' },
  secondary = { label: 'Contact Us', to: '/contact' },
}) {
  return (
    <section className="pb-20 md:pb-28" aria-labelledby="cta-heading">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] bg-forest px-6 py-16 text-center sm:px-12 md:py-24" data-reveal>
          <OrganicShapes tone="dark" />
          <div className="relative mx-auto max-w-2xl">
            <h2 id="cta-heading" className="h-section !text-ivory">{title}</h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ivory/75 sm:text-lg">{description}</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button to={primary.to} variant="light" arrow className="w-full sm:w-auto">{primary.label}</Button>
              {secondary && <Button to={secondary.to} variant="outlineLight" className="w-full sm:w-auto">{secondary.label}</Button>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
