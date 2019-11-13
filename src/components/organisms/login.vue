<template lang="pug">
form(:model="form")
  Modal(title='A4 ログインフォーム')
    template(slot="m-content")
      f-label
        input(type='email' placeholder='メールアドレス' v-model="form.email")
      br
      f-label
        input(type='password' placeholder='パスワード' v-model="form.password")
    template(slot="m-footer")
      a.button(@click='closeComponent') キャンセル
      a.button(@click='login') 送信
</template>

<script>
import Modal from '~/components/molecules/modal-container'
export default {
  components: {
    Modal
  },
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    closeComponent () {
      this.$emit('close')
    },
    async login () {
      try {
        await this.$auth.loginWith('local', { data: this.form })
        this.closeComponent()
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<!--
Check: https://www.npmjs.com/package/vue-float-label
       Auth Module
       https://qiita.com/itouuuuuuuuu/items/1dc6401022e0d771c757
-->
