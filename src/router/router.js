import Login from "@/components/login/login.vue"
import { createRouter, createWebHistory } from "vue-router"

const routes = [{ path: "/", component: Login }]
const router = createRouter({
  history: createWebHistory("/"),
  routes,
})

export default router
