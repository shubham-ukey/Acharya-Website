import { Link } from 'react-router-dom';
import { brand } from '../config/brand';

/** Built-in placeholder mark. Set `brand.logo` in src/config/brand.js to use an image instead. */
export function LogoMark({ className = 'h-9 w-9' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="currentColor" />
      <path d="M32 50V26" stroke="rgb(var(--c-ivory))" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M32 34C22 34 16 27 16 17c10 0 16 6 16 17Z" fill="rgb(var(--c-sage))" />
      <path d="M32 28c0-9 6-14 16-14 0 9-6 14-16 14Z" fill="rgb(var(--c-ivory))" />
      <circle cx="32" cy="52" r="3" fill="rgb(var(--c-gold))" />
    </svg>
  );
}

export default function Logo({ tone = 'dark', className = '' }) {
  const [first, ...rest] = brand.name.split(' ');
  const color = tone === 'light' ? 'text-ivory' : 'text-forest';
  return (
    <Link to="/" aria-label={`${brand.displayName} home`} className={`inline-flex items-center gap-3 ${color} ${className}`}>
      {brand.logo ? (
        <img src={brand.logo} alt={brand.displayName} className="h-9 w-auto" />
      ) : (
        <>
          <LogoMark />
          <span className="leading-none">
            <span className="block font-display text-[1.15rem] font-semibold tracking-[0.06em]">{first}</span>
            {rest.length > 0 && <span className="mt-1 block text-[0.6rem] font-semibold tracking-[0.34em] opacity-70">{rest.join(' ')}</span>}
          </span>
        </>
      )}
    </Link>
  );
}
