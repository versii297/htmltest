const cartBtn = document.querySelector('.cart');
const CloseCartBtn = document.querySelector('.close-cart');
const ClearCartBtn = document.querySelector('.clear-cart');
const cartDom = document.querySelector('.cart-box');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItemCount = document.querySelector('.cart-item-count');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const productDom = document.querySelector('.product-shop');

// cart
let cart = [];

// products
class Products{
    async getProducts(){
        try {
           let result = await fetch('products.json') 
        } catch (error) {
            console.log(errors);
        }
    }
}

// products display
class UI {

}


//local storage
class Storage {

}

document.addEventListner("DOMContentLoaded", () => {
    const ui = new UI();
		const products = new Products();
		
//get all products
products.getProducts().then(data => console.log(data));

})