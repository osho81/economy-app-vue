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
import { faInfoCircle, faSortUp, faSortDown, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faInfoCircle, faSortUp, faSortDown, faPenToSquare, faTrash) // Register each new icon, to use elsewhere


const app = createApp(App) // App.vue
    // .component('font-awesome-icon', FontAwesomeIcon) // Addedd for fontawsome 230709

// Add additional features/plugins to the application
app.component('font-awesome-icon', FontAwesomeIcon) // Addedd for fontawsome 230709
app.use(createPinia())
app.use(router)

// Mount app, with selected root component (#app which is itself; and it renders App.vue as set above)
app.mount('#app')

// Added 230710 to solve "Property diplayDoalsDiv does not exist on type 'Window & typeof globalThis"
declare global {
    interface Window {
        diplayGoalsDiv: any
    }
}
