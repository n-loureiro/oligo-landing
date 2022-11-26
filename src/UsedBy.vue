<template>
    <div class="hero py-20 bg-base-100">
      <div class="text-center ">
        <h1 class="md:text-3xl font-bold text-lg md:max-w-3xl pb-10 text-3xl mx-auto">
            As used by scientists and doctors @        </h1>
        <img
        src="./assets/usedby2.png"
        class="md:max-w-5xl rounded-lg shadow-md max-w-sm"
      />
      <div class="pt-10">
      <button class="btn btn-primary font-bold"  onclick="window.location.href='mailto:hello@oligoapp.org';">Get on the waiting list <ArrowRightIcon class="h-4 w-6 inline" /></button>
    </div>
      </div>
    </div>
  </template>

  <script>
  import { ArrowRightIcon } from "@heroicons/vue/24/solid";
 
  export default {
    components: { ArrowRightIcon },
  };
  </script>>
  