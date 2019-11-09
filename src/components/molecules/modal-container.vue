<template lang="pug">
section.modal-card
  header.modal-card-head
    h1 {{title}}
  div.modal-card-body
    slot(name='m-content')
  footer.modal-card-foot
    slot(name='m-footer')
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>
