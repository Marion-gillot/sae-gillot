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

import ListeartistesView from '../views/ListeartistesView.vue'
import ListeconcertsView from '../views/ListeconcertsView.vue'

import ListeEquipe     from      '../views/equipe/ListeView.vue'
import CreateEquipe     from      '../views/equipe/CreateView.vue'
import UpdateEquipe    from      '../views/equipe/UpdateView.vue'
import DeleteEquipe    from      '../views/equipe/DeleteView.vue'

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

    { path: '/listeartistes', name: 'ListeartistesView', component: ListeartistesView },
    { path: '/listeconcerts', name: 'ListeconcertsView', component: ListeconcertsView },

    { path: '/equipes',            name: 'ListeEquipe',    component: ListeEquipe,  },
    { path: '/createEquipe',       name: 'CreateEquipe',   component: CreateEquipe, },
    { path: '/updateEquipe/:id',   name: 'UpdateEquipe',   component: UpdateEquipe, }, 
    { path: '/deleteEquipe/:id',   name: 'DeleteEquipe',   component: DeleteEquipe, }, 


  ]
})


export default router
