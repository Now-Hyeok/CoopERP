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
    // import SideNavbar from "../components/SideNavbar.vue";
    import TopNavbar from "../components/TopNavbar.vue";
    
    
    export default {
      name: 'mainPage',
      components: {
        // SideNavbar,
        TopNavbar
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
  height: 88%;
  text-align: center;
  margin-top: 300px;
}


</style>