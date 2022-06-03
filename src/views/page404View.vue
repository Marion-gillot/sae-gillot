<template>
      <div class="mx-36 mt-20">
        <div class="font-dark text-5xl font-bold">404</div>
        <p class="text-2xl font-light leading-normal md:text-3xl">Désolé, cette page n'existe pas.</p>
        <p class="mb-8">Retournez à la page d'accueil !</p>
        <RouterLink to="/">
            <button
          class="
            focus:shadow-outline-blue
            inline
            rounded-lg
            border border-transparent
            bg-illustrationrose
            px-4
            py-2
            text-sm
            font-medium
            leading-5
            text-white
            shadow
            transition-colors
            duration-150
            mb-10
          ">
          retour à l'accueil
        </button>

    <form action="https://duckduckgo.com/" method="GET" 
    x-data="{ q:'', }" 
    x-on:submit="q = q + ' site:mmimontbeliard.com'" class="mb-20 space-x-4">
    <label for="q">Veillez parcourir :</label>
    <input type="text" id="q" name="q" x-model="q" class="px-20 py-3 rounded-3xl">
    <button type="submit" class="shadow bg-gradient-to-r from-degrade-1 via-degrade-2 to-degrade-3 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-20 rounded-9xl border-2 border-white mt-24 ">Rechercher</button>
</form>
        </RouterLink>
      </div>
</template>
