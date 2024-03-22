import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ProductsView from '../views/ProductsView.vue';
import ContactView from '../views/ContactView.vue';
import AdminView from '../views/AdminView.vue';
import LoginView from '@/views/LoginView.vue';
import ProductDetail from '../views/ProductDetail.vue';
import UserProfile from '../views/UserProfileView.vue';

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
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import( '../views/AdminView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '@/views/LoginView.vue')
  },
  {
    path: '/product/:id',
    name: 'product-details',
    component: () => import('../views/ProductDetail.vue')
  
  
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/UserProfileView.vue')
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
