import "./navbar.css"
import Dropdown from "./Dropdown/Dropdown";
import { IoCartOutline } from "react-icons/io5";
const Navbar = () => {
    return (
        
             <nav id="logo6" className="navbar navbar-expand-lg navbar-dark bg-primary">
                
  <div className="container-fluid">
    
    <a className="navbar-brand" href="logo6"><img className="logo" src="./img/logo6espigas.png" alt="logo" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        
        <Dropdown/>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Contacto</a>
        </li>
      </ul>
        
    </div>
      <ul className="navbar-nav me-auto">
      <li className="nav-item">
          <a className="nav-link" href="#"><button className="btn btn-dark"><IoCartOutline/></button></a>
         
          </li>
      </ul>
  </div>
</nav>
        
    );
}

export default Navbar; 
