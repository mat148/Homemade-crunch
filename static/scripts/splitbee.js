var closeCartButtonTop;
var closeCartButtonBottom;
var cartDeleteItem;
var cartPromoCode;
var cartCheckoutButton;
var cartContinueToShippingButton;
var cartContinuetoPaymentButton;
var cartPlaceOrderButton;

window.onpopstate = function(event) {
  //console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
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

      //Shipping
      cartContinueToShippingButton = document.getElementsById('snipcart-checkout-step-billing').getElementsByClassName('snipcart-cart-button snipcart__font--bold snipcart__font--secondary snipcart-cart-button--highlight snipcart__font--large');
      if(cartContinueToShippingButton[0]) {
        cartContinueToShippingButton[0].addEventListener('click', function(event) {
          window.splitbee.track("Cart_continue_to_shipping_click");
        });
      }

      //Payment
      cartContinuetoPaymentButton = document.getElementsById('snipcart-checkout-step-shipping').getElementsByClassName('snipcart-cart-button snipcart__font--bold snipcart__font--secondary snipcart-cart-button--highlight snipcart__font--large');
      if(cartContinuetoPaymentButton[0]) {
        cartContinuetoPaymentButton[0].addEventListener('click', function(event) {
          window.splitbee.track("Cart_continue_to_payment_click");
        });
      }

      //Place order
      cartPlaceOrderButton = document.getElementsById('snipcart-checkout-step-payment').getElementsByClassName('snipcart-cart-button snipcart__font--bold snipcart__font--secondary snipcart-cart-button--highlight snipcart__font--large');
      if(cartPlaceOrderButton[0]) {
        cartPlaceOrderButton[0].addEventListener('click', function(event) {
          window.splitbee.track("Cart_continue_to_place_order_click");
        });
      }

    }, 500);
  }
};
