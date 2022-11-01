//SYLES
import "../assets/styles/publicNavbar.css";
import { Nav, Navbar } from "react-bootstrap";

//COMPONENTS
import { NavLink } from "react-router-dom";

//IMAGES
import blackLogo from '../assets/images/logos/logo-inicio.png';

function NavBar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);


  return (

    <Navbar
    className="d-flex justify-content-between px-5"
    variant="light"
    style={{ background: "#212225" }}
  >
   
      <NavLink end className={setActiveClass} to="/" >
        <Navbar.Brand>
          <img
            width="80"
            src={blackLogo}
            alt="logo LaPlantita"
          />
        </Navbar.Brand>
      </NavLink>

      <Nav className="d-flex">

        <NavLink end className={setActiveClass} to="LogIn">
          <h5><i class="fa-sharp fa-solid fa-user"></i> Ingresar</h5>
        </NavLink>
    
        <NavLink className={setActiveClass} to="SignUp">
          <h5><i class="fa-sharp fa-solid fa-right-to-bracket"></i> Registrarse</h5>
        </NavLink>
     
        <NavLink className={setActiveClass} to="Catalogue">
          <h5><i class="fa-solid fa-leaf"></i> Catálogo</h5>
        </NavLink>

      </Nav>
   
  </Navbar>
);
};

export default NavBar;
