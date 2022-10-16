// import axios from 'axios'
import axios from 'axios';
import {createStore} from 'vuex'
// import axios from 'axios'



const store = createStore({
    state(){
        return{
            //데이터 여기에 보관하기 vuex
            category:'',
            memberModal:false,
            productModal:false,
            productList:{},
            memberList:{},
        }
    },
    mutations:{
        //state변경 함수를 정의
        userSelect(state, payload){
            state.category = payload;
        },
        openMemberModal(state){
            state.memberModal=true;
        },
        closeMemberModal(state){
            state.memberModal=false;
        },
        openProductModal(state){
            state.productModal = true;
        },
        closeProductModal(state){
            state.productModal = false;
        },
        setProductList(state,payload){
            state.productList = payload;
        },
        setMemberList(state,payload){
            state.memberList = payload;
        }
    },
    actions:{
        //ajax와같이 시간걸리는것
        getProductList(context){
            axios.get('/api/product/data')
            .then((res)=>{
                context.commit('setProductList',res.data);
            })
            .catch((err)=>{
                console.error(err);
            })
        },

        getMemberList(context){
            axios.get('/api/member/data')
            .then((res)=>{
                context.commit('setMemberList',res.data);
            })
            .catch((err)=>{
                console.error(err);
            })
        },

        
    },
})


export default store;
