// Kranti section
let poplocation = document.getElementById("kpopuplocation");
let locationdiv = document.getElementById("kjs_location");
let crossmark = document.getElementById("kjs_xmark");


locationdiv.addEventListener("click", function(){
    poplocation.style.display = "block";
    poplocation.style.backgroundColor = "white";
})

crossmark.addEventListener("click", function(){
    poplocation.style.display = "none";
})


// Kranti section end

//Haresh section

// script.js

const loginBtn = document.getElementById("login_h");
let isLogin = JSON.parse(localStorage.getItem("key"));

if (isLogin) {
    loginBtn.innerText = "Logout";
}

loginBtn.addEventListener('click', () => {
    if (isLogin) {
        // Perform logout actions here 
        updateLoginStatus();
    } else {
        // Perform login actions here
        window.location.href = 'login.html';
    }
});

function updateLoginStatus() {
    isLogin = !isLogin;
    loginBtn.innerText = isLogin ? "Logout" : "Login";
    localStorage.setItem("key", isLogin);
}




// Haresh section end

// Soumyadeep section
document.addEventListener("DOMContentLoaded", function() {
    const cardsContainer = document.querySelector('.cards');
    let cardIndex = 0;

    // Image links for the first set of cards
    const cardImagesSet1 = [
        "https://cdn.zeptonow.com/production///tr:w-969,ar-969-558,pr-true,f-auto,q-80/inventory/banner/c5b8dd62-9fd6-4bd2-aa1e-22a66472c2db.png",
        "https://cdn.zeptonow.com/production///tr:w-950,ar-950-547,pr-true,f-auto,q-80/inventory/banner/9bcebe9e-6a2e-46ff-ad51-41bab973c1cb.png",
        "https://cdn.zeptonow.com/production///tr:w-969,ar-969-558,pr-true,f-auto,q-80/inventory/banner/ae275051-9f81-4cd7-9e85-c3e371f63ba0.png",
        "https://cdn.zeptonow.com/production///tr:w-969,ar-969-558,pr-true,f-auto,q-80/inventory/banner/224441de-a2d6-4bda-a374-0b603b5c7ffb.png",
        "https://cdn.zeptonow.com/production///tr:w-969,ar-969-558,pr-true,f-auto,q-80/inventory/banner/72cb4031-aac6-436f-8954-135713628a1b.png",
        "https://cdn.zeptonow.com/production///tr:w-969,ar-969-558,pr-true,f-auto,q-80/inventory/banner/72cb4031-aac6-436f-8954-135713628a1b.png",
        "https://cdn.zeptonow.com/production///tr:w-969,ar-969-558,pr-true,f-auto,q-80/inventory/banner/ac2923ca-18ce-496a-a394-ebf64834192e.png",
        "https://cdn.zeptonow.com/production///tr:w-972,ar-972-558,pr-true,f-auto,q-80/inventory/banner/68d48c16-0d2b-4e74-aa4b-0c329d1d30d4.png"
    ];

    // Image links for the second set of cards
    const cardImagesSet2 = [
        "https://cdn.zeptonow.com/production///tr:w-972,ar-972-558,pr-true,f-auto,q-80/inventory/banner/20d316a2-5219-4cda-ad3b-7fc99f853347.png",
        "https://cdn.zeptonow.com/production///tr:w-969,ar-969-558,pr-true,f-auto,q-80/inventory/banner/49560b37-6e65-416e-83ea-c4ad55ca1664.png",
        "https://cdn.zeptonow.com/production///tr:w-648,ar-648-372,pr-true,f-auto,q-80/inventory/banner/ff837e33-4ae2-432e-bb2e-2addcec4ffd5.png"
    ];

    // Generate cards for the first set
    cardImagesSet1.forEach(image => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `<img src="${image}" alt="Product">`;
        cardsContainer.appendChild(card);
    });

    // Generate cards for the second set
    cardImagesSet2.forEach(image => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `<img src="${image}" alt="Product">`;
        cardsContainer.appendChild(card);
    });

    // Function to navigate carousel
    function navigateCarousel(direction) {
        const cardWidth = document.querySelector('.card').offsetWidth;
        const totalCards = document.querySelectorAll('.card').length;
        const maxIndex = totalCards - 4;
        cardIndex = Math.min(Math.max(cardIndex + direction, 0), maxIndex);
        cardsContainer.style.transform = `translateX(-${cardIndex * cardWidth}px)`;
    }

    // Event listeners for navigation buttons
    document.querySelector('.prev').addEventListener('click', () => navigateCarousel(-1));
    document.querySelector('.next').addEventListener('click', () => navigateCarousel(1));
});

