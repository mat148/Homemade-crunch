var closeCartButtonTop;
var closeCartButtonBottom;
var cartDeleteItem;
var cartPromoCode;
var cartCheckoutButton;
var cartContinueToShippingButton;
var cartContinuetoPaymentButton;
var cartPlaceOrderButton;

window.onpopstate = function(event) {
  if(window.location.href == 'https://www.homemadecrunch.com/#/cart' || window.location.href == 'http://192.168.1.9:3333/#/cart') {
    setTimeout(() => {
      //Close cart
      closeCartButtonTop = document.getElementsByClassName('snipcart-cart-header__close-button');
      closeCartButtonBottom = document.getElementsByClassName('snipcart-cart-button snipcart-cart-button--secondary');

      if(closeCartButtonTop[0]) {
        closeCartButtonTop[0].addEventListener('click', function(event) {
          window.splitbee.track("Close_cart_click");
        });
      }
      if(closeCartButtonBottom[0]) {
        closeCartButtonBottom[0].addEventListener('click', function(event) {
          window.splitbee.track("Close_cart_click");
        });
      }

      //Delete
      cartDeleteItem = document.getElementsByClassName('snipcart-item-line__actions')[0].getElementsByClassName('snipcart__button--icon');

      if(cartDeleteItem[0]) {
        cartDeleteItem[0].addEventListener('click', function(event) {
          window.splitbee.track("Cart_delete_item");
        });
      }

      //Promo code
      cartPromoCode = document.getElementsByClassName('snipcart-discount-box__button snipcart__font--bold');
      if(cartPromoCode[0]) {
        cartPromoCode[0].addEventListener('click', function(event) {
          window.splitbee.track("Cart_promo_code_click");
        });
      }

      //Checkout
      cartCheckoutButton = document.getElementsByClassName('snipcart-cart-button snipcart__font--bold snipcart__font--secondary snipcart-cart__checkout-button snipcart-cart-button--highlight snipcart__font--large');
      if(cartCheckoutButton[0]) {
        cartCheckoutButton[0].addEventListener('click', function(event) {
          window.splitbee.track("Cart_checkout_click");
        });
      }
    }, 500);
  }

  if(window.location.href == 'https://www.homemadecrunch.com/#/checkout' || window.location.href == 'http://192.168.1.9:3333/#/checkout') {
    setTimeout(() => {
      var ButtonClasses = 'snipcart-cart-button snipcart__font--bold snipcart__font--secondary snipcart-cart-button--highlight snipcart__font--large';

      //Shipping
      var shippingContainer = document.getElementById('snipcart-checkout-step-billing');
      console.log(shippingContainer);

      var shippingExist = setInterval(function() {
        if(shippingContainer.getElementsByClassName(ButtonClasses)[0]) {
          cartContinueToShippingButton = shippingContainer.getElementsByClassName(ButtonClasses);

          cartContinueToShippingButton[0].addEventListener('click', function(event) {
            console.log('Cart_continue_to_shipping_click');
            window.splitbee.track("Cart_continue_to_shipping_click");
          });
          clearInterval(shippingExist);
        }
      }, 100);

      //Payment
      var paymentContainer = document.getElementById('snipcart-checkout-step-shipping');

      var paymentExist = setInterval(function() {
        if(paymentContainer.getElementsByClassName(ButtonClasses)[0]) {
          cartContinuetoPaymentButton = paymentContainer.getElementsByClassName(ButtonClasses);

          cartContinuetoPaymentButton[0].addEventListener('click', function(event) {
            console.log('Cart_continue_to_payment_click');
            window.splitbee.track("Cart_continue_to_payment_click");
          });
          clearInterval(paymentExist);
        }
      }, 100);

      //Place order
      var orderContainer = document.getElementById('snipcart-checkout-step-payment');

      var orderExist = setInterval(function() {
        if(orderContainer.getElementsByClassName(ButtonClasses)[0]) {
          cartPlaceOrderButton = orderContainer.getElementsByClassName(ButtonClasses);

          cartPlaceOrderButton[0].addEventListener('click', function(event) {
            console.log('Cart_continue_to_place_order_click');
            window.splitbee.track("Cart_continue_to_place_order_click");
          });
          clearInterval(orderExist);
        }
      }, 100);
    }, 500);
  }
};
