<template>
<SalesRegister v-if="salesModal == true" @salesRegister="closeSalesModal();getSalesList();"/>

<div class="register">
  <table class="user-table">
    <caption>List of Sales</caption>
    <thead >
      <tr>
        <th scope="col">#</th>
        <th scope="col">Sales Date</th>
        <th scope="col">Product</th>
        <th scope="col">Amount</th>
        <th scope="col">Price</th>
        <th scope="col">Shipment</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr class="salesList" scope="row" v-for="(item,i) in salesList" :key="item" >
        <th scope="row">{{i+1}}</th>
        <td>{{item.Sales_date}}</td>
        <td>{{item.Product_name}}</td>
        <td>{{item.Sales_amount}}</td>
        <td>{{item.Sales_price}}</td>
        <td><button type="button" class="btn btn-light" @click="deleteSales(item.Sales_id)">X</button></td>
        <td><button type="button" class="btn btn-light" @click="deleteSales(item.Sales_id)">X</button></td>
      </tr>
    </tbody>
  </table>

  <div>
    <button type="button" class="btn btn-primary" @click="openSalesModal()">
    New Product
    </button>
  </div>
</div>

</template>

<script>
import SalesRegister from '@/components/SalesRegister.vue';
import axios from 'axios'
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
    created() {
      this.getSalesList();
    },
    name:'transactionSales',
    computed:{
      ...mapState(['salesList','salesModal','productList']),
    },
    methods:{
      ...mapMutations(['closeSalesModal','openSalesModal']),
      ...mapActions(['getSalesList']),
      deleteSales(id){
        axios.delete(`/api/sales/delete/${id}`)
        .then(()=>{
          this.getSalesList();
        })
        .catch((err)=>{
          console.error(err);
        })
      },
    },
    components:{SalesRegister}
}
</script>

<style>
.register{
  padding:20px;
  height: 100%;
  width: 100%;
  overflow: auto;
}

td,th{
  padding:15px; 
  border: 1px solid #c2d3de;
}
</style>