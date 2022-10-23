<template>
    <div class="hero md:py-20 bg-base-100 py-5">
      <div class="hero-content flex-col lg:flex-row">
        <img
          src="./assets/discuss.png"
          class="md:max-w-lg rounded-lg shadow-2xl max-w-xs"
        />
        <div class="md:pl-10 pl-0">
          <h1 class="text-5xl font-bold">Discuss</h1>
          <h1 class="text-2xl font-bold py-4">Reddit for researchers</h1>
          <div class="ml-auto mr-auto max-w-md md:py-10 py-5">
            <div>
              <CheckBadgeIcon class="h-6 w-6 text-primary inline" /> 
              Why wait for that annual conference? Discuss the latest advances with your peers now
            </div>
            <div>
              <CheckBadgeIcon class="h-6 w-6 text-primary inline" />
              Instantly share content with your labmate, department or community.

            </div>
            <div>
              <CheckBadgeIcon class="h-6 w-6 text-primary inline" />
              Access online journal clubs, workshops and seminars in your field.
            </div>
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
  