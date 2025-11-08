<script setup lang="ts"></script>
<template>
  <section id="contact" class="space-y-6">
    <h2 class="text-2xl font-bold">Contact</h2>
    <div class="card p-6 grid md:grid-cols-2 gap-6">
      <div>
        <p class="text-slate-700">Yuk diskusi project kamu. Fast response Senin–Jumat.</p>
        <ul class="mt-3 text-sm text-slate-700 space-y-1">
          <li>Email: <a class="text-brand-600 underline" href="mailto:hello@andikakamiswara.dev">hello@andikakamiswara.dev</a></li>
          <li>GitHub: <a class="text-brand-600 underline" href="https://github.com/andikatfb0" target="_blank">@andikatfb0</a></li>
          <li>WhatsApp: <span class="font-medium">0859-4728-2915</span></li>
        </ul>
      </div>
      <form class="space-y-3">
        <input class="w-full border rounded-xl px-4 py-2" placeholder="Your name" />
        <input class="w-full border rounded-xl px-4 py-2" placeholder="Email" />
        <textarea rows="4" class="w-full border rounded-xl px-4 py-2" placeholder="Project details"></textarea>
        <button type="button" class="btn-primary">Send</button>
      </form>
    </div>
  </section>
</template>
