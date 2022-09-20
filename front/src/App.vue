<template>

<div class="header">
  <TopNavbar class="topnavbar" :nonChoice="nonChoice" />
</div>


<div class="body">
  <FirstPage v-if="nonChoice==false"/>
  <span v-if="nonChoice==true">
    <div class="" id="sidebar">
    사이드바임
    </div>

    <div class="" id="main">
      메인화면임
    </div>
  </span>
  

</div>



</template>

<script>
import TopNavbar from "./components/TopNavbar.vue";
import FirstPage from "./pages/FirstPage.vue";


export default {
  name: 'App',
  components: {
    TopNavbar,
    FirstPage
},
  data(){
    return{
      nonChoice:false,
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
#sidebar{
  clear:both;
  width:20%;
  float: left;

  height:100%;  
}
#main{
  float: left;
  width: 80%;
  height: 100%;

}



</style>
