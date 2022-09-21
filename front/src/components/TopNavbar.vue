<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand"  href="/" id="Navbar">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/category/management" id="management">management</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/category/add1" id="add1">add1</a>
        </li>     
        <li class="nav-item">
          <a class="nav-link" href="/category/add2" id="add2">add2</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name:"TopNavbar",
    data(){
      return{
        chagePage:''
      }
    },
    methods:{
      choice(e){
        console.log(e.target.id)
      }
    }
  
}
</script>

<style>
.navber{
  height: 100%;
}
</style>