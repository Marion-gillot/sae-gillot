<template>
    <main>

    <h1 class="mx-24 mt-20 text-2xl font-bold pt-9">Contact</h1>
        
    <p class="font-bold mt-20 mx-24 mb-11 ">Pour toutes questions, ou si vous rencontrez des problèmes, merci de bien remplir ce formulaire :</p>

<form class="w-full max-w-5xl mx-56 mb-14">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-96 px-3">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
        Nom
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text">
      <p class="text-white text-xs italic">Veillez completer ce champ</p>
    </div>

  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-96 px-3">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
        E-mail
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email">
      <p class="text-white text-xs italic">Veillez completer ce champ</p>
    </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-96 px-3">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
        Objet
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email">
      <p class="text-white text-xs italic">Veillez completer ce champ</p>
    </div>
  </div>

    <p class="font-bold mt-20 mb-11">Motif du message : </p>

        <div class="mb-12">
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


  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
        Votre message
      </label>
      <textarea class=" no-resize appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-96 resize-none" id="message"></textarea>
    </div>
  </div>
    <div class="flex flex-col justify-center items-center">
      <button class="shadow bg-illustrationrose focus:shadow-outline focus:outline-none text-white font-bold py-2 px-20 rounded-9xl border-2 border-white " type="button">
        Envoyez
      </button>
    </div>
</form>

<h2 class="text-illustrationrose text-center text-3xl">Service client </h2>

<div class="mx-72 mt-20 grid grid-cols-2 ">
    <div class="bg-white h-52 w-96 rounded-8xl">
        <p class="text-black text-center pt-12">Appelez nous</p>
        <div class="flex">
            <TelephoneView class="mx-5 mt-5"/>
            <p class="text-black text-center pt-12">00 00 00 00 00</p>
        </div>
    </div>

    <div class="bg-white h-52 w-96 rounded-8xl">
            <p class="text-black text-center pt-12">Écrivez nous</p>
             <div class="flex">
                <EnveloppeView1 class="mx-5 mt-5" />
                <p class="text-black text-center pt-12">sunset@gmail.com</p>
            </div>
        </div>

</div>
</main>
</template>

<script>
import LocalisationView from "/src/component/LocalisationView.vue";
import TelephoneView from "/src/component/TelephoneView.vue";
import EnveloppeView1 from "../component/EnveloppeView.vue";

export default {
  components: { LocalisationView, TelephoneView, EnveloppeView1 },
};
</script>