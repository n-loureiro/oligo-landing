<template>
    <div class="hero md:py-20 bg-base-100 py-5">
      <div class="hero-content flex-col lg:flex-row">
        <img
          src="./assets/discuss.png"
          class="md:max-w-md rounded-lg shadow-2xl max-w-xs"
        />
        <div class="md:pl-10 pl-0">
          <h1 class="text-3xl font-bold">Discuss</h1>
          <h1 class=" font-bold py-4">Reddit for researchers</h1>
          <div class="ml-auto mr-auto max-w-lg md:py-10 py-5">
            <div class="pb-5">
              <CheckBadgeIcon class="h-6 w-6 text-primary inline" /> 
              Why wait for that annual conference? Discuss the latest advances with your peers now            </div>
            <div class="pt-5">
              <CheckBadgeIcon class="h-6 w-6 text-primary inline" />
              Instantly share new content with your community, from unpublished data to videos and podcasts            </div>
           
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
  