<template>
    <div class="card bg-dark">
        <div class="card-header">
            <h5>Liste des participants
                <span class="float-right" title="Créer un nouveau participant">
                    <router-link to="/createEquipe">
                        <i class="fa fa-plus fa-lg text-light"></i>
                    </router-link>
                </span>
            </h5>
        </div>    
                        
        <div class="card-body table-responsive">
            <table class="table text-light">
                <thead>
                    <tr>                      
                        <th scope="col" class="text-center">Image</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Prénom</th>
                        <th scope="col">Pays</th>
                        <th scope="col">Né le</th>
                        <th scope="col">Actions</th>                                
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="part in listeEquipe" :key="part.id">
                        <td class="text-center">                                        
                            <img class="media-object imageSmall" :src="part.photo" 
                            :alt="part.prenom+' '+part.nom">                                                                
                        </td>
                        <td><b>{{part.nom}}</b></td>
                        <td>{{part.prenom}}</td>
                        <td>{{part.nationalite}}</td>
                        <td>{{part.naissance}}</td>
                        <!-- <td>{{dateFr(part.naissance)}}</td> -->
                        <td>
                            <span title="Supprimer l'equipe" class="mr-2">
                                <RouterLink :to="{ name:'DeleteEquipe', params: { id: part.id }}">
                                    <i class="fa fa-times fa-lg text-light" ></i>
                                </RouterLink>
                            </span>
                            <span  title="Modifier l'equipe" class="mr-2">
                                <!-- Pour passer un paramètre dans la navigation :
                                On utilise le nom de la route
                                l'attribut params, permet de préciser le nom du paramètre (id) 
                                et sa valeur (part.id, id du participant) 
                                -->
                                <RouterLink :to="{ name:'UpdateEquipe', params: { id: part.id }}">
                                    <i class="fa fa-edit fa-lg text-light" ></i>
                                </RouterLink>
                            </span>    
                            <span title="Gérer les participations aux vidéos">
                                <a href="#" >
                                    <i class="fa fa-television fa-lg text-light" ></i>
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

export default {
  name:'ListeView',
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
            const dbPart = collection(firestore, "equipe");
            // Liste des participants triés sur leur nom
            const q = query(dbPart, orderBy('nom', 'asc'));
            await onSnapshot(q, (snapshot) => {
                this.listeEquipe = snapshot.docs.map(doc => (
                    {id:doc.id, ...doc.data()}
                ))
                // Récupération des images de chaque participant
                // parcours de la liste
                this.listeEquipe.forEach(function(personne){
                    // Obtenir le Cloud Storage
                    const storage = getStorage();
                    // Récupération de l'image par son nom de fichier
                    const spaceRef = ref(storage, 'equipe/'+personne.photo);
                    // Récupération de l'url complète de l'image
                    getDownloadURL(spaceRef)
                    .then((url) => {
                        // On remplace le nom du fichier
                        // Par l'url complète de la photo
                        personne.photo = url;
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


