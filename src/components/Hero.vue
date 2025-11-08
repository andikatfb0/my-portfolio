<script setup lang="ts"></script>
<template>
  <section class="rounded-[32px] p-10 border bg-gradient-to-br from-brand-50 to-white">
    <div class="grid md:grid-cols-2 gap-10 items-center">
      <div class="space-y-5">
        <div class="pill">Available for freelance</div>
        <h1 class="font-black text-4xl md:text-6xl leading-tight">Andika Kamiswara</h1>
        <p class="text-lg text-slate-600">
          Full-Stack Developer — Laravel, Vue 3, Tailwind, Java Spring Boot, AWS, CI/CD (Jenkins). 
          Fokus clean code & scalable architecture.
        </p>
        <div class="flex gap-3">
          <a href="#projects" class="btn-primary">View Projects</a>
          <a href="#contact" class="inline-flex items-center px-5 py-2.5 rounded-xl border font-medium hover:bg-slate-50">Contact</a>
        </div>
        <div class="flex items-center gap-3 pt-2">
          <span class="pill">Laravel</span>
          <span class="pill">Spring Boot</span>
          <span class="pill">Vue 3</span>
          <span class="pill">AWS</span>
        </div>
      </div>

      <div class="justify-self-center">
        <div class="w-56 h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden border shadow-card grid place-items-center bg-white">
          <!-- dummy photo -->
          <span class="text-5xl font-black text-brand-600">AK</span>
        </div>
      </div>
    </div>
  </section>
</template>
