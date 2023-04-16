<template>
  <!-- <p v-font-size:micro>micro</p>
     <p v-font-size:small>small</p>
     <p v-font-size:medium>medium</p>
     <p v-font-size:large>medium</p> -->
  <Weather />
</template>
<script >
import Weather from "./components/Weather.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "",
  components: {
    Weather,
  },
});
</script>
<style scoped>
p {
  color: azure;
}
</style>