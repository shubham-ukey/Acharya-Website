/**
 * FORM SUBMISSION LAYER
 * Frontend-only for now. Replace the body with a real request, e.g.:
 *   await fetch('/api/inquiries', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(payload) });
 */
export async function submitInquiry(payload) {
  await new Promise((r) => setTimeout(r, 700));
  if (import.meta.env.DEV) console.info('[inquiry]', payload);
  return { ok: true };
}

export async function submitConsultation(payload) {
  await new Promise((r) => setTimeout(r, 700));
  if (import.meta.env.DEV) console.info('[consultation]', payload);
  return { ok: true };
}
