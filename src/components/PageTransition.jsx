import { useLayoutEffect, useRef } from 'react';
import { pageEnter } from '../animations/gsapAnimations';

export default function PageTransition({ children }) {
  const ref = useRef(null);
  useLayoutEffect(() => { pageEnter(ref.current); }, []);
  return <div ref={ref}>{children}</div>;
}
