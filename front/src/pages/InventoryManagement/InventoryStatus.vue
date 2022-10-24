<template>


<InventoryRegister v-if="inventoryModal == true" @inventoryRegister="getData();closeInventoryModal();"/>

<div class="received-list">
    <table class="user-table">
        <caption>received list</caption>
    <thead>
        <th scope="col">#</th>
        <th scope="col">Product</th>
        <th scope="col">Quantity</th>
        <th scope="col">Member name</th>
        <th scope="col">Price</th>
        <th scope="col">Quailty</th>
        <th scope="col">Receiving date</th>
        <th scope="col">delete</th>
    </thead>
    <tbody>
        <tr scope="row" class="inventoryList" v-for="(item,i) in receivedList" :key="item">
            <th scope="row">{{i+1}}</th>
            <td>{{item.Product_name}}</td>
            <td>{{item.Warehousing_amount}}</td>
            <td>{{item.Member_name}}</td>
            <td>{{item.Price}}</td>
            <td>{{item.Product_quailty}}</td>
            <td>{{item.Warehousing_date.substr(0,10)}}</td>
            <td><button type="button" class="btn btn-light" @click="deleteInventory(item.Warehousing_id)">X</button></td>
        </tr>
    </tbody>
</table>

<button class="btn btn-primary" @click="openInventoryModal()">inventory Register</button>
</div>

<div class="inventory">
    <!-- 입고예정 수량 + 입고된 수량 -->
    <table>
        <caption>inventory</caption>
        <thead>
            <th scope="col">#</th>
            <th scope="col">Product</th>
            <th scope="col">Current Quantity</th>
            <th scope="col">warehousing schedule Quantity</th>
        </thead>
        <tbody>
            <tr scope="row" v-for="(item,i) in quantityList" :key="item">
                <th>{{i+1}}</th>
                <td>{{item.Product_name}}</td>
                <td>{{item.Warehousing_amount}}</td>
                <td>{{item.Shipment_amount}}</td>
            </tr>
        </tbody>
    </table>
</div>


</template>

<script>
import {  mapActions, mapMutations, mapState } from 'vuex'
import InventoryRegister from '@/components/inventoryRegister.vue'
import axios from 'axios'
export default{
    name:'inventoryStatus',
    components:{ InventoryRegister },
    computed:{
        ...mapState(['receivedList','inventoryModal','quantityList']),
    },

    methods:{
        ...mapMutations(['openInventoryModal','closeInventoryModal']),
        ...mapActions(['getReceived','productList','getQuantity']),
        
        getData(){
            this.getQuantity();
            this.getReceived();
        }, 
        deleteInventory(id){
            axios.delete(`/api/inventory/delete/${id}`)
            .then(()=>{
                this.getData();
            })
            .catch((err)=>{
                console.error(err)
            })

        }
    }
}
</script>

<style>
.inventory{
    float: left;
    height: 100%;
    width:50%
}
.received-list{
    float: left;
    height: 100%;
    width:50%;
}
</style>
