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
export default {
    name:'transactionShipment',
    
}
</script>

<style>

</style>