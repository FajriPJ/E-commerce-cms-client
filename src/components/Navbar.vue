<template>
  <div id="nav">
    <section id="navbar">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid m-3">
          <router-link
            to="/"
            class="nav nav-link active text-dark"
            aria-current="page"
            >
            {{logo}}
          </router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-between ms-5e">
            <ul class="navbar-nav  me-auto mb-2 mb-lg-0 justify-content-between">
              <li class="nav-item">
                <router-link
                  id="addProduct"
                  to="/addProduct"
                  class="nav-link active"
                  aria-current="page"
                  >
                  Add Product
                </router-link>
              </li>
            </ul>
            <form class="d-flex">
              <a
                @click.prevent="logout"
                class="btn btn-outline-danger m-2"
                href="">
              Logout</a>
            </form>
          </div>
        </div>
      </nav>
    </section>
    <!-- <router-link to="/">Home</router-link> | -->
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Navbar',
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  },
  computed: {
    // logo () {
    //   return this.$store.state.logo
    // } // make cara 1 untuk ambil dari state
    ...mapState(['logo']) // cara 2 untuk ambil dari state
  }
}
</script>

<style>
.nav{
  font-size: 40px;
}
#addProduct{
  font-size: 20px;
}
</style>
