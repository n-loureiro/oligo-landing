<template>

<footer class="footer items-center p-4 bg-neutral text-neutral-content">
    <div class="items-center grid-flow-col md:mr-10 md:ml-10 mr-auto ml-auto">
      <a href="#" class="btn btn-ghost text-primary normal-case text-2xl"> <img src="../assets/logo.png" class="h-12 w-12" /> </a>
      <p >Copyright © 2022 - All rights reserved</p>
    </div> 
    <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end mr-auto ml-auto md:mr-10 md:ml-10 ">
      <a class="pr-4" href="https://www.linkedin.com/company/oligoapp"> <img class="h-10 w-10 rounded-md" src="../assets/linkedin.png" /></a> 
      <a href="https://www.startuplisboa.com/portfolio-startups/oligo">  <img class="h-12 rounded-md" src="../assets/sulx.png" /></a> 
    </div>

</footer>

</template>

<script setup>

function isMobile() {
   if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
     return true
   } else {
     return false
   }
 };




</script>