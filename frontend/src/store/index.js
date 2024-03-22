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
          { id: 1, name: 'Hoppy Haze IPA ', price: 50, image: 'https://i.ibb.co/Qj1PjLD/images-34.jpg', description: ' Celebrate the blissful union of hops and haze with this IPA. Let the aromatic blend of hops dance on your palate, leaving a lingering sense of satisfaction.' },
          { id: 2, name: 'Golden Lager Jubilee', price: 100, image: 'https://i.ibb.co/6Nqp1P9/images-29.jpg', description: ' Raise a glass to the classic taste of tradition with this golden lager. Its crisp, clean flavor profile is a jubilee for your taste buds, making every sip a celebration.' },
          { id: 3, name: 'Amber Ale Euphoria', price: 120, image: 'https://i.ibb.co/X35gyPy/images-24.jpg', description: ' Experience the euphoria of flavor with this amber ale. Its rich, caramel maltiness is perfectly balanced by a hint of hoppy bitterness, creating a taste sensation worth celebrating.' },
          { id: 1, name: 'Stout Serenade', price: 140, image: 'https://i.ibb.co/TtJCntm/images-36.jpg', description: 'Indulge in the dark, velvety notes of this stout. Its smooth, roasted malt character serenades your senses, offering a symphony of flavors in every sip.1' },
          { id: 2, name: 'Wheat Beer Whimsy ', price: 90, image: 'https://i.ibb.co/K7rsbMB/images-35.jpg', description: 'Embrace the whimsical side of beer with this wheat beer. Its light, refreshing taste is complemented by hints of citrus and spice, making it the perfect companion for any occasion.' },
          { id: 3, name: 'Sour Ale Soirée', price: 145, image: 'https://i.ibb.co/YQzxG5b/images-37.jpg', description: 'Join the soirée of flavor with this sour ale. Its tart, fruity notes are sure to surprise and delight your palate, making every sip a celebration of taste.' }
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
