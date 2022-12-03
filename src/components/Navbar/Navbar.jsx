import { Link } from "react-router-dom";
import "./navbar.css"
import Dropdown from "./Dropdown/Dropdown";
import { IoHomeOutline } from "react-icons/io5";
import CartWidget from "../CartWidget/CartWidget";


const Navbar = () => {
    return (
        
             

             <nav id="logo6" className="navbar navbar-expand-lg navbar-dark bg-bluelight">
              
                
  <div className="container-fluid">
   
    <Link className="navbar-brand" to="/" href="logo6"><img className="logo" src="image/logo6.png" alt="logo" /></Link>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/">
          <button className="btn btn-secondary"><IoHomeOutline/> </button>
          </Link>
        </li>

        <Dropdown/>
       
        </ul>
        
      
        
    </div>

    <CartWidget/>  
  </div>
</nav>
        
    );
}

export default Navbar; 
