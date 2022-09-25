import { createWebHistory, createRouter } from "vue-router";
<<<<<<< HEAD
// import Login from "./pages/LoginPage.vue";

const routes=[


=======
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
>>>>>>> 3ffd01ee4226f930c1396d79582e5818643d079b
]
    

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router