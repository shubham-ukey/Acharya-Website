import { Check } from 'lucide-react';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import ArtPlate from '../components/ArtPlate';
import CTASection from '../components/CTASection';
import { getIcon } from '../components/icons';
import { useGsapScope } from '../animations/gsapAnimations';
import { services } from '../data/services';

export default function Services() {
  const ref = useGsapScope();
  return (
    <div ref={ref}>
      <Seo title="Services" description="Thesis-to-paper conversion, collaborative health projects, research workshops and Ayurveda procedure and product guidance." />
      <PageHero
        eyebrow="Services"
        title="Research Expertise Across Ayurveda & Healthcare"
        description="Four focused services for clinicians, scholars, institutes and organisations who want their work to be rigorous, visible and useful."
        art="lattice"
        tone="sage"
      />

      {services.map((s, i) => {
        const Icon = getIcon(s.icon);
        const flip = i % 2 === 1;
        return (
          <section key={s.id} id={s.id} className={`section-pad scroll-mt-16 ${i % 2 === 0 ? '' : 'bg-ivory-deep/60'}`} aria-labelledby={`${s.id}-title`}>
            <div className="container-x grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
              <div className={flip ? 'lg:order-2' : ''} data-reveal>
                <div className="flex items-center gap-5">
                  <span className="font-display text-7xl leading-none text-gold/70 sm:text-8xl">{s.number}</span>
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-forest text-ivory"><Icon size={26} strokeWidth={1.5} aria-hidden="true" /></span>
                </div>
                <h2 id={`${s.id}-title`} className="h-section mt-8 !text-3xl sm:!text-4xl">{s.detailTitle}</h2>
                <p className="lede mt-5">{s.description}</p>
                <div className="mt-8 aspect-[16/10] overflow-hidden rounded-3xl" data-image-reveal>
                  <ArtPlate variant={s.art} tone={i % 2 ? 'paper' : 'light'} label={`Illustration for ${s.title}`} />
                </div>
              </div>
              <div className={flip ? 'lg:order-1' : ''}>
                <h3 className="text-sm font-sans font-semibold uppercase tracking-[0.16em] text-forest/70" data-reveal>Key offerings</h3>
                <ul className="mt-5 divide-y divide-forest/10 border-y border-forest/10" data-stagger>
                  {s.offerings.map((o) => (
                    <li key={o.title} className="flex gap-4 py-5">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage-soft text-forest"><Check size={14} aria-hidden="true" /></span>
                      <div>
                        <p className="font-display text-xl text-forest">{o.title}</p>
                        <p className="mt-1 text-[0.95rem] leading-relaxed text-charcoal/70">{o.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <Button to={`/contact?type=${s.projectType}`} arrow className="mt-8 w-full sm:w-auto">Discuss this service</Button>
              </div>
            </div>
          </section>
        );
      })}

      <div className="pt-20 md:pt-28"><CTASection title="Not sure which service fits?" description="Describe your project in a few lines. We will tell you honestly whether and how we can help." primary={{ label: 'Start a Conversation', to: '/contact' }} secondary={{ label: 'Book a Consultation', to: '/consultation' }} /></div>
    </div>
  );
}
