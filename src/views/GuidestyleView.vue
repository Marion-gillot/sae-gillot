<template>
    <h1 class="text-3xl mx-32 my-7 mt-20 mb-20 text-center font-bold">Guide de styles</h1>
  
    <h2 class="text-2xl mx-32 my-7 font-thin">Couleurs</h2>
    <h3 class="text-1xl mx-32 my-7">Couleurs principales</h3>
  <div class="flex mx-32">
  <div class="w-52 h-24 mx-2 rounded-10xl bg-black "></div>
  <div class="w-52 h-24 mx-2 rounded-10xl bg-white mb-20"></div>
    </div>

     <h3 class="text-1xl mx-32 my-7">Couleurs secondaires</h3>
      <div class="flex mx-32">
    <div class="bg-illustrationrose w-52 h-24 rounded-l-lg"></div>
    <div class="bg-boutonorange w-52 h-24"></div>
    <div class="bg-boutonvert w-52 h-24 mb-20"></div>
  </div>

     <h3 class="text-1xl mx-32 my-7">Nuances de noir</h3>

  <div class="flex mx-32">
    <div class="bg-black w-52 h-24 rounded-l-lg"></div>
    <div class="bg-fond2footer w-52 h-24"></div>
    <div class="bg-fond1footer w-52 h-24"></div>
    <div class="bg-white w-52 h-24"></div>
  </div>


  <h2 class="text-2xl mx-32 my-7 font-thin ">Polices</h2>
  
  <h4 class="text-2xl font-anton mx-32 ">Heading 1</h4>
  <h4 class="text-2xl font-bebas-neue mx-32">Heading 2</h4>
  <h4 class="text-xl font-Inter mx-32">Heading 3</h4>
  <h4 class="text-1xl font-Mulish mx-32">Heading 4</h4>

  <h2 class="text-2xl mx-32 my-7 font-thin ">Icones</h2>
  
    <div class="space-x-4 mx-32 mb-20">

    <h4 class="mb-6">Réseaux sociaux</h4>
    <div class="flex space-x-4 mb-9">
        <TwitterView />
        <FacebookView />
        <InstagramView />
    </div>

    <h4 class="mb-6">Réseaux sociaux</h4>
        <div class="flex space-x-4 mb-9">
            <LocalisationView class="-mt-3"/>
            <TelephoneView />
            <EnveloppeView1 />
        </div>

    <h4 class="mb-6">Réseaux sociaux</h4>
        <div class="flex space-x-4 mb-9">
            <PlaceView class="bg-white p-1 "/>
            <PrixView  />
     </div> 
</div>
  
  <h2 class="text-2xl mx-32 font-thin mb-9">Composants</h2>
     <h4 class="mx-32 mb-9">Boutons</h4>
<div class="mx-32 mb-10 space-x-4">
    <button class="shadow bg-illustrationrose focus:shadow-outline focus:outline-none text-white font-bold py-2 px-20 rounded-9xl border-2 border-white " type="button">
        Plus de détails sur les artistes
      </button>

      <button class="shadow bg-illustrationrose focus:shadow-outline focus:outline-none text-white font-bold py-2 px-20 rounded-9xl border-2 border-white " type="button">
        Envoyez
      </button>        
                  
   <button class="shadow bg-boutonvert focus:shadow-outline focus:outline-none text-white font-bold py-2 px-20 rounded-9xl border-2 border-white " type="button">
        Rejoinez-nous !
      </button>

    <button class="shadow bg-boutonorange focus:shadow-outline focus:outline-none text-black text-1xl py-5 px-5  " type="button">
        OK 
      </button>  


 <h4 class="mx-32">Header</h4>

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

  
</div>

 <h4 class="mx-32">Activités</h4>
        <div class="space-x-4 mb-9 mx-32">
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






     
  <h2 class="text-2xl mx-32 mt-20 font-thin">Checkbox</h2>

     <div class="mb-12 mx-32 mt-10">
            <div class="form-check">
            <input class="form-check-input appearance-none mx-7 h-4 w-4 border border-black bg-white rounded-full checked:bg-illustrationrose focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label inline-block text-white" for="flexCheckDefault">
            Je rencontre des problèmes de chargement sur le site
            </label>
        </div>

        <div class="form-check">
            <input class="form-check-input appearance-none mx-7 h-4 w-4 border border-black bg-white rounded-full checked:bg-illustrationrose focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" checked>
            <label class="form-check-label inline-block text-white" for="flexCheckChecked">
            Je n’arrive pas à joindre les liens
            </label>
        </div>

        <div class="form-check">
            <input class="form-check-input appearance-none mx-7 h-4 w-4 border border-black bg-white rounded-full checked:bg-illustrationrose focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" checked>
            <label class="form-check-label inline-block text-white" for="flexCheckChecked">
            Je rencontre des bugs fréquents
            </label>
        </div>

        <div class="form-check">
            <input class="form-check-input appearance-none mx-7 h-4 w-4 border border-black bg-white rounded-full checked:bg-illustrationrose focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" checked>
            <label class="form-check-label inline-block text-white" for="flexCheckChecked">
            Utilisation du site
            </label>
        </div>

        <div class="form-check">
            <input class="form-check-input appearance-none mx-7 h-4 w-4 border border-black bg-white rounded-full checked:bg-illustrationrose focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" checked>
            <label class="form-check-label inline-block text-white" for="flexCheckChecked">
            Confidentialité
            </label>
        </div>

        <div class="form-check">
            <input class="form-check-input appearance-none mx-7 h-4 w-4 border border-black bg-white rounded-full checked:bg-illustrationrose focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" checked>
            <label class="form-check-label inline-block text-white" for="flexCheckChecked">
            Dépannage
            </label>
        </div>

        <div class="form-check">
            <input class="form-check-input appearance-none mx-7 h-4 w-4 border border-black bg-white rounded-full checked:bg-illustrationrose focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" checked>
            <label class="form-check-label inline-block text-white" for="flexCheckChecked">
            Autre
            </label>
        </div>
        </div>


  
</template>

<script>

import LocalisationView from "/src/component/LocalisationView.vue";
import TelephoneView from "/src/component/TelephoneView.vue";
import EnveloppeView1 from "../component/EnveloppeView.vue";
import PrixView from "../component/PrixView.vue";
import PlaceView from "../component/PlaceView.vue";
import TwitterView from "../component/TwitterView.vue";
import FacebookView from "../component/FacebookView.vue";
import InstagramView from "../component/InstagramView.vue";

import SkinautiqueView from "../component/SkinautiqueView.vue";
import JetskiView from "../component/JetskiView.vue";
import BarView from "../component/BarView.vue";
import VolleyView from "../component/VolleyView.vue";



export default {
  components: { LocalisationView, TelephoneView, PrixView, EnveloppeView1, SkinautiqueView, JetskiView, BarView, VolleyView, PlaceView, TwitterView, FacebookView, InstagramView,  },
};
</script>