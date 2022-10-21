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
            warehousingModal:false,
            salesModal:false,
            productList:{},
            memberList:{},
            salesList:{},
            warehousingList:{},
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
        openWarehousingModal(state){
            state.warehousingModal = true;
        },
        closeWarehousingModal(state){
            state.warehousingModal = false;
        },
        openSalesModal(state){
            state.salesModal=true;
        },
        closeSalesModal(state){
            state.salesModal=false;
        },
        setProductList(state,payload){
            state.productList = payload;
        },
        setMemberList(state,payload){
            state.memberList = payload;
        },
        setWarehousingList(state,payload){
            state.warehousingList = payload;
        },
        setSalesList(state,payload){
            state.salesList = payload;
        },
        setUser(state, user) {
            console.log(user);
            state.user = user;
        }


    },
    actions:{
        //ajax와같이 시간걸리는것
        getProductList(context){
            let id = context.state.user.Coop_id;
            axios.get(`/api/product/data/${id}`,
            )
            .then((res)=>{
                context.commit('setProductList',res.data);
            })
            .catch((err)=>{
                console.error(err);
            })
        },
 
        getMemberList(context){
            let id = context.state.user.Coop_id;
            axios.get(`/api/member/data/${id}`)
            .then((res)=>{
                context.commit('setMemberList',res.data);
                console.log();
                
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
        },

        getWarehousing(context){
            axios.get("/api/warehousing/stock")
            .then((res) => {

            context.commit('setWarehousingList',res.data);
            })
            .catch((err) => {
            console.error(err);
            });
        },

        getSalesList(context){
            axios.get(`/api/sales/data`)
            .then((res)=>{
                context.commit('setSalesList',res.data);
            })
            .catch((err)=>{
                console.error(err);
            })
        },

        
    },
})


export default store;
