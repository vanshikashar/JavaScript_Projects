const products = [
    { name: 'Laptop', category: 'electronics', price: 999 },
    { name: 'SmartPhone', category: 'electronics', price: 699 },
    { name: 'T-Shirt', category: 'clothes', price: 30 },
    { name: 'Jeans', category: 'clothes', price: 60 },
    { name: 'Bhagwat-Geeta', category: 'books', price: 20 },
    { name: 'Ramayan', category: 'books', price: 70 },
    { name: 'HeadPhones', category: 'elesctronics', price: 200 },
    { name: 'Gown', category: 'clothes', price: 80 },
    { name: 'Recipe-Book', category: 'books', price: 25 }
];

const productsContainer = document.getElementById('products');
const categoryFilter = document.getElementById('category');
const priceFilter = document.getElementById('price');
const priceValue = document.getElementById('priceValue');

function renderProducts(filteredProducts){
    productsContainer.innerHTML = '';
    filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
        <h3>${product.name}</h3>
        <p>Category: ${product.category}</p>
        <p>Price: $${product.price}</p>
        `;
        productsContainer.appendChild(productElement);
    });
}

function filterproducts(){
    const selectedCategory = categoryFilter.value;
    const maxPrice = parseInt(priceFilter.value);

    const filteredProducts = products.filter(product => {
        return (selectedCategory === 'all' || product.category === selectedCategory) && product.price <= maxPrice;

});
    renderProducts(filteredProducts);
}

categoryFilter.addEventListener('change', filterproducts);
priceFilter.addEventListener('input', () => {
    priceValue.textContent = `$${priceFilter.value}`;
    filterproducts();
});

renderProducts(products);