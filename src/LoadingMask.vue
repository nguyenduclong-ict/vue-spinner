<template>
  <div class="loading-mask">
    <Loading v-bind="$props" />
  </div>
</template>

<script>
/* eslint-disable vue/require-prop-types */
import Loading from './Loading'
export default {
  name: 'LoadingMask',
  components: { Loading },
  props: ['name', 'nums', 'dotName', 'color', 'size'],
}
</script>
