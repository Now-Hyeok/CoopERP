<template>

<MemebrRegister/>
<div class="register">
  <table class="table caption-top">
    <caption>List of Members</caption>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Address</th>
        <th scope="col">phone</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr scope="row" v-for="(item,i) in memberList" :key="item" >
        <th>{{i+1}}</th>
        <td>{{item.Member_name}}</td>
        <td>{{item.Member_address}}</td>
        <td>{{item.Member_phone}}</td>
        <td><button type="button" class="btn btn-light">X</button></td>
      </tr>
    </tbody>
  </table>

  <div>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#registerModal">
    New Member
    </button>
  </div>
</div>



</template>

<script>
import MemebrRegister from '@/components/MemberRegister.vue';
import axios from 'axios';

export default {
    name: "coopRegister",
    created(){
      this.getMemberList();
    },
    methods:{
      getMemberList(){
        axios.get('/api/member/data')
      .then((res)=>{
        this.memberList = res.data
        
      })
      .catch((err)=>{
        console.error(err);
      })
      }
    },
    data() {
        return {
          memberList:[],
        };
    },

    components: { MemebrRegister }
}
</script>

<style>
.register{
  padding:20px;
}
</style>