<template lang="pug">
form
  Modal(title='A4 ログインフォーム')
    template(slot="m-content")
      f-label
        input(type='email' placeholder='メールアドレス')
      br
      f-label
        input(type='password' placeholder='パスワード')
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
  methods: {
    closeComponent () {
      this.$emit('close')
    },
    login () {
      // TODO: 入力チェック
      alert('login機能実装待ち')
    }
  }
}
</script>

<!--
Check: https://www.npmjs.com/package/vue-float-label
-->
