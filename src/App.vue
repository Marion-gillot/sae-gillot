<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer1 from "./Layout/Footer.vue";
import Header from './Layout/Header.vue';
import Headergrand from './Layout/Headergrand.vue';


</script>

<template>
  <header class="bg-fondsite h-3 mb-10">
    <Headergrand class="hidden xl:flex"/>
    <Header class="xl:hidden"/>
  </header>


 <RouterView />
 <footer class="h-64 bg-fondsite text-white pt-32">
 <Footer1 />
 </footer>


</template>

<script>

export default {
  components: { Footer1, Headergrand, Header, },
};
</script>