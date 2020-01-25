<template>
  <div class="profile">
      <div class="container h-100">
          <div class="intro h-100">
            <div class="row h-100 justify-content-center align-items-center">
              <div class="col-md-6">
                 <h3>Profile Page</h3>
                 <p>
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, ducimus.
                 </p>
              </div>
              <div class="col-md-6">
                  <img src="~assets/img/products/8.svg" alt="" class="img-fluid">
              </div>
            </div>
          </div>
     
      </div>
    
  </div>
</template>

<script>
export default {
  name: "profile",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>