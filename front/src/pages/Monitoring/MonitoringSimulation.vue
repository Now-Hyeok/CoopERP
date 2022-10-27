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
export default {
    name:"monitoringSimulation",
    data(){
        return{
            storagePeriod:null,
            demand:null,
            afterSowing:null,
            
        }
    },
    methods:{
        simulationStart(){

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