<template>
<nav class="navbar navbar-expand-lg py-3" id="topNavbar">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">ERP System</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
          <a class="nav-link active"  @click='userSelect("Category1")' >Category1</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active"  @click='userSelect("Category2")'>Category2</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active"  @click='userSelect("Category3")' >Category3</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active"  @click='userSelect("Category4")'>Category4</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active"  @click='userSelect("Category5")'>Category5</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
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


ul li{
    margin-left: 25px;
}
.line{
    width:100%;
    height: 1px;
    background: #eee;
}
</style>