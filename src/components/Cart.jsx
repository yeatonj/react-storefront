import "../styles/cart.css"
import CartCard from "./CartCard";

export default function Cart({
    show,
    hideCallback,
    cart,
    cartSetter
}) {
    if (!show) {
        return (<></>);
    }

    return (
        <div onClick={hideCallback} className="background-content">
            <div onClick={(e) => e.stopPropagation()} className="cart">
                <button className="close" onClick={hideCallback}><img src="/src/img/close_button.svg" alt="close" /></button>
                <h2>Cart:</h2>
                <div className="cart-cards">
                    {
                        cart.length > 0 && cart.map(item => 
                            <CartCard 
                                key={item.id}
                                details={item}
                                cart={cart}
                                cartSetter={cartSetter}
                            />
                        )
                    }
                    {
                        cart.length === 0 && <p>Cart is empty.</p>
                    }
                </div>
                <p>Total: ${cart.reduce((accum, current) => accum + (current.price * current.quantity), 0)}</p>
                <button>Checkout</button>
            </div>
        </div>
    )
}