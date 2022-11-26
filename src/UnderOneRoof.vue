<template>
    <div class="hero md:py-20 bg-base-100 py-5">
      <div class="hero-content flex-col lg:flex-row">
        <img
          src="./assets/keywords.gif"
          class="md:max-w-xl rounded-lg shadow-2xl max-w-xs"
        />
        <div class="md:pl-10 pl-0 ">
          <h1 class="text-3xl font-bold">Oligo’s solution is AI- and community-driven</h1>
          <div class="ml-auto mr-auto px-0 md:py-10 py-5">
            <div class="pb-5">
              <CheckBadgeIcon class="h-6 w-6 text-primary inline" />
              Get the latest key findings filtered through personalised ML algorithms
            </div>
            <div class="pt-5">
              <CheckBadgeIcon class="h-6 w-6 text-primary inline" />
              Immediately discuss and digest those findings with your peers            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { CheckBadgeIcon } from "@heroicons/vue/24/solid";
  import Counter from "./Counter.vue";
  
  export default {
    components: { CheckBadgeIcon, Counter },
  };
  </script>
  