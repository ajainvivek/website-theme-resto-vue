<template>
  <div id="app">
    <div class="page-loader d-flex justify-content-center align-items-center mb-3" v-if="loading">
      <b-spinner label="Loading..."></b-spinner>
    </div>
    <div v-else>
      <Header :content="content"/>
      <transition name="fade" mode="out-in">
        <router-view :content="content"></router-view>
      </transition>
      <Footer :content="content.basic"/>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  components: { Header, Footer },
  created() {
    let vm = this;
    this.$http
      .get("https://cdn.webxp.io/themes/restaurant/resto/content.json")
      .then(function(response) {
        vm.content = response.data;
        vm.loading = false;
      });
  },
  data: function() {
    return {
      transitionName: "slide-left",
      loading: true,
      content: {}
    };
  }
};
</script>

<style>
:root {
  --primary: red;
  --blue: red;
}
html,
body {
  height: 100%;
  width: 100%;
}
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-family: "EB Garamond", serif;
}
#app,
.page-loader {
  height: 100%;
  width: 100%;
}
.row {
  margin-right: 0;
  margin-left: 0;
}
.carousel-caption {
  height: 100%;
}
.navbar {
  padding: 2rem 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style> 
