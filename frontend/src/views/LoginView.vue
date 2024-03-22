<template>
  <div class="container">
    <div class="login">
      <h1>Login Form</h1>
      <form @submit.prevent="login" class="needs-validation" novalidate>
        <div class="input-box">
          <input type="email" v-model="emailAdd" class="form-control" id="email" placeholder="Email" required>
          <div class="invalid-feedback">Please provide a valid email.</div>
          <i class="fa fa-envelope"></i>
        </div>
        <div class="input-box">
          <input type="password" v-model="userPass" class="form-control" id="password" placeholder="Password" required>
          <div class="invalid-feedback">Please provide your password.</div>
          <i class="fa fa-lock"></i>
        </div>
        <a href="#" class="for_get">Forget Your Password?</a>
        <button type="submit" class="btn btn-primary">Login</button>
        <p v-if="loginError" class="mt-3 error-message">{{ loginError }}</p>
        <p class="mt-3">Don't have an account? <router-link to="/register">Register</router-link></p>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import { mapActions, commit } from 'vuex';
export default {
  data() {
    return {
      emailAdd: '',
      userPass: '',
      loginError: '',
    };
  },
  methods: {
    ...mapActions(['login', 'fetchUser']),
    async login() {
      try {
        const response = await axios.post('https://capstone-project-x8jr.onrender.com/login', {
          email: this.emailAdd,
          password: this.userPass
        });
        const token = response.data.token;
        localStorage.setItem('token', token);
        const userID = response.data.id;
        await this.fetchUser(userID);
        commit('setLoggedInUser', response.data);
        if (localStorage.getItem('user')) {
          this.$router.push('/');
          Swal.fire({
            icon: 'success',
            title: 'Welcome back!',
            text: 'Login successful!',
            timer: 2000,
            showConfirmButton: false
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Fail to login',
            text: 'Try again',
            timer: 2000,
            showConfirmButton: false
          });
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          this.loginError = 'User not found. Please sign up first.';
        } else {
          console.error('Error logging in:', error);
        }
      }
    },
    async fetchUser(userID) {
      try {
        const response = await axios.get(`https://capstone-project-x8jr.onrender.com/users/${userID}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        localStorage.setItem('user', JSON.stringify(response.data));
      } catch (error) {
        console.error('Error fetching user details:', error);
        alert('An error occurred while fetching user details.');
      }
    }
  }
};
</script>
<style  scoped>
body {
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  font-family: "Open Sans";
}
.container {
  position: relative;
  min-height: 100vh;
  max-width: 100% !important;
  overflow: hidden;
  display: grid;
  place-items: center;
}
.container::before {
  content: "";
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: #7B66FF;
  animation: move-up6 2s ease-in infinite alternate-reverse;
}
.container::after {
  content: "";
  position: absolute;
  vertical-align: bottom;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: #5FBDFF;
  animation: move-up6 2s ease-in infinite alternate-reverse;
}
@keyframes move-up6 {
to {
      transform: translateY(-50px);
  }
}
a {
  text-decoration: none;
}
.login {
  position: relative;
  width: 350px;
  padding: 30px;
  height: fit-content;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  z-index: 10;
  backdrop-filter: blur(25px);
  box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.2),
  -10px -10px 40px rgba(0, 0, 0, 0.2);
}
@media (max-width:400px) {
  .login {
      width: 90%;
  }
}
.login h1 {
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 40px;
  margin-top: 0;
  text-align: center;
}
.login form {
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
}
.login form .input-box {
  width: 100%;
  position: relative;
  margin-bottom: 30px;
  display: flex;
}
.login form .input-box input {
  width: 100%;
  border: none;
  padding: 1rem 2.7rem 1rem 1rem;
  border-radius: 10px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
}
.login form .input-box input::placeholder {
  color: #fff;
  font-size: 0.8rem;
  transition: 0.5s ease;
}
.login form .input-box input:focus::placeholder {
  opacity: 0;
}
.login form .input-box input:focus {
  outline: none;
}
.login form .input-box i {
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  color: #fff;
  font-size: 1.2rem;
}
.login form .rembar {
  margin-bottom: 30px;
  width: 100%;
}
.login form .rembar input {
  appearance: none;
}
.login form .rembar label {
  color: #fff;
  position: relative;
  width: 100%;
  padding-left: 35px;
  font-size: 0.9rem;
}
.login form .rembar label::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
}
.login form .rembar label::after {
  content: "";
  position: absolute;
  left: 4px;
  top: 50%;
  transform: translateY(-50%);
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #fff;
  transition: 0.5 ease;
  opacity: 0;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}
.login form .rembar input:checked + label::after {
  opacity: 1;
}
.login form button {
  width: 100%;
  border: none;
  padding:   1rem 1rem 2.7rem;
  border-radius: 10px;
  color: #fff;
  margin-bottom: 30px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  transition: 0.5s ease;
  cursor: pointer;
  font-weight: 600;
}
.login form button:hover {
  background-color: #111;
}
.login form .links {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 15px;
}
.login form .links a {
  color: #fff;
  font-weight: 100;
  font-size: 0.7rem;
}
</style>



















