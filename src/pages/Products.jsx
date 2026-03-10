import Header from "../components/Header"
import SingleProductList from "../products/SingleProductList"

export default function Products() {

    return (
        <div>
            <h1 className="text-center">
                Products
            </h1>

            <SingleProductList />

        </div >
    )
}