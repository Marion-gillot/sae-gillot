<template>
   
    <div class="bg-[url('/img/cercle1.png')] w-1/3 h-80 bg-contain bg-no-repeat mx-96 ">
    <h1 class="-mx-64 mt-20 sm:text-xl md:text-2xl lg:text-3xl font-bold font-oswald pt-20 ">Concert du 30 Avril 2022</h1>
    <p class="-mx-64 mt-6 font-thin w-96 ">Le rappeur français Zola se rendra sur la scène de Sunset dans la soirée du 3O Avril à partir de 22H00 !</p>
    </div>


    <img src="/img/Zola-1.jpg" alt="image de Zola" class="w-2/5 mt-28">
    

    <div class="mx-96 z-10 -mt-96 absolute">
        <div class="w-3/7 bg-gradient-to-r from-degrade-1 via-degrade-2 to-degrade-3 -z-20 p-10">
          <h2 class="z-20 sm:text-1xl md:text-2xl lg:text-3xl font-bold">Zola</h2>
          <div class="w-20 h-2 bg-white mb-10"></div>
          <p class="z-20">Le jeune artiste Zola partagera ses plus belles musiques sur scène tout au long de la soirée, avec son album “ Survie ” sortit en 2020. D’autres artistes comme Ninho et Koba la D se joingeront à la fête pour plus de folie comme “ Peapers ” ou encore “ FlashBack ”.</p>
        </div>
    </div>


    <h2 class="mt-20 sm:text-1xl md:text-2xl lg:text-2xl font-bold font-oswald mx-24">Quelles musiques ?</h2>
    <div class="grid grid-cols-4 md:grid-cols-8 sm:grid-cols-8 justify-items-center mt-10">
         <div class="h-28 w-3 bg-illustrationrose"></div>
        <ul>
            <li>Les puristes </li>
            <li>Le sauveur </li>
            <li>Madame</li>
            <li>Papillon</li>
        </ul>

          <ul>
            <li>Pistou</li>
            <li>Ma jolie</li>
            <li>Wow</li>
            <li>Bro bro</li>
        </ul>

          <ul>
            <li>Money train</li>
            <li>TLMA</li>
            <li>Papers</li>
            <li>FlashBack</li>
        </ul>

          <ul>
            <li>9 1 1 3</li>
            <li>Mula</li>
            <li>Tu connais l’gang</li>
            <li>Cache Cash</li>
        </ul>
    </div>


    <img src="/img/zola-2.jpg" alt="image de Zola" class="w-3/5 mt-28 ml-auto z-30 ">
    
    <div class="-mt-32 -z-20">
        <div class="bg-gradient-to-r from-degrade-1 via-degrade-2 to-degrade-3 w-3/6 h-96 p-10">
          <h2 class="z-20  sm:text-1xl md:text-2xl lg:text-3xl font-bold">15 000</h2>
          <p class="z-20 mt-12">15 000 places sont disponibles pour le concert.</p>
          <p class="z-20 mt-2"> Réservez dès maintenant vos billets et partagez à vos amis la venue de Zola à Sunset !</p>
          <div class="w-96 h-20 rounded-20xl bg-transparent border-2 border-white mt-9">
              <div class="flex">
                <PrixView1  class="h-14 w-14  mt-2 mx-4"/>
                <p class="text-center mt-7">Je veux réserver ma place </p>
          </div>
          </div>
        </div>
    </div>

<p class="text-center mt-20 w-3/6 mx-auto">Grâce à vos bracelets donnés à l’entrée du festival, vous pouvez bénéficier des réductions sur les activités sur la plage ! multipliez vos plaisirs et votre expériences grâce à Sunset !</p>


    <div class="bg-[url('/img/cercle1.png')] w-1/3 h-80 bg-contain bg-no-repeat mx-52">
        <h1 class="-mx-32 mt-20 sm:text-1xl md:text-1xl lg:text-2xl font-bold font-oswald pt-9 ">Quelles activités sont proposées ?</h1>
    </div>


<div class="flex flex-col items-center justify-center mt-20">

<div class="mt-20">
    <SkinautiqueView/>
    </div>

    <div class="mt-20">
        <jetski-view />
    </div>
        <div class="mt-20">
        <BarView />
    </div>
        <div class="mt-20">    
            <VolleyView />
    </div>
</div>

    <p class="sm:text-1xl md:text-2xl lg:text-2xl font-bold text-center pt-32 pb-64">Mais surtout...</p>

    <div class="bg-[url('/img/concert.jpg')] w-screen h-screen bg-cover bg-no-repeat">
        <p class="sm:text-1xl md:text-2xl lg:text-2xl font-bold text-black text-center p-48 ">De la musique et encore de la musique !</p>  
    </div>

</template>

<script>

import LocalisationView from "/src/component/LocalisationView.vue";
import TelephoneView from "/src/component/TelephoneView.vue";
import EnveloppeView1 from "../component/EnveloppeView.vue";
import PrixView from "../component/PrixView.vue";

import SkinautiqueView from "../component/SkinautiqueView.vue";
import JetskiView from "../component/JetskiView.vue";
import BarView from "../component/BarView.vue";
import VolleyView from "../component/VolleyView.vue";



export default {
  components: { LocalisationView, TelephoneView, PrixView, EnveloppeView1, SkinautiqueView, JetskiView, BarView, VolleyView },
};
</script>