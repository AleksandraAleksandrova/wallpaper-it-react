/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import Product from "./Product";
import Pagination from "./Pagination";

function ProductsList() {
    const [ProductsList, setProductsList] = useState([]);
    const [sortOrder, setSortOrder] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(12);

    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch('https://dummyjson.com/products');
            if (!resp.ok) return;
            const data = await resp.json();
            setProductsList(data.products);
        }
        fetchData();
    }, []);

    const sortedProducts = [...ProductsList];
    if (sortOrder === "asc") {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
        sortedProducts.sort((a, b) => b.price - a.price);
    }

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const nPages = Math.ceil(ProductsList.length / productsPerPage)

    return (
        <>
            <div className="results-line">
                <h4>Found: <span className="exclude">{sortedProducts.length} results</span></h4>
                <div className="results-right">
                    <ul>
                        <li>
                            <a >Colour <i className="arrow-down"></i></a>
                        </li>
                        <li>
                            <a >Brand <i className="arrow-down"></i></a>
                        </li>
                        <li>
                            <a>Design Style <i className="arrow-down"></i></a>
                        </li>
                        <li>
                            <select className="custom-select" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} >
                                <option value="">Sort</option>
                                <option value="desc">Price: High - Low</option>
                                <option value="asc">Price: Low - High</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="all-products">
                {currentProducts.map((product) => (
                    <Product
                        key={product.id}
                        title={product.title}
                        url={product.thumbnail}
                        price={product.price}
                        rating={product.rating}
                    />
                ))}
            </div>
            <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </>
    );
}

export default ProductsList;
