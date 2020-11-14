<template>
  <div>
    <div class="navigation-bar">
      <v-container
        v-model="drawer"
      >
        <div class="d-flex justify-space-between">
          <v-btn
            @click="drawer = !drawer"
            class="navigation-toggle"
            elevation="0"
            text
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
            >
              Shop Granola
            </v-btn>

            <v-btn
              class="header__button header__checkout snipcart-checkout"
              elevation="0"
              text
            >
              <v-icon>mdi-cart</v-icon>
              <span class="header__button-text header__price snipcart-total-price"></span>
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
            <v-list-item style="animation-delay:0.1s" v-scroll-to="'#about'" @click="drawer = false">
              <h1 class="py-6 px-3">About</h1>
            </v-list-item>

            <v-list-item style="animation-delay:0.2s" v-scroll-to="'#source'" @click="drawer = false">
              <h1 class="py-6 px-3">Locally Sourced</h1>
            </v-list-item>

            <v-list-item style="animation-delay:0.3s" v-scroll-to="'#shop'" @click="drawer = false">
              <h1 class="py-6 px-3">Shop Granola</h1>
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
    })
  });
</script>
