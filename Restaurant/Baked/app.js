// show cart

(function () {
  const cartInfo = document.getElementById('cart-info');
  const cart = document.getElementById('cart');

  cartInfo.addEventListener('click', function() {
    cart.classList.toggle('show-cart');
  });
})();

// add items to the cart
(function(){
  const addToCartBtn = document.querySelectorAll('#addToCart');

  addToCartBtn.forEach(function(btn){
    btn.addEventListener('click', function(event){
      console.log(event.target);
    })
  })
})();