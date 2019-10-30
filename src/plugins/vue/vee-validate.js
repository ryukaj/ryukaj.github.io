import Vue from 'vue'
import VeeValidate from 'vee-validate'
import VeeValidateJa from 'vee-validate/dist/locale/ja'

Vue.use(VeeValidate, {
  locale: 'ja',
  dictionary: {
    ja: VeeValidateJa
  }
})
