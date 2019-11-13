<template lang="pug">
div
  section(data-aos="zoom-in")
    h1 ランディングページ（≒ゲスト利用画面？）
    h2 3-2.公開アドバイス一覧
    h2 3-3.ランキング
    h2 3-4.エンジニアおすすめ
    h2 3-5.エンジニアあるある
    h2 3-6.サイトランキング
  section(v-if='islogin' data-aos="zoom-in")
    h1 ログイン：{{ user.name }}（≒ダッシュボード？）
    h2 2-2-1. アドバイス表示
    h2 2-2-2. アドバイス履歴
    h2 2-2-3. カルテ
    h2 2-2-4. 個人情報管理
    h2 2-2-5. マイページ設定
</template>

<script>
export default {
  computed: {
    islogin () {
      return this.$auth.loggedIn
    },
    user () {
      return this.$auth.user
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
