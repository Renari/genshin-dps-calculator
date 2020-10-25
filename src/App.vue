<template>
  <div class="row">
    <div class="column">
      <weapon-calculator />
    </div>
    <div class="column"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import WeaponCalculator from "./components/WeaponCalculator.vue";

@Options({
  components: {
    WeaponCalculator,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.row {
  display: flex;
}
.column {
  flex: 50%;
}
</style>
