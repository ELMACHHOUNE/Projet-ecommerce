// Add your JavaScript code here
let cart = [];

function addToCart(product, price) {
    const quantity = parseInt(prompt(`Enter quantity for ${product}:`) || 0);
    if (quantity > 0) {
        const total = price * quantity;
        const cartItem = { product, price, quantity, total };
        cart.push(cartItem);
        updateCart();
    } else {
        alert('Invalid quantity. Please enter a valid number.');
    }
}

function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const totalPriceSpan = document.getElementById('total-price');
    cartItemsDiv.innerHTML = '';

    let totalPrice = 0;
    for (const item of cart) {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <p>${item.product}</p>
            <p>Price: $${item.price}</p>
            <p>Quantity: ${item.quantity}</p>
            <p>Total: $${item.total}</p>
            <button onclick="deleteProduct('${item.product}')">Delete</button>
        `;
        cartItemsDiv.appendChild(itemDiv);
        totalPrice += item.total;
    }

    totalPriceSpan.textContent = `$${totalPrice.toFixed(2)}`;
}

function deleteProduct(product) {
    const index = cart.findIndex(item => item.product === product);
    if (index !== -1) {
        cart.splice(index, 1);
        updateCart();
    }
}

function buyProducts() {
    // Redirect to WhatsApp link for continuing the order.
    window.open('https://wa.me/+212649455082', '_blank');
}

function scrollToCategories() {
    document.getElementById('categories').scrollIntoView({ behavior: 'smooth' });
}