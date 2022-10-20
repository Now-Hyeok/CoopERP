<template>
<WarehousingRegister v-if="warehousingModal == true" @warehousingRegister="closeWarehousingModal(); getWarehousing(); "/>

<div>
  <table class="user-table">
    <caption>Warehousing schedule</caption>
    <thead >
      <tr>
        <th scope="col">#</th>        
        <th scope="col">Product</th>
        <th scope="col">quailty</th>
        <th scope="col">amount</th>
        <th scope="col">member name</th>
        <th scope="col">request price</th>
        <th scope="col">schedule</th>
        <th scope="col">warehousing</th>
        <th scope="col">delete</th>
        <th scope="col">total amount</th>
      </tr>
    </thead>
    <tbody>
      <tr class="warehousingList" scope="row" v-for="(item,i) in warehousingList" :key="item">
        <th scope="row">{{i+1}}</th>
        <td>{{item.Product_name}}</td>
        <td>{{item.Product_quailty}}</td>
        <td>{{item.Shipment_amount}}</td>
        <td>{{item.Member_name}}</td>
        <td>{{item.Req_price}}</td>
        <td>{{item.Shipment_date}}</td>
        <td>{{}}</td>
        <td>{{}}</td>
      </tr>
    </tbody>
  </table>

  <div>
    <button type="button" class="btn btn-primary" @click="openWarehousingModal()">
    New Warehousing
    </button>
  </div>
</div>

</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import WarehousingRegister from '@/components/WarehousingRegister.vue'
export default {
    name: "inventoryStatus",
    computed:{
      ...mapState(['warehousingModal','warehousingList','memberList','productList'])
    },
    methods: {
        ...mapMutations(["openWarehousingModal","closeWarehousingModal"]),
        ...mapActions(['getWarehousing']),
    },
    components: { WarehousingRegister }
    ,

}
</script>

<style>

</style>