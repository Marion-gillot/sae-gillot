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
        <CardView nom="PNL" date="20/04/2022" prix="75€/personne" titre="Deux frères" image="/img/pnl-card.png" />
        <CardView nom="Hatik" date="30/05/2022" prix="26€/personne" titre="Noyé-tour" image="/img/hatik-card.jpg" />
        <CardView nom="Ninho" date="30/05/2022" prix="26€/personne" titre="Jefe tout" image="/img/ninho-card.jpg" />
        <CardView nom="Ziak" date="25/05/2022" prix="26€/personne" titre="DR" image="/img/ziak-card.jpg" />
        <CardView nom="Jock'air" date="21/05/2022" prix="28€/personne" titre="Jock'travolta" image="/img/jockair-card.jpg" />
        <CardView nom="Vald" date="04/06/2022" prix="40.10€/personne" titre="DR" image="/img/vald-card.jpg" />
        <CardView nom="Tayc" date="17/06/2022" prix="42€/personne" titre="Cristal Destiny" image="/img/tayc-card.jpg" /> 
        <CardView nom="RK" date="25/06/2022" prix="25€/personne" titre="Neverland" image="/img/rk-card.jpg" />  
        <CardView nom="Maes" date="28/06/2022" prix="52€/personne" titre="Les derniers salopards" image="/img/maes-card.jpg" /> 
        <CardView nom="Klem" date="17/07/2022" prix="32€/personne" titre="Visions" image="/img/klem-card.jpg" /> 
        <CardView nom="Gazo" date="20/04/2022" prix="32€/personne" titre="Drill FR" image="/img/gazo-card.jpg" />   
        <CardView nom="Jul" date="20/04/2022" prix="42€/personne" titre="La zone en personne" image="/img/jul-card.jpg" />   

</div>


    </main>
</template>

<script>
import LocalisationView from "/src/component/LocalisationView.vue";
import TelephoneView from "/src/component/TelephoneView.vue";
import EnveloppeView1 from "../component/EnveloppeView.vue";
import CardView from "../component/CardView.vue";

export default {
  components: { LocalisationView, TelephoneView, EnveloppeView1, CardView },
};
</script>