//Function for categories
document.addEventListener("DOMContentLoaded", function() {
    const categoriesData = [
        // Define categories here
        {
            name: "Fruits and Vegetables",
            image: "https://cdn.zeptonow.com/production///tr:w-420,ar-324-222,pr-true,f-auto,q-80/cms/category/ea83ae11-d9ba-4f23-8a9f-f1eb4cbddaea.png"
        },
        {
            name: "Atta, Rice and Dals",
            image: "https://cdn.zeptonow.com/production///tr:w-420,ar-486-333,pr-true,f-auto,q-80/cms/category/b2322392-d65e-4d74-9366-8d65fbcfe646AttaRiceOilDalsEnlargedNew.png"
        },
        {
            name: "Masala and Dry fruits",
            image: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/ccaee195-95e4-45f2-bf66-41c522317893.png"
        },
        {
            name: "Sweet Cravings",
            image: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/983cf063-e68f-47ca-bcc7-17ffff457949.png"
        },
        {
            name: "Toys",
            image: "https://cdn.zeptonow.com/production///tr:w-210,ar-226-333,pr-true,f-auto,q-80/cms/category/fd755b5d-08a1-40e2-b9ee-8ff7de284b9a.png"
        },
        {
            name: "Appareal & Lifestyle",
            image: "https://cdn.zeptonow.com/production///tr:w-210,ar-150-222,pr-true,f-auto,q-80/cms/category/26a32dae-dbf3-4942-9c08-ae1755ba62cd.png"
        },
        {
            name: "Jewellery",
            image: "https://cdn.zeptonow.com/production///tr:w-210,ar-226-333,pr-true,f-auto,q-80/cms/category/e3d13464-3ce0-47a2-86d1-f9c0843f3d4f.png"
        },
        {
            name: "Frozen Food & Ice Cream",
            image: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/cc40d740-723c-495f-a82b-06458155b717FrozenFoodIceCreams.png"
        },
        {
            name: "Packaged Foods",
            image: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/23b416d5-cf37-4c59-b889-54d1b5e57fcaPackagedFood.png"
        },
        {
            name: "Dairy Breads and Eggs",
            image: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/3a529c63-cc24-428b-b7ee-7977fa4dad0bDairyBreadEggs.png"
        },
        {
            name: "Cold Drinks & Juices",
            image: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/a79c7e1c-030a-4183-8b7b-f6487f55b80fColdDrinksJuices.png"
        },
        {
            name: "Munchies & Chips",
            image: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/00494b34-e238-4a01-b54d-7c87121f5d7cMunchiesChips.png"
        },
        {
            name: "Meats, Fish & Eggs",
            image: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/f14ed279-f310-433e-8cec-642cc948f7bdMeatsFishEggs.png"
        },
        {
            name: "Breakfast & Sauces",
            image: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/5bab6832-2fa9-476c-96c3-6cfd7a77ce15BreakfastSauces.png"
        },
        {
            name: "Tea, Coffee & more",
            image: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/2debda61-9ea0-4e53-af7f-69680f743804.png"
        },
        {
            name: "Biscuits and Cookies",
            image: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/21148572-f640-4a77-84d4-27fcf58e1b60.png"
        },
        {
            name: "Makeup & Beauty",
            image: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/6c08ed2e-1164-4774-ac03-24159d847494.png"
        },
        {
            name: "Bath, Body & Hair",
            image: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/69f9d7dc-5fbb-43b1-adee-a14bf95693f3.png"
        },
        {
            name: "Cleaning Essentials",
            image: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/519160e4-e9da-43a5-87b5-bede663dbbbcCleaningEssentials.png"
        },
        {
            name: "Home Needs",
            image: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/5ef6bf67-5482-4d08-8ed3-d669ff353613HomeNeeds.png"
        },
        {
            name: "Electrical & Accessories",
            image: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/15f38050-51d2-440c-9b16-8964a166a11cElectricalsAccessories.png"
        },
        {
            name: "Grooming Essentials",
            image: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/307bd8ef-bc5e-432f-9354-61f4ec2bcdf9.png"
        },
        {
            name: "Hygiene and Wellness",
            image: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/007917c6-d7ab-49e7-bd6b-7a0719122a6d.png"
        },
        {
            name: "Baby Care",
            image: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/bd2abccb-0c92-4ed5-a087-218e9412cd19.png"
        },
        {
            name: "Pet Care",
            image: "https://cdn.zeptonow.com/production///tr:w-210,ar-226-333,pr-true,f-auto,q-80/cms/category/a7c4248c-cc67-4e04-887f-3dceacf09b42PetCare.png"
        },
        {
            name: "Paan Corner",
            image: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/19d1efee-a49d-49bc-9be0-832f990c8439PaanCorner.png"
        },
    ];

    const exploreCategoriesContainer = document.querySelector('.explore-categories');

    // Group categories into rows
    const rows = [
        [
            "Fruits and Vegetables",
            "Atta, Rice and Dals",
            "Masala and Dry fruits",
            "Sweet Cravings",
            "Toys",
            "Appareal & Lifestyle"
        ],
        [
            "Jewellery",
            "Frozen Food & Ice Cream",
            "Packaged Foods",
            "Dairy Breads and Eggs",
            "Cold Drinks & Juices",
            "Munchies & Chips",
            "Meats, Fish & Eggs",
            "Breakfast & Sauces"
        ],
        [
            "Tea, Coffee & more",
            "Biscuits and Cookies",
            "Makeup & Beauty",
            "Bath, Body & Hair",
            "Cleaning Essentials",
            "Home Needs",
            "Electrical & Accessories",
            "Grooming Essentials"
        ],
        [
            "Hygiene and Wellness",
            "Baby Care",
            "Pet Care",
            "Paan Corner"
        ]
    ];

    // Generate categories dynamically
    rows.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('category-row');
        
        row.forEach(categoryName => {
            const category = categoriesData.find(cat => cat.name === categoryName);
            if (category) {
                const categoryDiv = document.createElement('div');
                categoryDiv.classList.add('category');
                
                const image = document.createElement('img');
                image.src = category.image;
                image.alt = categoryName; // Set alt to categoryName

                // Add event listener to each category image
                image.addEventListener('click', function() {
                    redirectToProducts(categoryName);
                });
    
                categoryDiv.appendChild(image);
                rowDiv.appendChild(categoryDiv);
            }
        });

        exploreCategoriesContainer.appendChild(rowDiv);
    });

    // Function to handle click event on category images
    function redirectToProducts(categoryName) {
        window.location.href = `products.html?category=${encodeURIComponent(categoryName)}`;
    }
});

