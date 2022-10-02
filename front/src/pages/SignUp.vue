<template>

  <body class="text-center">
  
    <div class="container">
    
      <div class="py-4 text-center">
        <h2>Sign up form</h2>
      </div>
      <div>
        <h4 class="mb-4">User Information</h4>
        <form class="needs-validation" novalidate>
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">First name</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" required>
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>
    
            <div class="col-sm-6">
              <label for="lastName" class="form-label">Last name</label>
              <input type="text" class="form-control" id="lastName" placeholder="" value="" required>
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
    
            <div>
              <label for="user name" class="form-label">Username</label>
              <div class="input-group has-validation">
                <input type="text" class="form-control" id="username" placeholder="Username" required>
                <div class="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>
    
            <div>
              <label for="password" class="form-label">Password</label>
              <div class="input-group has-validation">
                <input type="text" class="form-control" id="password" placeholder="Password" required>
                <div class="invalid-feedback">
                  Your password is required.
                </div>
              </div>
            </div>
  
            <div>
              <label for="cooperative" class="form-label">Cooperative </label>
              <input type="cooperative" class="form-control" id="cooperative" placeholder="cooperative name">
              <div class="invalid-feedback">
                Please enter a your cooperative.
              </div>
            </div>
    
            <div class="col-md-5">
              <label for="country" class="form-label">Country</label>
              <select class="form-select" id="country" required>
                <option value="">Choose...</option>
                <option>Republic of Korea</option>
              </select>
              <div class="invalid-feedback">
                Please select a valid country.
              </div>
            </div>
    
            <div class="col-md-4">
              <label for="state" class="form-label">State</label>
              <select class="form-select" id="state" required>
                <option value="">Choose...</option>
                <option>Daejeon</option>
              </select>
              <div class="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>
    
            <div class="col-md-3 mb-4">
              <label for="zip" class="form-label">Zip</label>
              <input type="text" class="form-control" id="zip" placeholder="" required>
              <div class="invalid-feedback">
                Zip code required.
              </div>
            </div>
          </div>
    
          <div class="mb-4">
            <label for="address" class="form-label">Address</label>
            <input type="text" class="form-control" id="address" placeholder="1234 Main St" required>
            <div class="invalid-feedback">
              Please enter your address.
            </div>
          </div>
       
          <button class="w-100 btn btn-primary btn-lg" type="submit">Sign Up!</button>
    
          <p class="mt-3 mb-3 text-muted">Return to <router-link to="/">Login</router-link></p>
    
        </form>
      </div>
    </div>

  </body>
  
  </template>
    
  <script>
      export default {
        name: 'signUp',
        data() {
          return {
          }
        },
        methods: {}
      }
    </script>
    
  <style scoped>
  
  body {
    display: flex;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
  }
  
  .container {
    max-width: 600px;
  }
  
  </style>