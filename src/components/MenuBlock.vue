<!-- WebXP: Resume: SuperGeek: Container -->
<template>
  <div class="menu-block">
    <h1>Menu</h1>
    <div class="row">
      <div
        class="col-xs-12 col-sm-6 col-md-4 col-lg-4 mt-4"
        v-for="(menu, index) in menus"
        :key="index"
      >
        <b-card
          :title="menu.title"
          :sub-title="menu.description"
          :img-src="menu.picture"
          :img-alt="menu.title"
          img-fluid
          img-top
        >
          <span class="price">Price: {{menu.price}}</span>
        </b-card>
      </div>
    </div>
    <div class="show-more">
      <router-link to="/menu?item=breakfast">
        <b-button size="lg" pill variant="outline-dark">Show More</b-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuBlock",
  components: {},
  props: ["menus"],
  data: function() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>

<style scoped lang="scss">
.menu-block {
  width: 100%;
  padding: 40px 40px;

  h1 {
    font-size: 60px;
    margin: 20px 0;
    text-align: center;
  }
  .show-more {
    display: table;
    margin: 0 auto;
    margin-top: 40px;
  }
}
</style>