
function addToCart(name, price){
let cart = JSON.parse(localStorage.getItem('cart')) || [];

cart.push({name,price});

localStorage.setItem('cart', JSON.stringify(cart));

alert(name + ' added to cart');
}

function displayCart(){
let cart = JSON.parse(localStorage.getItem('cart')) || [];

let cartItems = document.getElementById('cart-items');

if(!cartItems) return;

let html='';

cart.forEach(item=>{
html += `
<div class='cart-box'>
<h3>${item.name}</h3>
<p>${item.price}</p>
</div>
`;
});

cartItems.innerHTML = html;
}

displayCart();

function searchProduct(){
let input = document.getElementById('search').value.toLowerCase();

let cards = document.querySelectorAll('.product-card');

cards.forEach(card=>{
let title = card.querySelector('h3').innerText.toLowerCase();

if(title.includes(input)){
card.style.display='block';
}
else{
card.style.display='none';
}
});
}
