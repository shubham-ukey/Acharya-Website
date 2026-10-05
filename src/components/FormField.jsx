/** Accessible label + control + error wrapper. Pass the control as children (use className="input"). */
export default function FormField({ id, label, error, required, hint, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-forest">
        {label}{required && <span className="text-charcoal/50"> *</span>}
      </label>
      {children}
      {hint && !error && <p className="mt-1.5 text-xs text-charcoal/55">{hint}</p>}
      {error && <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs font-medium text-red-800">{error}</p>}
    </div>
  );
}
