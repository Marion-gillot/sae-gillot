<template>
    
<div class="relative mx-auto mb-20 flex flex-col rounded-10xl bg-white">

   
<div class="flex"> 
    <div class="flex relative top-0 left-0 right-0 bottom-0 h-48 items-center justify-center overflow-hidden rounded-t-2xl">
    <img class="h-full max-w-screen-2xl" :src="image" alt="artiste"/></div>
<div> 


    <div class="flex w-full flex-col gap-4 px-8 ">
    <div class="flex justify-between">
        <div class="w-3/5">
          <div class="flex items-center justify-between pt-6">
            <p class="text-1xl font-bold text-illustrationrose">{{nom}}</p>
          </div>
          <p class="text-1lg text-black">{{date}}</p>
        </div>
      </div>
      <p class="text-base text-black">
        {{prix}}
      </p>
          <p class="text-base text-gray-500 text-1xl">
        {{titre}}
      </p>
      
    </div>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    nom: String,
    date: String,
    prix: String,
    titre: String,
    image: String,
  },
  components: {},
};
</script>