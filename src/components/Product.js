function Product(props){
    return (
        <article className="product-container">
            <img src={props.url} alt="Product Logo"/>
            <p className="product-title">{props.title}</p>
            <div className="product-under">
                <p className="text-small">£{props.price}</p>
                <p className="product-sample text-small">
                    Order sample
                </p>
            </div>
            <p className="uppercase">Per roll</p>
        </article>
    )
}

export default Product;