<template>
  <div class="bar-chart">
    <h1>Statistics Month</h1>
    <Line />
    <bar />
  </div>


  

</template>
  
<script>
import Line from '@/components/Chart/LineChart.vue'
import bar from '@/components/Chart/barChart.vue'


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