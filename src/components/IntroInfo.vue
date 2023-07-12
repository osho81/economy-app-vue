<script setup lang="ts">

defineProps<{ // Props/msg is sent in via App.vue
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green text-2xl font-semibold mt-8 mb-6">{{ msg }}</h1>
    <p className="text-lg text-center">
      Welcome to the Economy App - 
      Start saving money today! You are just few clicks away! <br><br>
      Some of our customers:
      <a href="https:/burgerking.com/" target="_blank" rel="noopener">BK</a> &
      <a href="https://svt.se/" target="_blank" rel="noopener">SVT</a>
    </p>
  </div>
</template>

<style scoped>
/* import tailwind from main css: */
@import '../assets/main.css';

/* @tailwind base;
@tailwind components;
@tailwind utilities; */


h3 {
  font-size: 1.2rem;
}

.greetings h1 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1 {
    text-align: center;
  }
}
</style>
