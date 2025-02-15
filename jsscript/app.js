import { getData, createCard } from "./function.js";

const wrap = document.getElementById('wrapper');
const loader = document.getElementById('loader')

document.addEventListener('DOMContentLoaded', function(){
    getData("https://strapi-store-server.onrender.com/api/products")
        .then(data => {
        loader.style.display = 'none'
        data.data.length > 0 && data.data.forEach(product => {
            let card = createCard(product);
            wrap.innerHTML += card;
        })

        const cards = document.querySelectorAll('.card');
        cards.length > 0 &&  cards.forEach(function(card){
            card.addEventListener('click', function(event){
                const cardId = this.getAttribute('data-id');
                if(cardId){
                    window.location.assign(`http://127.0.0.1:5500/pages/detalies.html?id=${cardId}`)
                }
            })
        })
        })
      .catch(err => {
        console.log(err);
    })

    .finally(function(){ 
        loader.style.display = 'none';
    })
})