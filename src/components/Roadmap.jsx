const stages = [
  { n: '01', status: 'Today', title: 'Consultancy', text: 'Research, publication and guidance services that build our scientific and clinical foundation.' },
  { n: '02', status: 'Next', title: 'Manufacturing', text: 'Research-backed Ayurvedic products developed with documented, quality-focused practices.' },
  { n: '03', status: 'Vision', title: 'Multi-speciality Ayurveda Hospital', text: 'An integrated centre for patient care, clinical research and training.' },
];

/** Horizontal on tablet/desktop, vertical on mobile. Line draws on scroll (see drawTimeline in gsapAnimations.js). */
export default function Roadmap({ tone = 'light' }) {
  return (
    <div className="relative" data-timeline>
      <div className="absolute left-0 right-0 top-4 hidden h-px bg-forest/15 md:block" aria-hidden="true" />
      <div data-line className="absolute left-0 right-0 top-4 hidden h-px origin-left bg-gold md:block" aria-hidden="true" />
      <div className="absolute bottom-0 left-4 top-0 w-px bg-forest/15 md:hidden" aria-hidden="true" />
      <div data-line data-vertical className="absolute bottom-0 left-4 top-0 w-px origin-top bg-gold md:hidden" aria-hidden="true" />
      <ol className="grid gap-12 md:grid-cols-3 md:gap-10">
        {stages.map((s, i) => (
          <li key={s.n} data-stage className="relative pl-14 md:pl-0 md:pt-16">
            <span
              className={`absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border text-[0.7rem] font-semibold ${
                i === 0 ? 'border-forest bg-forest text-ivory' : 'border-forest/40 bg-ivory text-forest'
              }`}
            >
              {s.n}
            </span>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest/60">{s.status}</p>
            <h3 className="mt-2 text-2xl leading-snug">{s.title}</h3>
            <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-charcoal/70">{s.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
