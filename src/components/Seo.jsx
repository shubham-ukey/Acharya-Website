import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { brand } from '../config/brand';

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/** Lightweight SEO: page title, description, Open Graph and Twitter tags. No extra dependency. */
export default function Seo({ title, description = brand.description, image, type = 'website' }) {
  const { pathname } = useLocation();
  useEffect(() => {
    const full = title ? `${title} | ${brand.displayName}` : `${brand.name} | Ayurveda, Yoga & Health Research Consultancy`;
    document.title = full;
    const url = `${brand.domain}${pathname}`;
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', full);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:site_name', brand.displayName);
    if (image && !image.startsWith('art:')) setMeta('property', 'og:image', image);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', full);
    setMeta('name', 'twitter:description', description);
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link); }
    link.href = url;
  }, [title, description, image, type, pathname]);
  return null;
}
