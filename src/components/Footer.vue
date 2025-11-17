<script setup lang="ts">
import { useScroll } from '../composables/useScroll'
const { scrollToId } = useScroll()
</script>

<template>
  <footer class="mt-20 border-t">
    <div class="max-w-6xl mx-auto px-6 py-10 text-sm text-slate-500 flex items-center justify-between">
      <span>© {{ new Date().getFullYear() }} Andika Kamiswara</span>
      <button 
        class="hover:text-brand-600"
        @click="scrollToId('top')">
        Back to top
      </button>
    </div>
  </footer>
</template>
