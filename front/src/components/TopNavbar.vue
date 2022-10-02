<template>

<nav class="wrapper hw-100">
  <ul class="categoryhome">
    <li class="hw-100">

      <router-link class="cate-home-link hw-100 " to="/home">ERP System</router-link>

    </li>
    
  </ul>
  <div class="topnavb">
    <ul class="menu hw-100">
        <li class="menu-item">
          <router-link  @click='userSelect("coop-management")' to="/coop-management" class="menu-link">COOP management</router-link>
        </li>
        <li class="menu-item">
          <router-link   @click='userSelect("inventory-management")' to="/inventory-management" class="menu-link">Inventory Management</router-link>
        </li>
        <li class="menu-item">
          <router-link   @click='userSelect("transaction-management")' to="/transaction-management" class="menu-link">Transaction management</router-link>
        </li>
        <li class="menu-item">
          <router-link   @click='userSelect("statistics")' to="/statistics" class="menu-link">Statistics</router-link>
        </li>
        <li class="menu-item">
          <router-link @click='userSelect("communication")' to="/communication" class="menu-link">Communication</router-link>
        </li>
      </ul>
  </div>
</nav>
<div class="line"></div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name:'TopNavbar',
    data(){
        return{
            select:"", 
        }  
    },
    methods:{
        ...mapMutations(['userSelect']),
        //mapmutations 쓰면 mutations에 있는 함수를 가져와 쓰는데 짧게 쓸수있음 그냥 함수처럼
    }

}
</script>

<style>
ul li {
  margin :0;
  padding:0;

}

.cate-home-link{
  display: block;
  padding: 18px;
  font-size: 17px;
}

a {
  text-decoration: none;
  color:black;
  font-weight: bold;
  text-align: center;
  font-size: 12px;
}


.categoryhome{

  width: 12%;
  float: left;
  height: 100%;

}


.topnavb{
  float: left;
  width:88%;
  height: 100%;
}
body,ul,li {
  margin: 0;
  padding: 0;
}
ul, li {
  list-style:none;
}
.menu {
  display: flex;
}
.menu-item {
  background-color: rgb(255, 255, 255);
  flex-grow: 1;
  transition: 0.5s;
}
.menu-item:hover {
  background-color: rgb(0, 162, 255);
  flex-grow: 1.2;
}
.menu-link {
  /* block이면 마우스 클릭영역이 더 커짐, a태그는 inline으로서 클릭영역이 콘텐츠에 한정됨*/
  height: 100%;
  widows: 100%;
  padding: 18px;
  display: block; 
  font-size: 15px;
  font-weight: bold;
  color: #555;
  text-decoration: none;
  text-align: center;
}
.menu-link:hover {
  color: white;
}



.line{
    width:100%;
    height: 1px;
    background: #eee;
    clear: both;
}

.hw-100{
  width:100%;
  height: 100%;
}



</style>