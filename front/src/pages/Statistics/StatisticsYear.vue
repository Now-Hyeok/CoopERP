<template>
  <div class="bar-chart">
    <h1>Statistics Year</h1>
    <Line />
    <bar />

  </div>

</template>
    
<script>
  import Line from '@/components/Chart/YearLineChart.vue'
  import bar from '@/components/Chart/YearBarChart.vue'
  
  
  export default {
    components: { Line, bar },
    name: 'statisticsYear',
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