/**
 * Shared body-scroll lock with a reference count, so nested lockers
 * (navbar mobile menu, lightbox, any future modal) don't stomp on
 * each other — the body only unlocks once every locker has released it.
 */

declare global {
  interface Window {
    __hfmScrollLockCount?: number;
    __hfmOriginalOverflow?: string | undefined;
  }
}

export function lockBodyScroll(): void {
  window.__hfmScrollLockCount = (window.__hfmScrollLockCount || 0) + 1;
  if (window.__hfmScrollLockCount === 1) {
    window.__hfmOriginalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
}

export function unlockBodyScroll(): void {
  if (window.__hfmScrollLockCount) {
    window.__hfmScrollLockCount = Math.max(0, window.__hfmScrollLockCount - 1);
  }
  if ((window.__hfmScrollLockCount || 0) === 0) {
    document.body.style.overflow = window.__hfmOriginalOverflow ?? "";
    window.__hfmOriginalOverflow = undefined;
  }
}
