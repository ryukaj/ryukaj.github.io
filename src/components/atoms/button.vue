<template lang="pug">
  div
    button.button {{text}}
</template>

<script>
export default {
  props: {
    'text': {
      type: String,
      default: ''
    }
  }
}
</script>
