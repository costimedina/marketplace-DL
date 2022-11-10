//STYLES
import { Navbar, Container } from "react-bootstrap";

//DEPENDENCIAS
import { NavLink } from "react-router-dom";

function PublicFooter() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (

    <Navbar className="text-center text-lg-start text-muted">

      <Container className="text-center text-lg-start">

        <div className="container text-center text-start mt-5">
          <div className="row mt-3">

            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6
                className="fw-bold mb-4">LA PLANTITA
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>

            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="fw-bold mb-4">
                NUESTRO TEAM
              </h6>
              <NavLink
                end className={setActiveClass} to="OurTeam">
                <i className="fa-solid fa-people-group fa-2x text-muted"></i>
              </NavLink>
            </div>

            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="fw-bold mb-4">
                CONTACTO
              </h6>
              <p>El Bosque #999 - Santiago</p>
              <p>info@laplantita.com</p>
              <p>+56 9 99 999 999</p>
            </div>

            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="fw-bold mb-4">
                CONÉCTATE
              </h6>
              <a href="www.linkedin.com" className="me-4 text-reset"><i className="fab fa-linkedin"></i></a>
              <a href="www.twitter.com" className="me-4 text-reset"><i className="fab fa-twitter"></i></a>
              <a href="www.facebook.com" className="me-4 text-reset"><i className="fab fa-facebook-f"></i></a>
              <a href="www.spotify.com" className="text-reset"><i className="fa-solid fa-podcast"></i></a>
            </div>

          </div>

          <hr />
          <div className="d-flex justify-content-between px-1 mt-1 mb-1">
            <p>Términos y condiciones</p>
            <p>Patente</p>
            <p>La Plantita | Todos los derechos reservados</p>
          </div>
        </div>

      </Container >

    </Navbar>

  );
}

export default PublicFooter;