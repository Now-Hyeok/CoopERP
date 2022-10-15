<template>
<!-- 
<div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">New COOP Member Register</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form action="/api/member/registration" method="POST" id="registerForm" @submit="checkForm">
        <div class="modal-body">
      
          <div class="input-group mb-4">
            <label class="input-group-text" id="inputGroup-sizing-default" for="age">Name</label>
            <input type="text" class="form-control" name="name" id="name" v-model="name">
          </div>mb-5
          <div class="input-group mb-4">
            <label class="input-group-text" id="inputGroup-sizing-default" for="id">ID</label>
            <input type="text" class="form-control"  name="id" id="id" v-model="id">

            <label class="input-group-text" id="inputGroup-sizing-default" type="password" for="password">Password</label>
            <input type="password" class="form-control" name="password" id="password" v-model="password">
          </div>
          
          <div class="input-group mb-4">
            <label class="input-group-text" id="inputGroup-sizing-default" for="phone">Phone Number</label>
            <input type="text" class="form-control"  name="phone" id="phone" v-model="phone">
          </div>

          <div class="input-group mb-4">
            <label class="input-group-text" id="inputGroup-sizing-default" for="address">Address</label>
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
</div> -->

<div class="modal-bg">
  <div class="registerModal">
    <div class="modalContent">
      <div class="modalHeader">
        <h1>New Member Register</h1>
      </div>

      <form id="registerForm" @submit.prevent>
        <div class="modalBody">
        
          <div class="input-group mb-4">

            <label class="input-group-text" id="inputGroup-sizing-default" >Name</label>
            <input type="text" class="form-control" name="name" id="name" v-model="name">
            <label class="input-group-text" id="inputGroup-sizing-default" type="password" >Password</label>
            <input type="password" class="form-control" name="password" id="password" v-model="password">
          </div>
          
          <div class="input-group mb-4">
            <label class="input-group-text" id="inputGroup-sizing-default" >Phone Number</label>
            <input type="text" class="form-control"  name="phone" id="phone" v-model="phone">
          </div>

          <div class="input-group mb-4">
            <label class="input-group-text" id="inputGroup-sizing-default" >Address</label>
            <input type="text" class="form-control" name="address" id="address" v-model="address">
          </div>

        </div>
        <div class="modalFooter">
          <button type="submit" class="btn btn-primary" @click="checkForm()">Register</button>
          <button class="btn btn-secondary " @click="closeRegisterModal()">Close</button>
        </div>
      </form>

    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import { mapMutations, mapState } from 'vuex';


export default {
  name:"memberRegister",
  computed:{
      ...mapState(['registerModal']),
    },

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
    ...mapMutations(['closeRegisterModal']),

    regist(){
      axios.post('/api/member/registration',{
        name:this.name,
        phone:this.phone,
        password:this.password,
        address:this.address,
      })
      .then(()=>{
        this.$emit('memberRegist');
      })
      .catch((err)=>{
        console.error(err);
      })
    },

    checkForm(){
      if(this.name && this.address && this.phone && this.password){
        this.regist();
        return true;
      }
      this.errors = [];

      if(!this.name){
        this.errors.push('Name required');
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
      
      alert('can not submit');

    },
  }
}
</script>

<style>
.modal-bg{
  position:fixed;
  width:88%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);

}


.registerModal{
  width:70%;
  margin:80px auto;
  background:white;
  border-radius: 5px;
  padding: 20px 0;
}

.modalHeader{
  padding: 10px;
  border-bottom: solid 1px rgb(228, 222, 222);
  margin-bottom: 20px;
}

.modalBody{
  padding:5px;
}

.modalBody div{
  padding:5px;
}

.modalFooter{
  text-align: right;
}
.modalFooter button{
  margin-right: 5px;
}

</style>