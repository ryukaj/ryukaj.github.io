<template lang="pug">
  .page-register
    h1 1-10. 確認画面
    button.button(@click="insertRegistForm") モーダル再表示（モック用）
    hr
    section(v-if="2 <= progress" data-aos="zoom-in")
      h2 1-2 新規登録確認（確認）
      button.button(@click="updateRegistForm(2)") 修正
      div ニックネーム（確認）
      div パスワード（確認）
      hr
    section(v-if="3 <= progress" data-aos="zoom-in")
      h2 1-3 希望（確認）
      button.button(@click="updateRegistForm(3)") 修正
      div ニックネーム（確認）
      div パスワード（確認）
      hr
    section(v-if="4 <= progress" data-aos="zoom-in")
      h2 1-4. 経歴（確認）
      button.button(@click="updateRegistForm(4)") 修正
      div 経歴（確認）
      div 職歴（確認）
      hr
    section(v-if="5 <= progress" data-aos="zoom-in")
      h2 1-5. 資格/勉強（確認）
      button.button(@click="updateRegistForm(5)") 修正
      div 資格（確認）
      div 勉強（確認）
      hr
    section(v-if="6 <= progress" data-aos="zoom-in")
      h2 1-6. 年齢／性別（確認）
      button.button(@click="updateRegistForm(6)") 修正
      div 年齢（確認）
      div 性別（確認）
      hr
    section(v-if="7 <= progress" data-aos="zoom-in")
      h2 1-7. 居住区／勤務地希望地等（確認）
      button.button(@click="updateRegistForm(7)") 修正
      div 居住エリア（確認）
      div 勤務地希望エリア（確認）
      hr
    section(v-if="8 <= progress" data-aos="zoom-in")
      h2 1-8. 公開内容選択（確認）
      button.button(@click="updateRegistForm(8)") 修正
      div 公開内容選択リスト（確認）
      hr
    section(v-if="9 <= progress" data-aos="zoom-in")
      h2 1-9. アドバイス（確認）
      button.button(@click="updateRegistForm(9)") 修正
      div 依頼メール希望有無（確認）
      hr
    div(v-if="9 <= progress")
      button.button 確定する
      button.button キャンセルする
</template>
<!--
 check : https://buefy.org/documentation/modal/
         https://programmer-beginner.com/nuxt-modal
         http://luca3104.hatenablog.com/?page=1521365964
-->
<script>
import UserForm from '~/components/pages/register/userform'
export default {
  middleware: 'disable-direct-access',
  components: {
    UserForm
  },
  data () {
    return {
      pagenum: 1,
      ui: {},
      initModal: false,
      progress: 1,
    }
  },
  mounted () {
    this.insertRegistForm()
  },
  methods: {
    openRegisterForm () {
      this.$buefy.modal.open({
        parent: this,
        props: {
          ui: this.ui,
          pagenum: this.pagenum,
          initial: this.initModal
        },
        component: UserForm,
        canCancel: [],
        events: {
          'updateInfomation': (aPagenum, aUi) => {
            this.updateInfomation(aPagenum, aUi)
          }
        }
      })
    },
    insertRegistForm () {
      this.initModal = true
      this.openRegisterForm()
    },
    updateRegistForm (aPagenum) {
      this.initModal = false
      this.pagenum = aPagenum
      this.openRegisterForm()
    },
    updateInfomation (aPagenum, aUi) {
      if (this.progress < aPagenum) {
        this.progress = aPagenum
      }
      // aUiは入力されたデータを画面に反映
    }
  }
}
</script>
