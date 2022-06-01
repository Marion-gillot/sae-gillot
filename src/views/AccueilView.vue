<template>
  <main>

    <div class="bg-[url('/img/hero-home.jpg')] w-screen h-screen bg-contain bg-no-repeat">
      <div class="pt-24">
          <h1 class="mx-24 text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ">Sunset</h1>
          <p class="mx-24 text-white sm:text-xl md:text-1xl lg:text-2xl ">Plongé dans l’univers musical et chaleureux sur le sable de Sunset </p>
      </div>
    </div>

  <h2 class="sm:text-xl md:text-1xl lg:text-2xl  text-illustrationrose mx-24">Les actualités</h2>

 <div class=" mt-12 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-x-4 justify-items-center">  
      <div class="mt-10 repeat-auto feat">
         <img src="/img/actualite1.png" alt="actualités de sunset">
         <p class="text-center mt-6 sm:text-1xl md:text-1xl lg:text-1xl ">Comment réserver ?</p>
     </div>

      <div class="mt-10">
         <img src="/img/actualite2.png" alt="actualités de sunset">
         <p class="text-center mt-6">Les rencontres</p>
     </div>

      <div class="mt-10">
         <img src="/img/actualite3.png" alt="actualités de sunset">
         <p class="text-center mt-6">Les tendances</p>
     </div>

      <div class="mt-10">
         <img src="/img/actualite4.png" alt="actualités de sunset">
         <p class="text-center mt-6">Les coups de coeur</p>
     </div>

      <div class="mt-10">
         <img src="/img/actualite5.png" alt="actualités de sunset">
         <p class="text-center mt-6">Quels styles de musique ? </p>
     </div>

      <div class="mt-10">
         <img src="/img/actualite6.png" alt="actualités de sunset">
         <p class="text-center mt-6">Nos playlists</p>
     </div>
</div>

<h2 class="text-3xl text-illustrationrose mx-24 mt-24">Restez connecté !</h2>

<div class=" mt-12  grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-x-4 justify-items-center">  
      <div class="mt-10 repeat-auto feat">
         <img src="/img/insta-screen.jpg" alt="instagram" class="h-96">
         <p class="text-center w-60 mt-6 sm:text-1xl md:text-1xl lg:text-1xl ">Ne manquez pas nos aventures sur instagram ! De nombreuses annonces sont publiées chaques semaines fin de garder le rythme de la festivité !</p>
     </div>

      <div class="mt-10">
         <img src="/img/facebook-screen.jpg" alt="facebook" class="h-96">
         <p class="text-center  w-60 mt-6">Facebook également sera toujours là pour vous tenir au courant des festivals, des dates et toutes autres informations...s</p>
     </div>

      <div class="mt-10">
         <img src="/img/twitter-screen.jpg" alt="twitter" class="h-96">
         <p class="text-center w-60 mt-6">Twitter vous propose chaque jours, de nouveaux artistes, et de nouvelles musiques</p>
     </div>
</div>

<h2 class="text-2xl text-illustrationrose text-center mt-24">Rejoignez nous sur Spotify pour plus de rythme !</h2>
<p class="mx-24 mt-20 text-center">Ne manquez pas les tendances du moments ! rejoignez notre compte spotify avec 3 mois offerts !</p>


  <img src="/img/spotify1.jpg" alt="playlist rihanna" class="mx-auto mt-20 w-3/5">
  
  <div class="grid grid-cols-2 mt-20">
    <div>
      <p class="mx-24 w-96 mt-28">Profitez de nos playlists en écoute illimité pendant 3 mois gratuits, nous proposont tous types de musiques, adapté pour tous les goûts ! </p>
      <button class=" mx-80 w-52 mt-12 shadow bg-boutonvert focus:shadow-outline focus:outline-none text-white font-bold py-2 px-10 rounded-9xl border-2 border-white " type="button">
        Rejoinez-nous !
      </button>
    </div>
   <div>
      <img src="/img/spotify-screen.jpg" alt="demonstration sur tablette de spotify">
   </div>
  </div>
  
<div class="mt-28">
  <p class="text-center">La musique commence là où s'arrête le pouvoir des mots.</p>
  <p class="text-center text-illustrationrose">Richard Wagner</p>
  <p class="text-center text-illustrationrose">Artiste, Compositeur (1813 - 1883)</p>
</div>


<div class="bg-[url('/img/newsletter.jpg')] w-screen h-screen bg-cover bg-no-repeat mt-32" alt="image de la newletter">
      <div class="pt-40">
          <h1 class="text-center text-4xl font-bold">Sunset</h1>
          <p class="text-center text-2xl ">Ne manquez rien en vous inscrivant à la newsletter</p>
          
      <div class="flex justify-center items-center">
        <div class="flex flex-wrap mt-10">
            <div class="w-96">
              <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                E-mail
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email">
            </div>
          <button class="shadow bg-boutonorange focus:shadow-outline focus:outline-none text-black text-1xl w-16 h-12 mt-6  " type="button">
          OK 
          </button> 
        </div>
     
    


      </div>    
      </div>
</div>

  </main>
</template>

<script>
import InstagramView from '../component/InstagramView.vue';
export default { components: { InstagramView } };
</script>