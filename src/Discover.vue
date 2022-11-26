<template>
  <div class="hero bg-base-100 md:py-20 py-5">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <img
        src="./assets/discover.png"
        class="rounded-lg shadow-2xl max-w-xs md:max-w-md"
      />
      <div class="md:pr-10 pr-0">
        <h1 class="text-3xl font-bold">Discover</h1>
        <h1 class=" font-bold py-4">Surf, don't drown</h1>
        <div class="ml-auto mr-auto max-w-lg md:py-10 py-5">
          <div class="pb-5">
            <CheckBadgeIcon class="h-6 w-6 text-primary inline" />
            Smart suggestions for papers, jobs and grants so you never miss important information again
          </div>
          <div class="pt-5">
            <CheckBadgeIcon class="h-6 w-6 text-primary inline" />
            Oligo checks arXiv, bioRxiv, medRxiv and >40,000 journals every day so you don't have to
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
