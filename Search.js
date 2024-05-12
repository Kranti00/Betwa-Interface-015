let mainContainer = document.getElementById("adiv");

// Function to display search results
function displayResults(results) {
    // Clear previous search results
    mainContainer.innerHTML = '';

    // Display search results
    results.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card_h');
      
      const productImage = document.createElement('img');
      productImage.src = product.img;
      productImage.alt = product.title;
      productCard.appendChild(productImage);
      
      const title = document.createElement('h3');
      title.textContent = product.title;
      productCard.appendChild(title);
      
      const weight = document.createElement('p');
      weight.textContent = product.weight;
      productCard.appendChild(weight);
      
      const price = document.createElement('p');
      price.textContent = product.price;
      productCard.appendChild(price);
      
      const btn = document.createElement('button');
      btn.textContent = "Add to Cart"; // Change button text if needed
      btn.classList.add('A-btn');
      productCard.appendChild(btn);

      mainContainer.appendChild(productCard);
    });
}

// Fetch data from the server
fetch('http://localhost:3000/cards')
  .then(response => response.json())
  .then(data => {
    const products = data;

    // Event listener for search input
    let searchbar = document.getElementById("Search_h");
    searchbar.addEventListener("input", () => {
      const searchTerm = searchbar.value.toLowerCase();
      const filteredProducts = products.filter(product => {
        return product.title.toLowerCase().includes(searchTerm);
      });
      displayResults(filteredProducts);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
