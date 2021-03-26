<template>
  <div class="spinner-mask">
    <Spinner v-bind="$props" />
  </div>
</template>

<script>
import Spinner from "./Spinner.vue";
export default {
  name: "SpinnerMask",
  components: { Spinner },
  props: ["name", "nums", "dotName", "color", "size"],
};
</script>
