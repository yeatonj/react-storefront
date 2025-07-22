import "../styles/products.css"

import { addToCart } from "../CartHelpers"

export default function ProductCard({
    details,
    cart,
    cartSetter
}) {

    function addProduct(addQuantity) {
        const cartProduct = {
            id:details.id,
            name:details.title,
            quantity:addQuantity,
            image:details.image,
            price:details.price
        };

        addToCart(cartProduct, addQuantity, cart, cartSetter);
    }

    return(
        <div className="product-card">
            <img src={details.image} alt={details.title} />
            <h4>{details.title}</h4>
            <p>{details.description}</p>
            <p>{details.price}</p>
            <button onClick={() => {
                addProduct(1);
            }}>Add</button>
        </div>
    )
}