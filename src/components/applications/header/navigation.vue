<template lang="pug">
.navbar-start
  nuxt-link.navbar-item(to="/") コンテンツ１
  .navbar-item.has-dropdown
    a.navbar-link ゲストカテゴリ
    .navbar-dropdown
      nuxt-link.navbar-item(to="/") ゲストコンテンツ１
      nuxt-link.navbar-item(to="/") ゲストコンテンツ２
      nuxt-link.navbar-item(to="/") ゲストコンテンツ３
  .navbar-item.has-dropdown(v-if='islogin')
    a.navbar-link ユーザカテゴリ
    .navbar-dropdown
      nuxt-link.navbar-item(to="/") ユーザコンテンツ１
      nuxt-link.navbar-item(to="/") ユーザコンテンツ２
      nuxt-link.navbar-item(to="/") ユーザコンテンツ３
</template>

<script>
export default {
  computed: {
    islogin () {
      return this.$auth.loggedIn
    }
  },
}
</script>
