<template>
  <div>
    <div class="navigation-bar">
      <v-container
        v-model="drawer"
      >
        <div class="nav-inner d-flex justify-space-between">
          <v-btn
            @click="drawer = !drawer"
            v-model="drawer"
            class="navigation-toggle"
            elevation="0"
            text
            @mousedown="navToggleClick"
          >
            <v-icon>mdi-menu</v-icon>
          </v-btn>

          <v-img class="logo" src="images/homemadeCrunchLogo.svg" v-scroll-to="'#hero'"></v-img>

          <div class="d-flex">
            <v-btn
              elevation="0"
              text
              v-scroll-to="'#shop'"
              class="nav-shop product__button mr-3"
              id="nav_granola"
              @mousedown="navScrollToShopClick"
            >
              Shop Granola
            </v-btn>

            <v-btn
              class="header__button header__checkout snipcart-checkout"
              elevation="0"
              text
              @mousedown="navCheckoutclick"
            >
              <v-icon class="pointer-none">mdi-cart</v-icon>
              <span class="header__button-text header__price snipcart-total-price pointer-none"></span>
            </v-btn>
          </div>
        </div>
      </v-container>
    </div>

    <v-card class="navigation-drawer"
      v-model="drawer"
      height="100%"
      width="100%"
      flat
    >
      <v-container>
        <v-list
        nav
        dense
        width="50%"
        class="mx-auto"
        >
          <v-list-item-group
            v-model="group"
          >
            <v-list-item
              class="about-nav nav-item"
              style="animation-delay:0.1s"
              v-scroll-to="'#about'"
              @click="drawer = false"
              @mousedown="navAboutLinkClick"
            >
              <h1 class="py-6 px-3 pointer-none">About us</h1>
            </v-list-item>

            <v-list-item
              class="local-nav nav-item"
              style="animation-delay:0.2s"
              v-scroll-to="'#source'"
              @click="drawer = false"
              @mousedown="navSourceLinkClick"
            >
              <h1 class="py-6 px-3 pointer-none">Locally Sourced</h1>
            </v-list-item>

            <v-list-item
              class="shop-nav nav-item"
              style="animation-delay:0.3s"
              v-scroll-to="'#shop'"
              @click="drawer = false"
              @mousedown="navShopLinkClick"
            >
              <h1 class="py-6 px-3 pointer-none">Shop Granola</h1>
            </v-list-item>

            <v-list-item
              class="contact-nav nav-item"
              style="animation-delay:0.4s"
              v-scroll-to="'#contact-about'"
              @click="drawer = false"
              @mousedown="navContactLinkClick"
            >
              <h1 class="py-6 px-3 pointer-none">Contact us</h1>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-container>
    </v-card>
  </div>
</template>

<script>
  import Vue from "vue";
  import Logo from "~/components/icons/Logo.vue";
  import Checkout from "~/components/icons/Checkout.vue";

  var VueScrollTo = require('vue-scrollto');
  Vue.use(VueScrollTo);

  export default Vue.extend({
    components: {
      Logo
    },
    data: () => ({
      drawer: false,
      group: null,
    }),
     methods: {
      //Toggle
      navToggleClick: function() {
        window.splitbee.track("Nav_toggle_click");
      },
      navScrollToShopClick: function() {
        window.splitbee.track("Nav_scroll_to_shop_click");
      },
      navCheckoutclick: function() {
        window.splitbee.track("Nav_checkout_click");
      },
      navAboutLinkClick: function() {
        window.splitbee.track("Nav_about_link_click");
      },
      navSourceLinkClick: function() {
        window.splitbee.track("Nav_source_link_click");
      },
      navShopLinkClick: function() {
        window.splitbee.track("Nav_shop_link_click");
      },
      navContactLinkClick: function() {
        window.splitbee.track("Nav_contact_link_click");
      }
    }
  });
</script>
