<script setup lang="ts">
import { useTheme } from '../composables/useTheme'
const { mode, apply } = useTheme()
</script>
<template>
  <header class="sticky top-0 z-40 bg-surface/80 backdrop-blur border-b border-border">
    <nav class="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
      <a href="#" class="font-extrabold text-xl">
        A
        <span class="text-brand-600">K</span>
      </a>
      <ul class="hidden md:flex gap-6 text-sm text-foreground">
        <li><a href="#hero" class="hover:text-brand-600">About</a></li>
        <li><a href="#why" class="hover:text-brand-600">Why</a></li>
        <!-- <li><a href="#skills" class="hover:text-brand-600">Skills</a></li> -->
        <li><a href="#projects" class="hover:text-brand-600">Projects</a></li>
        <li><a href="#experience" class="hover:text-brand-600">Experience</a></li>
        <li><a href="#contact" class="hover:text-brand-600">Get in touch</a></li>
      </ul>
      <div class="flex items-center gap-3">
        <button class="pill" @click="apply(mode==='dark' ? 'light' : 'dark')">
          <span v-if="mode==='dark'">☀️ Light</span>
          <span v-else>🌙 Dark</span>
        </button>
        <a href="#contact" class="btn-primary hidden md:inline-flex">Hire me</a>
      </div>
    </nav>
  </header>
</template>
