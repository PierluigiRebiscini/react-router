import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header className="conteiner-fluid p-3">

            <nav >
                <ul>

                    <li className=" nav-list-header d-flex justify-content-between">

                        <NavLink to="/">HomePage</NavLink>
                        <NavLink to="/aboutus">About Us</NavLink>
                        <NavLink to="/products">Products</NavLink>

                    </li>
                </ul>
            </nav>
        </header>
    )
}