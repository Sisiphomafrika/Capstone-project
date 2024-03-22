<template>
    <div class="container">
      <div class="row">
        <h2 class="display-2">Products</h2>
      </div>
      <div class="row">
        <div v-for="product in products" :key="product.id" class="col-md-4 mb-3">
          <div class="card">
            <img :src="product.image" class="card-img-top" alt="Product Image">
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">Price: ${{ product.price }}</p>
              <router-link
                :to="{ name: 'product-details', params: { id: product.id }}"
                class="btn btn-primary"
              >View More</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      products() {
        return this.$store.state.products;
      },
    },
    mounted() {
      this.$store.dispatch('fetchProducts');
    },
  };
  </script>
  
  <style scoped>
  .container {
    background-color: #f8f9fa;
    padding: 20px;
  }
  
  .card {
    background-color: #0e0e0f;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s;
  }
  
  .card:hover {
    box-shadow: 0 4px 8px rgba(181, 173, 173, 0.2);
  }
  
  .card-body {
    padding: 15px;
  }
  
  .card-title {
    font-size: 1.25rem;
    margin-bottom: 10px;
  }
  
  .card-text {
    color: hsl(0, 0%, 100%);
    margin-bottom: 15px;
  }
  
  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }
  </style>
  