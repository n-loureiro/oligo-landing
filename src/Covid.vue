<template>
  <div class="hero py-20 bg-base-100">
    <div class="text-center ">
      <h1 class="md:text-3xl font-bold  max-w-3xl pb-10 text-3xl">
        Do you know how long it would take a single doctor to read every
        COVID-19 paper published so far?
      </h1>

      <Counter />
      <!-- <div class="text-left px-5 md:text-center">
      <h3 class="text-xl font-bold py-5 md:py-10">
        Whatever your field, staying up to date has become impossible.
      </h3>

      <h4 class="text-xl font-bold">
        Oligo’s AI- and community-driven solution is making the impossible
        possible.
      </h4>

      <div class="ml-auto mr-auto max-w-sm md:py-10 py-5">
        <div class="pb-4">
          <CheckBadgeIcon class="h-6 w-6 text-primary inline" /> Get the latest key
          findings filtered through personalised ML algorithms.
        </div>
        <div>
          <CheckBadgeIcon class="h-6 w-6 text-primary inline" /> 
          Immediately discuss
          and digest those findings with your peers.
        </div>
      </div>
      <h4 class="text-xl font-bold">
        All under one roof
      </h4>    </div> -->
    </div>
  </div>
</template>

<script>
import { CheckBadgeIcon } from "@heroicons/vue/24/solid";
import Counter from "./Counter.vue";
import CounterDetail from "./CounterDetail.vue"


export default {
  components: { CheckBadgeIcon, Counter, CounterDetail },
};
</script>
