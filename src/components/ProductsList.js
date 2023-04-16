/* eslint-disable jsx-a11y/anchor-is-valid */

import { useEffect, useState } from "react";
import Product from "./Product";

function ProductsList(){
    const [ProductsList, setProductsList] = useState([]);
    const [sortOrder, setSortOrder] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=30");
            if(!resp.ok) return;
            const data = await resp.json();
            setProductsList(data);
        }
        fetchData();
    }, []);
    const sortedProducts = [...ProductsList];
    if (sortOrder === "asc") {
        sortedProducts.sort((a, b) => a.id - b.id);
    } else if (sortOrder === "desc") {
        sortedProducts.sort((a, b) => b.id - a.id);
    }
    return (
        <>
        <div className="results-line">
            <h4>Found: <span className="exclude">{ProductsList.length} results</span></h4>
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
            {sortedProducts.map((product) => (
                <Product
                key = {product.id}
                title = {product.title}
                url = {product.url}
                price = {product.id}
                />
            ))}
        </div>
        </>
    )
}

export default ProductsList;