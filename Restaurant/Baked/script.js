const cartBtn = document.querySelector('.cart');
const closeCartBtn = document.querySelector('.close-cart');
const clearCartBtn = document.querySelector('.clear-cart-btn');
const cartDom = document.querySelector('.cart-box');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItemCount = document.querySelector('.cart-item-count');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const productDom = document.querySelector('.product-shop');
const itemCount = document.querySelector('.item-count');
const itemsInCart = document.querySelector('#itemsInCart');
const itemPlus = document.querySelector('#plus');
const itemMinus = document.querySelector('#minus');


const hamburger = document.querySelector('.bar-icon');
const navBar = document.querySelector('.nav-bar');
const navLinks = document.querySelectorAll('.nav-bar li');

hamburger.addEventListener('click', () => {
    if (navBar.style.display === 'block') {
        navBar.style.display = 'none';
    } else {
        navBar.style.display = 'block';
    }
});


cartBtn.addEventListener('click', () => {
    cartOverlay.classList.toggle('open');
});





/*// chevrons items plus minus
var itemCount = 0;

function showItem(){
    itemCount.innerHTML = itemCount;
};

itemPlus.onclick = function () {
    itemCount++;
    console.log('2');
};

itemMinus.onclick = function () {
    
};

//cart item count in navbar
cartItemCount.innerHTML = length.cartContent;
*/


// clear cart button
clearCartBtn.addEventListener('click', function () {
    itemsInCart.innerHTML = '';
});


// add to cart btn

//document.getElementById("cart-item-name").innerHTML =
 //itemName

const bagBtn = document.querySelector('.bag-btn');

bagBtn.addEventListener('click', function clickk() {
  console.log('hello');
});