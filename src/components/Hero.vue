<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// teks nama dipisah biar bisa beda warna
const fullFirst = 'Andika'
const fullLast = ' Kamiswara'

const first = ref('')
const last = ref('')
const isDone = ref(false)

onMounted(() => {
  const total = fullFirst.length + fullLast.length
  let i = 0
  const speed = 100 // ms per huruf (silakan ganti kalau mau lebih cepat / lambat)

  const interval = setInterval(() => {
    if (i < total) {
      if (i < fullFirst.length) {
        // lagi ngetik "Andika"
        first.value = fullFirst.slice(0, i + 1)
      } else {
        // lanjut ngetik " Kamiswara"
        const j = i - fullFirst.length
        last.value = fullLast.slice(0, j + 1)
      }
      i++
    } else {
      isDone.value = true
      clearInterval(interval)
    }
  }, speed)

  onUnmounted(() => clearInterval(interval))
})
</script>

<template>
  <section id="hero" class="relative overflow-hidden rounded-3xl bg-card">
    <div class="max-w-6xl mx-auto md:px-2 py-4 grid md:grid-cols-2 gap-10 items-center">
      <!-- Left: texts -->
      <div class="space-y-1">
        <p class="text-sm text-muted">Hello,</p>

        <!-- Title -->
        <h1 class="leading-tight font-black">
          <span class="block text-2xl md:text-3xl">I am</span>
          <span class="flex gap-1 block text-4xl md:text-6xl">
            <!-- <span class="text-foreground">Andika</span>
            <span class="text-brand-600"> Kamiswara</span> -->
            <span class="text-foreground">
            {{ first }}
          </span>
          <span class="text-brand-600">
            {{ last }}
          </span>
          <!-- cursor kecil kedip selama proses ngetik -->
          <span
            v-if="!isDone"
            class="ml-1 w-[2px] h-8 md:h-9 bg-brand-600 animate-pulse"
          />
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
          Fullstack developer with 5+ years of experience in ERP and State-Owned Enterprise systems.
          I’ve built web applications using PHP/MySQL & Oracle, integrated services via WSO2, 
          and migrated platforms to a microservices architecture using Java Spring Boot, Laravel, 
          Vue/Tailwind, AWS (S3, RDS, EKS), and Jenkins CI/CD.
          Focused on clean code, performance, and delivering a polished user experience.
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
            class="w-[360px] md:w-[460px] object-contain drop-shadow-[0_0_30px_rgba(50,70,150,0.35)] select-none pointer-events-none"
            loading="lazy"/>
        </div>
      </div>
    </div>
  </section>
</template>