// Array of products
const allProducts = [
    {
        image: "./fruits.png", 
        category: "Fruits and Vegetables"
    },
    {
        image: "./atta.png", 
        category: "Atta, Rice and Dals"
    },
    {
        image: "./masala.png", 
        category: "Masala and Dry fruits"
    },
    {
        image: "./sweet.png", 
        category: "Sweet Cravings"
    },
    {
        image: "./Toys12.png", 
        category: "Toys"
    },
    {
        image: "./Apparel.png", 
        category: "Appareal & Lifestyle"
    },
    {
        image: "./Jwellery.png", 
        category: "Jewellery"
    },
    {
        image: "./Frozen-foods.png", 
        category: "Frozen Food & Ice Cream"
    },
    {
        image: "./Packaged.png", 
        category: "Packaged Foods"
    },
    {
        image: "./Daily-Breads-eggs.png", 
        category: "Dairy Breads and Eggs"
    },
    {
        image: "./Cold-Drink-Juices.png", 
        category: "Cold Drinks & Juices"
    },
    {
        image: "./Munchies.png", 
        category: "Munchies & Chips"
    },
    {
        image: "./Meat.png", 
        category: "Meats, Fish & Eggs"
    },
    {
        image: "./Breakfast.png", 
        category: "Breakfast & Sauces"
    },
    {
        image: "./Tea-Coffee.png", 
        category: "Tea, Coffee & more"
    },
    {
        image: "./Biscuits-Cookies.png", 
        category: "Biscuits and Cookies"
    },
    {
        image: "./Makeup.png", 
        category: "Makeup & Beauty"
    },
    {
        image: "./Bath-Body.png", 
        category: "Bath, Body & Hair"
    },
    {
        image: "./Cleaning-essential.png", 
        category: "Cleaning Essentials"
    },
    {
        image: "./Home-needs.png", 
        category: "Home Needs"
    },
    {
        image: "./Electrical.png", 
        category: "Electrical & Accessories"
    },
    {
        image: "./Grooming.png", 
        category: "Grooming Essentials"
    },
    {
        image: "./Hygiene-Wellness.png", 
        category: "Hygiene and Wellness"
    },
    {
        image: "./baby-care.png", 
        category: "Baby Care"
    },
    {
        image: "./Pet-Care.png", 
        category: "Pet Care"
    },
    {
        image: "./Paan-corner.png", 
        category: "Paan Corner"
    }
    
];

// Get query parameter
function getQueryParameter(name) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(name);
}

// Filter products by category
function filterProductsByCategory(category) {
    return allProducts.filter(product => product.category === category);
}

// Render products
function renderProducts(products) {
    const productsContainer = document.querySelector('.products');
    productsContainer.innerHTML = ''; // Clear previous products

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p>${product.name}</p>
        `;
        productsContainer.appendChild(productCard);
    });
}

// Load products based on category
document.addEventListener("DOMContentLoaded", function() {
    const category = getQueryParameter('category');
    if (category) {
        const products = filterProductsByCategory(category);
        renderProducts(products);
    }
});


// Soumyadeep section end




