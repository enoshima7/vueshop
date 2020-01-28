<template>
  <div class="home">
    <Navbar />
    <Hero />
    <Products />
    <div class="container h-100">
      <div class="row p-5 h-100 justify-content-center align-items-center">
        <div class="col-md-6">
          <img src="~assets/img/products/4.svg" alt width="400" />
        </div>
        <div class="col-md-6">
          <h3>Learn More About us</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quaerat voluptate iusto? Nihil voluptas vitae veritatis magnam reprehenderit, reiciendis ex? Libero quasi natus veniam voluptatum, voluptas exercitationem ratione consectetur et!</p>
          <button class="btn custom-btn btn-outline-primary mr-4">Browse Products</button>
        </div>
      </div>
    </div>
    <Login />
    <miniCart />
  </div>
</template>

<script>
import Login from "./Login";
import Hero from "./Hero";
import Products from "./Products";
import miniCart from "./miniCart";
export default {
  name: "home",
  components: { Hero, Products, Login, miniCart }
};
</script>

<style>
</style>