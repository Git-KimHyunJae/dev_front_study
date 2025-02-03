import "./assets/main.css"

import { createApp } from "vue"

//vuetify
import "vuetify/styles"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"

//pinia
import { createPinia } from "pinia"
const pinia = createPinia()

//router
import router from "./router/router"

import App from "./App.vue"

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(vuetify).use(pinia).use(router).mount("#app")
