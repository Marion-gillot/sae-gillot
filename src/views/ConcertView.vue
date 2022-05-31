<template>
    <h1 class="mx-24 mt-20 text-2xl font-bold pt-9 z-20">Concert du 30 Avril 2022</h1>
    <p class="mx-24 mt-6 font-thin w-96 z-20">Le rappeur français Zola se rendra sur la scène de Sunset dans la soirée du 3O Avril à partir de 22H00 !</p>
    <img src="public/img/cercle1.png" alt="cercle rose" class="w-64 -mt-36 mx-96 -z-20 ">


    <img src="public/img/Zola-1.jpg" alt="image de Zola" class="w-2/5 mt-28">

    <div class="mx-96 z-10 -mt-96 absolute">
        <div class="w-3/7 bg-illustrationrose -z-20 p-10 ">
          <h2 class="z-20 text-4xl">Zola</h2>
          <div class="w-20 h-2 bg-white mb-10"></div>
          <p class="z-20">Le jeune artiste Zola partagera ses plus belles musiques sur scène tout au long de la soirée, avec son album “ Survie ” sortit en 2020. D’autres artistes comme Ninho et Koba la D se joingeront à la fête pour plus de folie comme “ Peapers ” ou encore “ FlashBack ”.</p>
        </div>
    </div>


    <h2 class="mt-20 text-2xl font-bold mx-24">Quelles musiques ?</h2>
    <div class="grid grid-cols-8 mx-32 mt-10">
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


    <img src="public/img/Zola-2.jpg" alt="image de Zola" class="w-3/5 mt-28 ml-auto z-30 ">
    
    <div class="-mt-32 -z-20">
        <div class="bg-illustrationrose w-3/6 h-96 p-10">
          <h2 class="z-20 text-2xl">15 000</h2>
          <p class="z-20 mt-16">15 000 places sont disponibles pour le concert.</p>
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

<div class="mt-44">
    <h1 class="mx-24 mt-20 text-2xl font-bold pt-9 z-30">Quelles activités ?</h1>
    <img src="public/img/cercle1.png" alt="cercle rose" class="w-64 -mt-36 mx-96 -z-20 ">
</div>

<SkinautiqueView/>








</template>

<script>

import LocalisationView from "/src/component/Icons/LocalisationView.vue";
import TelephoneView from "/src/component/Icons/TelephoneView.vue";
import EnveloppeView1 from "../component/Icons/EnveloppeView.vue";
import PrixView from "../component/Icons/PrixView.vue";



export default {
  components: { LocalisationView, TelephoneView, PrixView, PrixView1, },
};
</script>