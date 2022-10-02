<template>
  <div class="top">
    <TopNavbar></TopNavbar>
  </div>
  <div class="content">
    <div class="sidebar">
        <side-navbar></side-navbar>
    </div>
    <div class="contentview">
        <router-view></router-view>
    </div>
  </div>



</template>

<script>
import SideNavbar from '@/components/SideNavbar.vue';
import TopNavbar from '@/components/TopNavbar.vue';
export default {
    components: { SideNavbar, TopNavbar }
}
</script>

<style>

.top{
  width: 100%;
  height: 65px;
  min-width: 850px;
}
.content{
  width:100%;
  min-width: 850px;
  height: calc(100% - 65px);
  height : -webkit-calc(100% - 65px); /* for Chrome, Safari */ 
  height : -moz-calc(100% - 65px); /* for Firefox */
  clear: both;
}

.sidebar{
  min-width: 100px;
  float: left;
  width: 12%;
  height:100%;
  border-right: solid #eee;

  
}
.contentview{
  width:88%;
  min-width: 748px;
  height: calc(100% - 50px);
  height : -webkit-calc(100% - 50px); /* for Chrome, Safari */ 
  height : -moz-calc(100% - 50px); /* for Firefox */
  float: left;
}

</style>