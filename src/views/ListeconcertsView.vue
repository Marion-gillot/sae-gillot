<template>
  <div class="container mx-24 mb-96">
    <div class="card-header">
      <h2 class="mt-28 mb-5 text-illustrationrose sm:text-1xl md:text-1xl lg:text-2xl font-bold font-oswald ">Liste des concerts</h2>
    </div>
    <hr />
    <form>
      <h6 class="mt-7 mb-3 font-bold">Nouveau concert</h6>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">Nom</span>
        </div>
        <input type="text" class="text-black py-2 w-80 px-3 rounded-5xl " v-model="nom" required />
        <button
          class="btn btn-light"
          type="button"
          @click="createConcerts()"
          title="Création"
        >
          <SaveView class="mt-9 mx-4"/>
        </button>
      </div>
    </form>

    <div class="card-body table-responsive">
      <table class="table text-light">
        <thead>
          <tr>
            <th scope="col">
              <div class="float-left mt-20 mb-3">Liste des concerts actuels</div>
              <span class="float-right">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text mx-96 font-bold">Filtrage</span>
                  </div>
                  <input type="text" class="text-black py-2 w-96 px-3 rounded-5xl" v-model="filter" />
                  <button class="btn btn-light" type="button" title="Filtrage">
                    <SearchView class="mx-4 mt-2"/>
                  </button>
                </div>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="concerts in filterByName" :key="concerts.id">
            <td>
              <form>
                <div class="input-group flex space-x-4">
                  <div class="input-group-prepend mt-2">
                    <span class="input-group-text">Artiste(s)</span>
                  </div>
                  <input
                    type="text"
                    class="text-black py-2 w-96 px-3 rounded-5xl mb-5"
                    v-model="concerts.nom"
                    required
                  />
                  <div class="input-group-prepend mt-2">
                    <span class="input-group-text">Date</span>
                  </div>
                  <input
                    type="date"
                    class="text-black py-2 w-96 px-3 rounded-5xl mb-5"
                    v-model="concerts.date"
                    format="dd/MM/yyyy"
                    required
                  />
                  <div class="input-group-prepend mt-2">
                    <span class="input-group-text">Prix</span>
                  </div>
                    <input
                    type="number"
                    class="text-black py-2 w-16 px-3 rounded-5xl mb-5"
                    v-model="concerts.prix"
                    required
                  />
                  <button
                    class="btn btn-light"
                    type="button"
                    @click.prevent="updateConcerts(concerts)"
                    title="Modification"
                  >
                  </button>
                  <button
                    class="btn btn-light"
                    type="button"
                    @click.prevent="deleteConcerts(concerts)"
                    title="Suppression"
                  >
                    <DeleteView class="-mt-4"/>
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
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
import DeleteView from '../component/DeleteView.vue';
import SaveView from "/src/component/SaveView.vue";
import SearchView from "/src/component/SearchView.vue";


export default {
  components: { SaveView, DeleteView, SearchView },
  name: "Listeconcerts",
  data() {
    return {
      nom: null, 
      listeConcertSynchro: [], 
      filter: "",
    };
  },

  computed: {
    orderByName: function () {
      return this.listeConcertSynchro.sort(function(a, b) {
        if (a.nom < b.nom) return -1;
        if (a.nom > b.nom) return 1;
        return 0;
      });
    },
    filterByName: function () {
      if (this.filter.length > 0) {
        let filter = this.filter.toLowerCase();
        return this.listeConcertSynchro.filter(function(concert) {
          return concert.nom.toLowerCase().includes(filter);
        });
      } else {
        return this.orderByName;
      }
    },
  },
  mounted() {
    this.getConcertsSynchro();
  },
  methods: {
    async getConcertsSynchro() {
      const firestore = getFirestore();
      const dbConcerts = collection(firestore, "concerts");
      const query = await onSnapshot(dbConcerts, (snapshot) => {
        this.listeConcertSynchro = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log ("Liste",this.listeConcertSynchro)
      });
    },

    async createConcerts() {
      const firestore = getFirestore();
      const dbConcerts = collection(firestore, "concerts");
      const docRef = await addDoc(dbConcerts, {
        nom: this.nom,
      });
      console.log("document créé avec le id : ", docRef.id);
    },

    async updateConcerts(concerts) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "concerts", concerts.id);
      await updateDoc(docRef, {
        nom: concerts.nom,
      });
    },

    async deleteConcerts(concerts) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "concerts", concerts.id);
      await deleteDoc(docRef);
    },
  },
};

</script>



<style scoped>
</style>


