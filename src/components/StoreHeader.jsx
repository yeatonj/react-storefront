import { Link } from "react-router-dom";
import "../styles/store-header.css"

export default function StoreHeader({
    displayCartCallback
}) {
    return (
        <ul className="store-header">
            <li>
                <Link to={`/`}>Home</Link>
            </li>

            <li>
                <Link to={`store`}>Store</Link>
            </li>
            
            <li>
                <button onClick={displayCartCallback}>Cart</button>
            </li>
        </ul>
    )
}