<template>

<div class="header">
  <TopNavbar class="topnavbar"/>
</div>


<div class="body">
  <div class="sidebar">
    <SideNavbar />
  </div>

  <div class="maincontent">
    <router-view/>
  </div>
  
  

</div>



</template>

<script>
import TopNavbar from "./components/TopNavbar.vue";
import SideNavbar from "./components/SideNavbar.vue";


export default {
  name: 'App',
  components: {
    TopNavbar,
    SideNavbar
},
  data(){
    return{
      home:true,
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
  width:20%;
  float: left;
  height:100%;  
}

.maincontent{
  float: left;
  width: 80%;
  height: 100%;
}




</style>
