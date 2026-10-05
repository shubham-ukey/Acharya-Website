import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const base = 'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed';
const variants = {
  primary: 'bg-forest text-ivory hover:bg-forest-deep hover:shadow-lift',
  secondary: 'border border-forest/30 text-forest hover:border-forest hover:bg-forest hover:text-ivory',
  light: 'bg-ivory text-forest hover:bg-white hover:shadow-lift',
  outlineLight: 'border border-ivory/40 text-ivory hover:border-ivory hover:bg-ivory hover:text-forest',
};

/** Renders a router <Link>, an external <a>, or a <button> depending on props. */
export default function Button({ to, href, variant = 'primary', arrow = false, className = '', children, ...rest }) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {arrow && <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />}
    </>
  );
  if (to) return <Link to={to} className={cls} {...rest}>{content}</Link>;
  if (href) return <a href={href} className={cls} {...rest}>{content}</a>;
  return <button className={cls} {...rest}>{content}</button>;
}

/** Text link with an animated arrow ("Learn More →"). */
export function TextLink({ to, href, children, tone = 'dark', className = '', ...rest }) {
  const cls = `group inline-flex items-center gap-2 text-sm font-semibold ${tone === 'light' ? 'text-ivory' : 'text-forest'} ${className}`;
  const inner = (
    <>
      <span className="border-b border-gold/70 pb-0.5 transition-colors group-hover:border-current">{children}</span>
      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
    </>
  );
  return to ? <Link to={to} className={cls} {...rest}>{inner}</Link> : <a href={href} className={cls} {...rest}>{inner}</a>;
}
