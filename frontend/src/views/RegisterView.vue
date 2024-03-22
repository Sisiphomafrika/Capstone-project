<template>
  <div class="users-table vh-100 d-flex justify-content-center align-items-center" style="">
    <div class="container">
      <div class="login">
        <h1>Register</h1>
        <form @submit.prevent="register" class="needs-validation" novalidate>
          <div class="input-box mb-3">
            <input v-model="firstName" type="text" class="form-control" placeholder="First Name" required>
            <i class="fa fa-user"></i>
          </div>
          <div class="input-box mb-3">
            <input v-model="lastName" type="text" class="form-control" placeholder="Last Name" required>
            <i class="fa fa-user"></i>
          </div>
          <div class="input-box mb-3">
            <input v-model="Age" id="age" type="number" class="form-control" placeholder="Age">
            <i class="fa fa-calendar"></i>
          </div>
          <div class="input-box mb-3">
            <select v-model="Gender" id="gender" class="form-select" required>
              <option value="" disabled>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <i class="fa fa-venus-mars"></i>
          </div>
          <div class="input-box mb-3">
            <select v-model="Role" id="role" class="form-select" required>
              <option value="" disabled>Select Role</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
            <i class="fa fa-cogs"></i>
          </div>
          <div class="input-box mb-3">
            <input v-model="emailAdd" type="email" class="form-control" placeholder="Email" required>
            <i class="fa fa-envelope"></i>
          </div>
          <div class="input-box mb-3">
            <input v-model="userPass" type="password" class="form-control" placeholder="Password" required>
            <i class="fa fa-lock"></i>
          </div>
          <div class="input-box mb-3">
            <input v-model="userProfile" type="text" class="form-control" placeholder="User Profile">
            <i class="fa fa-user-circle"></i>
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" v-model="saveAccount">
            <label class="form-check-label">Save account for future logins</label>
          </div>
          <p class="text-center">Already have an account? <router-link to="/login">Login</router-link></p>
          <button type="submit" class="btn btn-primary d-block mx-auto" :disabled="submitting">
            {{ submitting ? 'Creating Account...' : 'Create an account' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      Age: '',
      Gender: '',
      Role: '',
      emailAdd: '',
      userPass: '',
      userProfile: '',
      saveAccount: false,
      submitting: false,
    };
  },
  methods: {
    ...mapActions(['register']),
    async register() {
      if (!this.firstName || !this.lastName || !this.emailAdd || !this.userPass) {
        alert('Please fill in all required fields.');
        return;
      }
      try {
        this.submitting = true;
        const response = await axios.post('https://capstone-project-x8jr.onrender.com/users', {
          firstName: this.firstName,
          lastName: this.lastName,
          Age: this.Age,
          Gender: this.Gender,
          Role: this.Role,
          emailAdd: this.emailAdd,
          userPass: this.userPass,
          userProfile: this.userProfile,
        });
        const token = response.data.token;
        document.cookie = `token=${token}; path=/`;
        alert('Registration successful!');
        console.log(response.data);
        this.firstName = '';
        this.lastName = '';
        this.Age = '';
        this.Gender = '';
        this.Role = '';
        this.emailAdd = '';
        this.userPass = '';
        this.userProfile = '';
        this.saveAccount = false;
      } catch (error) {
        if (error.response && error.response.status === 409) {
          alert('This email address is already registered. Please log in instead.');
          this.$router.push('/login');
        } else {
          console.error('Error registering user:', error);
          alert('An error occurred during registration. Please try again later.');
        }
      }
      finally {
        this.submitting = false;
      }
    },
  },
};
</script>
<style scoped>
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
  width: 700px;
  height: 600px;
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
.login {
  position: relative;
  width: 500px;
  padding: 30px;
  height: fit-content;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  z-index: 10;
  backdrop-filter: blur(25px);
  box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.2), -10px -10px 40px rgba(0, 0, 0, 0.2);
}
@media (max-width: 400px) {
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
}
</style>