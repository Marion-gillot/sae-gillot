<template>
   <h1 class="mx-24 mt-20 sm:text-1xl md:text-2xl lg:text-3xl font-bold pt-9">À propos de Sunset</h1>

   <h2 class="mx-24 mt-20 text-1xl font-bold pt-9">Notre mission</h2>
   <p class="mx-24 mt-10">Nous avons comme mission la musique une source de bien être pour tous, et accessible à tous. Nous nous engageons à aider les plus jeunes à pouvoir participer à nos festivals, afin d’apporter une source d’évasion à travers les musiques de nos artistes les plus talentueux. </p>

    <h2 class="mx-24 mt-20 text-1xl font-bold pt-5">Où nous trouver ?</h2>



    <div class="grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-x-4">
        <div class="flex">
            <LocalisationView class="mx-24 mt-10"/>
            <p class="mt-14 w-48">Boulevard Promenade Veyrier Montagnères 33120 Arcachon</p>
            <img src="/img/map.jpg" class="rounded-10xl h-80" alt="carte du lieu du festival">
        </div>
    </div>


 <h2 class="mx-24 mt-20 text-1xl font-bold pt-5">Notre équipe</h2>

 <div class="mx-72 mt-12 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-x-36 justify-items-center">  
      <div class="place-content-center mt-10">
         <img src="/img/bulle-1.png" alt="travailleur 3">
         <p class="text-center mt-6 font-bold">Lilian Girard</p>
         <p class="text-center">Comptable</p>
     </div>

      <div class="place-content-center mt-10">
         <img src="/img/bulle-2.png" alt="travailleur 3">
         <p class="text-center mt-6 font-bold">Lola Porte</p>
         <p class="text-center">Préparatrice événementiel</p>
     </div>

      <div class="place-content-center mt-10">
         <img src="/img/bulle-3.png" alt="travailleur 3">
         <p class="text-center mt-6 font-bold">Lilian Girard</p>
         <p class="text-center">Comptable</p>
     </div>

      <div class="place-content-center mt-10">
         <img src="/img/bulle-4.png" alt="travailleur 3">
         <p class="text-center mt-6 font-bold">Hugot Flory</p>
         <p class="text-center">Gestion des partenariats</p>
     </div>

      <div class="place-content-center mt-10">
         <img src="/img/bulle-5.png" alt="travailleur 3">
         <p class="text-center mt-6 font-bold">Christian Let</p>
         <p class="text-center">Costumier</p>
     </div>

      <div class="place-content-center mt-10">
         <img src="/img/bulle-6.png" alt="travailleur 3">
         <p class="text-center mt-6 font-bold">Lucie Safir</p>
         <p class="text-center">Chargé de communication sur les réseaux sociaux</p>
     </div>
</div>


    <div class="bg-[url('/img/img-a-propos.jpg')] bg-cover w-screen h-screen bg-no-repeat mt-20 grid place-content-center ">
        <h2 class="z-10 sm:text-xl md:text-2xl lg:text-3xl text-center">Une innovation écologique et économique</h2>
    </div>

    <h2 class="mx-24 mt-20 text-1xl font-bold pt-5">Nous sommes responsable de toute forme de dégradation environnemental ou bien public</h2>
    <p class="mx-24 mt-10 w-7/12">C’est pour cela que nous encourageons vivement les particpants du festival à prendre soin des lieux. Au delà de ça, nos bénévolats participent au nettoyage de la plage ainsi qu’au ramassage de déchets pouvant se retrouver dans la mer. La protection de l’environnement </p>

 <h2 class="mx-24 mt-10 text-1xl font-bold pt-5 w-8/12">Pour permettre l’accès à tous, nous proposons des réductions sur certaines activités, ainsi que les billets d’entrée</h2>

 <ul class="mx-28 mt-10 w-7/12">
    <li>- Si vous êtes étudiant(e), vous pouvez bénéficier d’une réduction sur vos billets d’entrée, à condition de présenter votre statut étudiant(e). </li>
    <li>- Des activités sur la plage sont disponible pour vous avec des prix moins élevés qu’en dehors du Festival Sunset. En outre, les tarifs sont fexibles selon votre âge.</li>
 </ul>


 


</template>

<script>
    import LocalisationView from "/src/component/LocalisationView.vue";
    export default {
    components: { LocalisationView },
    };
</script>