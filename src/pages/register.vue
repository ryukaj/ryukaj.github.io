<template lang="pug">
  .page-register
    h1 新規登録画面表示
</template>
<!--
 check : https://buefy.org/documentation/modal/
         https://programmer-beginner.com/nuxt-modal
         http://luca3104.hatenablog.com/?page=1521365964
-->
<script>
import Regist from '~/components/pages/register/regist'
export default {
  middleware: 'disable-direct-access',
  components: {
    Regist
  },
  data () {
    return {
      start: 1,
      ui: {}
    }
  },
  mounted () {
    this.openRegisterForm(this.ui)
  },
  methods: {
    openRegisterForm (aUi) {
      this.$buefy.modal.open({
        parent: this,
        props: {
          ui: this.ui,
          start: this.start
        },
        component: Regist,
        canCancel: []
      })
    }
  }
}
</script>
