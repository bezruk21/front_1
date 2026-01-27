import { createRouter, createWebHistory } from 'vue-router'
import Hero from '../components/Hero.vue'
import Cats from '../components/Cats.vue'
import Dogs from '../components/Dogs.vue'
import Hamsters from '../components/Hamsters.vue'
import Parrots from '../components/Parrots.vue'
import ContactsPage from '../pages/ContactsPage.vue'
import AboutPage from '../pages/AboutPage.vue'

const routes = [
    { path: '/', component: Hero },
    { path: '/cats', component: Cats },
    { path: '/dogs', component: Dogs },
    { path: '/hamsters', component: Hamsters },
    { path: '/parrots', component: Parrots },
    { path: '/contacts', component: ContactsPage },
    { path: '/about', component: AboutPage }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router