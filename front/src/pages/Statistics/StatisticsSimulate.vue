<template>
    <p>statistics Simulate</p>
    <div>
    <button class="w-50 btn btn-lg btn-primary"  @click="engine">Simulate</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
  
    name: 'statisticsSimulate',
    data() {
      return{
        engineGo: false,
        GoData: null
      }
    },
    methods: {
      engine() {
        this.engineGo = true
        const Go = this.engineGo
        axios.post(`/api/statistics/engine`, {Go})
          .then((res) => {
            this.GoData = res.data;
          })
          .catch((err) => {
            console.error(err);
          })
      }
    }
  }
  </script>
  
  <style>
  
  </style>