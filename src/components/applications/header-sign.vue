<template lang="pug">
div(:class='container')
  .navbar-item
    <!-- TODO: 仕様に合わせてログインコンポーネントを作成 -->
    u-btn(text='sign in')
  .navbar-item
    nuxt-link.button(
      to='/register'
    ) sign up
</template>

<script>
export default {
  props: [
    'container'
  ]
}
</script>
