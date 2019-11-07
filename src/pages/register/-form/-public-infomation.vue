<template lang="pug">
div
  h1 1-8. 公開内容選択
  h2 公開内容選択リスト
</template>

<script>
export default {
  methods: {
    validate () {
      console.log('public-infomationのバリデートするよ！')
      return true
    }
  }
}
</script>
