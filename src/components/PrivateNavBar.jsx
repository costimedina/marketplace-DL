//STYLES
import "../assets/styles/privateNavbar.css";
import { Nav, Navbar } from "react-bootstrap";

//COMPONENTS
import { NavLink, useNavigate } from "react-router-dom";
import RegisteredUserContext from "../context/RegisteredUserContext";
import { useContext } from "react";

//IMAGES
import blackLogo from '../assets/images/logos/logo-inicio.png';

function PrivateNavBar() {

  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(RegisteredUserContext);

  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  const handleClick = () => {
    //console.log(found);
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <Navbar
      className="privateNavStyle d-flex justify-content-between px-3"
      variant="light"
      style={{ background: "#212225" }}
    >

      <NavLink
        end
        className={setActiveClass}
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

      <Nav
        className="subNavStyled-flex px-4">

        <NavLink
          end
          className={setActiveClass}
          to="Profile"
        >
          <h5 className="responsiveFont">
            <i
              className="fa-sharp fa-solid fa-user">
            </i>
            {"  "}
            Tu perfil
          </h5>
        </NavLink>
        {" - "}

        <NavLink
          end className={setActiveClass}
          to="Catalogue"
        >
          <h5 className="responsiveFont"><i className="fa-sharp fa-solid fa-seedling"></i>
            {"  "}
            Galería
          </h5>
        </NavLink>
        {" - "}

        <button
          type="button"
          className="logOut"
          onClick={handleClick}>
          <i
            className="fa-sharp fa-solid fa-power-off">
          </i>
          {"  "}
          Cerrar Sesión
        </button>
      </Nav>
    </Navbar>
  );
};

export default PrivateNavBar;