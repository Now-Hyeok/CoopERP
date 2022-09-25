import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from './components/HelloWorld'
import Login from "./pages/LoginPage"
import SignUp from './pages/SignUp'
import Inventory from './pages/InventoryPage'
// import Login from "./pages/LoginPage.vue";

const routes = [
    {
        path: "/",
        component: Login,
    },
    {
        path: "/hello",
        component: HelloWorld
    },
    {
        path: "/signup",
        component: SignUp
    },
    {
        path: "/inventory",
        component: Inventory
    }
]
    

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router