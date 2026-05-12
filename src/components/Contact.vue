<script setup lang="ts">
const email = "andikatfb0@gmail.com"
</script>

<template>
  <section id="contact" class="space-y-6">
    <div class="text-center">
      <p class="text-sm text-muted">Open to collaboration</p>
      <h2 class="text-2xl font-bold">Get in Touch</h2>
    </div>

    <div class="card p-8 space-y-5 text-center">
      <p class="text-muted max-w-xl mx-auto">
        If you are hiring for a full-stack role, need support for a product build, or want someone who
        can bridge backend, frontend, and deployment work, feel free to reach out.
      </p>

      <a
        class="btn-primary inline-flex items-center justify-center gap-2 mx-auto"
        :href="`mailto:${email}`"
      >
        ✉️ Email me
      </a>

      <div class="pt-4 text-sm text-muted">
        or visit:
      </div>

      <div class="flex justify-center gap-4 text-sm">
        <a
          href="https://github.com/andikatfb0"
          target="_blank"
          rel="noopener"
          class="underline hover:text-brand-600"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/andika-kamiswara-710773109/"
          target="_blank"
          rel="noopener"
          class="underline hover:text-brand-600"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </section>
</template>
