<template>
  <header class="z-50 flex h-16 w-screen ">
     <img src="/img/logosunset.png" class="h-12 mx-7 my-5 w-auto mt-5" />
    <MenuView class="ml-auto z-50 h-8 w-8 mt-5 right-5" @click="MenuOpen = !MenuOpen" v-if="!MenuOpen" />
    <XView class="ml-auto z-50 h-8 w-8 mt-5 right-5" @click="MenuOpen = !MenuOpen" v-if="MenuOpen" />
    <nav class="absolute left-0 top-0 bottom-0 right-0 h-screen -translate-x-full  bg-gradient-to-r from-degrade-1 via-degrade-2 to-degrade-3  opacity-0" :class="MenuOpen && 'translate-x-0 opacity-100'">
      <ul class="flex h-full flex-col items-center justify-center gap-5 text-left text-1lg font-bold">
        <li>
          <RouterLink to="/" @click="MenuOpen = !MenuOpen">Accueil</RouterLink>
        </li>
        <li>
          <RouterLink to="/concert" @click="MenuOpen = !MenuOpen">Concert</RouterLink>
        </li>
        <li>
          <RouterLink to="/programmation" @click="MenuOpen = !MenuOpen">Programmation</RouterLink>
        </li>
        <li>
          <RouterLink to="/artistes" @click="MenuOpen = !MenuOpen">Artistes</RouterLink>
        </li>
        <li>
          <RouterLink to="/apropos" @click="MenuOpen = !MenuOpen">Festival</RouterLink>
        </li>
        <li>
          <RouterLink to="/contact" @click="MenuOpen = !MenuOpen">Contact</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import MenuView from "../component/MenuView.vue";
import XView from "../component/XView.vue";

export default {
  data() {
    return {
      MenuOpen: false,
    };
  },
  components: { MenuView, XView },
};
</script> 
