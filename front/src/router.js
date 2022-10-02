import { createWebHistory, createRouter } from "vue-router";
import Login from "./pages/LoginPage"
import SignUp from './pages/SignUp'
import Home from './pages/HomePage'
import Main from './pages/MainPage'
import coopManagement from './pages/COOPmanagement/CoopManagement.vue'
import coopRegister from './pages/COOPmanagement/CoopRegister'
import inventoryStatus from './pages/InventoryManagement/InventoryStatus'
import inventoryRegister from './pages/InventoryManagement/InventoryRegister'

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
        children:[
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
        children:[
            {
                path:'menu1',
                
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
            }
        ]
    },
    {
        path:"/communication",
        component:Main,
        name:"communication",
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