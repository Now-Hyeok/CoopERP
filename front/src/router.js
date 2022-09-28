import { createWebHistory, createRouter } from "vue-router";
import Login from "./pages/LoginPage"
import SignUp from './pages/SignUp'
import Home from './pages/HomePage'
import Main from './pages/MainPage'
import coopmenu1 from './pages/COOPmanagement/CoopMenu1.vue'
import coopRegister from './pages/COOPmanagement/CoopRegister'
// import CoopMain from './pages/COOPmanagement/CoopMainPage.vue'
// import InvenMain from './pages/InventoryManagement/InventoryMainPage.vue'
// import StatisticsMain from './pages/Statistics/StatisticsMainPage.vue'
// import TransactionMain from './pages/TransactionManagement/TransactionMainPage.vue'
// import C1M1 from "./pages/category1/Menu1Page"

const routes = [
    {
        path: "/login",
        component: Login,
        name:'login'
    },
    {
        path: "/signup",
        component: SignUp,
        name:'singup',
    },
    {
        path: "/home",
        component: Home,
        name:"home"
    },
    {
        path:'/coop-management',
        component:Main,
        name:'coop-main',
        children:[
            {
                path:'coopmenu',
                name:'coopmenu',
                component:coopmenu1,
            },
            {
                path:'Member Register',
                name:'register',
                component:coopRegister,
            },
        ]
    },
    {
        path:"/inventory-management",
        component:Main,
        name:'category2',
        children:[
            {
                path:'menu1',
                name:'menu1',
            }
        ]
    },
    {
        path:"/transaction-management",
        component:Main,
        name:'category3',
        children:[
            {
                path:'menu1',
                name:'menu1',
            }
        ]
    },
    {
        path:"/statistics",
        component:Main,
        name:'category4',
        children:[
            {
                path:'menu1',
                name:'menu1',
            }
        ]
    },
    {
        path:'/', redirect:'/login'
    }

]
    

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router