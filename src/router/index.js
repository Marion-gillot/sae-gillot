import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import MentionslegalesView from '../views/MentionslegalesView.vue'
import AproposView from '../views/AproposView.vue'
import ContactView from '../views/ContactView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import ConcertView from '../views/ConcertView.vue'
import ProgrammationView from '../views/ProgrammationView.vue'
import ArtisteView from '../views/ArtisteView.vue'

import page404View from '../views/page404View.vue'

import GuidestyleView from '../views/GuidestyleView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/mentionslegales', name: 'MentionslegalesView', component: MentionslegalesView },
    { path: '/contact', name: 'ContactView', component: ContactView },
    { path: '/apropos', name: 'AproposView', component: AproposView },
    { path: '/artistes', name: 'ArtistesView', component: ArtistesView },
    { path: '/concert', name: 'ConcertView', component: ConcertView },
    { path: '/programmation', name: 'ProgrammationView', component: ProgrammationView },
    { path: '/artiste', name: 'ArtisteView', component: ArtisteView },

    { path: '/Guidestyle', name: 'GuidestyleView', component: GuidestyleView },
    { path: '/:pathMatch(.*)', name: 'page404View', component: page404View },


  ]
})

export default router
