import { ref, onMounted } from 'vue'
type Mode = 'light' | 'dark'
const mode = ref<Mode>('light')
function apply(m: Mode) {
  const root = document.documentElement
  if (m === 'dark') root.classList.add('dark')
  else root.classList.remove('dark')
  localStorage.setItem('theme', m)
  mode.value = m
}
export function useTheme() {
  onMounted(() => {
    const saved = (localStorage.getItem('theme') as Mode) || null
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
    apply(saved ?? (prefersDark ? 'dark' : 'light'))
  })
  return { mode, apply }
}
