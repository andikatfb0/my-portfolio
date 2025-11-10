<script setup lang="ts">
type Item = { title: string; desc: string; icon: 'camera'|'chat'|'thumb'|'badge' }
const items: Item[] = [
  {
    title: 'Workaholic',
    desc: 'Terbiasa handle banyak module end-to-end: API Laravel ↔ UI Vue/Tailwind, migrasi ke Spring Boot, dan delivery via Jenkins.',
    icon: 'camera'
  },
  {
    title: 'Communicative',
    desc: 'Biasa translate kebutuhan bisnis ke scope teknis, dokumentasi rapi, dan align dengan stakeholder lokal/remote.',
    icon: 'chat'
  },
  {
    title: 'Cooperative',
    desc: 'Pengalaman lintas peran (programmer → DBA → system integrator). Enak kolab bareng QA, UI/UX, & DevOps.',
    icon: 'thumb'
  },
  {
    title: 'Perfectionist',
    desc: 'Nekan clean code, code review, dan kualitas: akses cepat, layout rapi, serta fokus maintainability & performance.',
    icon: 'badge'
  }
]
</script>

<template>
  <section id="why" class="space-y-6">
    <div class="relative">
    <div class="text-center">
      <h2 class="text-2xl md:text-3xl font-bold">Why Hire Me</h2>
    </div>
      <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <article v-for="it in items" :key="it.title" class="card px-6 py-3 flex flex-col items-center text-center">
          <!-- circle icon -->
          <div class="relative">
            <div class="w-36 h-36 md:w-40 md:h-40 rounded-full border border-brand-600/30 bg-brand-600/10 shadow-card flex items-center justify-center">
              <div class="w-24 h-24 rounded-full border border-brand-600/40 bg-brand-600/20 flex items-center justify-center">
                <!-- simple inline icons (tanpa lib) -->
                <svg v-if="it.icon==='camera'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-10 h-10 fill-brand-600"><path d="M4 7h3l1.2-2.4A2 2 0 0 1 10 3h4a2 2 0 0 1 1.8 1.1L17 7h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Zm8 3.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"/></svg>
                <svg v-else-if="it.icon==='chat'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-10 h-10 fill-brand-600"><path d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2Zm3 5h10v2H7V9Zm0 4h7v2H7v-2Z"/></svg>
                <svg v-else-if="it.icon==='thumb'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-10 h-10 fill-brand-600"><path d="M2 10h4v10H2V10Zm6 10h7.5a3.5 3.5 0 0 0 3.4-2.6l1.1-4.3A3 3 0 0 0 17.1 8H14V4a2 2 0 0 0-2-2l-4 7v11Z"/></svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-10 h-10 fill-brand-600"><path d="m12 2 2.4 6.9H22l-5.7 4.1L18.8 20 12 15.9 5.2 20l2.5-7-5.7-4.1h7.6L12 2Z"/></svg>
              </div>
            </div>
          </div>

          <h3 class="mt-6 font-semibold text-foreground">{{ it.title }}</h3>
          <p class="mt-2 text-sm text-muted leading-relaxed">{{ it.desc }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.shadow-card { box-shadow: 0 8px 30px rgba(99,102,241,0.15); }
</style>
