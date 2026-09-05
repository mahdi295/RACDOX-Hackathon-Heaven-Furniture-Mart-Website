const FOCUSABLE = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(", ");

/**
 * Keeps Tab / Shift+Tab focus inside `root`. Call it from a `keydown` handler on
 * an element that advertises `aria-modal="true"` — that attribute promises
 * assistive tech that the rest of the page is unreachable, so the keyboard has
 * to honour the same promise.
 *
 * No-ops for every key other than Tab, so it is safe to call unconditionally.
 */
export function trapFocus(root: HTMLElement | null, event: KeyboardEvent): void {
  if (event.key !== "Tab" || !root) return;

  const focusables = Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
    (el) => el.offsetParent !== null || el === document.activeElement,
  );

  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if (!first || !last) return;

  const active = document.activeElement;
  const outside = !(active instanceof Node) || !root.contains(active);

  if (event.shiftKey && (outside || active === first)) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && (outside || active === last)) {
    event.preventDefault();
    first.focus();
  }
}
