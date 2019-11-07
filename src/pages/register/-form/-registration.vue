<template lang="pug">
div
  h1 1-2.新規登録
  h2 ニックネーム
  h2 パスワード
</template>

<script>
export default {
  methods: {
    validate () {
      console.log('registrationのバリデートするよ！')
      return true
    }
  }
}
</script>
