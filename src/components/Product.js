import { FaStar, FaRegStar } from 'react-icons/fa';

function Product(props) {
    const starRating = [];
    for (let i = 0; i < 5; i++) {
        if (i < props.rating) {
            starRating.push(<FaStar key={i} />);
        } else {
            starRating.push(<FaRegStar key={i} className="empty-star" />);
        }
    }

    return (
        <article className="product-container">
            <div className='square-image-container'>
                <img src={props.url} alt="Product Logo" />
            </div>

            <p className="product-title">{props.title}</p>
            <div className='stars'>
                <span className='star-rating'>{starRating}</span>
                <span className='rating'>{Number(props.rating).toFixed(1)}</span>
            </div>
            <div className="product-under">
                <p className="text-small" style={{fontWeight: '600'}}>£{props.price}</p>
                <p className="product-sample text-small">
                    Order sample
                </p>
            </div>
            <p className="uppercase">Per roll</p>
        </article>
    )
}

export default Product;