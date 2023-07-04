<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
// Tailwind is imported in main.ts, no need to import here in this case
</script>

<template>
  <!-- Loading page, first page presented -->

  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <!-- HelloWorld Component takes a prop  -->
      <HelloWorld msg="Economy App!" />

      <nav>

        <!-- Just RouterLinks:  -->
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->

        <!-- RouterLinks wrapped in Buttons:  -->
        <RouterLink to="/">
          <button className="btn btn-outline btn-primary">Home</button>
        </RouterLink>
        <RouterLink to="/about">
          <button className="btn btn-outline btn-primary">About</button>
        </RouterLink>

        <!-- RouterLinks wrapped in Buttons:  -->
        <!-- <button className="btn btn-outline btn-primary ml-4 mr-4 p-0">
          <RouterLink to="/">Home</RouterLink>
        </button>
        <button className="btn btn-outline btn-primary p-0">
          <RouterLink to="/about">About</RouterLink>
        </button> -->

      </nav>
    </div>
  </header>

  <!-- Router view displays in accordance with index.ts in router folder -->
  <!--  -->
  <RouterView />
</template>

<style scoped>
/* Tailwind is imported in main.ts, no need to import here in this case */

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  /* See css properties var() defined in base.css  */
  color: var(--color-text);
  background-color: transparent !important;
}

nav a.router-link-exact-active:hover {
  /* background-color: transparent; */
  background-color: transparent !important;
}

/* tag a is generated from router-link */
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);

  /* Remove background color from link, when not hovering or is active:  */
  background-color: transparent !important;
  border: none;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
    background-color: transparent;
  }
}
</style>
