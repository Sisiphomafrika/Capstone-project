<template>
    <div class="product-detail">
      <h1>{{ product.name }}</h1>
      <p>Price: ${{ product.price }}</p>
      <p>Description: {{ product.description }}</p>
      <button @click="goBack">Go Back</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['product'],
    methods: {
      goBack() {
        this.$router.go(-1); // Go back to the previous page
      }
    }
  };
  </script>
  
  <style>
  .product-detail {
    margin: 20px;
  }
  </style>