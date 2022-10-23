<template>
  <div class="avatar p-4">
    <div class="w-24 rounded bg-primary text-white p-2 shadow-xl">
      <h1 class="text-xl md:text-5xl font-bold max-w-sm mr-auto ml-auto">{{ num }}</h1>
      <h1 class="text-sm md:text-xl font-bold pt-1">{{ txt }}</h1>
    </div>
   
  </div>

</template>



<script >
import { toRefs, toRef } from 'vue'
export default {
  props: {
    txt: String,
    num:Number
  },
  setup(props) {
    console.log(props.txt)
  }
}
</script>

<!-- 
<script>
import { ref, onMounted } from "vue";
import { format } from "date-fns";
export default {

    props:["num","txt"],

  setup(props) {
    const num = props.num;
    const txt = props.txt

    return {
      num,
      txt,
    };
  },
};
</script> -->
