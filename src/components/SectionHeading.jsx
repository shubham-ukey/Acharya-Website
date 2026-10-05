export default function SectionHeading({ eyebrow, title, description, align = 'left', tone = 'dark', className = '', as: Tag = 'h2' }) {
  const center = align === 'center';
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-3xl ${className}`} data-reveal>
      {eyebrow && <p className={`eyebrow ${tone === 'light' ? '!text-ivory' : ''}`}>{eyebrow}</p>}
      <Tag className={`h-section mt-5 ${tone === 'light' ? '!text-ivory' : ''}`}>{title}</Tag>
      {description && <p className={`lede mt-5 ${center ? 'mx-auto' : ''} max-w-2xl ${tone === 'light' ? '!text-ivory/75' : ''}`}>{description}</p>}
    </div>
  );
}
