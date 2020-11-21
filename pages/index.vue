<template>
  <v-app class="alert-open">
    <!-- Google Tag Manager -->
      <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KFRWP7V');</script>
    <!-- End Google Tag Manager -->

    <!-- Facebook Pixel Code -->
      <script>
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '364652411469530');
      fbq('track', 'PageView');
      </script>
      <noscript><img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=364652411469530&ev=PageView&noscript=1"
      /></noscript>
    <!-- End Facebook Pixel Code -->
    <Navigation/>
      <v-main>
        <!-- Google Tag Manager (noscript) -->
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KFRWP7V"
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->

        <v-banner
          class="state-alert alert-open"
          transition="slide-y-transition"
        >
          By our calculations, it looks like you might be visiting our website from outside of New York. Unfortunately, at this time, we can't sell our Granola outside of New York. If you are buying a gift for someone with a New York address, then please proceed.
          <template>
            <v-btn
              icon
              color="alert"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </template>
        </v-banner>

        <div class="hero-about-container">
          <section class="hero py-12" id="hero">
            <v-container class="py-0 py-lg-12 fill-height d-flex justify-center align-center">
              <div class="hero-content">
                <div>
                  <span>Homemade granola</span>
                </div>
                <div>
                  <span>Locally sourced</span>
                </div>
                <div>
                  <span>Made in the ❤️ of NY</span>
                </div>
              </div>
            </v-container>
            <div class="hero-granola-container" name="test">
              <div class="hero-granola hero-granola-left">
                <v-img src="images/granola.png"></v-img>
              </div>
              <div class="hero-granola hero-granola-right">
                <v-img src="images/granola.png"></v-img>
              </div>
            </div>
          </section>

          <section class="about py-12">
            <div class="about-anchor" id="about"></div>
            <v-container class="py-0 py-lg-12 d-flex justify-center flex-lg-row flex-column-reverse">
              <div class="content-container d-flex justify-start align-center">
                <div class="content-container-inner pr-lg-12 pt-lg-0 pt-6 text-center text-lg-left">
                  <p>After years working as a developer hunched over a computer, I found myself feeling drained and burnt out. For the longest time, I wanted to build my own business, but I was always too afraid to strike out on my own. I finally got the courage to do it and create something with my own two hands.</p>

                  <p>Luckily, I found that I loved cooking and specifically loved crafting granola. I love the infinite combinations of flavors and ingredients that can come together to craft the perfect batch of granola. Most of all, I love being able to use locally sourced ingredients from local farms in upstate NY.</p>

                  <p>I'm so happy to bring Homemade Crunch to you and I hope you'll join us on this journey.</p>
                </div>
              </div>
              <div class="image-container d-flex justify-end">
                <v-img
                  src="https://via.placeholder.com/350x500"
                  width="350"
                  height="500"
                  contain
                ></v-img>
              </div>
            </v-container>
          </section>
        </div>

        <section class="source py-12">
          <div class="source-anchor" id="source"></div>
          <v-container class="py-0 py-lg-12">
            <div class="source__header d-flex align-center justify-center">
              <h1 class="text-center mb-0 mb-lg-12">Locally Sourced</h1>
            </div>
            <div class="source__container d-flex flex-wrap">
              <v-card
                class="oats"
                flat
                rounded="0"
              >
                <div class="v-card__inner text-center pa-6 d-flex flex-column align-center">
                  <v-img
                    height="250"
                    width="250"
                    src="images/gianforteFarmSourceImage.jpg"
                    alt="Gianforte Farm based in Cazenovia, New york"
                  ></v-img>
                  <v-card-title>Rolled Oats</v-card-title>
                  <span class="d-flex flex-wrap justify-center justify-sm-left">Sourced from <v-btn class="pa-0 link ml-1" href="http://www.gianfortefarm.com/" text><b>Gianforte Farm</b></v-btn></span>
                  <v-card-text class="text-center">Gianforte Farm tills 600 acres of Honeoye soils in the rolling hilltops north of Cazenovia, New York</v-card-text>
                </div>
              </v-card>
              <v-card
                class="honey"
                flat
                rounded="0"
              >
                <div class="v-card__inner text-center pa-6 d-flex flex-column align-center">
                  <v-img
                    height="250"
                    width="250"
                    src="images/johnstonHoneyBeeFarm.jpg"
                  ></v-img>
                  <v-card-title>Honey</v-card-title>
                  <span class="d-flex flex-wrap justify-center justify-sm-left">Sourced from <v-btn class="pa-0 ml-1 link" href="http://www.johnstonshoneybeefarm.com/" text><b>Johnston's Honey Bee Farm</b></v-btn></span>
                  <v-card-text class="text-center">Johnston's Honeybee Farm is a sideline operation that has grown from 100 to 300 hives over the past twenty years, located in Eaton, NY</v-card-text>
                </div>
              </v-card>
              <v-card
                class="maple"
                flat
                rounded="0"
              >
                <div class="v-card__inner text-center pa-6 d-flex flex-column align-center">
                  <v-img
                    height="250"
                    width="250"
                    src="images/WillowCreekFarmMapleSyrup.jpg"
                  ></v-img>
                  <v-card-title>Maple Syrup</v-card-title>
                  <span class="d-flex flex-wrap justify-center justify-sm-left">Sourced from <v-btn class="pa-0 ml-1 link" href="https://willow-creek-farm-maple-syrup.business.site/" text><b>Willow creek Farm</b></v-btn></span>
                  <v-card-text class="text-center">Premium maple products such as maple syrup, candy, popcorn, sugar, and maple cream produced in Fulton, NY</v-card-text>
                </div>
              </v-card>
            </div>
          </v-container>
        </section>

        <section class="shop py-12">
          <div class="shop-anchor" id="shop"></div>
          <v-container class="py-0 py-lg-12 d-flex flex-wrap flex-column-reverse flex-lg-row shop-one">
            <div class="content-container pr-0 pt-6 pt-lg-0 pr-lg-12 d-flex justify-start align-center">
              <div class="content-container-inner text-center">
                <h1 class="pb-6">Honey/Maple Granola with walnuts and cranberries</h1>
                <p class="mb-1">A tasty blend of oats, nuts, and seeds. Great with milk, or over yogurt.</p>
                <p class="mb-3">12 oz. bag</p>

                <div class="info-container">
                  <ul class="ingredients pb-3 reset-list d-flex flex-wrap justify-center">
                    <li class="bold">Ingredients:</li>
                    <li>Whole rolled oats</li>
                    <li>Almonds</li>
                    <li>Cinnamon</li>
                    <li>Coconut oil</li>
                    <li>Vanilla extract</li>
                    <li>Dried cranberries</li>
                    <li>Maple syrup</li>
                    <li>Honey</li>
                    <li>Sea Salt</li>
                    <li>Pumpkin seeds</li>
                  </ul>
                  <ul class="contains pb-3 reset-list d-flex flex-wrap justify-center">
                    <li class="bold">Contains:</li>
                    <li>Nuts</li>
                  </ul>
                  <ul class="can-contain reset-list d-flex flex-wrap justify-center">
                    <li class="bold">May Contain:</li>
                    <li>Milk</li>
                    <li>Eggs</li>
                    <li>Wheat</li>
                    <li>Nuts</li>
                    <li>Soy</li>
                  </ul>
                </div>

                <div class="button-container pt-12 d-flex justify-center">
                  <v-button
                    class="product__button snipcart-add-item maple-honey-granola"
                    data-item-id="1"
                    data-item-price="8.99"
                    data-item-url="/"
                    data-item-description="A tasty blend of oats, nuts, and seeds. Great with milk, or over yogurt."
                    data-item-name="Honey/maple granola with walnuts and cranberries"
                    data-item-weight="340"
                  >
                    Add to cart
                  </v-button>
                </div>
              </div>
            </div>
            <div class="image-container d-flex justify-center justify-lg-end align-center">
              <v-img
                class="bag"
                src="images/500x500.png"
              ></v-img>
            </div>
          </v-container>
          <v-container class="py-lg-12 d-flex flex-wrap flex-column flex-lg-row shop-two">
            <div class="image-container d-flex justify-center justify-lg-start align-center">
              <v-img
                class="bag"
                src="images/500x500.png"
              ></v-img>
            </div>
            <div class="content-container pl-0 pl-lg-12 pt-6 pt-lg-0 d-flex justify-end align-center">
              <div class="content-container-inner text-center">
                <h1 class="pb-6">Semi-regular small test batch granola</h1>
                <p class="mb-3">In this space we will be providing granola flavors that we are experimenting with or flavors that have been suggested by our customers. These small batches of granola will be sold until supplies run out. Prices may vary based on the ingredients required, because we may not be able to buy them in bulk. If a flavor is found to be popular it may make its way into our line-up either permanently or seasonally.</p>

                <p class="mb-1">To make sure you don't miss out on the next drop, sign up for our newsletter where you can also get special offers and information on our farmers' market appearances!</p>

                <!--<div class="info-container">
                  <ul class="ingredients reset-list d-flex flex-wrap justify-center">
                    <li class="bold">Ingredients:</li>
                    <li>Whole rolled oats</li>
                    <li>Walnuts</li>
                    <li>Cinnamon</li>
                    <li>Coconut oil</li>
                    <li>Vanilla extract</li>
                    <li>Dried cranberries</li>
                    <li>Maple syrup</li>
                    <li>Honey</li>
                  </ul>
                  <ul class="contains reset-list d-flex flex-wrap justify-center">
                    <li class="bold">Contains:</li>
                    <li>Milk</li>
                    <li>Corn</li>
                    <li>Egg</li>
                  </ul>
                  <ul class="can-contain reset-list d-flex flex-wrap justify-center">
                    <li class="bold">Can Contain:</li>
                    <li>Milk</li>
                    <li>Eggs</li>
                    <li>Wheat</li>
                    <li>Nuts</li>
                    <li>Soy</li>
                  </ul>
                </div>-->

                <div class="button-container pt-12 d-flex justify-center">
                  <v-button
                    class="product__button scroll-to-footer"
                    v-scroll-to="'#footer'"
                  >
                    Signup for our newsletter
                  </v-button>

                  <!--<v-button
                    class="product__button snipcart-add-item disabled"
                  >
                    Add to cart
                  </v-button>-->
                </div>
              </div>
            </div>
          </v-container>
        </section>

        <section class="contact py-12">
          <div class="contact-anchor" id="contact"></div>
          <v-container class="py-0 py-lg-12">
            <div class="contact__header d-flex flex-column align-center justify-center mb-12">
              <h1 class="text-center mb-2">Contact us</h1>
              <span class="text-center">If you have any questions at all, feel free to contact us via the form or by giving us a call at (315) 382-8467.</span>
            </div>

            <template>
              <form
                action="https://formspree.io/f/mvovqvle"
                method="POST"
              >
                <v-text-field
                  label="Name"
                  name="name"
                  required
                ></v-text-field>
                <v-text-field
                  label="Email"
                  name="_replyto"
                  required
                ></v-text-field>
                <v-textarea
                  label="Message"
                  name="message"
                  required
                ></v-textarea>
                <v-btn
                  type="submit"
                  color="accent"
                >Submit</v-btn>
              </form>
            </template>
          </v-container>
        </section>
      </v-main>

      <v-footer
        class="pa-0 black"
        id="footer"
      >
        <v-container class="py-12 d-flex">
          <v-card
            flat
            tile
            class="black"
          >
            <v-card-title class="pa-0 white--text mb-2">Homemade Crunch</v-card-title>
            <v-card-text class="pa-0 white--text">410 E Laurel Street</v-card-text>
            <v-card-text class="pa-0 white--text">Syracuse, NY 13203</v-card-text>
            <v-card-text class="pa-0 white--text">315.382.8467</v-card-text>
          </v-card>
          <v-card
            flat
            tile
            class="black"
          >
            <v-card-title class="pa-0 white--text mb-2">Follow Us</v-card-title>
            <v-btn class="pa-0 white--text" href="https://www.instagram.com/homemade_crunch/" text><v-icon>mdi-instagram</v-icon></v-btn>
            <v-btn class="pa-0 white--text" href="https://www.facebook.com/homemadecrunch" text><v-icon>mdi-facebook</v-icon></v-btn>
            <v-btn class="pa-0 white--text" href="https://www.pinterest.com/homemadecrunch/" text><v-icon>mdi-pinterest</v-icon></v-btn>
            <v-btn class="pa-0 white--text" href="https://www.youtube.com/channel/UC6H-8_ndZOqqaurpu22ebvg" text><v-icon>mdi-youtube</v-icon></v-btn>
          </v-card>
          <v-card
            flat
            tile
            class="black"
          >
            <v-card-title class="pa-0 white--text mb-2">Stay up to date</v-card-title>
            <script async data-uid="fdc9c465a3" src="https://thoughtful-inventor-7932.ck.page/fdc9c465a3/index.js"></script>
          </v-card>
        </v-container>
      </v-footer>

      <div hidden id="snipcart" data-api-key="ZWYzZmI3NjctZjZmNS00ODExLThjNDctZDZkODk2MDM5NWZhNjM3Mzg0ODAyNTU2MTYyOTI3"></div>
  </v-app>
</template>

<script>
  import Navigation from "~/components/Navigation.vue";

  export default ({
    head() {
      return {
        script: [{
          body: true,
          src: 'scripts/geo.js'
        }]
      }
    },
    components: {
      Navigation
    }
  });
</script>
