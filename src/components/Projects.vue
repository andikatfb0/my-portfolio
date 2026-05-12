<script setup lang="ts">
const projects = [
  {
    title: 'Xdemia Platform',
    tags: ['Laravel', 'Spring Boot', 'AWS', 'EKS', 'Vue', 'Tailwind', 'MySQL', 'Redis'],
    desc: 'Worked across Laravel APIs, Vue SPA modules, and Spring Boot migration for an edtech platform.',
    outcome: 'Handled delivery from backend implementation to deployment support.',
    link: 'https://xdemia.com/',
    linkLabel: 'Visit website',
    src: '/xdemia.webp'
  },
  {
    title: 'Opiniepunt',
    tags: ['Laravel', 'Filament', 'TallCMS', 'Multilingual', 'SEO'],
    desc: 'Built and refined a publishing platform with contributor flows and structured public content.',
    outcome: 'Improved admin UX, CMS behavior, and SEO-oriented publishing details.',
    link: '',
    linkLabel: 'Private delivery',
    src: '/opiniepunt-mark.png'
  },
  {
    title: 'AMC Academic',
    tags: ['Nuxt', 'Laravel', 'AI Features', 'Medical Education'],
    desc: 'Built features for an exam preparation platform for international medical graduates.',
    outcome: 'Supported study flows, exam simulation, and adaptive learning features.',
    link: '',
    linkLabel: 'Private delivery',
    src: '/amc-cover.png'
  },
  {
    title: 'SIM AMAKANIE',
    tags: ['Yii2', 'MySQL', 'WSO2'],
    desc: 'Built and maintained an internal government workflow system with integration requirements.',
    outcome: 'Delivered core modules in a structured environment with approval-heavy processes.',
    link: '',
    linkLabel: 'Private delivery',
    src: '/sim-bkd.webp'
  }
]
</script>

<template>
  <section id="projects" class="space-y-6">
    <div class="text-center">
      <p class="text-sm text-muted">Selected work</p>
      <h2 class="text-2xl md:text-3xl font-bold mt-1">Projects That Reflect My Full-Stack Range</h2>
    </div>
    <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <article v-for="p in projects" :key="p.title" class="card p-5 flex flex-col">
        <div
          class="aspect-[4/3] rounded-2xl mb-4 overflow-hidden grid place-items-center"
          :class="p.title === 'Opiniepunt' ? 'bg-slate-900' : 'bg-slate-100'"
        >
          <img
            :src="p.src"
            :alt="`${p.title} project preview`"
            :class="p.title === 'Opiniepunt'
              ? 'h-28 w-28 object-contain transition-transform duration-300'
              : 'h-full w-full object-cover transition-transform duration-300'"
            referrerpolicy="no-referrer"
            loading="lazy"
          />
        </div>
        <div class="flex flex-1 flex-col">
          <div class="min-h-[11rem]">
            <h3 class="text-lg font-semibold">{{ p.title }}</h3>
            <p class="text-sm text-slate-600 mt-2 leading-relaxed">{{ p.desc }}</p>
            <p class="text-sm text-foreground/80 mt-2 leading-relaxed">{{ p.outcome }}</p>
          </div>
          <div class="flex flex-wrap gap-2 mt-3">
            <span v-for="t in p.tags" :key="t" class="pill px-2.5 py-1 text-[11px]">{{ t }}</span>
          </div>
        </div>
        <div class="mt-4">
          <a
            v-if="p.link"
            :href="p.link"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700"
          >
            {{ p.linkLabel }}
          </a>
          <span
            v-else
            class="inline-flex items-center text-sm font-medium text-muted"
          >
            {{ p.linkLabel }}
          </span>
        </div>
      </article>
    </div>
  </section>
</template>
