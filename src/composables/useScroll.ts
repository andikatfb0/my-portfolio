// src/composables/useScroll.ts
export function useScroll() {
  const scrollToId = (id: string) => {
    if (typeof window === 'undefined') return

    const el = document.getElementById(id)
    if (!el) return

    // tinggi navbar (sesuai punyamu, kira2 72px)
    const offset = 80

    const rect = el.getBoundingClientRect()
    const targetY = rect.top + window.scrollY - offset

    window.scrollTo({
      top: targetY,
      behavior: 'smooth',
    })
  }

  return { scrollToId }
}
