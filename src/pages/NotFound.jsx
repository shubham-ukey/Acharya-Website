import Seo from '../components/Seo';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[80vh] flex-col items-start justify-center pt-24">
      <Seo title="Page not found" />
      <p className="eyebrow">404</p>
      <h1 className="h-display mt-5">This page could not be found</h1>
      <p className="lede mt-4 max-w-lg">The address may be mistyped or the page may have moved. Head back to the homepage or contact us.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button to="/">Go to homepage</Button><Button to="/contact" variant="secondary">Contact us</Button></div>
    </section>
  );
}
