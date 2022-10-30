<template>
    <h1>Statistics Month</h1>
    <Line />
    <bar />
  
    
  
  </template>
    
  <script>
  import Line from '@/components/Chart/LineChart.vue'
  import bar from '@/components/Chart/barChart.vue'
  
  
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
    width: 50%;
    max-height: 300px;
  }
  </style>