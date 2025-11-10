<script setup lang="ts">
type Tech = { name: string; href: string; src: string }

const techs: Tech[] = [


  { name: 'Oracle', href: 'https://www.oracle.com/database/', src: 'https://www.vectorlogo.zone/logos/oracle/oracle-icon.svg' },
  { name: 'MySQL', href: 'https://www.mysql.com/', src: 'https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg' },
  { name: 'Redis', href: 'https://redis.io/', src: 'https://www.vectorlogo.zone/logos/redis/redis-icon.svg' },

  { name: 'Java', href: 'https://www.java.com/', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Spring Boot',  href: 'https://spring.io/projects/spring-boot', src: 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg' },

  { name: 'PHP', href: 'https://www.php.net/', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Laravel', href: 'https://laravel.com/', src: 'https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg' },
  { name: 'CodeIgniter', href: 'https://codeigniter.com/', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain-wordmark.svg' },
  { name: 'Yii2', href: 'https://www.yiiframework.com/',  src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yii/yii-original.svg' },
  { name: 'Tailwind CSS', href: 'https://tailwindcss.com/', src: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
  { name: 'Bootstrap', href: 'https://getbootstrap.com/', src: 'https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg' },
  { name: 'Vue.js', href: 'https://vuejs.org/', src: 'https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg' },

  { name: 'AWS', href: 'https://aws.amazon.com/', src: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg' },
  { name: 'Docker', href: 'https://www.docker.com/', src: 'https://www.vectorlogo.zone/logos/docker/docker-icon.svg' },
  { name: 'Kubernetes', href: 'https://kubernetes.io/', src: 'https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg' },
  { name:'WSO2',  href:'https://wso2.com/', src:'https://raw.githubusercontent.com/cncf/landscape/master/hosted_logos/wso2.svg' },
];
</script>

<template>
  <section id="skills" class="space-y-6">
    <div class="text-center">
      <!-- <p class="text-sm text-muted">Experience in</p> -->
      <h2 class="text-2xl md:text-3xl font-bold mt-1">
        Trusted Technologies that Power Your Innovation
      </h2>
    </div>
    <!-- dibungkus card biar selaras section lain -->
    <div class="flex flex-wrap items-center justify-center gap-10">
      <a
        v-for="t in techs"
        :key="t.name"
        :href="t.href"
        target="_blank"
        rel="noopener"
        class="group relative"
        :title="t.name"
      >
        <!-- warna asli, no invert -->
        <img
          :src="t.src"
          :alt="t.name"
          class="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
          referrerpolicy="no-referrer"
        />
        <span class="sr-only">{{ t.name }}</span>

        <!-- glow saat hover (Docker, K8s, dst) -->
        <span
          class="pointer-events-none absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 transition
                  shadow-[0_0_0_0_rgba(0,0,0,0)] group-hover:shadow-[0_0_30px_0_rgba(99,102,241,0.45)]">
        </span>
      </a>
    </div>
  </section>
</template>
