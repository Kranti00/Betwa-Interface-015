// Kranti section


// Kranti section end





//Haresh section


// Haresh section end





// Soumyadeep section


// Soumyadeep section end





// Adarsh section
let adiv=document.getElementById("adiv");


function createCard(item){

let card= document.createElement("a");
card.classList.add("card");
//ading product details
card.addEventListener("click",()=>{
    window.location.href = `products.html?id=${item.id}`;
    


})
//image div
let imagediv=document.createElement("div");
imagediv.classList.add("A-image-div");
let img = document.createElement("img");
img.classList.add("A-image");
img.src=item.img;
imagediv.appendChild(img);

//title portion 
let title =document.createElement("p");
title.classList.add("A-title");
title.innerText=item.title;
//weight portion

let weight = document.createElement("p");
weight.classList.add("A-weight");
weight.innerText=item.weight;

//price portion

let price = document.createElement("p");
price.classList.add("A-price");
price.innerText=item.price;

//button section
let button=document.createElement("button");
button.classList.add("A-btn");
button.innerText="Add to Cart";
button.addEventListener("click", (e) => {
    e.preventDefault();
    addToCart(item);
    alert("Item added to cart");
});

// Appendoong all data to card
card.append(imagediv,title,weight,price,button);

return card;
}
function appendData(data){
    adiv.innerHTML="";
    data.forEach((item=>{
        let card=createCard(item);
        adiv.append(card);
    }))
}
fetchDataCard();

async function fetchDataCard(page=1){
 try {
    let res= await fetch(`http://localhost:3000/cards`);
    let data = await res.json();
    console.log(data);
    appendData(data);
   
 } catch (error) {
    console.log(error);
 }
}

//product details JS data


document.addEventListener('DOMContentLoaded', async function () {
    try {
        const productId = new URLSearchParams(window.location.search).get('id');
        const res = await fetch(`http://localhost:3000/cards/${productId}`); 
        const data = await res.json();
        console.log(data);
        // addToCart(data);
        // Fill product details
        document.getElementById('product-image').src = data.img;
        document.getElementById('product-title').innerText = data.title;
        document.getElementById('product-price').innerText = data.price;
        document.getElementById('product-weight').innerText = data.weight;
        
    } catch (error) {
        console.log(error);
    }
});
//Adding things to cart
async function addToCart(item) {
    try {
        let itemData = {
            "img": item.img,
            "title": item.title,
            "price": item.price
        };
        let res = await fetch(`http://localhost:3000/cart`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(itemData)
        });
        let data = await res.json();
        console.log(data); // Handle the response from the server if needed
    } catch (error) {
        console.log(error);
    }
}


  
// Adarsh section end