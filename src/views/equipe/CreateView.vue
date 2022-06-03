<template>
    <div class="container mt-32 mx-24 mb-72">
        <form enctype="multipart/form-data" 
            @submit.prevent="createEquipe"
        >
            <div class="card bg-dark">

                <div class="card-header">
                    <h5 class=" mt-28 mb-20 text-illustrationrose sm:text-1xl md:text-1xl lg:text-2xl font-bold font-oswald">Création d'équipe</h5>
                </div>    

                <div class="card-body">   
                    <div class="row">
                        <div class="col-6">
                            <div>
                                <img class="preview img-fluid" :src="imageData"/>
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
                                    required />                    
                            </div>
                            <br/>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >Prénom</span>
                                </div>
                                <input 
                                    v-model="equipe.prenom"
                                    class="text-black py-2 w-96 px-3 rounded-5xl" placeholder="Prénom de la personne" key=
                                    required />                    
                            </div>
                            <br/>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Photo</span>
                                </div>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" ref="file" id="file" 
                                    @change="previewImage"
                                    >
                                    <label class="custom-file-label" for="file">Sélectionner l'image</label>
                                </div>
                            </div>
                            <br/>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >Date naissance</span>
                                </div>
                                <input 
                                    type="date"
                                    class="text-black py-2 w-96 px-3 rounded-5xl"
                                    v-model="equipe.naissance" 
                                    format="dd/mm/yyyy" 
                                    required />                    
                            </div>
                            <br/>
      
                            <br/>
                        </div>
                    </div>               
                </div>

                <div class="card-footer mt-10">   
                    <button type="submit" class="float-left shadow bg-illustrationrose focus:shadow-outline focus:outline-none text-white font-bold py-2 px-20 rounded-9xl border-2 border-white">
                        Créer
                    </button>
                    <button class="float-right shadow bg-illustrationrose focus:shadow-outline focus:outline-none text-white font-bold py-2 px-20 rounded-9xl border-2 border-white" >
                        <router-link to="/equipe" >Cancel</router-link>
                    </button>
                </div>

            </div>
        </form>        
    </div>
</template>

<script>

import { 
    getFirestore,   // Obtenir le Firestore
    collection,     // Utiliser une collection de documents
    doc,            // Obtenir un document par son id
    getDocs,        // Obtenir la liste des documents d'une collection
    addDoc,         // Ajouter un document à une collection
    updateDoc,      // Mettre à jour un document dans une collection
    deleteDoc,      // Supprimer un document d'une collection
    onSnapshot,     // Demander une liste de documents d'une collection, en les synchronisant
    query,          // Permet d'effectuer des requêtes sur Firestore
    orderBy         // Permet de demander le tri d'une requête query
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'


    // Cloud Storage : import des fonctions
    import { 
        getStorage,             // Obtenir le Cloud Storage
        ref,                    // Pour créer une référence à un fichier à uploader
        getDownloadURL,         // Permet de récupérer l'adress complète d'un fichier du Storage
        uploadString,           // Permet d'uploader sur le Cloud Storage une image en Base64
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'

 
export default {
    name:'CreateView',
    data() {
        return {
            imageData:null,         // Image prévisualisée
            listePays:[],           // Liste des pays pour la nationalité de l'equipe
            equipe:{           // L'equipe à créer
                nom:null,               // son nom
                prenom:null,            // son prénom
                image:null,             // sa photo (nom du fichier)
                naissance:null,         // sa date de naissance
                nationalite:null        // sa nationalité
            }
        }
    },
    mounted(){ 
        this.getPays();
    },
    methods : {
        async getPays(){            
            const firestore = getFirestore();
            const dbPays = collection(firestore, "pays");       
            const q = query(dbPays, orderBy('nom', 'asc'));
            await onSnapshot(q, (snapshot) => {
                this.listePays = snapshot.docs.map(doc => (
                    {id:doc.id, ...doc.data()}
                ))  
console.log("Liste des pays", this.listePays);      
            })      
        },

        previewImage: function(event) {
            this.file = this.$refs.file.files[0]
            this.equipe.image = this.file.name;
            var input = event.target;
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.imageData = e.target.result;
                }
                reader.readAsDataURL(input.files[0]);        
            }
        },

        async createEquipe(){
            console.log ("equipe ",this.equipe.image);
            console.log ("equipe ",this.imageData);

            const storage = getStorage();
            const refStorage = ref(storage, 'equipe/'+this.equipe.image);
            await uploadString(refStorage, this.imageData, 'data_url').then((snapshot) => {
                console.log('Uploaded a base64 string');
                
                
                const db = getFirestore();
                const docRef = addDoc(collection(db, 'equipe'), this.equipe );
            });

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


