<template lang="pug">
b-modal(:active.sync='isActiveSync' data-aos="zoom-in")
  .modal-card
    header.modal-card-head header
    section.modal-card-body body
    footer.modal-card-foot footer
</template>

<script>
export default {
  props: {
    isActiveSync: {
      type: Boolean,
      default: false
    }
  }
}
</script>
