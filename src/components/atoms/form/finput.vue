<template lang="pug">
.a4-floating_label
  slot(name='input')
  span.a4-floating_label__highlight
  label.a4-floating_label__label {{title}}
</template>

<script>
export default {
  props: {
    'title': {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.floatingLabel()
  },
  updated () {
    this.floatingLabel()
  },
  methods: {
    floatingLabel () {
      const input = this.$slots.input.find(e => e.tag === 'input')
      if (input !== undefined) {
        const labelCls = this.$el.querySelector('.a4-floating_label__label').classList
        if (input.data.domProps.value.length !== 0) {
          labelCls.add('is-floating')
        } else {
          labelCls.remove('is-floating')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.a4-floating_label {
  position: relative;
  margin-top: 1.2em;
  & > input {
    display: block;
    padding: 4px 4px;
    width: 100%;
    height: 30px;
    background-color: transparent;
    border:none;
    border-bottom: 1px solid #757575;
    font-size: 16px;
    &:focus ~ label,
    & ~ .is-floating{
      top: -1.4em !important;
      color: #5264AE !important;
    }
    &:focus ~ .bar:before,
    &:focus ~ .bar:after{
      width:50%;
    }
    &:focus ~ .a4-floating_label__label {
      -webkit-animation:inputHighlighter 0.3s ease;
      -moz-animation:inputHighlighter 0.3s ease;
      animation:inputHighlighter 0.3s ease;
    }
  }
  &__highlight {
    position: absolute;
    height: 50%;
    width: 100%;
    top: 15%;
    left: 0;
    pointer-events: none;
    opacity: 0.5;
  }
  &__label {
    position: absolute;
    top:5px;
    left:5px;
    color:#999;
    font-size: 16px;
    font-weight: normal;
    pointer-events:none;
    transition:0.2s ease all;
    -moz-transition:0.2s ease all;
    -webkit-transition:0.2s ease all;
  }
}

@mixin keyframes($animation-name) {
  @-webkit-keyframes $animation-name {
    @content;
  }
  @-moz-keyframes $animation-name {
    @content;
  }
  @keyframes $animation-name {
    @content;
  }
}

@mixin animation($animation-name) {
  -webkit-animation: $animation-name;
  -moz-animation: $animation-name;
  animation: $animation-name;
  -webkit-animation-fill-mode: both;
  -moz-animation-fill-mode: both;
  animation-fill-mode: both;
}

@include keyframes(animationSample){
  0% {
    background: #5264AE;
  }
  100% {
    width:0;
    background:transparent;
  }
}

</style>
