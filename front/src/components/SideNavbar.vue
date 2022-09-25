<template>
  <div>
    
    
   
    <ul v-for="item in categoryData[category]" :key="item">
        <li>{{item}}</li>
    </ul>
    
    
  </div>

</template>

<script>
import { mapState } from 'vuex';
import categoryData from '../category';

export default {
    name:'SideNavbar',
    computed:{
      ...mapState(['category']),
      //computed 안에 mapState 로 가져오면 그냥변수처럼 사용가능
    },
    data(){
      return{
        categoryData:categoryData,
      }
    },
    methods:{

    },

}
</script>

<style>


</style>