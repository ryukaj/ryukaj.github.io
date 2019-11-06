<!--
  課題：なし
-->
<template lang="pug">
  nav.navbar.has-shadow.is-fixed-top(
    role="navigation"
  )
    .navbar-brand
      .navbar-item ロゴ表示エリア
      .navbar-burger.burger(
        :class="{ 'is-active': burgerActive }"
        @click="burgerToggle()"
      )
        span
        span
        span
    .navbar-menu(
      :class="{ 'is-active': burgerActive}"
    )
      h-menu(container='navbar-start')
      h-sign(container='navbar-end')
</template>
<!--
 check https://bulma.io/documentation/components/navbar/
-->
<script>
import hMenu from '~/components/applications/header-menu'
import hSign from '~/components/applications/header-sign'
export default {
  components: {
    hMenu,
    hSign
  },
  data () {
    return {
      burgerActive: false
    }
  },
  watch: {
    '$route.path' () {
      this.burgerActive = false
    }
  },
  methods: {
    burgerToggle () {
      this.burgerActive = !this.burgerActive
    }
  }
}
</script>

<style lang="scss" scoped>
  .navbar-menu.is-active {
    display: flex;
    flex-direction: column-reverse;
  }
</style>

