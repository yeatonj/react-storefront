import { removeFromCart, editCartQuantity } from "../CartHelpers";

import QuantitySelector from "./QuantitySelector";
import { useState } from "react";

export default function CartCard({
    details,
    cart,
    cartSetter
}) {
    const [updatedQuantity, setUpdatedQuantity] = useState(details.quantity);

    function adjustQuantity() {
        editCartQuantity(details, updatedQuantity, cart, cartSetter);
    }

    return (
    <div className="cart-card">
        <img src={details.image} alt={details.name} />
        <div className="cart-details">
            <h4>{details.name}</h4>
            <p>Quantity: {details.quantity}</p>
            <p>Each: ${details.price}</p>
            <p>Subtotal: ${details.quantity * details.price}</p>
        </div>
        <div className="quantity-update-cart">
            <p>Adjust Quantity:</p>
            <QuantitySelector 
                quantity={updatedQuantity}
                setQuantity={setUpdatedQuantity}
            />
            <button onClick={adjustQuantity}>Update</button>
        </div>
        
        <button onClick={() => removeFromCart(details, cart, cartSetter)}>Remove</button>
    </div>
    )
}