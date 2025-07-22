import "../styles/products.css"
import QuantitySelector from "./QuantitySelector";

import { addToCart } from "../CartHelpers"
import { useState } from "react";

export default function ProductCard({
    details,
    cart,
    cartSetter
}) {

    const [purchaseQuantity, setPurchaseQuantity] = useState(1);

    function addProduct() {
        const cartProduct = {
            id:details.id,
            name:details.title,
            quantity:purchaseQuantity,
            image:details.image,
            price:details.price
        };

        addToCart(cartProduct, purchaseQuantity, cart, cartSetter);
    }

    return(
        <div className="product-card">
            <img src={details.image} alt={details.title} />
            <h4>{details.title}</h4>
            <p>{details.description}</p>
            <p>{details.price}</p>
            <QuantitySelector 
                quantity={purchaseQuantity}
                setQuantity={setPurchaseQuantity}
            />
            <button onClick={() => {
                addProduct();
            }}>Add</button>
        </div>
    )
}