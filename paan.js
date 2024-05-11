let paandiv = document.getElementById("P-pdiv");
async function fetchPaan() {
    try {
       
        let res = await fetch("http://localhost:3000/paan");
        
       
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

       
        let data = await res.json();
        
        console.log(data);
        
      
        appendPaan(data);
    } catch (error) {
       
        console.error("Error fetching data:", error);
    }
}
function createpaan(item){
 
    let card = document.createElement("a");
    card.classList.add("p-card");
    card.addEventListener("click",(e)=>{
        e.preventDefault();
        window.location.href = `products.html?id=${item.id}`;
        
    })

    let imageDiv = document.createElement("div");
    imageDiv.classList.add("p-image-div");
    let image = document.createElement("img");
    image.classList.add("p-image");
    image.src = item.img;
    image.alt = "paan";
    imageDiv.appendChild(image);

    
    let title = document.createElement("p");
    title.classList.add("p-title");
    title.innerText = item.title;

   
    let piece = document.createElement("p");
    piece.classList.add("p-piece");
    piece.innerText = `piece:${item.piece}`;

    
    let price = document.createElement("p");
    price.classList.add("p-price");
    price.innerText = `price:${item.price}`;

    
    let button = document.createElement("button");
    button.classList.add("p-btn");
    button.innerText = "Add to Cart";
    button.addEventListener("click",(e)=>{
       e.preventDefault();
       addToCart(item);
       alert("Item has been to cart")
    })
    card.append(imageDiv, title, piece, price, button);
    
    return card;
}


function appendPaan(data){
    
 paandiv.innerHTML = "";
    
    
data.forEach((item) => {
      
        let paan = createpaan(item);
        paandiv.appendChild(paan);
    });
}

fetchPaan();


document.addEventListener('DOMContentLoaded', async function () {
    try {
        const productId = new URLSearchParams(window.location.search).get('id');
        const res = await fetch(`http://localhost:3000/paan/${productId}`); 
        const data = await res.json();
        console.log(data);
        
        // Fill product details
        document.getElementById('product-image').src = data.img;
        document.getElementById('product-title').innerText = data.title;
        document.getElementById('product-price').innerText = data.price;
        document.getElementById('product-weight').innerText = data.piece;
        
    } catch (error) {
        console.log(error);
    }
});
//Add to cart 
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