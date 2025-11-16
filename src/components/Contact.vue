<script setup lang="ts">
const email = "andikatfb0@gmail.com"
</script>

<template>
  <section id="contact" class="space-y-6">
    <h2 class="text-2xl font-bold">Get in Touch</h2>

    <div class="card p-8 space-y-5 text-center">
      <p class="text-muted max-w-xl mx-auto">
        Got questions, want to discuss a project, or need technical help?
        Feel free to reach out — I’m always happy to explain things and brainstorm together.
      </p>

      <a
        class="btn-primary inline-flex items-center justify-center gap-2 mx-auto"
        :href="`mailto:${email}`"
      >
        ✉️ Send me an email
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
