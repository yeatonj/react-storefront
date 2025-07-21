import { Outlet, Link } from "react-router-dom";
import StoreHeader from "../components/StoreHeader";
import { useState } from "react";
import Cart from "../components/Cart";


export default function Root() {
    const [showCart, setShowCart] = useState(false);



    return (
        <>
            <StoreHeader 
                displayCartCallback={() => setShowCart(true)}
            />
            <div className="contents">
                <Outlet />
            </div>
            <Cart 
                show={showCart}
                hideCallback={() => setShowCart(false)}
            />
        </>
    )
}