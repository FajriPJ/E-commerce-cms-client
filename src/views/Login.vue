<template>
  <div>
      <!-- login -->
    <section id="login-page"   >
      <div class="container my-5" >
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card shadow p-3 bg-body rounded">
              <div class="card-header mb-3 px-4">
                <h3 class="card-title my-1 text-center">GadgetFox</h3>
              </div>
              <div class="card-body p-3 m-1">
                <div class="login error-message"></div>
                <form id="form-login" method="POST">
                  <div class="form-floating mb-3">
                    <label for="floatingInput">Email address</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="name@example.com"
                      name="email"
                      v-model="dataLogin.email"
                    />
                  </div>
                  <div class="form-floating mb-3">
                    <label for="floatingPassword">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      name="password"
                      v-model="dataLogin.password"
                    />
                  </div>
                  <div class="d-grid gap-2 mt-4">
                    <a
                      @click.prevent="login"
                      class="btn btn-primary"
                      href="">
                    Login</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      dataLogin: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', this.dataLogin)
      this.dataLogin = ''
    }
  }
}
</script>

<style>
</style>
