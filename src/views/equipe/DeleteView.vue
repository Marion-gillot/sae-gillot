<template>
    <div class="container mt-32 mx-24 mb-72">
        <form enctype="multipart/form-data"  @submit.prevent="deleteEquipe">
            <div class="card bg-dark">

                <div class="card-header">
                    <h5 class="mt-28 mb-20 text-illustrationrose sm:text-1xl md:text-1xl lg:text-2xl font-bold font-oswald">Suppression d'un membre de l'équipe</h5>
                </div>    

                <div class="card-body">   
                    <div class="row">
                        <div class="col-6">
                            <div class="text-center">
                                <img class="preview img-fluid" :src="photoActuelle"/>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >Nom</span>
                                </div>
                                <input 
                                    class="text-black py-2 w-96 px-3 rounded-5xl" placeholder="Nom de la personne"
                                    v-model="equipe.nom"
                                    disabled />                    
                            </div>
                            <br/>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >Prénom</span>
                                </div>
                                <input 
                                    class="text-black py-2 w-96 px-3 rounded-5xl" placeholder="Prénom de la personne" 
                                    v-model="equipe.prenom"
                                    disabled />                    
                            </div>
                            <br/>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >Date naissance</span>
                                </div>
                                <input type="date" class="text-black py-2 w-96 px-3 rounded-5xl" 
                                    v-model="equipe.naissance" 
                                    format="dd/mm/yyyy"
                                    disabled
                                    />                    
                            </div>
    
                        </div>
                    </div>         
                    <br/>      
                    <h5 class="alert alert-warning text-center" role="alert">
                        Attention vous allez supprimer ce membre de l'équipe, cette action est irréversible !!
                    </h5>
                </div>

                <div class="card-footer mt-10">   
                    <button type="submit" class="float-left shadow bg-illustrationrose focus:shadow-outline focus:outline-none text-white font-bold py-2 px-20 rounded-9xl border-2 border-white" >
                        Supprimer
                    </button>
                    <button class="float-right shadow bg-illustrationrose focus:shadow-outline focus:outline-none text-white font-bold py-2 px-20 rounded-9xl border-2 border-white">
                        <RouterLink to="/equipe">Cancel</RouterLink>
                    </button>
                </div>

            </div>
        </form>        
    </div>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
import { 
    getFirestore, 
    doc, 
    getDoc,
    deleteDoc, 
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'

// Storage
import { 
    getStorage, 
    ref, 
    getDownloadURL, 
    deleteObject
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'


export default {
    name:'DeleteView',
    data() {
        return {
            equipe:{           // Le participant à créer
                nom:null,               // son nom
                prenom:null,            // son prénom
                photo:null,             // sa photo (nom du fichier)
                naissance:null,         // sa date de naissance
                nationalite:null        // sa nationalité
            },

            refEquipe:null,     // Référence du participant à modifier
            photoActuelle:null       // Photo actuelle du participant
        }
    },
    mounted(){ // Montage de la vue
        // Récupération du id passé en paramètre
        // On utilise le id passé par la route
        // via la variable système $route de la vue
console.log("id equipe", this.$route.params.id);
        // Recherche participant concerné
        this.getEquipe(this.$route.params.id);
    },

    methods :{

        async getEquipe(id){
            // Obtenir Firestore
            const firestore = getFirestore();
            // Base de données (collection)  document participant
            // Récupération sur Firestore du participant via son id
            const docRef = doc(firestore, "equipe", id);
            // Référence du participant concerné
            this.refEquipe = await getDoc(docRef);
            // Test si le participant demandé existe
            if(this.refEquipe.exists()){
                // Si oui on récupère ses données
                this.equipe = this.refEquipe.data();
                // Mémorisation photoActuelle
                this.photoActuelle = this.equipe.photo;
            }else{
                // Sinon simple message d'erreur
                this.console.log("Equipe inexistant");
            }
            // Obtenir le Storage
            const storage = getStorage();
            // Référence de l'image du participant
            const spaceRef = ref(storage, 'equipe/'+this.equipe.photo);
            // Récupération de l'url complète de l'image
            getDownloadURL(spaceRef)
                .then((url) => {
                    // Mise à jour de l'image prévisualisée
                    this.photoActuelle = url;
            })
            .catch((error) =>{
                console.log('erreur downloadUrl', error);
            })
        },

        async deleteEquipe(){
            const firestore = getFirestore();
            // Suppresion du participant
            await deleteDoc(doc(firestore, "equipe", this.$route.params.id));

            // Suppresson de l'image
            const storage = getStorage();
            // Référence du fichier de la photo
            let docRef = ref(storage, 'equipe/'+this.equipe.photo);
            // Suppression du fichier
            deleteObject(docRef);

            // redirection sur la liste des participants
            this.$router.push('/equipe');       
        }
    }

}
</script>

<style scoped>
a{
    color:white;
}
a:hover{
    text-decoration:none;
}
</style>


