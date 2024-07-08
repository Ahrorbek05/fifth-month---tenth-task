async function getData(url){
    try {
        const resp = await fetch(url);
        const data = await resp.json();
        return data
    } catch (error) {
        return error
    }
}

function createCard(product) {
    return`
<div class="card" data-id = "${product.id}">
    <img src="${product.attributes.image}" alt="product image" width="320" height="220">
    <h3>${product.attributes.title}</h3>
    <p>$${product.attributes.price / 100}</p>
</div>
    `;
}

function createDetails(product){
    return `
    <div class="section section__container">
            <div class="hero-image">
                <img src="${product.attributes.image}" alt="product image" width="520" height="420">
            </div>
            <div class="hero-info">
                <h2>${product.attributes.title}</h2>
                <h3>${product.attributes.company}</h3>
                <p class="price">$${product.attributes.price / 100}</p>
                <p class="text">${product.attributes.description}</p>
             
                <form id="form">
                <select id="select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button class="button">ADD TO BAG</button>
                </form>
            </div>
        </div>
    `;
}

function getDataStroge(){
    let data = [];
    if(localStorage.getItem('products')){
        data = JSON.parse(localStorage.getItem('products'))
    }
    return data
}




export {getData, createCard, createDetails, getDataStroge};