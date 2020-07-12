/*
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
					 let result = await fetch('products.json');
					 let data = await result.json();
					 
					 let products = data.items;
					 products = products.map(item => {
						 const {title,price} = item.fields;
						 const {id} = item.sys;
						 const image = item.fields.image.fields.file.url;
						 return {title,price,id,image}
					 })
					 return products
        } catch (error) {
            console.log(error);
        }
    }
}

// products display
class UI {
	displayProducts{products}{
		let result = '';
		products.forEach(product => {
			result += `
			<article class="product">
					<div class="img-container">
						<img 
						src=${product.image} 
						alt="" 
						class="product-img">
						<button class="bag-btn" data-id=${product.id}>
							<i class="fa fa-shopping-cart" aria-hidden="true"></i>
							Add to cart
						</button>
					</div>
					<h3>${product.title}</h3>
					<h4>${product.title}</h4>
				</article>
			`
		});
		productsDOM.innerHTML = result;
	}
}


//local storage
class Storage {

}

document.addEventListner("DOMContentLoaded", () => {
    const ui = new UI();
		const products = new Products();
		
//get all products
products.getProducts().then(products => ui.displayProducts(products));
});
*/