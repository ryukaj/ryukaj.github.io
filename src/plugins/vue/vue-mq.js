import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    mobile: 666,
    tablet: 969,
    desktop: Infinity
  },
  defaultBreakpoint: 'mobile'
})
Vue.mixin({
  data () {
    return {
      mobile: false,
      tabletOnly: false,
      tablet: false,
      desktop: false
    }
  },
  watch: {
    $mq () {
      this.mobile = this.$mq === 'mobile'
      this.tabletOnly = this.$mq === 'tablet'
      this.tablet = this.$mq === 'tablet' || this.$mq === 'desktop'
      this.desktop = this.$mq === 'desktop'
    }
  },
  mounted () {
    this.mobile = this.$mq === 'mobile'
    this.tabletOnly = this.$mq === 'tablet'
    this.tablet = this.$mq === 'tablet' || this.$mq === 'desktop'
    this.desktop = this.$mq === 'desktop'
  }
})
