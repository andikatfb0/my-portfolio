<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import WhyHireMe from './components/WhyHireMe.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Navbar />
  <main class="max-w-6xl mx-auto p-6 md:p-10 space-y-16">
    <Hero />
    <WhyHireMe />
    <About />
    <Projects />
    <Experience />
    <Skills />
    <Contact />
  </main>
  <Footer />
</template>
