<template>

<MemebrRegister v-if="registerModal==true" @memberRegist="closeRegisterModal();getMemberList()"/>

<div class="register">
  <table>
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
      <tr class="memberList" scope="row" v-for="(item,i) in memberList" :key="item" >
        <th>{{i+1}}</th>
        <td>{{item.Member_name}}</td>
        <td>{{item.Member_address}}</td>
        <td>{{item.Member_phone}}</td>
        <td><button type="button" class="btn btn-light" @click="deleteMember(item.Member_id)">X</button></td>
      </tr>
    </tbody>
  </table>

  <div>
    <button type="button" class="btn btn-primary" @click="openRegisterModal()">
    New Member
    </button>
  </div>
</div>



</template>

<script>
import MemebrRegister from '@/components/MemberRegister.vue';
import axios from 'axios';
import { mapMutations, mapState } from 'vuex';

export default {
    name: "coopRegister",
    computed:{
      ...mapState(['registerModal']),
    },
    created(){
      this.getMemberList();
    },
    methods:{
      ...mapMutations(['closeRegisterModal','openRegisterModal']),
      
      getMemberList(){
        axios.get('/api/member/data')
      .then((res)=>{
        this.memberList = res.data
      })
      .catch((err)=>{
        console.error(err);
      })
      },

      deleteMember(id){
        axios.delete(`/api/member/delete/${id}`)
        .then(()=>{
          this.getMemberList();
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
  height: 100%;
  width: 100%;
  overflow: auto;
}
</style>