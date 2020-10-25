<template>
  <div class="row" v-for="(value, index) in values" :key="index">
    <div class="left column">{{ prompt }} {{ index + 1 }}:</div>
    <div class="right column">
      <input
        @change="updateList($event.target.value, index)"
        type="number"
        min="0"
        :step="step ? step : 1"
        :value="value"
      />
      <span v-if="index == Object.keys(values).length - 1"
        ><button @click="addElement">+</button></span
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: ["prompt", "values", "step"],
  emits: ["list-updated"],
})
export default class ExpandableValueBlock extends Vue {
  prompt!: string;
  values!: Array<number>;
  step!: number;
  updateList(value: string, index: number) {
    this.values[index] = parseFloat(value) ? parseFloat(value) : 0;
    this.$emit("list-updated");
  }
  addElement() {
    this.values.push(0);
  }
  /**
   * modifier: A factor to reduce the input values by.
   * For example 97 will become 0.97 with a modifier of 100.
   */
  getValue(modifier = 1) {
    return this.values.reduce((a, b) => a + b / modifier, 0);
  }
}
</script>

<style scoped>
.row {
  display: flex;
}
.column {
  display: flex;
  align-items: center;
  flex: 50%;
  padding: 5px;
}
.left {
  justify-content: flex-end;
  margin-top: auto;
}
.right {
  justify-content: flex-start;
}
.addButton {
  display: flex;
  padding: 0 25%;
  justify-content: flex-end;
}
</style>
