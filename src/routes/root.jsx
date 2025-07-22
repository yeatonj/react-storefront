import { Outlet, Link } from "react-router-dom";
import StoreHeader from "../components/StoreHeader";
import { useState } from "react";
import Cart from "../components/Cart";
import StoreFooter from "../components/StoreFooter";
import "../styles/root.css"


export default function Root() {
    const [showCart, setShowCart] = useState(false);
    const [cart, setCart] = useState([]);

    return (
        <>
            <StoreHeader 
                displayCartCallback={() => setShowCart(true)}
            />
            <div className="contents">
                <Outlet />
            </div>
            <StoreFooter />
            <Cart 
                show={showCart}
                hideCallback={() => setShowCart(false)}
            />
        </>
    )
}