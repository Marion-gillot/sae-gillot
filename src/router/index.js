import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import MentionslegalesView from '../views/MentionslegalesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/mentionslegales', name: 'MentionslegalesView', component: MentionslegalesView },

  ]
})

export default router
