import { Link } from "react-router-dom";

const Contacto = () => {
    return (
        <>
         <ul className='navbar-nav me-auto'>
            <li className="nav-item">
                <Link className="nav-link" to="/Contact">
                
                    <buttton className="btn btn-secondary">Contacto</buttton>
                </Link>
            </li>
        </ul>
        </>
    );
}

export default Contacto;
