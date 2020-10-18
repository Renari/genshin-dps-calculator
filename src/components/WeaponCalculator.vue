<template>
  <div class="row">
    <div class="left column">
      Character Base Attack:
    </div>
    <div class="right column">
      <input
        @change="updateCalculations"
        type="number"
        min="0"
        step="1"
        v-model.number="characterAttack"
      />
    </div>
  </div>
  <div class="row">
    <div class="left column">
      Weapon Base Attack:
    </div>
    <div class="right column">
      <input
        @change="updateCalculations"
        type="number"
        min="0"
        step="1"
        v-model.number="weaponAttack"
      />
    </div>
  </div>
  <div class="row">
    <div class="left column">
      Elemental Mastery Bonus Percent:
    </div>
    <div class="right column">
      <input
        @change="updateCalculations"
        type="number"
        min="0"
        step=".1"
        v-model.number="elementalMasteryBonusPercent"
      />
    </div>
  </div>
  <expandable-value-block
    ref="attackPercentModifiersElement"
    @list-updated="updateCalculations"
    prompt="Attack Percent"
    :values="this.attackPercentModifiers"
    step=".1"
  />
  <expandable-value-block
    @list-updated="updateCalculations"
    prompt="Flat Attack"
    :values="this.flatAttackModifiers"
  />
  <div class="row">
    <div class="left column">
      Critical Rate Percent:
    </div>
    <div class="right column">
      <input
        @change="updateAttack"
        type="number"
        min="0"
        step=".1"
        v-model.number="criticalRatePercent"
      />
    </div>
  </div>
  <div class="row">
    <div class="left column">
      Critical Damage Percent:
    </div>
    <div class="right column">
      <input
        @change="updateCalculations"
        type="number"
        min="0"
        step=".1"
        v-model="criticalDamagePercent"
      />
    </div>
  </div>
  <div class="row">
    <div class="left column">
      Physical Damage Percent:
    </div>
    <div class="right column">
      <input
        @change="updateCalculations"
        type="number"
        min="0"
        step=".1"
        v-model.number="physicalDamagePercent"
      />
    </div>
  </div>
  <div class="row">
    <div class="left column">
      Character Attack:
    </div>
    <div class="right column">
      {{ Math.round(attack) }}
    </div>
  </div>
  <div class="row">
    <div class="left column">
      Physical Damage:
    </div>
    <div class="right column">
      {{ Math.round(physicalDamage) }}
    </div>
  </div>
  <div class="row">
    <div class="left column">
      Elemental Damage:
    </div>
    <div class="right column">
      {{ Math.round(elementalDamage) }}
    </div>
  </div>
  <div class="row">
    <div class="left column">
      Elemental Reaction Damage:
    </div>
    <div class="right column">
      {{ Math.round(reactionDamage) }}
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ExpandableValueBlock from "./ExpandableValueBlock.vue";

@Options({
  components: {
    ExpandableValueBlock
  }
})
export default class WeaponCalculator extends Vue {
  characterAttack = 0;
  weaponAttack = 0;
  elementalMasteryBonusPercent = 0;
  criticalRatePercent = 0;
  criticalDamagePercent = 0;
  physicalDamagePercent = 0;
  elementalDamagePercent = 0;
  attackPercentModifiers: Array<number> = [0];
  flatAttackModifiers: Array<number> = [0];
  attack = 0;
  physicalDamage = 0;
  elementalDamage = 0;
  reactionDamage = 0;
  updateCalculations() {
    const percentModifier = this.attackPercentModifiers.reduce(
      (a, b) => a + b / 100,
      0
    );
    const flatAttack = this.flatAttackModifiers.reduce((a, b) => a + b, 0);
    this.attack =
      (this.characterAttack + this.weaponAttack) * (1 + percentModifier) +
      flatAttack;
    const baseDamage =
      this.attack *
      (1 +
        (this.criticalRatePercent / 100) *
          (1 + this.criticalDamagePercent / 100));
    this.physicalDamage = baseDamage * (1 + this.physicalDamagePercent / 100);
    this.elementalDamage = baseDamage * (1 + this.elementalDamagePercent / 100);
    this.reactionDamage =
      this.elementalDamage * (1 + this.elementalMasteryBonusPercent / 100);
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
</style>
