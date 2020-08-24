<template>
  <div :class="[cName]" :style="{ '--sk-color': color, '--sk-size': size }">
    <div v-for="num in cNums" :key="num" :class="[cDotName]"></div>
  </div>
</template>

<script>
/* eslint-disable vue/require-default-prop */
export default {
  name: 'Loading',
  props: {
    name: {
      type: String,
      default: 'plane',
    },
    nums: Number,
    dotName: String,
    color: String,
    size: String,
  },
  computed: {
    cName() {
      return 'sk-' + this.name
    },
    cDotName() {
      const map = {
        plane: '',
        chase: 'sk-chase-dot',
        bounce: 'sk-bounce-dot',
        wave: 'sk-wave-rect',
        pulse: '',
        flow: 'sk-flow-dot',
        swing: 'sk-swing-dot',
        circle: 'sk-circle-dot',
        'circle-fade': 'sk-circle-fade-dot',
        grid: 'sk-grid-cube',
        fold: 'sk-fold-cube',
        wander: 'sk-wander-cube',
      }
      return this.dotName || map[this.name]
    },
    cNums() {
      const map = {
        plane: 0,
        chase: 6,
        bounce: 2,
        wave: 5,
        pulse: 0,
        flow: 3,
        swing: 2,
        circle: 12,
        'circle-fade': 12,
        grid: 9,
        fold: 4,
        wander: 3,
      }
      return Number.isInteger(this.nums) ? this.nums : map[this.name]
    },
  },
}
</script>
