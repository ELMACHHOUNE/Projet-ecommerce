// Add your JavaScript code here
let cart = [];

function addToCart(product, price) {
    const quantity = parseInt(prompt(`Enter quantity for ${product}:`) || 0);
    if (quantity > 0) {
        const total = price * quantity;
        cart.push({ product, price, quantity, total });
        updateCart();
    } else {
        alert('Invalid quantity. Please enter a valid number.');
    }
}

function updateCart() {
    let totalPrice = 0;
    for (const item of cart) {
        totalPrice += item.total;
    }
    alert(`Cart Total: $${totalPrice}`);
}
