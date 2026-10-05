import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import { ScrollTrigger } from './animations/gsapAnimations';
import MouseFollower from './components/MouseFollower';
import SupportUs from './pages/SupportUs';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Insights = lazy(() => import('./pages/Insights'));
const ArticleDetailsPage = lazy(() => import('./pages/ArticleDetails'));
const Contact = lazy(() => import('./pages/Contact'));
const Consultation = lazy(() => import('./pages/Consultation'));
const NotFound = lazy(() => import('./pages/NotFound'));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <MouseFollower />

      <PageTransition key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<ArticleDetailsPage />} />
          <Route path="/support-us" element={<SupportUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageTransition>
    </>
  );
}

export default function App() {
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();

    window.addEventListener('load', refresh);

    return () => window.removeEventListener('load', refresh);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-forest px-4 py-2 text-ivory focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <ScrollToTop />
      <Navbar />

      <main id="main">
        <Suspense
          fallback={
            <div className="min-h-[70vh]" aria-busy="true" />
          }
        >
          <AnimatedRoutes />
        </Suspense>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}