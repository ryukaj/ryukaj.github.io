<template lang="pug">
form
  .modal-card
    header.modal-card-head
      div A4 ユーザ登録フォーム
    section.modal-card-body
      component(:is="currentComponent" ref="form")
    footer.modal-card-foot
      a.button(@click="closeComponent") 閉じる
      a.button(v-if="3 <= currentPagenum && this.initial" @click="prevComponent") 戻る
      a.button(v-if="2 <= currentPagenum && currentPagenum < endpage && this.initial" @click="nextComponent") 次へ
      a.button(v-if="currentPagenum==1" @click="nextComponent") 送信
      a.button(v-if="!this.initial || currentPagenum==endpage" @click="completeComponent") 確認
</template>

<script>
/* 入力フォームコンポーネント */
import Identification from '~/pages/register/-form/-identification'
import Registration from '~/pages/register/-form/-registration'
import Expected from '~/pages/register/-form/-expected'
import Carrer from '~/pages/register/-form/-career'
import Certification from '~/pages/register/-form/-certification'
import Attribution from '~/pages/register/-form/-attribution'
import Area from '~/pages/register/-form/-area'
import PublicInfomation from '~/pages/register/-form/-public-infomation'
import Advice from '~/pages/register/-form/-advice'
export default {
  components: {
    Identification,
    Registration,
    Expected,
    Carrer,
    Certification,
    Attribution,
    Area,
    PublicInfomation,
    Advice
  },
  props: {
    ui: {
      type: Object,
      default: null
    },
    pagenum: {
      type: Number,
      default: function () {
        return {}
      }
    },
    initial: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      currentPagenum: 1,
      componentList: [
        Identification,
        Registration,
        Expected,
        Carrer,
        Certification,
        Attribution,
        Area,
        PublicInfomation,
        Advice
      ]
    }
  },
  computed: {
    endpage () {
      return this.componentList.length
    },
    currentComponent () {
      return this.componentList[this.currentPagenum - 1]
    }
  },
  mounted () {
    this.currentPagenum = this.pagenum
  },
  methods: {
    closeComponent () {
      this.$emit('close')
    },
    prevComponent () {
      this.currentPagenum--
    },
    nextComponent () {
      if (this.$refs.form.validate()) {
        this.currentPagenum++
        // TODO: データを保管するよ！
        // TODO: 親に状態で伝播させるよ！
        const ui = {}
        this.$emit('updateInfomation', this.currentPagenum, ui)
      }
    },
    completeComponent () {
      this.$emit('close')
    }
  }
}
</script>

<!-- 課題記述エリア -->
