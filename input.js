document.addEventListener('DOMContentLoaded', () => {
    updateTotalPrice();

    document.querySelectorAll('.like-button').forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('liked');
        });
    });
});

function increaseQuantity(button) {
    const quantityElement = button.previousElementSibling;
    let quantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = ++quantity;
    updateTotalPrice();
}

function decreaseQuantity(button) {
    const quantityElement = button.nextElementSibling;
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
        quantityElement.textContent = --quantity;
        updateTotalPrice();
    }
}

function deleteItem(button) {
    const cartItem = button.closest('.cart-item');
    cartItem.remove();
    updateTotalPrice();
}

function updateTotalPrice() {
    let totalPrice = 0;
    document.querySelectorAll('.cart-item').forEach(item => {
        const price = parseFloat(item.getAttribute('data-price'));
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        totalPrice += price * quantity;
    });
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}
