import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { IoCartOutline } from "react-icons/io5";
const CartWidget = () => {
    const {getItemQuantity} = useContext(CartContext)
    return (
        <>
         <ul className='navbar-nav me-auto cartWidget'>
            <li className="nav-item">
                <Link className="nav-link" to="/cart">

                   
                    <buttton className="btn btn-secondary">
                           <i className="fas fa-shopping-cart fa-lg"></i>
                            { getItemQuantity() >= 1 && <span className="cantCarrito">{getItemQuantity()}</span>}
                        <IoCartOutline/>
                        </buttton>
    
                </Link>
            </li>
        </ul>
        </>
    );
}

export default CartWidget;
