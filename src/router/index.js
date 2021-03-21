import Vue from 'vue'
import Router from 'vue-router'

// SCREENS
// import Home from '../screens/Home.screen.vue'
// import About from '../screens/About.screen.vue'
// import Search from '../screens/Search.screen.vue'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'Home',
        // component: Home
        component: () => import('../screens/Home.screen.vue')
    },
    {
        path: '/about',
        name: 'About',
        // component: About
        component: () => import('../screens/About.screen.vue')
    },
    {
        path: '/search',
        name: 'Search',
        // component: Search
        component: () => import('../screens/Search.screen.vue')
    }
]

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
