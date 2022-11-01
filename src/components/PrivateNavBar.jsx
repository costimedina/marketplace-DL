//CSS
import "../assets/styles/navbar.css"
import { Nav, Navbar, Container } from "react-bootstrap";

//IMAGES
import blackLogo from '../assets/images/logos/logo-inicio.png';

//REACT
import { NavLink } from "react-router-dom";

function NavBar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

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
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;