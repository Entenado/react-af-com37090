
const Dropdown = () => {
    return (
        
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Tienda
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Pastelería</a></li>
            <li><a className="dropdown-item" href="#">Panadería</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Salado</a></li>
          </ul>
        </li>
        
    );
}

export default Dropdown;
