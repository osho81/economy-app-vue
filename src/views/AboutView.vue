<script setup lang="ts">
import '../assets/main.css'
import LoadingPage from '@/components/LoadingPage.vue';
</script>

<template>
  <div class="div-main">
    <LoadingPage />

    <div>
      <h2 className="green text-3xl font-semibold mt-8 mb-6 text-center">About us</h2>
      <p>We have been helping people save money since 1997. Call or email us at any time!</p>
    </div>

  </div>
</template>

<style>
/* @tailwind base;
@tailwind components;
@tailwind utilities; */

/* .div-main {
  align-items: center;
  margin-left: 25%;
  width: 50%;
} */

/* h2 {
  font-size: x-large;
  font-weight: 600;
} */

p {
  font-size: 16px;
  height: 2rem;
}

@media (min-width: 1024px) {
  /* .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  } */

  /* h2 {
    text-align: center;
  } */
}
</style>
