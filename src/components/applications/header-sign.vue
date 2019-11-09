<template lang="pug">
div(:class='container')
  .navbar-item
    <!-- TODO: 仕様に合わせてログインコンポーネントを作成 -->
    a.button(@click='loginComponent()') sign in
  .navbar-item
    nuxt-link.button(
      to='/register'
    ) sign up
</template>

<script>
import Login from '~/components/organisms/login'
export default {
  components: {
    Login
  },
  props: {
    container: {
      type: String,
      default: ''
    },
  },
  methods: {
    loginComponent () {
      this.$buefy.modal.open({
        parent: this,
        component: Login,
      })
    }
  }
}
</script>
