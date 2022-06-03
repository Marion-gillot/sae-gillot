<template>
    <div class="card mx-20 mb-28">
        <div class="card-header">
            <h5 class="mt-28 mb-20 text-illustrationrose sm:text-1xl md:text-1xl lg:text-2xl font-bold font-oswald">Liste de l'équipe
                <span class="float-right mx-24" title="Créer un nouveau participant"> 
                    <router-link to="/createEquipe">
                        <MoreView />
                    </router-link>
                </span>
            </h5>
        </div>    
                        
        <div class="card-body table-responsive">
            <table class="table border-2 text-light">
                <thead>
                    <tr>                      
                        <th scope="col" class="text-center">Image</th>
                        <th scope="col" class="text-center">Nom</th>
                         <th scope="col" class="text-center">Prénom</th>
                        <th scope="col" class="text-center">Métier</th>
                        <th scope="col" class="text-center">Actions</th>                                
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="equipe in listeEquipe" :key="equipe.id">
                        <td class="text-center">                                        
                            <img class="media-object imageSmall w-44 p-4" :src="equipe.image" 
                            :alt="equipe.prenom+' '+equipe.nom">                                                                
                        </td>
                        <td><b>{{equipe.nom}}</b></td>
                        <td><b>{{equipe.prenom}}</b></td>
                        <td>{{equipe.metier}}</td>
                        <td>
                            <span title="Supprimer l'equipe" class="mr-2">
                                <RouterLink :to="{ name:'DeleteEquipe', params: { id: equipe.id }}">
                                   <DeleteView class=" mx-3 -mt-4"/>
                                </RouterLink>
                            </span>
                            <span  title="Modifier l'equipe" class="mr-2">
                                <!-- Pour passer un paramètre dans la navigation :
                                On utilise le nom de la route
                                l'attribut params, permet de préciser le nom du paramètre (id) 
                                et sa valeur (equipe.id, id du participant) 
                                -->
                                <RouterLink :to="{ name:'UpdateEquipe', params: { id: equipe.id }}">
                                    <EditView class=" mx-3 -mt-4"/>
                                </RouterLink>
                            </span>    
                            <span title="Gérer les participations aux vidéos">
                                <a href="#" >
                                   <TvView class=" mx-3 -mt-4"/>
                                </a>
                            </span>               
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
import { 
    getFirestore,   // Obtenir le Firestore
    collection,     // Utiliser une collection de documents
    onSnapshot,     // Demander une liste de documents d'une collection, en les synchronisant
    query,          // Permet d'effectuer des requêtes sur Firestore
    orderBy         // Permet de demander le tri d'une requête query
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'


// Cloud Storage : import des fonctions
import { 
    getStorage,             // Obtenir le Cloud Storage
    ref,                    // Pour créer une référence à un fichier à uploader
    getDownloadURL,         // Permet de récupérer l'adress complète d'un fichier du Storage
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'

import MoreView from '../../component/MoreView.vue';
import DeleteView from '../../component/DeleteView.vue';
import SaveView from "../../component/SaveView.vue";
import SearchView from "../../component/SearchView.vue";
import EditView from "../../component/EditView.vue";
import TvView from "../../component/TvView.vue";

export default {
  name:'ListeView',
    components: { MoreView, SaveView, DeleteView, SearchView, EditView, TvView },
  data() {
    return {
            listeEquipe:[] // Liste des participants
        }
    },
    mounted(){ // Montage de la vue
        // Appel de la liste des participants
        this.getEquipe();
    },
    methods: {
        async getEquipe(){
            // Obtenir Firestore
            const firestore = getFirestore();
            // Base de données (collection)  document participant
            const dbEquipe = collection(firestore, "equipe");
            // Liste des participants triés sur leur nom
            const q = query(dbEquipe, orderBy('nom', 'asc'));
            await onSnapshot(q, (snapshot) => {
                this.listeEquipe = snapshot.docs.map(doc => (
                    {id:doc.id, ...doc.data()}
                ))
                // Récupération des images de chaque participant
                // parcours de la liste
                this.listeEquipe.forEach(function(equipe){
                    // Obtenir le Cloud Storage
                    const storage = getStorage();
                    // Récupération de l'image par son nom de fichier
                    const spaceRef = ref(storage, 'equipe/'+equipe.image);
                    // Récupération de l'url complète de l'image
                    getDownloadURL(spaceRef)
                    .then((url) => {
                        // On remplace le nom du fichier
                        // Par l'url complète de la photo
                        equipe.image = url;
                    })
                    .catch((error) =>{
                        console.log('erreur downloadUrl', error);
                    })
                })
            })      
        },

        // Format date en français
        dateFr(d){
            let date = d.split('-');
            return date[2]+'/'+date[1]+'/'+date[0];
        }

    }

}
</script>

<style scoped>
</style>


