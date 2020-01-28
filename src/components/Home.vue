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
    <!-- Modal -->
    <div
      class="modal fade"
      id="miniCart"
      tabindex="-1"
      role="dialog"
      aria-labelledby="miniCartLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="miniCartLabel">My Bag</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <ul>
              <li v-for="(item,index) in this.$store.state.cart" :key="index">
                {{item.productName}}
              </li>
            </ul>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Continue Shopping</button>
            <button type="button" class="btn btn-primary">Check Out</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "./Login";
import Hero from "./Hero";
import Products from "./Products";
export default {
  name: "home",
  components: { Hero, Products, Login }
};
</script>

<style>
</style>