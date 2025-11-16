<script setup lang="ts">
  import { useTheme } from '../composables/useTheme'
  import { useScroll } from '../composables/useScroll'
  const { mode, apply } = useTheme()
  const { scrollToId } = useScroll()

  const handleNav = (id: string) => {
    scrollToId(id)
  }
</script>

<template>
  <header class="sticky top-0 z-40 bg-surface/80 backdrop-blur border-b border-border">
    <nav class="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
      <button
        type="button"
        class="font-extrabold text-xl"
        @click="handleNav('top')"
      >
        A
        <span class="text-brand-600">K</span>
      </button>
      <ul class="hidden md:flex gap-6 text-sm text-foreground">
        <li><button class="hover:text-brand-600" @click="handleNav('hero')">About</button></li>
        <li><button class="hover:text-brand-600" @click="handleNav('why')">Why</button></li>
        <li><button class="hover:text-brand-600" @click="handleNav('projects')">Projects</button></li>
        <li><button class="hover:text-brand-600" @click="handleNav('experience')">Experience</button></li>
        <li><button class="hover:text-brand-600" @click="handleNav('contact')">Get in touch</button></li>
      </ul>
      <div class="flex items-center gap-3">
        <button class="pill" @click="apply(mode==='dark' ? 'light' : 'dark')">
          <span v-if="mode==='dark'">☀️ Light</span>
          <span v-else>🌙 Dark</span>
        </button>
        <button class="hover:text-brand-600" @click="handleNav('contact')">Hire me</button>
      </div>
    </nav>
  </header>
</template>
