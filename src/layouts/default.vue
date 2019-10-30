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
        <div class="navbar-burger" data-target="a4-head-menu" v-bind:class="{ 'is-active': menuActive }" v-on:click="menuToggle()">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div id="a4-head-menu" class="navbar-menu" v-bind:class="{ 'is-active': menuActive }">
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
    <b-modal :active.sync="isModalActive" has-modal-card>
      <p v-if="modalType === 'signup'">Load Sign Up Conponnent</p>
      <p v-else-if="modalType === 'signin'">Load Sign In Conponnent</p>
    </b-modal>
  </div>
</template>

<script>
export default {
  methods: {
    menuToggle () {
      this.menuActive = !this.menuActive
    },
    clickSignIn () {
      this.isModalActive = true
      this.modalType = 'signin'
    },
    clickSignUp () {
      this.isModalActive = true
      this.modalType = 'signup'
    }
  },
  data () {
    return {
      menuActive: false,
      /* モーダ処理関連 */
      isModalActive: false,
      modalType: '',
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspirse' }
        }
      ]
    }
  }
}
</script>
