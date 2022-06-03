<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer1 from "./Layout/Footer.vue";
import Header from './Layout/Header.vue';
import Headergrand from './Layout/Headergrand.vue';
import Footermobile from './Layout/FootermobileView.vue';

</script>

<template>
  <header class="bg-fondsite h-3 mb-10">
    <Headergrand class="hidden lg:flex"/>
    <Header class="lg:hidden"/>
  </header>


 <RouterView />
 
 <footer class="h-64 bg-fondsite text-white">
 <Footer1 class="hidden lg:block"/>
 <Footermobile class="lg:hidden"/>
 </footer>
</template>


