<template>

<MemebrRegister/>
<div class="register">
  <table class="table caption-top">
    <caption>List of Members</caption>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Address</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td><button type="button" class="btn btn-light">X</button></td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        <td><button type="button" class="btn btn-light">X</button></td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
        <td><button type="button" class="btn btn-light">X</button></td>
      </tr>


    </tbody>
  </table>
  <div>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#registerModal">
    New Member
    </button>
    <button type="button" @click="getUserData">click</button>

  </div>
</div>



</template>

<script>
import MemebrRegister from '@/components/MemberRegister.vue';
import axios from 'axios';

export default {
    name: "coopRegister",
    data() {
        return {
          memberList:[],
        };
    },
    methods:{
      getUserData(){
        axios.get('api/user/data')
        .then((result)=>{
          console.log(result);
        })
        .catch((err)=>{
          console.log(err);
        })
      }
    },
    components: { MemebrRegister }
}
</script>

<style>
.register{
  padding:20px;
}
</style>