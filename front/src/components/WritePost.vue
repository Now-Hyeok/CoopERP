<template>
  
    <div class="modal-bg">
      <div class="registerModal">
        <div class="modalContent">
          <div class="modalHeader">
            <h1>post</h1>
          </div>
    
          <form id="registerForm" @submit.prevent>
            <div class="modalBody">
            
              <div class="input-group mb-4">
              
                <label class="input-group-text" id="inputGroup-sizing-default">category</label>
                <select v-model="category">
                  <option v-for="(item) in productList" :key="item" :value="item.Product_id">{{item.Product_name}}</option>
                </select>
              </div>
              <div class="input-group mb-4">
                <label class="input-group-text" id="inputGroup-sizing-default" >text</label>
                <textarea type="text" class="form-control"  name="text" id="text" v-model="text"/>
              </div>
 
            </div>
            <div class="modalFooter">
              <button type="submit" class="btn btn-primary" @click="registerPost()">Register</button>
              <button class="btn btn-secondary " @click="closePostModal()">Close</button>
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
          name:"writePost",
          computed:{
              ...mapState(['productList']),
            },
        
          data(){
            return{
              errors:[],
                category:null,
                text:null,

            }
          },
        
          methods:{
            ...mapMutations(['closePostModal']),
        
            sendPostData(){
                
              axios.post(`/api/warehousing/registration/${this.user.Coop_id}`,{

              })
              .then(()=>{
                this.$emit('postRegister');
              })
              .catch((err)=>{
                console.error(err);
              })
            },
        
            registerPost(){
              if(this.category && this.text){
                this.sendPostData();
                return true;
              }
              this.errors = [];
        
              if(!this.category){
                this.errors.push('category required');
              }
        
              if(!this.text){
                this.errors.push('text require');
              }
    
              alert(this.errors);
        
            },
          }
        }
        </script>
        
    <style>
        
        
        </style>