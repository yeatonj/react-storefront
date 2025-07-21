import "../styles/cart.css"

export default function Cart({
    show,
    hideCallback
}) {
    if (!show) {
        return (<></>);
    }

    return (
        <div onClick={hideCallback} className="background-content">
            <div onClick={(e) => e.stopPropagation()} className="cart">
                <p>This is your cart!</p>
                <button onClick={hideCallback}>Hide</button>
            </div>
        </div>
    )
}