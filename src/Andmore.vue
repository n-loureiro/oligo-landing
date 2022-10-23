<template>
  <div class="hero md:py-20 bg-base-100 py-5">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <img
        src="./assets/andmore.png"
        class="md:max-w-lg rounded-lg shadow-2xl max-w-xs"
      />
      <div class="md:pr-10 pr-0">
        <h1 class="text-5xl font-bold">And more...</h1>
        <h1 class="text-2xl font-bold py-4">Bringing science into the digital age</h1>
        <div class="ml-auto mr-auto max-w-md md:py-10 py-5">
          <div>
            <CheckBadgeIcon class="h-6 w-6 text-primary inline" /> 
            Publication analysis: catch emerging research trends before anyone else.
          </div>
          <div>
            <CheckBadgeIcon class="h-6 w-6 text-primary inline" />
            AI-driven article summarisation and hypothesis generation.
          </div>
          <!-- <div>
            <CheckBadgeIcon class="h-6 w-6 text-primary inline" />
            Never miss key papers again: Oligo trawls the literature from arXiv,
            bioRxiv, medRxiv and PubMed so you don't have to.
          </div> -->
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
