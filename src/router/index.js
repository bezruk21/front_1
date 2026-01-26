import { createRouter, createWebHistory } from 'vue-router'
import Hero from '../components/Hero.vue'
import Cats from '../components/Cats.vue'
import Dogs from '../components/Dogs.vue'

const routes = [
    { path: '/', component: Hero },
    { path: '/cats', component: Cats },
    { path: '/dogs', component: Dogs },
    { path: '/hamsters', component: Hamsters }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router