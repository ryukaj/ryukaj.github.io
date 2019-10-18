<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/"
        >
          <img
            src="~assets/toppage.png"
            alt="Buefy"
            height="28"
          >
        </a>
        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item">
            <span>Prototype for A4 Project</span>
          </div>
        </div>
        <div class="navbar-item">
        <div class="navbar-end">
            <div class="buttons">
              <b-button @click="clickSignIn">Sign In</b-button>
              <b-button @click="clickSignUp">Sign Up</b-button>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">
          General
        </p>
        <ul class="menu-list">
          <li
            v-for="(item, key) of items"
            :key="key"
          >
            <nuxt-link
              :to="item.to"
              exact-active-class="is-active"
            >
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    clickSignIn () {
      this.$buefy.dialog.alert('ログインページへ遷移（作成中）')
    },
    clickSignUp () {
      this.$buefy.dialog.alert('新規登録ページへ遷移（作成中）')
    }
  },
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  }
}
</script>
