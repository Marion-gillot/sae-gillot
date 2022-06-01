<template>
    <main>

        <div class="bg-[url('/img/hero-programmation.jpg')] w-screen h-screen bg-cover bg-no-repeat mt-20 grid place-content-cente">
            <p class=" text-2xl text-center p-80 ">Nos prochains concerts...</p> 
        </div>

        <div class="bg-[url('/img/deco-rose.png')] w-screen h-screen bg-contain bg-no-repeat mt-20">
            <p class=" text-2xl text-right p-80 ">Suivez et réservez les concerts de Sunset </p>
        </div>

        <h2 class="mx-24 text-2xl font-bold mb-20">Prochainement</h2>

    <div class="grid grid-cols-3">
        <CardView nom="Hatik" date="30/05/2022" prix="26€/personne" titre="noyé-tour" />
        <CardView nom="Hatik" date="30/05/2022" prix="26€/personne" titre="noyé-tour" />

    </div>


    </main>
</template>

<script>
import LocalisationView from "/src/component/LocalisationView.vue";
import TelephoneView from "/src/component/TelephoneView.vue";
import EnveloppeView1 from "../component/EnveloppeView.vue";
import CardViewVue from "../component/CardView.vue";

export default {
  components: { LocalisationView, TelephoneView, EnveloppeView1, CardView },
};
</script>