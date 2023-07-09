import './assets/main.css' // main.css has imported tailwind 
// import "tailwindcss/tailwind.css"; // Alternative way

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'// src/router/index.ts


// Fontawsome for vue, global install
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faInfoCircle, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faInfoCircle, faSortUp, faSortDown) // Register each new icon, to use elsewhere
 

const app = createApp(App) // App.vue
.component('font-awesome-icon', FontAwesomeIcon) // Addedd for fontawsome 230709

app.use(createPinia())
app.use(router)

app.mount('#app')
