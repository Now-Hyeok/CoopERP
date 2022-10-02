<template>

  <body class="text-center">
    <main class="form-signin w-100 m-auto">
      <form>
        <h2 class="mb-5 fw-normal">Please sign in</h2>

        <div class="form-floating">
          <input type="email" class="form-control" id="floatingInput" placeholder="username">
          <label for="floatingInput">User name</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
          <label for="floatingPassword">Password</label>
        </div>

        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <p class="mt-3 mb-3 text-muted">If you don't have an account, please proceed with the <router-link to="/signup">
            Sign up</router-link> first!</p>
        <div>
          <p class="mt-3 mb-3 text-muted">You can preview the <router-link to="/home">InventoryPage</router-link></p>
        </div>
      </form>
    </main>

  </body>

</template>

<script>
export default {
  name: 'loginPage',
  data() {
    return {
    }
  },
  methods: {
    login() {
      this.$router.replace('/')
    }
  }
}
</script>

<style scoped>
body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
}

.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>