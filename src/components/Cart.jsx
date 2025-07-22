import "../styles/cart.css"

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
                        cart.length > 0 && <p>Items!</p>
                    }
                    {
                        cart.length === 0 && <p>Cart is empty.</p>
                    }
                </div>
                <button>Checkout</button>
            </div>
        </div>
    )
}