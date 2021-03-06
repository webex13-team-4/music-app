import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import MemoApp from "@/views/MemoApp.vue"
import QuizApp from "@/views/QuizApp.vue"
import PaletteApp from "@/views/PaletteApp.vue"
import OriginalApp from "@/views/OriginalApp.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/memo",
    name: "MemoApp",
    component: MemoApp,
  },
  {
    path: "/quiz",
    name: "QuizApp",
    component: QuizApp,
  },
  {
    path: "/palette",
    name: "PaletteApp",
    component: PaletteApp,
  },
  {
    path: "/original",
    name: "OriginalApp",
    component: OriginalApp,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
