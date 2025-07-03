import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import Basket from './components/Basket.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import Favorite from './components/Favorite.vue'
import Main from './components/Main.vue'

const routes = [
    { path: '/', component: Main },
    { path: '/favorite', component: Favorite },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

const app = createApp(App).component('Basket', Basket).use(router).mount('#app')