let category_div=document.getElementById("c-div");

async function fetchcategory() {
    try {
       
        let res = await fetch("http://localhost:3000/categories");
        
       
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

       
        let data = await res.json();
        
        console.log(data);
        
      
        appendcategory(data);
    } catch (error) {
       
        console.error("Error fetching data:", error);
    }
}
function createcategory(item){
 
    let card = document.createElement("a");
    card.classList.add("c-card");
    card.addEventListener("click",(e)=>{
        e.preventDefault();
        window.location.href = `products.html?id=${item.id}`;
        
    })

    let imageDiv = document.createElement("div");
    imageDiv.classList.add("c-image-div");
    let image = document.createElement("img");
    image.classList.add("c-image");
    image.src = item.img;
    image.alt = "paan";
    imageDiv.appendChild(image);

    
    let title = document.createElement("p");
    title.classList.add("c-title");
    title.innerText = item.title;

   
    let weight = document.createElement("p");
    weight.classList.add("c-weight");
    weight.innerText = item.piece;

    
    let price = document.createElement("p");
    price.classList.add("c-price");
    price.innerText = item.price;

    
    let button = document.createElement("button");
    button.classList.add("c-btn");
    button.innerText = "Add to Cart";
    button.addEventListener("click",(e)=>{
       e.preventDefault();
       addToCart(item);
       alert("Item has been to cart")
    })
    card.append(imageDiv, title, weight, price, button);
    
    return card;
}


function appendcategory(data){
    
    category_div.innerHTML = "";
    
    
data.forEach((item) => {
      
        let c =  createcategory(item);
        category_div.appendChild(c);
    });
}

fetchcategory();


document.addEventListener('DOMContentLoaded', async function () {
    try {
        const productId = new URLSearchParams(window.location.search).get('id');
        const res = await fetch(`http://localhost:3000/categories/${productId}`); 
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
        console.log(data); 
    } catch (error) {
        console.log(error);
    }
}