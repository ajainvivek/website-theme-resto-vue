<!-- WebXP: Resume: SuperGeek: Container -->
<template>
  <div class="header">
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand href="#">
        <span v-if="content.basic.logo">
          <img :src="content.logo" class="d-inline-block align-top" :alt="content.basic.name">
        </span>
        <span v-else>
          <h3>{{content.basic.name}}</h3>
        </span>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#/">Home</b-nav-item>
          <b-nav-item-dropdown text="Menu" right>
            <b-dropdown-item
              v-for="item in menuNavList"
              :key="item.id"
              :href="'#/menu?item=' + item.id"
            >{{item.text}}</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="#/gallery">Gallery</b-nav-item>
          <b-nav-item href="#/contact-us">Contact Us</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" v-click-outside="hidePopOver">
          <b-button
            id="book-table-button"
            size="lg"
            @click="showPopOver"
            variant="outline-light"
          >Book Table</b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-popover :show.sync="show" class="popover" target="book-table-button" placement="auto">
      <div class="open-table-container">
        <div class="text-center widget-loader">
          <b-spinner label="Loading..."></b-spinner>
        </div>
        <OpenTable
          static
          lazy
          url="//www.opentable.com/widget/reservation/loader?rid=412810&type=standard&theme=tall&iframe=true&overlay=true&domain=com&lang=en-US"
        />
      </div>
    </b-popover>
  </div>
</template>

<script>
import OpenTable from "./OpenTable";

export default {
  name: "Header",
  components: {
    OpenTable
  },
  props: ["content"],
  data: function() {
    return {
      show: false
    };
  },
  mounted() {},
  methods: {
    showPopOver() {
      this.$root.$emit("bv::show::popover", "book-table-button");
    },
    hidePopOver() {
      this.$root.$emit("bv::hide::popover", "book-table-button");
    },
    capitalize: string => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  },
  computed: {
    menuNavList: function() {
      let navs = this.content.menus.data || [];
      navs = navs.map(menu => {
        return {
          id: menu.meal,
          text: this.capitalize(menu.meal)
        };
      });
      navs.push({
        id: "all",
        text: "All Food"
      });
      return navs || [];
    }
  }
};
</script>

<style>
.bg-dark {
  background-color: #252525 !important;
}
.popover {
  background: transparent;
}

.popover-body {
  padding: 0;
  position: relative;
  left: -26px;
}

.open-table-container {
  width: 288px;
  height: 490px;
  background: #fff;
}
.opentable-widget-container {
  position: relative;
  z-index: 2;
}
.ot-dtp-picker.tall {
  width: 288px !important;
}
.widget-loader {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}
</style>

