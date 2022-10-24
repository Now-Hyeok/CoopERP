<template>
<div class="top">
  <TopNavbar/>
</div>


<div class="maincontent">
  <h4>hello~</h4> 
  <p>welecome</p>
</div>



</template>
    
<script>
import { mapActions } from 'vuex';
    // import SideNavbar from "../components/SideNavbar.vue";
    import TopNavbar from "../components/TopNavbar.vue";
    
    
    export default {
      name: 'mainPage',
      components: {
        // SideNavbar,
        TopNavbar
    },
      methods:{
        ...mapActions(['getMemberList','getProductList','getWarehousing','getUserInfo','getReceived','getQuantity'])
      },
      created(){
        this.getMemberList();
        this.getProductList();
        this.getWarehousing();
        this.getReceived();
        this.getQuantity();
      },
      data(){
        return{
    
        }
      }
      }
    </script>
    
<style>
.maincontent{
  width:100%;
  height: 50%;
  text-align: center;
  margin-top: 300px;
}


</style>