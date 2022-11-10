import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
const CartWidget = () => {
    return (
        <>
         <ul className='navbar-nav me-auto'>
            <li className="nav-item">
                <Link className="nav-link" to="/cart">
                
                    <buttton className="btn btn-secondary"><IoCartOutline/></buttton>
                </Link>
            </li>
        </ul>
        </>
    );
}

export default CartWidget;
