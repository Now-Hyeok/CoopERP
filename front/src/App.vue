<template>

<div class="header">
  <TopNavbar/>
</div>


<div class="body">
  <div class="sidebar">
    <SideNavbar />
  </div>

  <div class="maincontent">
  </div>
  
  

</div>



</template>

<script>
import SideNavbar from "./components/SideNavbar.vue";
import TopNavbar from "./components/TopNavbar.vue";


export default {
  name: 'App',
  components: {
    SideNavbar,
    TopNavbar
},

  data(){
    return{

    }
  }
}
</script>

<style>

html,body,#app{
 height: 100%;
}

.body{
  width: 100%;
  height: 100%;

}

.sidebar{
  clear:both;
  width:15%;
  float: left;
  height:100%; 
  
  border-right: solid 1px #eee;
   
}

.maincontent{
  float: left;
  width: 85%;
  height: 100%;
}




</style>
