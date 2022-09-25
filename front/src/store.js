// import axios from 'axios'
import {createStore} from 'vuex'
// import axios from 'axios'


const store = createStore({
    state(){
        return{
            //데이터 여기에 보관하기 vuex
            category:'',

        }
    },
    mutations:{
        //state변경 함수를 정의
        userSelect(state, payload){
            state.category = payload;
        }
    },
    actions:{
        //ajax와같이 시간걸리는것
       
        
    },
})


export default store;