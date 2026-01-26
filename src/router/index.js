import { createRouter, createWebHistory } from 'vue-router'
import Hero from '../components/Hero.vue'
import Cats from '../components/Cats.vue'

const routes = [
    { path: '/', component: Hero },
    { path: '/cats', component: Cats }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router