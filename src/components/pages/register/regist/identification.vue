<template lang="pug">
div
  h1 1-1.本人確認
  h2 メルアド
  h2 情報ポリシー承認
</template>

<script>
export default {
  methods: {
    validate () {
      console.log('identificationのバリデートするよ！')
      return true
    }
  }
}
</script>
