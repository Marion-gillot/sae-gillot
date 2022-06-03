<template>
    <header class="bg-fondsite h-3 mb-10">
  <nav class="flex">
  <div>
     <RouterLink to="/"><img src="/img/logosunset.png" class="w-12 h-12 mx-7 my-5" /></RouterLink>
  </div>
  
  <div class="flex mt-8 space-x-8 font-light text-white mx-14">
    <RouterLink to="/concert">Concert</RouterLink>
    <RouterLink to="/programmation">Programmation</RouterLink>
    <RouterLink to="/artistes">Artistes</RouterLink>
    <RouterLink to="/apropos">Festival</RouterLink>
    <RouterLink to="/contact" class="text-illustrationrose font-bold">Contact</RouterLink>
    </div>

     <div class="space-x-6 mx-96 mt-8">
    <RouterLink to="/listeartistes">ListeArtistes</RouterLink>
    <RouterLink to="/listeconcerts">ListeConcerts</RouterLink>
    <RouterLink to="/participants">ListeEquipe</RouterLink>
    </div>

  </nav>
  </header>
</template>