<template>
    <div class="hero min-h-screen bg-base-100 " style="background-image: url(./src/assets/hero.png)">
        <div class="grid md:grid-cols-2 min-w-full grid-cols-1">      
        <div class="text-center text-white md:text-neutral">
          <h1 class="text-5xl font-bold pb-10 max-w-sm mr-auto ml-auto">Welcome to Science 2.0</h1>
          <h1 class="text-xl font-bold pt-3">Discover and digest new published papers in seconds.</h1>
          <p class= "text-xl py-10 max-w-lg text-center ml-auto mr-auto">
            Join our growing global village of doctors and scientists to change
            not just how research is communicated, but how it's done.
          </p>
          <button class="btn btn-primary">Join the wainting list <ArrowRightIcon class="h-4 w-6 inline" /></button>
        </div>
        <div class="min-w-sm"></div>
        </div>
        <!-- <img class=" shadow-lg max-w-lg rounded-3xl" src="./assets/hero.png" /> -->
        
      </div>
  
  </template>
  
  
  <script>
  import { ArrowRightIcon } from "@heroicons/vue/24/solid";
  import Counter from "./Counter.vue";
  
  export default {
    components: { ArrowRightIcon, Counter },
  };
  </script>