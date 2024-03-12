import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProductsView from '../views/ProductsView.vue'
import ContactView from '../views/ContactView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about', 
    component: AboutView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  
  
  {
    path: '/Contact',
    name: 'Contact',
    component: ContactView
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router