import "../styles/products.css"

export default function ProductCard({
    details
}) {
    return(
        <div className="product-card">
            <img src={details.image} alt={details.title} />
            <h4>{details.title}</h4>
            <p>{details.description}</p>
            <p>{details.price}</p>
            <button>Add</button>
        </div>
    )
}