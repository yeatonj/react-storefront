import '/src/styles/quantity-selector.css'

export default function QuantitySelector({
    quantity,
    setQuantity
}) {

    function increment() {
        if (quantity > 9) {
            return;
        }
        setQuantity(quantity + 1);
    }

    function decrement() {
        if (quantity === 1) {
            return;
        }
        setQuantity(quantity - 1);
    }

    return (
        <div className="selector">
            <button onClick={decrement}>-</button>
            <p>{quantity}</p>
            <button onClick={increment}>+</button>
        </div>
    )
}