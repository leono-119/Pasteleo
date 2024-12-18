const products = [
    { name: "Torta de Chocolate", category: "pasteles", price: 50, img: "./img/tchocolate.jpg" },
    { name: "Torta de Fresa", category: "pasteles", price: 60, img: "./img/tfresa.jpg" },
    { name: "Torta de Vainilla", category: "pasteles", price: 50, img: "./img/tvainilla.jpg" },
    { name: "Torta personalizada", category: "pasteles", price: 60, img: "./img/Cheesecake.png" },
    { name: "Cupcake de Fresa", category: "cupcakes", price: 10, img: "./img/cfresa.jpeg" },
    { name: "Cupcake de Vainilla", category: "cupcakes", price: 10, img: "./img/cvainilla.jpeg" },
    { name: "Cupcake de Chocolate", category: "cupcakes", price: 10, img: "./img/cchocolate.png" },
    { name: "Cupcake de limon", category: "cupcakes", price: 10, img: "./img/climon.jpg" },
    { name: "Brownies", category: "bocaditos", price: 15, img: "./img/brownies.jpg" },
    { name: "Galletas Decoradas", category: "bocaditos", price: 20, img: "./img/galletas.jpg" },
    { name: "Suspiro a la Limeña", category: "bocaditos", price: 15, img: "./img/sp.jpg" },
    { name: "Alfajores", category: "bocaditos", price: 20, img: "./img/alfajor.jpg" },
];

const productContainer = document.getElementById("products");

function filterCategory(category) {
    productContainer.innerHTML = ""; // Limpia los productos
    const filteredProducts = products.filter(product => product.category === category);

    filteredProducts.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>S/. ${product.price}</p>
            <button onclick="addToCart('${product.name}')">Añadir al carrito</button>
        `;
        productContainer.appendChild(productElement);
    });
}

const cart = []; // Carrito de compras
const cartContainer = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");

function addToCart(productName) {
    const product = products.find(p => p.name === productName);

    if (product) {
        cart.push(product);
        updateCart(); // Actualizar la interfaz del carrito
    }
}


function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1); // Elimina el producto del carrito
        updateCart(); // Actualizar la interfaz del carrito
    }
}

// Función para actualizar el carrito y el total
function updateCart() {
    cartContainer.innerHTML = ""; // Limpia los productos del carrito
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price; // Suma el precio de cada producto

        // Crear elementos para mostrar los productos del carrito
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <div>
                <p>${item.name}</p>
                <p>S/. ${item.price.toFixed(2)}</p>
            </div>
            <button onclick="removeFromCart(${index})">Eliminar</button>
        `;
        cartContainer.appendChild(cartItem);
    });

    totalPriceElement.textContent = total.toFixed(2); // Actualiza el total
}

// Al cargar la página, asegúrate de inicializar con una categoría por defecto
filterCategory("pasteles");


// Muestra todos los productos al cargar la página
filterCategory("pasteles");
