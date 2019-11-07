<template lang="pug">
div
  h1 1-6. 年齢／性別
  h2 年齢
  h2 性別
</template>

<script>
export default {
  methods: {
    validate () {
      console.log('attributionのバリデートするよ！')
      return true
    }
  }
}
</script>
