//STYLES
import "../assets/styles/privateNavbar.css";
import { Nav, Navbar } from "react-bootstrap";

//COMPONENTS
import { Navigate, NavLink } from "react-router-dom";
import RegisteredUserContext from "../context/RegisteredUserContext";
import { useContext } from "react";

//IMAGES
import blackLogo from '../assets/images/logos/logo-inicio.png';

function PrivateNavBar() {

  const {setPrueba} = useContext(RegisteredUserContext)

  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  const handleClick = (found) => {
    //console.log(found);
    if (found) {
     setPrueba(false) 
      Navigate("/")
   };
  };

  return (
    <Navbar
      className="d-flex justify-content-between px-5"
      variant="light"
      style={{ background: "#212225" }}
    >

        <NavLink 
        end className={setActiveClass} 
        to="/" 
        >
          <Navbar.Brand 
          className="d-flex px-5"
          >
            <img
              width="80"
              src={blackLogo}
              alt="logo LaPlantita"
            />
          </Navbar.Brand>
        </NavLink>

        <Nav className="d-flex px-4">

          <NavLink 
          end className={setActiveClass} 
          to="Profile"
          >
            <h5><i className="fa-sharp fa-solid fa-user"></i> Tu perfil</h5>
          </NavLink>
          {" - "}

          <NavLink 
          end className={setActiveClass} 
          to="Catalogue"
          >
            <h5><i className="fa-sharp fa-solid fa-seedling"></i> Galería</h5>
          </NavLink>
          {" - "}

          <button type="button" className="logOut" onClick={handleClick}><i class="fa-sharp fa-solid fa-power-off"></i> Cerrar Sesión</button>

        </Nav>
    </Navbar>
  );
};

export default PrivateNavBar;