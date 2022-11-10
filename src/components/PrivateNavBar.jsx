//CSS

import { Nav, Navbar, Container } from "react-bootstrap";

//IMAGES
import blackLogo from '../assets/images/logos/logo-inicio.png';

//REACT
import { Navigate, NavLink } from "react-router-dom";
import RegisteredUserContext from "../context/RegisteredUserContext";
import { useContext } from "react";


function NavBar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  const {setPrueba} = useContext(RegisteredUserContext)
  

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
      <Container className="containerNavbar">
        <NavLink end className={setActiveClass} to="/" >
          <Navbar.Brand>
            <img
              width="80"
              src={blackLogo}
              alt="logo LaPlantita"
            />
          </Navbar.Brand>
        </NavLink>

        <Nav className="d-flex links">

          <NavLink end className={setActiveClass} to="Profile">
            <h5>Tu perfil</h5>
          </NavLink>
          {" - "}
      
      
          <button type="button" className="login btn-submit btn-block mb-4" onClick={handleClick}>cerrar sesión</button>

        </Nav>

      </Container>
    </Navbar>
  );
};

export default NavBar;