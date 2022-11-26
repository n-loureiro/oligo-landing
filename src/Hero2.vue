<template>
    <div class="hero min-h-screen bg-base-100 md:bg-[url('./assets/hero.png')] bg-[url('./assets/hero_phone.png')] bg-cover bg-left">
        <div class="grid md:grid-cols-2 min-w-full grid-cols-1">      
        <div class="text-center text-white md:text-neutral">
          <h1 class="text-5xl font-bold pb-10 max-w-sm mr-auto ml-auto">Welcome to Science 2.0</h1>
          <h1 class="text-xl font-bold pt-3">Discover and digest new published papers in seconds</h1>
          <p class= "text-xl py-10 max-w-md text-center ml-auto mr-auto">
            Join our global village of doctors and scientists changing how science is done
          </p>
          <button class="btn btn-primary"  onclick="window.location.href='mailto:hello@oligoapp.org';">Get on the waiting list  <ArrowRightIcon class="h-4 w-6 inline" /></button>
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