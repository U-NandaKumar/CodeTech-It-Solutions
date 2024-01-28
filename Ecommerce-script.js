document.addEventListener('DOMContentLoaded', function() {
    const addToCartForm = document.getElementById('add-to-cart-form');

    addToCartForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const quantity = parseInt(document.getElementById('quantity').value);
        const product = {
            name: 'Product Name',
            price: 20.00,
            quantity: quantity
        };

        addToCart(product);
    });

    function addToCart(product) {
        let cartItems = localStorage.getItem('cartItems');

        if (cartItems) {
            cartItems = JSON.parse(cartItems);
            const existingProductIndex = cartItems.findIndex(item => item.name === product.name);

            if (existingProductIndex !== -1) {
                cartItems[existingProductIndex].quantity += product.quantity;
            } else {
                cartItems.push(product);
            }
        } else {
            cartItems = [product];
        }

        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        alert('Product added to cart!');
    }
});
