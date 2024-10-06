import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('../views/TestView.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/web/LoginView.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/web/DashboardView.vue')
    },
    {
        path: '/monitoring',
        name: 'monitoring',
        component: () => import('../views/web/MonitoringView.vue')
    },
    {
        path: '/apphome',
        name: 'apphome',
        component: () => import('../views/app/AppHomeView.vue')
    },
    {
        path: '/applogin',
        name: 'applogin',
        component: () => import('../views/app/AppLoginView.vue')
    },
    {
        path: '/appoperations',
        name: 'appoperations',
        component: () => import('../views/app/AppOperationsView.vue')
    },
    {
        path: '/appoperationdetails',
        name: 'appoperationdetails',
        component: () => import('../views/app/AppOperationDetailsView.vue')
    },
    {
        path: '/appmypage',
        name: 'appmypage',
        component: () => import('../views/app/AppMypageView.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
