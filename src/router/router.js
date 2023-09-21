import { createRouter, createWebHistory } from "vue-router"
import Shop from "../components/Shop.vue"
import ProductDetails from "../components/ProductDetails.vue"

const routes = [
    {path:'/', component: Shop},
    {path:'/product/:id', component: ProductDetails, name:'product'},
 
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
