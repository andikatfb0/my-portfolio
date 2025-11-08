<script setup lang="ts">
const projects = [
  { title:'Xdemia Platform', tags:['Laravel','Vue','D3'], desc:'Course & newsroom modules, Xmap, redesign sidebar', link:'#' },
  { title:'Microservices on AWS/EKS', tags:['Spring Boot','EKS','Jenkins'], desc:'Service split, CI/CD, observability', link:'#' },
  { title:'ANTI KIDS e-commerce', tags:['Shopify','Marketing'], desc:'Assets, product pages, promos', link:'#' },
]
</script>

<template>
  <section id="projects" class="space-y-6">
    <h2 class="text-2xl font-bold">Projects</h2>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <article v-for="p in projects" :key="p.title" class="card p-6 flex flex-col">
        <div class="aspect-[16/10] rounded-2xl bg-slate-100 mb-4"></div>
        <h3 class="font-semibold">{{ p.title }}</h3>
        <p class="text-sm text-slate-600 mt-1">{{ p.desc }}</p>
        <div class="flex gap-2 mt-3">
          <span v-for="t in p.tags" :key="t" class="pill">{{ t }}</span>
        </div>
        <a :href="p.link" class="mt-4 text-brand-600 underline">View more</a>
      </article>
    </div>
  </section>
</template>
