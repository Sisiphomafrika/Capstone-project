<template>
    <div class="user-profile">
      <h2>User Profile</h2>
      <div v-if="user">
        <p><strong>Name:</strong> {{ user.name }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Role:</strong> {{ user.role }}</p>
      </div>
      <div v-else>
        <p>No user logged in.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserProfile',
    computed: {
      user() {
        return this.$store.state.user; // Assuming user is stored in Vuex state
      }
    }
  };
  </script>
  
  <style scoped>
  .user-profile {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  </style>
  