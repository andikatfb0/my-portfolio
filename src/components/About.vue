<script setup lang="ts">
import { ref, computed } from 'vue'

type Slide = { title: string; subtitle: string; icon: string; desc: string }
const slides: Slide[] = [
  {
    title: 'Backend & Integration',
    subtitle: 'PHP Laravel / Spring Boot',
    icon: '📦',
    desc: 'ERP & State-Owned Enterprise Systems: PHP/MySQL & Oracle development, WSO2 integration, and migration to microservices architecture.'
  },
  {
    title: 'Frontend SPA',
    subtitle: 'Vue 2/3 + Tailwind',
    icon: '🎛️',
    desc: 'Build dashboards & learning apps with clean, reactive, and fully responsive UI for a smooth user experience.'
  },
  {
    title: 'DevOps & Cloud',
    subtitle: 'Jenkins + AWS',
    icon: '☁️',
    desc: 'CI/CD, deployments to S3/RDS/EKS, domain & SSL setup, logging, and cost optimization.'
  }
]
;



const idx = ref(1) // mulai dari slide tengah
const active = computed(() => slides[idx.value])
function to(i: number) { idx.value = i }
function prev() { idx.value = (idx.value + slides.length - 1) % slides.length }
function next() { idx.value = (idx.value + 1) % slides.length }
</script>

<template>
  <section id="about" class="space-y-8">
    <div class="text-center">
      <p class="text-sm text-muted">What Do I Offer</p>
      <h2 class="text-2xl md:text-3xl font-bold mt-1">
        Creates Professional Solutions That’s
        <br class="hidden md:block" />
        Oriented Towards Client Needs
      </h2>
    </div>

    <!-- stage -->
    <div class="relative rounded-3xl bg-card">
      <div class="grid md:grid-cols-3 gap-6">
        <article
          v-for="(s, i) in slides"
          :key="s.title"
          class="rounded-2xl p-6 md:p-8 border"
          :class="[
            'transition',
            i === idx ? 'border-brand-600 shadow-card' : 'border-border opacity-70'
          ]"
        >
          <div class="text-5xl mb-6 grid place-items-center">
            <span class="w-24 h-24 rounded-2xl grid place-items-center bg-brand-600/10 text-brand-600 border border-brand-600/30">
              {{ s.icon }}
            </span>
          </div>
          <h3 class="text-lg font-semibold text-center">{{ s.title }}</h3>
          <p class="text-brand-600 text-center text-sm">{{ s.subtitle }}</p>
          <p class="mt-3 text-sm text-muted text-center leading-relaxed">{{ s.desc }}</p>
        </article>
      </div>

      <!-- controls -->
      <div class="mt-8 flex items-center justify-center gap-6">
        <button class="text-2xl" @click="prev">‹</button>
        <div class="flex gap-2">
          <button
            v-for="(s, i) in slides"
            :key="s.title + 'dot'"
            @click="to(i)"
            class="h-2 rounded-full transition"
            :class="[ i === idx ? 'w-10 bg-brand-600' : 'w-6 bg-border' ]"
            title="go to slide"
          />
        </div>
        <button class="text-2xl" @click="next">›</button>
      </div>
    </div>
  </section>
</template>
