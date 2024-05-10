let adiv=document.getElementById("adiv");


function createCard(item){

let card= document.createElement("a");
card.classList.add("card");
//ading product details
card.addEventListener("click",(e)=>{
    e.preventDefault();
    window.location.href = `products.html?id=${item.id}`;
    


})
//image div
let imagediv=document.createElement("div");
imagediv.classList.add("A-image-div");
// imagediv.addEventListener("click",()=>{
//     window.location.href = `products.html?id=${item.id}`;
    


// })
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
    e.preventDefault(); // Prevent the default action of the button click
    addToCart(item);
    console.log(item.id);
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

async function fetchDataCard(){
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
//feting data from cart db.json to cart page
async function fetchCartData() {
    try {
        let res = await fetch("http://localhost:3000/cart");
        let data = await res.json();
        appendCartData(data);
        
    } catch (error) {
        console.log(error);
    }
}

fetchCartData()
let cartMain=document.getElementById("A-cart");

function displayCartItem(item) {
    let cart = document.createElement("div");
    cart.classList.add("A-cart-div");
    
    // Image div
    let imageDiv = document.createElement("div");
    imageDiv.classList.add("A-image-cart-div");
    let image = document.createElement("img");
    image.classList.add("A-image-cart");
    image.src = item.img;
    imageDiv.appendChild(image);
    
    // Title for cart
    let title = document.createElement("p");
    title.classList.add("A-title-cart");
    title.innerText = item.title;
    
    // Button div containing + and -
    let buttonDiv = document.createElement("div");
    buttonDiv.classList.add("A-cart-buttonDiv");
    let btn1 = document.createElement("button");
    btn1.classList.add("A-cart-button");
    btn1.innerText = "-";
    let span = document.createElement("span");
    span.classList.add("A-cart-span");
    span.innerHTML="";
    let btn2 = document.createElement("button");
    btn2.classList.add("A-cart-button");
    btn2.innerText = "+";
    buttonDiv.appendChild(btn1);
    buttonDiv.appendChild(span);
    buttonDiv.appendChild(btn2);
    //adding button fucntions here
    let value=1;
   

    // Update price function
   

    span.innerHTML=value;
    

    btn2.addEventListener("click",(e)=>{
        e.preventDefault();
     value++;
     span.innerHTML=value;
    
    
    })
    btn1.addEventListener("click",(e)=>{
        e.preventDefault();
        
        
       if(value>0){
        value--;
        span.innerHTML=value;
      
       }
       if(value === 0){
       deleteformCart(item.id);
       console.log(item.id);
    //    fetchCartData();
       }
       })

    // Price in cart
    let price = document.createElement("p");
    price.classList.add("A-cart-price");
    price.innerText = item.price;
    
    // Appending data to cart div
    cart.append(imageDiv, title, buttonDiv, price);
    return cart;
}



function appendCartData(data) {
    let cartMain = document.getElementById("A-cart");
    cartMain.innerHTML = "";
    data.forEach((item) => {
        let cartItem = displayCartItem(item);
        cartMain.appendChild(cartItem);
    });
}

async function deleteformCart(itemId) {
    try {
        let res = await fetch(`http://localhost:3000/cart/${itemId}`, {
            method: "DELETE",
        });
        let data = await res.json();
     
        
        fetchCartData();
    } catch (error) {
        console.log(error);
    }
}
let btnCart=document.getElementById("A-cart-upper-button");
btnCart.addEventListener("click",(e)=>{
 e.preventDefault()
 window.location.href="index.html";
});
//Payment button and popup related dislplay
let Acartoutercontainer=document.getElementById("A-cart-outer-container");
let popup=document.getElementById("cart-popup");
let paymentButton = document.getElementById("A-cart-payment");
paymentButton.addEventListener("click",(e)=>{
  e.preventDefault();
  popup.style.visibility="visible";
  popup.classList.add("A-cart-popup1");

})
let goback=document.getElementById("goback-cart");
goback.addEventListener("click",()=>{
    window.location.href="index.html";
})

// Adarsh section end