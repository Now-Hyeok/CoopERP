import { createWebHistory, createRouter } from "vue-router";
import Login from "./pages/LoginPage"
import SignUp from './pages/SignUp'
import Home from './pages/HomePage'
import Main from './pages/MainPage'

import coopMain from './pages/COOPmanagement/CoopMain'
import coopManagement from './pages/COOPmanagement/CoopManagement.vue'
import member from './pages/COOPmanagement/CoopMember'

import inventoryMain from './pages/InventoryManagement/InventoryMain'
import warehousing from './pages/InventoryManagement/InventoryWarehousing'
import product from './pages/InventoryManagement/InventoryProduct'
import status from './pages/InventoryManagement/InventoryStatus'

import transactionMain from './pages/TransactionManagement/TransactionMain'
import sales from './pages/TransactionManagement/TransactionSales'
import shipment from './pages/TransactionManagement/TransactionShipment'

import statisticsMain from './pages/Statistics/StatisticsMain'

// import communicationMain from './pages/Communication/CommunicationMain'

const routes = [
    {
        path: "/login",
        component: Login,
        name:'login'
    },
    {
        path: "/signup",
        component: SignUp,
        name:'signup',
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
        redirect:'/coop-management/main',
        children:[
            {
                path:'main',
                name:'coopmain',
                component:coopMain
            },
            {
                path:'coop-management',
                name:'coopManagement',
                component:coopManagement,
            },
            {
                path:'member',
                name:'register',
                component:member,
            },
        ]
    },
    {
        path:"/inventory-management",
        component:Main,
        name:'category2',
        redirect:'/inventory-management/main',
        children:[
            {
                path:'main',
                name:'inventoryMain',
                component:inventoryMain,
            },
            {
                path:'inventory-status',
                name:'inventoryStatus',
                component:status,
            },
            {
                path:'product',
                name:'inventoryRegister',
                component:product,
            },
            {
                path:'warehousing-schedule',
                name:'warehousingSchedule',
                component:warehousing,
            }
        ]
    },
    {
        path:"/transaction-management",
        component:Main,
        name:'category3',
        redirect:'/transaction-management/main',
        children:[
            {
                path:'main',
                name:'transactionMain',
                component:transactionMain,
            },
            {
                path:'sales',
                name:'transaction sales',
                component:sales,

            },

            {
                path:'shipment',
                name:'transaction shipment',
                component:shipment
            }
        ]
    },
    {
        path:"/statistics",
        component:Main,
        name:'category4',
        redirect:'/statistics/main',
        children:[
            {
                path:'main',
                name:'statisticsMain',
                component:statisticsMain,
            }
        ]
    },
    {
        path:"/monitoring",
        component:Main,
        name:"monitoring",
        redirect:'/monitoring/main',
        children:[
            {
                path:'main',
                name:'communicationMain',
                // component:communicationMain,
            },
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