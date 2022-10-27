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
            <label class="input-group-text" id="inputGroup-sizing-default" >Harvest supply</label>
            <input type="number" min="0" class="form-control" name="afterSowing" id="supply" v-model="supply">
        </div>

        <button class="btn btn-primary" type="button" @click="simulationStart">Simulation</button>
    </div>

    <div class="simulation-result">
        <p>결과 짜잔</p>
    </div>
    <div class="w-50">
        <LineChart />
    </div>
    <div>
    <span>{{this.GoData}}</span>
    </div>
    
</template>

<script>
import axios from 'axios'
import LineChart from '@/components/lineChart.ts'

export default {
    name: "monitoringSimulation",
    components: { LineChart },
    data() {
        return {
            storagePeriod: null,
            demand: null,
            supply: null,
            engineGo: true,
            GoData: null
        }
    },
    methods: {
        simulationStart() {
            const period = this.storagePeriod
            const demand = this.demand
            const supply = this.supply
            axios.post(`/api/simulate/engine`, { period, demand, supply })
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