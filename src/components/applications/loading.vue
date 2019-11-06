<template lang="pug">
div
  .loading(:class="{ 'is-finish': loadFinish }")
    loader.loading__loader
</template>

<script>
import loader from '~/components/atoms/loader'
export default {
  components: {
    loader
  },
  data () {
    return {
      loadFinish: false
    }
  },
  mounted () {
    // FIXME: サービスに合わせた仕様に変更
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.loadFinish = true
      }, 1000)
    })
    // ↓window.loadが完了しないとき、または、5秒以上かかるときためにsetTimeoutで実行
    setTimeout(() => {
      this.loadFinish = true
    }, 5000)
  }
}
</script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: #efefef;
  color: white;
  &.is-finish {
    transition: opacity 1s, z-index 0s 1.01s;
    opacity: 0;
    z-index: -1;
  }
  &__img {
    width: 86px;
    height: 86px;
    margin: 3vw;
  }
}
</style>
