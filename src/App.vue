<template>
  <header class="flex bg-fondsite">
  <nav class="flex">
  <div>
    <a href="accueil"><img src="public/img/logosunset.png" class="w-12 h-12 mx-7 my-5" /></a>
  </div>


  <div class="flex mt-7 space-x-8 mx-96 font-roboto text-white">
    <h3 class="block"><a href="accueil">Concert</a></h3>
    <h3 class="block"><a href="apropos">Programmation</a></h3>
    <h3 class="block"><a href="contact">Artistes</a></h3>
    <h3 class="block"><a href="nosartistes">Festival</a></h3>
    <h3 class="block"><a href="noscoloriages">Contact</a></h3>
    </div>
  </nav>
  </header>

  <RouterView />
    <footer class=" h-64 bg-fondsite text-white">
      <div class="bg-gris-footer h-56">
        <nav class="flex">
      
      <ul class="mx-12 mt-9">
            <li class="w-56">Festival d'Arcachon
              Adresse de la Plage centrale : Boulevard Promenade Veyrier Montagnères 33120 Arcachon
              00 00 00 00 00</li>
        </ul>

      <ul class="mx-12 mt-9">
            <li>Site</li>
            <li>Concert</li>
            <li>Artistes</li>
            <li>Festival</li>
            <li>Nos programmes</li>
        </ul>

        <ul class="mx-12 mt-9">
            <li>Contact</li>
            <li>Nous contacter</li>
            <li>Portection de la vie privée</li>
        </ul>

        </nav>

        <div class="flex w-20 float-right -mt-32">
            <img src="./public/images/visa.jpg">
            <img src="./public/images/cb.jpg">
        </div>

        <div class="flex w-20 float-right -mt-11">
            <img src="./public/images/paypal-logo.jpg">
            <img src="./public/images/mastercard-logo.jpg">
        </div>

        <ul class="flex mt-7 w-20 float-right">
            <li><a href="https://www.facebook.com/profile.php?id=100009306961064" aria-label="Facebook">
              <img src="/public/icon/faceboo/ng" alt="icone facebook"></a></li>
            <li><a href="https://www.linkedin.com/in/marion-gillot-8133a7224/" aria-label="Instagram">
              <img src="./public/icon/instagram.png" alt="icone instagram"></a></li>
            <li><a href="https://twitter.com/1820Tc" aria-label="Twitter">
              <img src="./public/icon/twitter.png" alt="icone twitter"></a></li>
            <li><a href="https://www.linkedin.com/in/marion-gillot-8133a7224/" aria-label="Likedin">
              <img src="./public/icon/mmi.svg" alt="icone mmi"></a></li>
        </ul>

      </div>

  <div class="bg-gris-fonce-footer h-11">
      <nav class="flex">
          <div class="flex mt-3 space-x-8 mx-6 font-roboto">
            <h3 class="block"><a href="mentionslegales">Mentions légales</a></h3>
            <h3 class="block">Cookies</h3>
            <h3 class="block">Politique de protection des données personnelles </h3>
            <h3 class="block">Plan du site</h3>
            <h3 class="block">© Kid’sArt FRANCE 2022 Crée par Marion Gillot et Morgane Chamberlin</h3>
          </div>
      </nav>
  </div>
</footer>

</template>

<script>

export default {
  components: { },
};
</script>