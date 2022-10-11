<template>
<!-- Button trigger modal -->

<!-- Modal -->
<div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">New COOP Member Register</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form action="/api/member/registration" method="POST" id="registerForm" @submit="checkForm">
        <div class="modal-body">
      
          <div class="input-group mb-3">
            <lable class="input-group-text" id="inputGroup-sizing-default" for="age">Name</lable>
            <input type="text" class="form-control" name="name" id="name" v-model="name">
          </div>
          <div class="input-group mb-3">
            <lable class="input-group-text" id="inputGroup-sizing-default" for="id">ID</lable>
            <input type="text" class="form-control"  name="id" id="id" v-model="id">
            <lable class="input-group-text" id="inputGroup-sizing-default" type="password" for="password">Password</lable>
            <input type="password" class="form-control" name="password" id="password" v-model="password">
          </div>
          
          <div class="input-group mb-3">
            <lable class="input-group-text" id="inputGroup-sizing-default" for="phone">Phone Number</lable>
            <input type="text" class="form-control"  name="phone" id="phone" v-model="phone">
          </div>

          <div class="input-group mb-3">
            <lable class="input-group-text" id="inputGroup-sizing-default" for="address">Address</lable>
            <input type="text" class="form-control" name="address" id="address" v-model="address">
          </div>
          
        
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary" id="registerBtn">Register</button>
        </div>
    </form>
    <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
    </p>


    </div>

  </div>
</div>
</template>

<script>

// document.getElementById('registerBtn').setAttribute('data-bs-dismiss','modal');

export default {
  name:"memberRegister",
  data(){
    return{
      errors:[],
      name:null,
      id:null,
      address:null,
      phone:null,
      password:null
    }
  },

  methods:{

    checkForm(e){
      if(this.name && this.id && this.address && this.phone && this.password){
        this.name=null;
        this.id = null;
        this.address = null;
        this.phone=null;
        this.password = null;
        return true;
      }
      this.errors = [];

      if(!this.name){
        this.errors.push('Name required');
      }
      if(!this.id){
        this.errors.push('id require');
      }
      if(!this.address){
        this.errors.push('address require');
      }
      // if(!this.phone){
      //   this.errors.push('id require');
      // }
      if(!this.password){
        this.errors.push('password require');
      }
      e.preventDefault();
      alert('can not submit');
    },
  }
}
</script>

<style>



</style>