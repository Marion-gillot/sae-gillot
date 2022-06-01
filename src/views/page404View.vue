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
            bg-blue-600
            px-4
            py-2
            text-sm
            font-medium
            leading-5
            text-white
            shadow
            transition-colors
            duration-150
            hover:bg-blue-700
            focus:outline-none
            active:bg-blue-600
          ">
          retour à l'accueil
        </button>
        </RouterLink>
      </div>
</template>
