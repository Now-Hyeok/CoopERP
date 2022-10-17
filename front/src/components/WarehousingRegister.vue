<template>
  
  <div class="modal-bg">
    <div class="registerModal">
      <div class="modalContent">
        <div class="modalHeader">
          <h1>New Warehousing Schedule Register</h1>
        </div>
  
        <form id="registerForm" @submit.prevent>
          <div class="modalBody">
          
            <div class="input-group mb-4">  
              <label class="input-group-text" id="inputGroup-sizing-default" >Product</label>
              <input type="text" class="form-control" name="product" id="product" v-model="product">          
            </div>

            <div class="input-group mb-4">
              <label class="input-group-text" id="inputGroup-sizing-default" >Member</label>
              <input type="text" class="form-control"  name="member" id="member" v-model="member">
            </div>
  
            <div class="input-group mb-4">
              <label class="input-group-text" id="inputGroup-sizing-default" >Amount</label>
              <input type="text" class="form-control" name="amount" id="amount" v-model="amount">
            </div>

            <div class="input-group mb-4">
              <label class="input-group-text" id="inputGroup-sizing-default" >Date</label>
              <input type="text" class="form-control" name="amount" id="amount" v-model="date">
            </div>

            <div class="input-group mb-4">
              <label class="input-group-text" id="inputGroup-sizing-default" >Price</label>
              <input type="text" class="form-control" name="amount" id="amount" v-model="price">
            </div>

            <div class="input-group mb-4">
              <label class="input-group-text" id="inputGroup-sizing-default" >Quality</label>
              <input type="text" class="form-control" name="quality" id="quality" v-model="quality">
            </div>
          </div>
          <div class="modalFooter">
            <button type="submit" class="btn btn-primary" @click="registerWarehousing()">Register</button>
            <button class="btn btn-secondary " @click="closeWarehousingModal()">Close</button>
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
    name:"warehousingRegister",
    computed:{
        ...mapState(['warehousingModal','productList']),
      },
  
    data(){
      return{

        errors:[],
        member:null,
        product:null,
        amount:null,
        date:null,
        price:null,
        quality:null,

        
      }
    },
  
    methods:{
      ...mapMutations(['closeWarehousingModal']),
  
      sendWarehousingData(){
        
        axios.post('/api/warehousing/registration',{
          member : this.member,
          product : this.product,
          amount : this.amount,
          date : this.date,
          price : this.price,
          quality : this.quality,
        })
        .then(()=>{
          this.$emit('warehousingRegister');
        })
        .catch((err)=>{
          console.error(err);
        })
      },
  
      registerWarehousing(){
        if(this.member && this.product && this.amount && this.date && this.price && this.quality){
          this.sendWarehousingData();
          return true;
        }

        this.errors = [];

        if(!this.member){
          this.errors.push(' member required');
        }
        if(!this.product){
          this.errors.push(' product required');
        }
        if(!this.amount){
          this.errors.push(' amount required');
        }
        if(!this.date){
          this.errors.push(' date required');
        }
        if(!this.price){
          this.errors.push(' price required');
        }
        if(!this.quality){
          this.errors.push(' quality required');
        }

        alert(this.errors);
  
      },
    }
  }
  </script>
  
  <style>
  
  
  </style>