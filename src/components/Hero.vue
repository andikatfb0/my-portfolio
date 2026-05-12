<script setup lang="ts">
import { useScroll } from '../composables/useScroll'

const { scrollToId } = useScroll()
</script>

<template>
  <section id="hero" class="relative overflow-hidden rounded-3xl bg-card">
    <div class="max-w-6xl mx-auto md:px-2 py-6 md:py-8 grid md:grid-cols-2 gap-10 items-center">
      <div class="space-y-4">
        <p class="text-sm font-medium uppercase tracking-[0.24em] text-brand-600">Full-Stack Developer</p>

        <h1 class="leading-tight font-black">
          <span class="block text-2xl md:text-3xl">Building reliable web products with</span>
          <span class="block text-4xl md:text-6xl">
            <span class="text-foreground">Andika</span>
            <span class="text-brand-600"> Kamiswara</span>
          </span>
        </h1>

        <div class="h-[2px] w-16 bg-brand-600/60 rounded"></div>

        <p class="text-sm md:text-base text-foreground/80 max-w-xl leading-relaxed">
          Full-stack developer with 5+ years of experience shipping ERP, education, and enterprise
          systems. I work across backend architecture, integration, frontend delivery, and deployment
          pipelines, with a focus on maintainable code, stable releases, and polished user experience.
        </p>

        <div class="flex flex-wrap items-center gap-3 pt-2">
          <button
            class="inline-flex items-center px-5 py-2.5 rounded-xl bg-brand-600 text-white font-medium hover:bg-brand-700 transition-colors"
            @click="scrollToId('projects')"
          >
            View Projects
          </button>
          <button
            class="inline-flex items-center px-5 py-2.5 rounded-xl border border-border font-medium hover:bg-surface"
            @click="scrollToId('contact')"
          >
            Contact Me
          </button>
        </div>

        <div class="flex flex-wrap gap-4 pt-2 text-sm text-muted">
          <a
            href="https://github.com/andikatfb0"
            target="_blank"
            rel="noopener"
            class="hover:text-brand-600 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/andika-kamiswara-710773109/"
            target="_blank"
            rel="noopener"
            class="hover:text-brand-600 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div class="relative border-border border-b">
        <div class="relative w-full aspect-[4/5] max-w-sm ml-auto rounded-3xl grid place-items-center">
          <img
            src="/andika.png"
            alt="Andika Kamiswara"
            class="w-[360px] md:w-[460px] object-contain drop-shadow-[0_0_30px_rgba(50,70,150,0.35)] select-none pointer-events-none"
            loading="eager"
          />
        </div>
      </div>
    </div>
  </section>
</template>
