<script setup>
import footer from "./Layout/footer.vue"
import Footer1 from "./Layout/footer.vue";
</script>

<template>
  <header class="bg-fondsite h-3 mb-10">
  <nav class="flex">
  <div>
    <a href="accueil"><img src="public/img/logosunset.png" class="w-12 h-12 mx-7 my-5" /></a>
  </div>
  
  <div class="flex mt-8 space-x-8 font-roboto text-white">
    <h3><a href="accueil">Concert</a></h3>
    <h3><a href="apropos">Programmation</a></h3>
    <h3><a href="contact">Artistes</a></h3>
    <h3><a href="apropos">Festival</a></h3>
    <h3><a href="noscoloriages">Contact</a></h3>
    </div>
  </nav>
  </header>






  <RouterView />
 <footer class="block h-64 bg-fondsite text-white pt-36">
 <Footer1 />
 </footer>


</template>

<script>

export default {
  components: { },
};
</script>