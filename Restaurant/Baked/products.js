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
const cakeMenu = [
  {
   "item": "Chocolate Cake",
   "price": " $70 ",
   "image": "https://i.imgur.com/LyxAK7G.jpg"
 },
 {
   "item": "Red Velvet Cake",
   "price": " $80 ",
   "image": "https://i.imgur.com/O7kOyWZ.jpg"
 },
 {
   "item": "Fruit Cake",
   "price": " $70 ",
   "image": "https://i.imgur.com/EPk3jVH.jpg"
 },
 {
   "item": "Oreo Cake",
   "price": " $80 ",
   "image": "https://i.imgur.com/Zqaz8l4.jpg"
 },
 {
   "item": "Lemon Cream Cake",
   "price": " $85 ",
   "image": "https://i.imgur.com/hk4j8Iv.jpg"
 },
 {
   "item": "RoseWater Raspberry Cake",
   "price": " $85 ",
   "image": "https://i.imgur.com/CMtxF6g.jpg"
 },
 {
   "item": "Strawberry Cake",
   "price": " $85 ",
   "image": "https://i.imgur.com/Hyt91gM.jpg"
 }
];

const cakeBtn = document.querySelector('#cakes');

cakeBtn.addEventListener("click", () => {

document.getElementById("menu-container").innerHTML = 
`
${cakeMenu.map(displayProduct).join('')}
`;
cakeBtn.classList.toggle('active');
});


/* ------------------- Brownies Menu ----------------- */
const browniesMenu = [
   {
   "item": "Chocolate Brownies",
   "price": " $20 ",
   "image": "https://i.imgur.com/YRRxGCv.jpg"
 },
 {
   "item": "White Chocolate Brownies",
   "price": " $20 ",
   "image": "https://i.imgur.com/VgXOYwC.jpg"
 },
 {
   "item": "Chocolate Marshmallo Brownies",
   "price": " $25 ",
   "image": "https://i.imgur.com/UAhiM9X.jpg"
 },
 {
   "item": "Walnut Brownies",
   "price": " $25 ",
   "image": "https://i.imgur.com/5BZHMeq.jpg"
 },
 {
   "item": "White Chocolate Cranberry Fudge",
   "price": " $25 ",
   "image": "https://i.imgur.com/AxYWvlz.jpg"
 }
];

const brownieBtn = document.querySelector('#brownies');

brownieBtn.addEventListener("click", () => {

document.getElementById("menu-container").innerHTML = 
`
${browniesMenu.map(displayProduct).join('')}
`;
brownieBtn.classList.toggle('active');
});


/* ---------------- Parfaits Menu ------------ */
const parfaitsMenu = [
  {
   "item": "Chocolate Parfait",
   "price": " $25 ",
   "image": "https://i.imgur.com/cTM0Q2d.jpg"
 },
 {
   "item": "Cheesecake Oreo Parfait",
   "price": " $25 ",
   "image": "https://i.imgur.com/Nqrftga.jpg"
 },
 {
   "item": "Mango Chocolate Parfait",
   "price": " $25 ",
   "image": "https://i.imgur.com/HPaMvBC.jpg"
 },
 {
   "item": "Strawberry Parfait",
   "price": " $25 ",
   "image": "https://i.imgur.com/eip6aYO.jpg"
 },
 {
   "item": "Yogurt Museli Parfait",
   "price": " $25 ",
   "image": "https://i.imgur.com/qSDfZ9P.jpg"
 },
 {
   "item": "Raspberry Chocolate Parfait",
   "price": " $25 ",
   "image": "https://i.imgur.com/uVgNd1q.jpg"
 }
];

const parfaitBtn = document.querySelector('#parfaits');

parfaitBtn.addEventListener("click", () => {

document.getElementById("menu-container").innerHTML = 
`
${parfaitsMenu.map(displayProduct).join('')}
`;
parfaitBtn.classList.toggle('active');
});


/* ----------------- Pudding Menu ------------------ */
const puddingMenu = [
  {
   "item": "Custard Pudding",
   "price": " $20 ",
   "image": "https://i.imgur.com/ex102HO.jpg"
 },
 {
   "item": "Banana Cream Pudding",
   "price": " $20 ",
   "image": "https://i.imgur.com/eW5d6wT.jpg"
 },
 {
   "item": "Cheesecake Pudding",
   "price": " $20 ",
   "image": "https://i.imgur.com/nrsp0lT.jpg"
 },
 {
   "item": "Flaxseed Raspberry Pudding",
   "price": " $25 ",
   "image": "https://i.imgur.com/XKXFQqZ.jpg"
 },
 {
   "item": "Mango Pudding",
   "price": " $20 ",
   "image": "https://i.imgur.com/ajLQYif.jpg"
 },
 {
   "item": "Strawberry Chia Pudding",
   "price": " $25 ",
   "image": "https://i.imgur.com/9a1baI0.jpg"
 },
 {
   "item": "Lemon Pudding",
   "price": " $20 ",
   "image": "https://i.imgur.com/wvNjfjf.jpg"
 },
 {
   "item": "Tangerine Pudding",
   "price": " $25 ",
   "image": "https://i.imgur.com/m0mTeZv.jpg"
 },
 {
   "item": "Vanilla & Chocolate Pudding",
   "price": " $20 ",
   "image": "https://i.imgur.com/JbYh8JH.jpg"
 }
]

const puddingBtn = document.querySelector('#pudding');

puddingBtn.addEventListener("click", () => {

document.getElementById("menu-container").innerHTML = 
`
${puddingMenu.map(displayProduct).join('')}
`;
puddingBtn.classList.toggle('active');
});
