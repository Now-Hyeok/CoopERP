<template>
  <div class="bar-chart">
    <h1>Statistics Week</h1>
    <Line />
    <bar />
  </div>


</template>
    
<script>
  import Line from '@/components/Chart/WeekLineChart.vue'
  import bar from '@/components/Chart/WeekBarChart.vue'
  
  
  export default {
    components: { Line, bar },
    name: 'statisticsWeek',
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