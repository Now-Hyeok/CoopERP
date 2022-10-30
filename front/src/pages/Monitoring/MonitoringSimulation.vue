<template>

    <div class="simulation-input">

        <div class="input-group mt-4 mb-4">
            <label class="input-group-text" id="inputGroup-sizing-default">Storage period</label>
            <input type="number" min="0" class="form-control" name="storagePeroid" id="storagePeroid"
                v-model="storagePeriod">
        </div>

        <div class="input-group mb-4">
            <label class="input-group-text" id="inputGroup-sizing-default">Expected change in demand</label>
            <span class="input-group-text">+</span>
            <input type="number" min="0" class="form-control" name="demand" id="demand" v-model="demand">
            <span class="input-group-text">%</span>
        </div>

        <div class="input-group mb-4">
            <label class="input-group-text" id="inputGroup-sizing-default">Expected change in supply</label>
            <span class="input-group-text">+</span>
            <input type="number" min="0" class="form-control" name="afterSowing" id="supply" v-model="supply">
            <span class="input-group-text">%</span>
        </div>

        <button class="btn btn-primary" type="button" @click="simulationStart">Simulation</button>
    </div>

    <div class="simulation-result">
        <h1>Simulation Result</h1>
        <LineChart />

        <span>{{ this.GoData }}</span>
    </div>


</template>

<script>
import axios from 'axios'
import LineChart from '@/components/useChart.vue'

export default {
    name: "monitoringSimulation",
    components: { LineChart },
    data() {
        return {
            storagePeriod: null,
            demand: null,
            supply: null,
            engineGo: true,
            GoData: null,
            Data: null
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
        }
    },
}
</script>

<style>
.simulation-input {
    padding: 15px;
    width: 50%;
    height: 30%;
}

.simulation-result {
    padding: 15px;
    width: 70%;
}
</style>