import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"

import axios from "axios";


export default function SingleProduct() {
    const { id } = useParams()
    const [cardProduct, setCardProduct] = useState([]);
    const { title, price, description, category, image } = cardProduct

    function product() {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                setCardProduct(response.data)
                console.log(response.data)

            })


    }
    useEffect(product, [])

    return (
        <div className="conteiner-fluid text-center card">
            <figure className="img-card">
                <img src={image} alt={title} />
            </figure>


            <div className="card-body">
                <h5 className="card-title"> {title}-{price}$ </h5>
                <p className="card-text ">{description} </p>

            </div>
        </div>
    )
}