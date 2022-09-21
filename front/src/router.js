import { createWebHistory, createRouter } from "vue-router";
// import Login from "./pages/LoginPage.vue";
import home from "./pages/HomePage.vue";
import main from "./pages/MainPage.vue";

const routes=[

    {
        path:"/",
        name:'home',
        component: home,
        
        
    },
    {
        path:"/category:selected",
        name:'main',
        component:main,
    }


]
    

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router