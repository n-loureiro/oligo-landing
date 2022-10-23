<template>
  <div class="hero min-h-screen bg-base-100 ">
    <div class="hero-content flex-col lg:flex-row-reverse ">
      <img class=" shadow-2xl max-w-lg rounded-3xl" src="./assets/hero.png" />
      <div class="text-center ">
        <h1 class="text-5xl font-bold pb-10 max-w-sm mr-auto ml-auto">Welcome to Science 2.0</h1>
        <h1 class="text-xl font-bold pt-3">Discover and digest new published papers in seconds.</h1>
        <p class="py-10 max-w-lg">
          Join our growing global village of doctors and scientists to change
          not just how research is communicated, but how it's done.
        </p>
        <button class="btn btn-primary">Join the wainting list <ArrowRightIcon class="h-4 w-6 inline" /></button>
      </div>
    </div>
  </div>
</template>


<script>
import { ArrowRightIcon } from "@heroicons/vue/24/solid";
import Counter from "./Counter.vue";

export default {
  components: { ArrowRightIcon, Counter },
};
</script>