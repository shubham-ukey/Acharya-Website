/** Soft organic background shapes. `tone="dark"` for green sections, `light` for ivory. */
export default function OrganicShapes({ tone = 'dark', className = '' }) {
  const fill = tone === 'dark' ? 'rgb(var(--c-sage) / 0.16)' : 'rgb(var(--c-sage) / 0.14)';
  const stroke = tone === 'dark' ? 'rgb(var(--c-gold) / 0.45)' : 'rgb(var(--c-gold) / 0.5)';
  return (
    <svg className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <path d="M-40 420C90 300 260 320 330 420s60 200-70 240S-120 560-40 420Z" fill={fill} />
      <path d="M820 -40C960 -60 1120 40 1160 170s-40 220-170 210-240-120-230-240S740-20 820-40Z" fill={fill} />
      <path d="M700 640C760 520 900 470 1010 520" fill="none" stroke={stroke} strokeWidth="1.2" />
      <path d="M690 660C750 540 890 490 1000 540" fill="none" stroke={stroke} strokeWidth="1.2" opacity="0.6" />
      <circle cx="1010" cy="520" r="4" fill="rgb(var(--c-gold))" opacity="0.9" />
    </svg>
  );
}
