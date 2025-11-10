<script setup lang="ts">
const projects = [
  { 
    title:'Xdemia Platform',
    tags:['Laravel','Spring Boot', 'AWS', 'EKS', 'Vue','Tailwind', 'MySQL', 'Redis'],
    desc:'Edu Tech from Netherlands',
    link:'https://xdemia.com/',
    src: '/xdemia.png'
  },
  {
    title:'SIM - AMAKANIE',
    tags:['YII2','MySQL','WSO2'],
    desc:'Govermental project',
    link:'#',
    src: '/sim-bkd.png'
  },
  {
    title:'NPK-S Billing',
    tags:['Laravel','Oracle', 'WSO2'],
    desc:'State-owned project',
    link:'#',
    src: '/npks-billing.jpg'
  },
]
</script>

<template>
  <section id="projects" class="space-y-6">
    <div class="text-center">
      <h2 class="text-2xl md:text-3xl font-bold mt-1">Latest Projects</h2>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <article v-for="p in projects" :key="p.title" class="card p-6 flex flex-col">
        <a :href="p.link" target="_blank" rel="noopener">
          <div class="aspect-[16/10] rounded-2xl bg-slate-100 mb-4 overflow-hidden">
          <img
            :src="p.src"
            :alt="p.title"
            class="h-auto w-auto transition-transform duration-300 group-hover:scale-105"
            referrerpolicy="no-referrer"
          />
          </div>
          <h3 class="font-semibold">{{ p.title }}</h3>
          <p class="text-sm text-slate-600 mt-1">{{ p.desc }}</p>
          <div class="flex flex-wrap gap-2 mt-3">
            <span v-for="t in p.tags" :key="t" class="pill">{{ t }}</span>
          </div>
        </a>
      </article>
    </div>
  </section>
</template>
