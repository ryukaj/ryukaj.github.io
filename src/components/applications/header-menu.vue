<template lang="pug">
div(:class='container')
  nuxt-link.navbar-item(to="/") コンテンツ１
  .navbar-item.has-dropdown
    .navbar-link カテゴリ１
    .navbar-dropdown
      nuxt-link.navbar-item(to="/") コンテンツ２
      nuxt-link.navbar-item(to="/") コンテンツ３
      nuxt-link.navbar-item(to="/") コンテンツ４
</template>

<script>
export default {
  props: [
    'container'
  ]
}
</script>
