<template>
  <div class="hero bg-base-100 md:py-20 py-5">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <img
        src="./assets/keywords.gif"
        class="rounded-lg shadow-2xl max-w-xs md:max-w-3xl"
      />
      <div class="md:pr-10 pr-0">
        <h1 class="text-5xl font-bold">Discover</h1>
        <h1 class="text-2xl font-bold py-4">Surf, don't drown</h1>
        <div class="ml-auto mr-auto max-w-md md:py-10 py-5">
          <div>
            <CheckBadgeIcon class="h-6 w-6 text-primary inline" /> Filter the
            flood of new papers with a little help from AI
          </div>
          <div>
            <CheckBadgeIcon class="h-6 w-6 text-primary inline" />
            Goodbye automated e-mails: get in-app Keyword, Author and Journal
            alerts.
          </div>
          <div>
            <CheckBadgeIcon class="h-6 w-6 text-primary inline" />
            Never miss key papers again: Oligo trawls the literature from arXiv,
            bioRxiv, medRxiv and PubMed so you don't have to.
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
