// import axios from 'axios'
import axios from 'axios';
import {createStore} from 'vuex'
import router from "./router.js"
// import axios from 'axios'



const store = createStore({
    state(){
        return{
            //데이터 여기에 보관하기 vuex
            category:'',
            memberModal:false,
            productModal:false,
            salesModal:false,
            productList:{},
            memberList:{},
            salesList:{},
            user: null,
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
        openSalesModal(state){
            state.salesModal = true;
        },
        closeSalesModal(state){
            state.salesModal = false;
        },
        setProductList(state,payload){
            state.productList = payload;
        },
        setMemberList(state,payload){
            state.memberList = payload;
        },
        setSalesList(state,payload){
            state.salesList = payload;
        },
        setUser(state, user) {state.user = user;}


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

        getSalesList(context){
            axios.get('/api/sales/data')
            .then((res)=>{
                context.commit('setSalesList',res.data);
            })
            .catch((err)=>{
                console.error(err);
            })
        },

        getUserInfo(context){
            axios.get('/api/login/signIn').then((res)=>{
                const user = res.data.user;
                if(user){
                    context.commit('setUser',user);
                }else{
                    router.push({name:'login'});
                }
            })
            .catch((err)=>{
                console.error(err);
            });
        }
        

        
    },
})


export default store;
