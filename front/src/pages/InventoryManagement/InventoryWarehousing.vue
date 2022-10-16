<template>

<div>
  <table class="user-table">
    <caption>Warehousing schedule</caption>
    <thead >
      <tr>
        <th scope="col">#</th>
        <th scope="col">Product</th>
        <th scope="col">amount</th>
        <th scope="col">member name</th>
        <th scope="col">quailty</th>
        <th scope="col">request price</th>
        <th scope="col">schedule</th>
        <th scope="col">warehousing</th>
        <th scope="col">delete</th>
        <th scope="col">total amount</th>
      </tr>
    </thead>
    <tbody>

    </tbody>
  </table>

  <div>
    <button type="button" class="btn btn-primary">
    New Warehousing
    </button>
  </div>
</div>

</template>

<script>
import axios from 'axios'
export default {
    name:'inventoryStatus',
    methods:{
        getMemberReq(){
            axios.get('/api/member/stock')
            .then((res)=>{
                res.data
            })
            .catch((err)=>{
                console.error(err);
            })
        },  
    },

}
</script>

<style>

</style>