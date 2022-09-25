<template>

<<<<<<< HEAD
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


=======
<div>
  <router-view></router-view>
</div>
>>>>>>> 3ffd01ee4226f930c1396d79582e5818643d079b

</template>

<script>
import SideNavbar from "./components/SideNavbar.vue";
import TopNavbar from "./components/TopNavbar.vue";


export default {
  name: 'App',
  components: {
<<<<<<< HEAD
    SideNavbar,
    TopNavbar
=======

>>>>>>> 3ffd01ee4226f930c1396d79582e5818643d079b
},

  data(){
    return{

    }
  }
}
</script>

<style>

<<<<<<< HEAD
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




=======
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

>>>>>>> 3ffd01ee4226f930c1396d79582e5818643d079b
</style>
