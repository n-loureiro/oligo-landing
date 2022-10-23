<template>
  <div>
    <Navbar/>
    <div class="pt-5">
      <InputText v-model="text" />
      <Button label="Greet" icon="pi pi-user" @click="greet"></Button>
    </div>
    <Toast /> {{ text }}
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useToast } from "primevue/usetoast";
import Navbar from "./components/Navbar.vue";

export default defineComponent({
    setup() {
        const text = ref("Prime");
        const greet = () => {
            toast.add({ severity: "info", summary: "Success Message", detail: text });
        };
        const toast = useToast();
        toast.add({
            severity: "info",
            summary: "Info Message",
            detail: "Message Content",
            life: 3000,
        });
        const items = ref([
            {
                label: "Quit",
                icon: "pi pi-fw pi-power-off"
            }
        ]);
        return {
            text,
            greet,
            items,
        };
    },
    components: { Navbar }
});
</script>

<style>
#app {
  font-family: Avenir, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
