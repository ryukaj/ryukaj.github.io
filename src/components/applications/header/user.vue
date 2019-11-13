<template lang="pug">
.navbar-end
  .navbar-item
    span {{ user.name }}
  .navbar-item
    a.button(@click='logout()') sign out
</template>

<script>
export default {
  computed: {
    user () {
      return this.$auth.user
    }
  },
  methods: {
    logout () {
      this.$auth.logout()
    }
  }
}
</script>
