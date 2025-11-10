<script setup lang="ts"></script>

<template>
  <section class="relative overflow-hidden rounded-3xl bg-card">
    <div class="max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
      <!-- Left: texts -->
      <div class="space-y-6">
        <p class="text-sm text-muted">Hello,</p>

        <!-- Title -->
        <h1 class="leading-tight font-black">
          <span class="block text-2xl md:text-3xl">I am</span>
          <span class="flex gap-1 block text-4xl md:text-6xl">
            <span class="text-foreground">Andika</span>
            <span class="text-brand-600"> Kamiswara</span>
          </span>
        </h1>

        <!-- Role -->
        <span class="text-base md:text-lg text-muted mt-2">
          Full-Stack Developer
        </span>

        <!-- Divider -->
        <div class="h-[2px] w-16 bg-brand-600/60 rounded"></div>

        <!-- Summary (singkat, diambil dari CV lo) -->
        <p class="text-sm md:text-base text-foreground/80 max-w-xl">
          Fullstack developer dengan pengalaman dari ERP dan sistem BUMN sejak 2017. 
          Pernah bangun web apps berbasis PHP/MySQL & Oracle, integrasi layanan via WSO2, 
          hingga migrasi platform ke arsitektur microservices dengan Java Spring Boot, Laravel, 
          Vue/Tailwind, AWS (S3, RDS, EKS), dan CI/CD Jenkins. Fokus ke clean code, performa, 
          dan pengalaman pengguna yang rapi.
        </p>

        <!-- Actions -->
        <div class="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="#projects"
            class="inline-flex items-center px-5 py-2.5 rounded-xl border border-border font-medium hover:bg-surface"
          >
            More
          </a>
        </div>
      </div>

      <!-- Right: photo blob (dummy) -->
      <div class="relative border-border border-b">
        <!-- blob background -->
        <!-- <div class="absolute -top-6 -left-6 w-40 h-40 md:w-56 md:h-56 rounded-full bg-brand-600/10 blur-2xl"></div> -->
        <div class="relative w-full aspect-[4/5] max-w-sm ml-auto rounded-3xl grid place-items-center">
          <img src="/andika.png"
            alt="Andika Kamiswara"
            class="w-[360px] md:w-[460px] object-contain drop-shadow-[0_0_30px_rgba(50,70,150,0.35)] select-none pointer-events-none" />
        </div>
      </div>
    </div>
  </section>
</template>
