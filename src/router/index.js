import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue')
    },
    // {
    //   path: '/help',
    //   name: 'help',
    //   component: () => import('../views/HelpView.vue')
    // },
    // {
    //   path: '/privacy',
    //   name: 'privacy',
    //   component: () => import('../views/PrivacyView.vue')
    // },
    // {
    //   path: '/alerts',
    //   name: 'alerts',
    //   component: () => import('../views/AlertsView.vue')
    // },
    // {
    //   path: '/alerts/1',
    //   name: 'alertsDetail',
    //   component: () => import('../views/AlertsDetailView.vue')
    // },
    // {
    //   path: '/population',
    //   name: 'population',
    //   component: () => import('../views/PopulationView.vue')
    // },
    // {
    //   path: '/population/1',
    //   name: 'populationDetail',
    //   component: () => import('../views/PopulationDetailView.vue')
    // },
    // {
    //   path: '/reports',
    //   name: 'reports',
    //   component: () => import('../views/ReportsView.vue')
    // },
    // {
    //   path: '/account/profile',
    //   name: 'account',
    //   component: () => import('../views/AccountProfileView.vue')
    // },    
    // {
    //   path: '/account/security',
    //   name: 'security',
    //   component: () => import('../views/AccountSecurityView.vue')
    // },    
    // {
    //   path: '/account/notifications',
    //   name: 'notifications',
    //   component: () => import('../views/AccountNotificationsView.vue')
    // },
    // {
    //   path: '/logout',
    //   name: 'logout',
    //   component: () => import('../views/LogoutView.vue')
    // },    

  ]
})

export default router