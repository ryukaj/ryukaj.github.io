<template lang="pug">
.layout
  applicationLoading.layout__loader
  header.layout__header
    applicationHeader
  main.layout__main
    nuxt
</template>

<script>
import applicationLoading from '~/components/applications/loading'
import applicationHeader from '~/components/applications/header'
export default {
  components: {
    applicationLoading,
    applicationHeader
  }
}
</script>

<style lang="scss" scoped>
  .layout {
    position: relative;
    &__header {
      position: relative;
    }
    &__main {
      position: relative;
    }
  }
</style>
