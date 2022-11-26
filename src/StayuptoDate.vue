<template>
  <div class="hero bg-base-100 md:py-20 py-5">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <img
        src="./assets/covid.png"
        class="rounded-lg shadow-2xl max-w-xs md:max-w-md"
      />
      <div class="md:pr-10 pr-0 text-center md:max-w-lg">
        <h1 class="text-3xl font-bold">Staying up to date has become impossible, whatever your field</h1>
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
