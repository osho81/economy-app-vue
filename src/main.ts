import './assets/main.css' // main.css has imported tailwind 
// import "tailwindcss/tailwind.css"; // Alternative way

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'// src/router/index.ts

const app = createApp(App) // App.vue

app.use(createPinia())
app.use(router)

app.mount('#app')
