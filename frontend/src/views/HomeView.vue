<template>
  <main class="container text-center mt-5 animate__animated animate__swing animate__backInDown">
    <div class="text">
      <span id="landingP" class="landingP rotate-3d bold p" data-char="#">WELCOME</span>
      <span id="landingP" class="landingP rotate-3d bold" data-char="#">TO</span>
      <span id="landingP" class="landingP rotate-3d bold" data-char="#"> SUNPOWER</span>
      <span id="landingP" class="landingP rotate-3d bold" data-char="#">INNOVATIONS. </span>
      <router-link to="/products">
        <img height="170px" width="170px" id="B"
          src="https://www.bing.com/th/id/OGC.eec74a195dc966cafb9052d2ebe4fb7f?pid=1.7&rurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f0f%2fe6%2f62%2f0fe66229dd01d34b5d89f681d97ded29.gif&ehk=X8vJHvsITL6Q5aGj%2boDhQRUENLQQhHGn9MDWtQuQp3Y%3d"
          loading="lazy" alt="takesmeproductpage">
      </router-link>
      <div class="centered">
        <button class="btn btn-primary mt-3">Get a Quote</button>
      </div>
    <div>
      <p class="lead">
        "where we're dedicated to providing innovative solutions for a sustainable future. Explore our range of cutting-edge products and services designed to help you save money and reduce your carbon footprint. Join us in our mission to create a cleaner, greener world for generations to come. Together, we can make a difference!". </p>
    </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'LandingPage',
};
</script>

<style scoped>
.text {
  color: #000000;
  padding: 40px;
  font-size: large;
}
#B {
  border-radius: 50%;
  margin-left: 65px;
}
#landingP {
  font-family: "Honk", system-ui;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings:
    "MORF" 15,
    "SHLN" 40;
  background-color: #a7bcb9;;
  font-size: 2rem;
  margin-bottom: 3%;
  border-radius: 10%;
}
.rotate-3d {
  display: inline-block;
  transform-style: preserve-3d;
  transform: perspective(1000px) rotateY(20deg);
  transition: transform 0.5s;
}
.rotate-3d:hover {
  transform: perspective(1000px) rotateY(360deg);
}
.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}
.btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.Home{
  background: radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%);
}
</style>