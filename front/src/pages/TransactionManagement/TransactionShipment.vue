<template>
<SalesRegister v-if="salesModal == true" @salesRegister="closeSalesModal();getSalesList();"/>

<div class="register">
  <table class="user-table">
    <caption>Shipment</caption>
    <thead >
      <tr>
        <th scope="col">#</th>
        <th scope="col">Shipment Date</th>
        <th scope="col">Product</th>
        <th scope="col">Amount</th>
        <th scope="col">Sales Price</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr class="salesList" scope="row" v-for="(item,i) in salesList" :key="item" >
        <th scope="row">{{i+1}}</th>
        <td>{{item.Shipment_date}}</td>
        <td>{{item.Product_name}}</td>
        <td>{{item.Shipment_amount}}</td>
        <td>{{item.Shipment_price}}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'transactionShipment',
  computed: {
    ...mapState(['shipmentList']),
  },
  methods: {
    ...mapActions(['getShipmentList'])
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