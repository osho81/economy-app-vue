import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(
      {
        // Added 230710; see here:
        // https://stackoverflow.com/questions/71601714/how-to-set-compileroptions-iscustomelement-for-vuejs-3-in-laravel-project
        template: {
          compilerOptions: {
            isCustomElement: (tag) => ['FontAwesomeIcon', "Link"].includes(tag),
          }
        }
      }
    ),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
