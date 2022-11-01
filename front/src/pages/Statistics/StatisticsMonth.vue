<template>
  <div class="bar-chart">
    <h1>Statistics Month</h1>
    <Line />
    <bar />
  </div>


  

</template>
  
<script>
import Line from '@/components/Chart/MonthLineChart.vue'
import bar from '@/components/Chart/MonthBarChart.vue'


export default {
  components: { Line, bar },
  name: 'statisticsMonth',
  data() {
    return {

    }
  },
}
</script>
  
<style>
.bar-chart{
  margin-left: 300px;
}
</style>