// Assumes that the cart is an array of js objects with:
// {
//     id:
//     name:
//     quantity:
//     image:
//     price:
// }

// Assumes that product is a new object to add w/ the same params


function addToCart(product, quantity, cart, cartSetter) {
    const newCart = [...cart];
    // Already in cart?
    for (let i = 0; i < newCart.length; i++) {
        if (product.id === newCart[i].id) {
            newCart[i].quantity = newCart[i].quantity + quantity;
            cartSetter(newCart);
            return;
        }
    }
    // We know it's not in the cart, just add it!
    newCart.push(product);
    cartSetter(newCart);
    return;
}

function editCartQuantity(product, quantity, cart, cartSetter) {
    const newCart = [...cart];
    // Find in the cart
    let index = -1;
    for (let i = 0; i < newCart.length; i++) {
        if (product.id === newCart[i].id) {
            index = i;
            break;
        }
    }
    // Different behavior for 0 vs others
    if (quantity === 0) {
        newCart.splice(index, 1);
    } else {
        newCart[index].quantity = quantity;
    }
    cartSetter(newCart);
}

function removeFromCart(product, cart, cartSetter) {
    const newCart = [...cart];
    // Find in the cart
    for (let i = 0; i < newCart.length; i++) {
        if (product.id === newCart[i].id) {
            newCart.splice(i, 1);
            cartSetter(newCart);
            return;
        }
    }
}

export { addToCart, editCartQuantity, removeFromCart}