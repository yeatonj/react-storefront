import { removeFromCart } from "../CartHelpers";

export default function CartCard({
    details,
    cart,
    cartSetter
}) {
    console.log(details);
    return (
    <div className="cart-card">
        <img src={details.image} alt={details.name} />
        <div className="cart-details">
            <h4>{details.name}</h4>
            <p>Quantity: {details.quantity}</p>
            <p>Each: ${details.price}</p>
            <p>Subtotal: ${details.quantity * details.price}</p>
        </div>
        <button onClick={() => removeFromCart(details, cart, cartSetter)}>Remove</button>
    </div>
    )
}