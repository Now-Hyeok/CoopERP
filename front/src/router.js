import { createWebHistory, createRouter } from "vue-router";
import Login from "./pages/LoginPage"
import SignUp from './pages/SignUp'
import Home from './pages/HomePage'
import Main from './pages/MainPage'

import coopMain from './pages/COOPmanagement/CoopMain'
import coopManagement from './pages/COOPmanagement/CoopManagement.vue'
import coopRegister from './pages/COOPmanagement/CoopRegister'

import inventoryMain from './pages/InventoryManagement/InventoryMain'
import inventoryStatus from './pages/InventoryManagement/InventoryStatus'
import inventoryRegister from './pages/InventoryManagement/InventoryRegister'

import transactionMain from './pages/TransactionManagement/TransactionMain'

import statisticsMain from './pages/Statistics/StatisticsMain'

import communicationMain from './pages/Communication/CommunicationMain'

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
        redirect:'/coop-management/main',
        children:[
            {
                path:'main',
                name:'coopmain',
                component:coopMain
            },
            {
                path:'COOP Management',
                name:'coopManagement',
                component:coopManagement,
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
        redirect:'/inventory-management/main',
        children:[
            {
                path:'main',
                name:'inventoryMain',
                component:inventoryMain,
            },
            {
                path:'Inventory status',
                name:'inventoryStatus',
                component:inventoryStatus,
            },
            {
                path:'Inventory Register',
                name:'inventoryRegister',
                component:inventoryRegister,
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
        path:"/communication",
        component:Main,
        name:"communication",
        redirect:'/communication/main',
        children:[
            {
                path:'main',
                name:'communicationMain',
                component:communicationMain,
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