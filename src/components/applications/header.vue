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
      h-navigation
      component(:is="signComponent")
</template>
<!--
 check https://bulma.io/documentation/components/navbar/
-->
<script>
import hNavigation from '~/components/applications/header/navigation'
import hGuest from '~/components/applications/header/guest'
import hUser from '~/components/applications/header/user'
export default {
  components: {
    hNavigation,
    hGuest,
    hUser
  },
  data () {
    return {
      burgerActive: false
    }
  },
  computed: {
    signComponent () {
      return (this.$auth.loggedIn) ? hUser : hGuest
    },
  },
  watch: {
    '$route.path' () {
      this.burgerActive = false
    },
    '$auth.loggedIn' () {
      this.burgerActive = false
    },
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

