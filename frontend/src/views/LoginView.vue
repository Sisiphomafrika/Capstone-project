<template>
    <div>
      <h2>Login</h2>
      <input v-model="email" type="email" placeholder="Email">
      <input v-model="password" type="password" placeholder="Password">
      <button @click="login">Login</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === this.email && u.password === this.password);
        if (user) {
          alert('Login successful');
          // Redirect or set user state
        } else {
          alert('Invalid email or password');
        }
      }
    }
  };
  </script>
  