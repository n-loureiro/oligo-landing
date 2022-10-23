<template>
  <div class="navbar sticky top-0 z-10 bg-oligo rounded-sm">
      <div class="flex-1 md:pl-20 pl-5">
        <img src="../assets/logo.png" class="h-10 w-10" />
        <a class="btn btn-ghost text-primary normal-case text-2xl">Oligo</a>
      </div>
      <div class="flex-none md:pr-20 pr-5">
        <ul class="menu menu-horizontal p-0">
          <!-- <li><a>Item 1</a></li>
        <li tabindex="0">
          <a>
            Parent
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              />
            </svg>
          </a>
          <ul class="p-2 bg-base-100">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li> -->
          <li class="md:px-4 px-0">
            <button class="btn bg-base-100 text-blue-800 btn-md">Login</button>
            </li>
            <li v-if="!isMobile()">
          <button class="btn btn-primary">Join the wainting list</button>
        </li>
        </ul>
      </div>
    </div>
  
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


<style scoped>
.bg-oligo {
  background-color: #2e4e73;
}
</style>
