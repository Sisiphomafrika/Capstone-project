import { createStore } from 'vuex';
import axios from 'axios';
import sweet from 'sweetalert';
import { useCookies } from 'vue3-cookies';
const { cookies } = useCookies();
import router from '@/router';

// Assuming this is your API URL
const lifeURL = 'https://capstone-project-2-v5n9.onrender.com';

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null
  },
  mutations: {
    setUsers(state, value) {
      state.users = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    setProducts(state, value) {
      state.products = value;
    },
    setProduct(state, value) {
      state.product = value;
    },
  },
  actions: {
    async fetchProducts(context) {
      try {
        // Dummy products data with images
        const dummyProducts = [
          { id: 1, name: 'Beer 1', price: 10, image: 'https://i.ibb.co/Qj1PjLD/images-34.jpg', description: 'Description for Beer 1' },
          { id: 2, name: 'Beer 2', price: 20, image: 'https://i.ibb.co/6Nqp1P9/images-29.jpg', description: 'Description for Beer 2' },
          { id: 3, name: 'Beer 3', price: 30, image: 'https://i.ibb.co/X35gyPy/images-24.jpg', description: 'Description for Beer 3' },
          { id: 1, name: 'Beer 1', price: 10, image: 'https://i.ibb.co/TtJCntm/images-36.jpg', description: 'Description for Beer 1' },
          { id: 2, name: 'Beer 2', price: 20, image: 'https://i.ibb.co/K7rsbMB/images-35.jpg', description: 'Description for Beer 2' },
          { id: 3, name: 'Beer 3', price: 30, image: 'https://i.ibb.co/YQzxG5b/images-37.jpg', description: 'Description for Beer 3' }
        ];

        // Setting dummy products to state
        context.commit('setProducts', dummyProducts);
      } catch (e) {
        sweet({
          title: 'Error',
          text: 'An error occurred when retrieving products.',
          icon: 'error',
          timer: 2000
        });
      }
    },
    async fetchProduct(context, payload) {
      try {
        // Assume the API returns a single product based on ID
        const { data } = await axios.get(`${lifeURL}products/${payload.id}`);
        context.commit('setProduct', data);
      } catch (e) {
        sweet({
          title: 'Error',
          text: 'An error occurred when retrieving the product.',
          icon: 'error',
          timer: 2000
        });
      }
    },
  },
  getters: {
    // Your existing getters
  },
  modules: {
    // Your existing modules
  }
});
