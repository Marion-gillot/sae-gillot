<template>
  <div class="container mx-24 mb-96">
    <div class="card-header">
      <h2 class="mt-44 mb-5 text-2xl">Liste des artistes</h2>
    </div>
    <hr />
    <form>
      <h6>Nouvel artiste</h6>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">Nom</span>
        </div>
        <input type="text" class="form-control" v-model="nom" required />
        <button
          class="btn btn-light"
          type="button"
          @click="createArtistes()"
          title="Création"
        >
          <i class="fa fa-save fa-lg"></i>
        </button>
      </div>
    </form>

    <div class="card-body table-responsive">
      <table class="table text-light">
        <thead>
          <tr>
            <th scope="col">
              <div class="float-left">Liste des artistes actuels</div>
              <span class="float-right">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Filtrage</span>
                  </div>
                  <input type="text" class="form-control" v-model="filter" />
                  <button class="btn btn-light" type="button" title="Filtrage">
                    <i class="fa fa-search fa-lg"></i>
                  </button>
                </div>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="artistes in filterByName" :key="artistes.id">
            <td>
              <form>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Nom</span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    v-model="artistes.nom"
                    required
                  />
                  <button
                    class="btn btn-light"
                    type="button"
                    @click.prevent="updateArtistes(artistes)"
                    title="Modification"
                  >
                    <i class="fa fa-save fa-lg"></i>
                  </button>
                  <button
                    class="btn btn-light"
                    type="button"
                    @click.prevent="deleteArtistes(artistes)"
                    title="Suppression"
                  >
                    <i class="fa fa-trash fa-lg"></i>
                  </button>
                </div>
              </form>
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
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
export default {
  name: "ListeView",
  data() {
    return {
      nom: null, // Pour la création d'un nouveau pays
      listeArtistesSynchro: [], // Liste des pays synchronisée - collection pays de Firebase
      filter: "",
    };
  },

  computed: {
    // Tri des pays par nom en ordre croissant
    orderByName: function () {
      // Parcours et tri des pays 2 à 2
      return this.listeArtistesSynchro.sort(function (a, b) {
        // si le nom du pays a est avant celui du pays b on retourne -1
        if (a.nom < b.nom) return -1;
        // si le nom du pays a est après celui du pays b on retourne 1
        if (a.nom > b.nom) return 1;
        // Sinon ni avant ni après
        return 0;
      });
    },
    // Filtrage de la liste des pays
    filterByName: function () {
      // On effectue le filtrer seulement si filter est renseigné
      if (this.filter.length > 0) {
        // On récupère le filtre saisi, et on évite les majuscules
        let filter = this.filter.toLowerCase();
        // Filtrage de la propriété calculée de tri
        return this.orderByName.filter(function (artistes) {
          // On ne renvoie que les pays dont le nom contient
          // la chaine de caractères du filtre
          return artistes.nom.toLowerCase().includes(filter);
        });
      } else {
        // si le filtre n'est pas saisi
        // On renvoie l'intégralité de la liste triée
        return this.orderByName;
      }
    },
  },
  mounted() {
    // Appel de la liste des pays synchronisée
    this.getArtistesSynchro();
  },
  methods: {
    async getArtistesSynchro() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbArtistes = collection(firestore, "artistes");
      // Liste des pays synchronisée
      const query = await onSnapshot(dbArtistes, (snapshot) => {
        //  Récupération des résultats dans listePaysSynchro
        // On utilse map pour récupérer l'intégralité des données renvoyées
        // on identifie clairement le id du document
        // les rest parameters permet de préciser la récupération de toute la partie data
        this.listeArtistesSynchro = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log ("Liste",this.listeArtistesSynchro)
      });
    },

    async createArttistes() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbArtistes = collection(firestore, "artistes");
      // On passe en paramètre format json
      // Les champs à mettre à jour
      // Sauf le id qui est créé automatiquement
      const docRef = await addDoc(dbArtistes, {
        nom: this.nom,
      });
      console.log("document créé avec le id : ", docRef.id);
    },

    async updateArtistes(artistes) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      // Reference du pays à modifier
      const docRef = doc(firestore, "artistes", artistes.id);
      // On passe en paramètre format json
      // Les champs à mettre à jour
      await updateDoc(docRef, {
        nom: artistes.nom,
      });
    },

    async deleteArtistes(artistes) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      // Reference du pays à supprimer
      const docRef = doc(firestore, "artistes", artistes.id);
      // Suppression du pays référencé
      await deleteDoc(docRef);
    },
  },
};
</script>

<style scoped>
</style>


