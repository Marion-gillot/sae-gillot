import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import MentionslegalesView from '../views/MentionslegalesView.vue'
import AproposView from '../views/AproposView.vue'
import ContactView from '../views/ContactView.vue'
import ArtistesView from '../views/ArtistesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/mentionslegales', name: 'MentionslegalesView', component: MentionslegalesView },
    { path: '/contact', name: 'ContactView', component: ContactView },
    { path: '/apropos', name: 'AproposView', component: AproposView },
    { path: '/artistes', name: 'ArtistesView', component: ArtistesView },


  ]
})

export default router
