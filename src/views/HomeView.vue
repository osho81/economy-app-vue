<script setup lang="ts">
import '../assets/main.css'
import LoadingPage from '@/components/LoadingPage.vue';
import IntroInfo from '@/components/IntroInfo.vue';
</script>

<template>
  <!-- Example of a View (page) using component:  -->

  <LoadingPage />

  <div class="div-main">
    <IntroInfo msg="Welcome To Economy App" />


  </div>
</template>

<style>
.div-main {
  align-items: center;
  margin-left: 25%;
  width: 50%;
}

@media (min-width: 1024px) {
  /* .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  } */
}
</style>

