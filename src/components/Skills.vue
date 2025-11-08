<script setup lang="ts">
const bars = [
  { name:'Laravel', val: 90 },
  { name:'Vue 3 / Tailwind', val: 90 },
  { name:'Java / Spring Boot', val: 80 },
  { name:'AWS (S3, RDS, EKS)', val: 75 },
  { name:'Jenkins / CI-CD', val: 85 },
];
</script>

<template>
  <section id="skills" class="space-y-6">
    <h2 class="text-2xl font-bold">Skills</h2>
    <div class="grid md:grid-cols-2 gap-6">
      <div class="card p-6 space-y-4" v-for="col in [0,1]" :key="col">
        <div v-for="s in bars.filter((_,i)=> i%2===col)" :key="s.name">
          <div class="flex justify-between text-sm mb-1">
            <span class="font-medium">{{ s.name }}</span>
            <span class="text-slate-500">{{ s.val }}%</span>
          </div>
          <div class="h-2 rounded-full bg-slate-100 overflow-hidden">
            <div class="h-full bg-brand-600 rounded-full" :style="{ width: s.val + '%' }"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
