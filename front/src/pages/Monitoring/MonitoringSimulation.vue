<template>

    <div class="simulation-input">

        <div class="input-group mb-4">
            <label class="input-group-text" id="inputGroup-sizing-default" >Storage period</label>
            <input type="number" min="0" class="form-control" name="storagePeroid" id="storagePeroid" v-model="storagePeriod">
        </div>

        <div class="input-group mb-4">
            <label class="input-group-text" id="inputGroup-sizing-default" >Expected change in demand</label>
            <input type="number" min="0" class="form-control" name="demand" id="demand" v-model="demand">
        </div>
 
        <div class="input-group mb-4">
            <label class="input-group-text" id="inputGroup-sizing-default" >Harvest time after sowing</label>
            <input type="number" min="0" class="form-control" name="afterSowing" id="afterSowing" v-model="afterSowing">
        </div>

        <button class="btn btn-primary" type="button" @click="simulationStart">Simulation</button>
    </div>

    <div class="simulation-result">
        <p>결과 짜잔</p>
    </div>
    
</template>

<script>
import axios from 'axios'

export default {
    
    name:"monitoringSimulation",
    data(){
        return{
            storagePeriod:null,
            demand:null,
            afterSowing:null,
            engineGo: false,
            GoData: null
        }
    },
    methods:{
        simulationStart(){
        const period = this.storagePeriod
        const demand = this.demand
        axios.post(`/api/simulate/engine`, {period,demand})
          .then((res) => {
            this.GoData = res.data;
          })
          .catch((err) => {
            console.error(err);
          })
      },
        
    },

}
</script>

<style>
.simulation-input{
    width:50%;
    height:30%;
}
.simulation-result{

}

</style>