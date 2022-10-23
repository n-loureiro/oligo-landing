<template>
  <h1 class="time text-4xl" v-text=""></h1>

  <div class="grid grid-cols-4 max-w-lg mr-auto ml-auto">
    <CounterDetail :num="currentTime[0][0]" :txt=currentTime[0][1] />
    <CounterDetail :num=currentTime[1][0] :txt=currentTime[1][1] />
    <CounterDetail :num=currentTime[2][0] :txt=currentTime[2][1] />
    <CounterDetail :num="currentTime[3][0]" :txt="currentTime[3][1]" />
  </div>



</template>

<script>
import { current } from "daisyui/src/colors";
import { ref, onMounted } from "vue";
import CounterDetail from "./CounterDetail.vue"


export default {
  components: { CounterDetail },
  setup() {

    const startCovid = new Date("2020/01/01")
    const numPapersTillOct = 4e5
    const timePerPaper = 2*3600

    function pad(d) {
        return (d < 10) ? '0' + d.toString() : d.toString();
    }

    const getTimeInSeconds = () => {
        let seconds = (new Date() - startCovid) / (new Date("2020/09/05") - startCovid) * numPapersTillOct * timePerPaper
        var y = Math.floor(seconds / (3600*24*365));
        var d = Math.floor(seconds % (3600*365) / (3600*24));
        var h = Math.floor(seconds % (3600*24) / 3600);
        var m = Math.floor(seconds % 3600 / 60);
        var s = Math.floor(seconds % 60);

        var yDisplay = (y == 1 ? " year" : " years ") 
        var dDisplay = (d == 1 ? " day " : " days ");
        var hDisplay = (h == 1 ? " hour " : " hours ");
        var mDisplay = (m == 1 ? " minute " : " minutes");
        var sDisplay = s > 0 ? (s == 1 ? " second" : " seconds") : ""

        return [ [y,yDisplay],[d,dDisplay],[h,hDisplay],[m,mDisplay]]
    }

    const currentTime = ref(getTimeInSeconds());

    function updateCurrentTime () {
      
        currentTime.value = getTimeInSeconds();
      };
    
    

    onMounted(() => {
        setInterval(updateCurrentTime, 1000);
    });

    return {
      currentTime,
    };
  },
};
</script>
