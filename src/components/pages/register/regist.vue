<template lang="pug">
form
  .modal-card
    header.modal-card-head
      div A4 ユーザ登録フォーム
    section.modal-card-body
      component(:is="currentComponent" ref="form")
    footer.modal-card-foot
      a.button(@click="closeModal") 閉じる
      a.button(v-if="3 < currentPageNum" @click="prevComponent") 戻る
      a.button(v-if="2 < currentPageNum" @click="nextComponent") 次へ
      a.button(v-if="currentPageNum=1" @click="nextComponent") 送信
</template>

<script>
import Identification from '~/components/pages/register/regist/identification'
import Registration from '~/components/pages/register/regist/registration'
import Expected from '~/components/pages/register/regist/expected'
export default {
  components: {
    Identification,
    Registration,
    Expected
  },
  props: {
    ui: {
      type: Object,
      default: null
    },
    start: {
      type: Number,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      currentPageNum: 1,
      currentComponent: null,
      componentList: {
        1: Identification,
        2: Registration,
        3: Expected
      }
    }
  },
  mounted () {
    // this.currentPageNum = this.start
    this.switchComponent()
  },
  methods: {
    closeModal () {
      this.$emit('close')
    },
    nextComponent () {
      console.log(this.currentPageNum)
      if (this.$refs.form.validate()) {
        // TODO: データを保管するよ！
        // FIXME: currentPageNumを更新する方法
        this.currentPageNum++
        // TODO: 最終ページか判断が必要！
        this.switchComponent()
      }
    },
    prevComponent () {

    },
    switchComponent () {
      this.currentComponent = this.componentList[this.currentPageNum]
    }
  }
}
</script>
