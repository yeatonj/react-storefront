import { useState, useEffect } from "react"
import ProductCard from "../components/ProductCard";

export default function Store({
    cart
}) {
    const [products, setProducts] = useState(null);

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         try {
    //             const response = await fetch("https://fakestoreapi.com/products");
    //             if (response.status >= 400) {
    //                 throw new Error("server error");
    //             }
    //             const data = await response.json();
    //             console.log(data);
    //             setProducts(data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }

    //     fetchProducts();
    // }, []);

    if (products === null) {
        return (
            <>
            <h2>Products:</h2>
            <p>Products currently loading...</p>
        </>
        )
    }


    return (
        <>
            <h2>Products:</h2>
            <div className="product-cards">
                {products.map(product => <ProductCard 
                    key={product.id}
                    details={product}
                />
                )}
            </div>
        </>
    )
}