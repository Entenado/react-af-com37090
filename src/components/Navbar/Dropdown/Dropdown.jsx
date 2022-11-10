import { Link } from "react-router-dom";
import { IoStorefrontOutline } from "react-icons/io5";
const Dropdown = () => {
    return (
        
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <button className="btn btn-secondary"> <IoStorefrontOutline/> </button>
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to={`/category/1`}>Pastelería</Link>
            </li>
            <li>
              <Link className="dropdown-item" to={`/category/2`}>Panadería</Link>
              </li>
            <li><hr className="dropdown-divider" /></li>
            <li>
              <Link className="dropdown-item" to={`/category/3`}>Salado</Link>
              </li>
          </ul>
        </li>
        
    );
}

export default Dropdown;
