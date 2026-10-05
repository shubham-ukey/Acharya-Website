export default function CategoryFilter({ categories, active, onChange }) {
  const all = ['All', ...categories];
  return (
    <div role="group" aria-label="Filter articles by category" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
      {all.map((c) => {
        const on = active === c;
        return (
          <button key={c} type="button" aria-pressed={on} onClick={() => onChange(c)}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition ${on ? 'border-forest bg-forest text-ivory' : 'border-forest/20 bg-white text-forest hover:border-forest'}`}>
            {c}
          </button>
        );
      })}
    </div>
  );
}
