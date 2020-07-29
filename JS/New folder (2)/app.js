fetch("./items.json")
  .then(function cakeMenu(resp) {
    return resp.json();
  })
  .then(function displayProduct(product) {
    return
    `
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
  });

  document.getElementById("container").innerHTML = 
  displayProduct();
