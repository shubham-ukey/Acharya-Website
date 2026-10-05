/** Splits text into words so GSAP can reveal them one at a time. Screen readers get the full sentence. */
export default function SplitWords({ text, className = '' }) {
  return (
    <span className={className} aria-label={text}>
      {text.split(' ').map((w, i) => (
        <span key={i} aria-hidden="true">
          {i > 0 && ' '}
          <span className="inline-block overflow-hidden align-bottom" style={{ paddingBottom: '0.14em', marginBottom: '-0.14em' }}>
            <span data-word className="inline-block">{w}</span>
          </span>
        </span>
      ))}
    </span>
  );
}
