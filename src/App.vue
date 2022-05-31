<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer1 from "./Layout/footer.vue";
</script>

<template>
  <header class="bg-fondsite h-3 mb-10">
  <nav class="flex">
  <div>
     <RouterLink to="/"><img src="public/img/logosunset.png" class="w-12 h-12 mx-7 my-5" /></RouterLink>
     
  </div>
  
  <div class="flex mt-8 space-x-8 font-roboto text-white">
    <RouterLink to="/concert">Concert</RouterLink>
    <RouterLink to="/programmation">Programmation</RouterLink>
    <RouterLink to="/artistes">Artistes</RouterLink>
    <RouterLink to="/apropos">Festival</RouterLink>
    <RouterLink to="/contact" class="text-illustrationrose">Contact</RouterLink>
    </div>
  </nav>
  </header>



 <RouterView />
 <footer class="h-64 bg-fondsite text-white pt-32">
 <Footer1 />
 </footer>


</template>

<script>

export default {
  components: { },
};
</script>