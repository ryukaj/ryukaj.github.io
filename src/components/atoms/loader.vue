<template lang="pug">
div
  loader(color="black" scale="1")
</template>

<script>
// doc: https://github.com/Hokid/vue-loaders
import 'vue-loaders/dist/vue-loaders.css'
import VueLoadersType from 'vue-loaders/dist/loaders/ball-grid-pulse'
export default {
  components: {
    'loader': VueLoadersType.component
  },
}
</script>
