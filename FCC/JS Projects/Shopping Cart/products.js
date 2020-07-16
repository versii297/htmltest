const iceCreamMenu = [
  {
    "item": "Avocados Icecream",
    "price": "$10",
    "image": "https://i.imgur.com/kva1ykW.jpg"
  },
  {
    "item": "Blueberry Buttermilk Icecream",
    "price": "$15",
    "image": "https://i.imgur.com/rMYWOBE.jpg"
  },
  {
    "item": "Butterscotch Icecream",
    "price": "$10",
    "image": "https://i.imgur.com/EerQksu.jpg"
  },
  {
    "item": "Caramel Butterscotch Icecream",
    "price": "$15",
    "image": "https://i.imgur.com/eSWnjdj.jpg"
  },
  {
    "item": "Cherry Icecream",
    "price": "$10",
    "image": "https://i.imgur.com/0zjMhIQ.jpg"
  },
  {
    "item": "Chocolate Icecream",
    "price": "$10",
    "image": "https://i.imgur.com/Ka8zcQH.jpg"
  },
  {
    "item": "Mango Icecream",
    "price": "$10",
    "image": "https://i.imgur.com/6EonccF.jpg"
  },
  {
    "item": "Mint Chocochip Icecream",
    "price": "$15",
    "image": "https://i.imgur.com/Ul45MqJ.jpg"
  },
  {
    "item": "Raspberry Icecream",
    "price": "$10",
    "image": "https://i.imgur.com/srSOGNP.jpg"
  },
  {
    "item": "Strawberry Icecream",
    "price": "$10",
    "image": "https://i.imgur.com/svHIm0i.jpg"
  },
  {
    "item": "Vanilla Icecream",
    "price": "$10",
    "image": "https://i.imgur.com/ofLlH7i.jpg"
  },
  {
    "item": "Wasabi Cucumber Icecream",
    "price": "$15",
    "image": "https://i.imgur.com/OOCtTX4.jpg"
  }
] 


function displayProduct(product) {
    return `
    <article class="product">
        <div class="img-container">
            <img src="${product.image}" alt="" class="product-img">
            <button class="bag-btn" data-id="1">
                <i class="fa fa-shopping-cart" id="addToCart" aria-hidden="true"></i>
                Add to cart
            </button>
        </div>
        <h3 id="item-name">${product.item}</h3>
        <h4 id="item-price">${product.price}</h4>
    </article>
 `   
}
/* -----------------ice cream menu ---------------*/
const iceCreamBtn = document.querySelector('#ice-creams');

iceCreamBtn.addEventListener("click", () => {

document.getElementById("menu-container").innerHTML = 
`
${iceCreamMenu.map(displayProduct).join('')}
`;
iceCreamBtn.classList.toggle('active');
});
/* ------------end of ice cream menu ---------------------*/

/* ----------------cakes menu-----------------------*/
