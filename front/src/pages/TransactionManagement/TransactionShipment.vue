<template>
<SalesRegister v-if="salesModal == true" @salesRegister="closeSalesModal();getSalesList();"/>

<div class="register">
  <table class="user-table">
    <caption>Shipment</caption>
    <thead >
      <tr>
        <th scope="col">#</th>
        <th scope="col">Shipment Date</th>
        <th scope="col">Buyer</th>
        <th scope="col">Product</th>
        <th scope="col">Quantity</th>
        <th scope="col">Sales Price</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr class="shipmentList" scope="row" v-for="(item,i) in shipmentList" :key="item" >
        <th scope="row">{{i+1}}</th>
        <td>{{item.Shipment_date.substring(0,10)}}</td>
        <td>{{item.Shipment_buyer}}</td>
        <td>{{item.Product_name}}</td>
        <td>{{item.Shipment_amount}}</td>
        <td>{{item.Shipment_price}}</td>
        <td><button class="btn btn-light" @click="deleteShipment(item.Shipment_id)">x</button></td>

      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import axios from 'axios'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'transactionShipment',
  computed: {
    ...mapState(['shipmentList']),
  },
  methods: {
    ...mapActions(['getShipmentList','getQuantity']),
    deleteShipment(id){
      axios.delete(`/api/shipment/delete/${id}`)
      .then(()=>{
        this.getShipmentList();
        this.getQuantity();
      })
      .catch((err)=>{
        console.error(err);
      })
    },
  }
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