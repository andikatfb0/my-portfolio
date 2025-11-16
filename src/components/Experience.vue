<script setup lang="ts">
const jobs = [
  {
    company: 'PT Winosa Mitra Bharatadjaya',
    role: 'Full-Stack Developer',
    period: 'Jul 2020 — Present',
    points: [
      'Xdemia: REST API (Laravel) + SPA VueJS + Tailwind',
      'Migration microservices: Java Spring Boot, DTO/Entity/Repository',
      'CI/CD Jenkins, AWS (S3, RDS, EKS), cost optimization'
    ]
  },
  { company:'PT EDI Indonesia', role:'Programmer → System Integrator', period:'May 2018 — Jul 2020',
    points:['Full-stack apps, DBA, and system integration for clients']
  },
  { company:'PT Indoferro', role:'Programmer', period:'Aug 2017 — Feb 2018',
    points:['Internal ERP (PHP, JS, jQuery) MySQL for employee/finance/product']
  }
]
</script>

<template>
  <section id="experience" class="space-y-6">
    <div class="text-center">
      <h2 class="text-2xl md:text-3xl font-bold mt-1">Experience</h2>
    </div>
    <div class="relative pl-6">
      <div class="absolute left-3 top-0 bottom-0 w-px bg-slate-200"></div>
      <article v-for="j in jobs" :key="j.company" class="relative mb-8">
        <div class="absolute -left-0.5 top-1 w-3 h-3 rounded-full bg-brand-600"></div>
        <div class="card p-6">
          <header class="flex items-center justify-between gap-4">
            <h3 class="font-semibold">{{ j.role }} — {{ j.company }}</h3>
            <span class="text-sm text-slate-500">{{ j.period }}</span>
          </header>
          <ul class="mt-3 list-disc list-inside text-sm text-slate-700">
            <li v-for="p in j.points" :key="p">{{ p }}</li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>
