const wrap = document.querySelector(".section");
const prod = document.getElementById('product')

function getCart(product) {
  return `
  <div class="container section__container">
  <span>
   <img src="${product.attribute.image}" alt="" width="150" height="150">
  </span>
  <div class="cart-info">
   <h3>${product.attribute.title}</h3>
   <h4>${product.attribute.company}</h4>
  </div>
  <div class="amount">
   <p>Amount</p>
   <span class="count">
       <select id="select-amount">
           <option value="${product.count}">${product.count}</option>
           <option value="2">2</option>
           <option value="3">3</option>
           <option value="4">4</option>
           <option value="5">5</option>
           <option value="6">6</option>
       </select>
   </span>
   </div>
   <div class="price">
       <p>$${product.attribute.price / 100}</p>
   </div>
  </div>
  `;
}

function save(products) {
  const cart = {
    id: products.id,
    time: products.time,
    count: products.count,
    attribute: products.attribute,
  };

  let data = [];
  if (localStorage.getItem("products")) {
    data = JSON.parse(localStorage.getItem("products"));
  }

  data.push(cart);
  localStorage.setItem("products", JSON.stringify(data));

  const card = getCart(cart);
  wrap.innerHTML += card;
}

document.addEventListener("DOMContentLoaded", function () {
  let data = [];
  if (localStorage.getItem("products")) {
    data = JSON.parse(localStorage.getItem("products"));
  }

  if (data.length > 0) {
    data.forEach((value) => {
      const cart = getCart(value);
      wrap.innerHTML += cart;
    });
  }
});

prod.addEventListener('click', function(){
    window.location.assign(`http://127.0.0.1:5500/index.html`)
})
