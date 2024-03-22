<template>
    <div class="user-profile">
      <h2>User Profile</h2>
      <div class="profile-info">
        <p><strong>Name:</strong> {{ user.name }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Username:</strong> {{ user.username }}</p>
      </div>
      <button @click="editProfile">Edit Profile</button>
      <div v-if="editing" class="edit-profile-form">
        <h3>Edit Profile</h3>
        <form @submit.prevent="saveProfile">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="editedUser.name" required>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="editedUser.email" required>
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="editedUser.username" required>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          name: 'John Doe',
          email: 'john.doe@example.com',
          username: 'johndoe123'
        },
        editedUser: {
          name: '',
          email: '',
          username: ''
        },
        editing: false
      };
    },
    methods: {
      editProfile() {
        this.editing = true;
        // Copy user data to editedUser
        this.editedUser = { ...this.user };
      },
      saveProfile() {
        // Save editedUser data to user
        this.user = { ...this.editedUser };
        this.editing = false;
      }
    }
  };
  </script>
  
  <style>
  .user-profile {
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .profile-info {
    margin-bottom: 20px;
  }
  
  .edit-profile-form {
    margin-top: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
  }
  
  button {
    padding: 5px 10px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  