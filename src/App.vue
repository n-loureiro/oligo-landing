<template>
    <Navbar />

    <div class="flex flex-col h-screen justify-between">
      <Hero2 />
      <Covid />
      <StayuptoDate />
      <UnderOneRoof />
      <Discover />
      <Discuss />
      <Andmore />
      <UsedBy />

    <Footer></Footer>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
import Hero2 from "./Hero2.vue";
import Covid from "./Covid.vue";
import Discover from "./Discover.vue";
import Discuss from "./Discuss.vue";
import Andmore from "./Andmore.vue";
import StayuptoDate from "./StayuptoDate.vue";
import UnderOneRoof from "./UnderOneRoof.vue";
import UsedBy from "./UsedBy.vue";
export default defineComponent({
  setup() {},
  components: { Footer, Navbar, Hero2, Covid, Discover, Discuss, Andmore, StayuptoDate, UnderOneRoof, UsedBy },
});
</script>

<style></style>
