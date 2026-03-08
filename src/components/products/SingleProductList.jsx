import axios from "axios"
import { useEffect } from "react"
import { Link, NavLink, useParams } from "react-router-dom"
import { useState } from "react";
import Products from "../../pages/Products";





export default function SingleProductList() {

    const [products, setProducts] = useState([])


    function fetchProducts() {
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                setProducts(response.data)
                console.log(response.data)
            })
            .catch()
    }

    useEffect(fetchProducts, []);

    return (
        <div>
            <ul>
                {products.map(singleProductList => (
                    <li key={singleProductList.id} className="list-product">
                        <Link to={`/products/${singleProductList.id}`} >
                            {singleProductList.title}
                        </Link>

                    </li>
                ))}
            </ul>
        </div>
    )
}