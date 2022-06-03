<template>
  <div class="container mx-24 mb-96">
    <div class="card-header">
      <h2 class="mt-28 mb-5 text-2xl">Liste des artistes</h2>
    </div>
    <hr />
    <form>
      <h6 class="mt-7 mb-3 font-bold">Nouvel artiste</h6>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">Nom</span>
        </div>
        <input type="text" class="text-black py-2 w-80 px-3 rounded-5xl " v-model="nom" required />
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
              <div class="float-left mt-20 mb-3">Liste des artistes actuels</div>
              <span class="float-right">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text mx-96 font-bold">Filtrage</span>
                  </div>
                  <input type="text" class="text-black py-2 w-96 px-3 rounded-5xl" v-model="filter" />
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
                    class="text-black py-2 w-96 px-3 rounded-5xl mb-5"
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
  name: "Listeartistes",
  data() {
    return {
      nom: null, 
      listeArtistesSynchro: [], 
      filter: "",
    };
  },

  computed: {
    orderByName: function () {
      return this.listeArtistesSynchro.sort(function (a, b) {
        if (a.nom < b.nom) return -1;
        if (a.nom > b.nom) return 1;
        return 0;
      });
    },
    filterByName: function () {
      if (this.filter.length > 0) {
        let filter = this.filter.toLowerCase();
        return this.orderByName.filter(function (artistes) {
          return artistes.nom.toLowerCase().includes(filter);
        });
      } else {
        return this.orderByName;
      }
    },
  },
  mounted() {
    this.getArtistesSynchro();
  },
  methods: {
    async getArtistesSynchro() {
      const firestore = getFirestore();
      const dbArtistes = collection(firestore, "artistes");
      const query = await onSnapshot(dbArtistes, (snapshot) => {
        this.listeArtistesSynchro = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log ("Liste",this.listeArtistesSynchro)
      });
    },

    async createArtistes() {
      const firestore = getFirestore();
      const dbArtistes = collection(firestore, "artistes");
      const docRef = await addDoc(dbArtistes, {
        nom: this.nom,
      });
      console.log("document créé avec le id : ", docRef.id);
    },

    async updateArtistes(artistes) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "artistes", artistes.id);
      await updateDoc(docRef, {
        nom: artistes.nom,
      });
    },

    async deleteArtistes(artistes) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "artistes", artistes.id);
      await deleteDoc(docRef);
    },
  },
};



</script>



<style scoped>
</style>


