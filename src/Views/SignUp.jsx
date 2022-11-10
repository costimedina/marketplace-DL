//STYLES
import "../assets/styles/signUp.css";
import { Container, Form } from "react-bootstrap";

//COMPONENTS
import { Link } from "react-router-dom";

//IMAGES
import greenLogo from '../assets/images/logos/logo-color.png';

function SignUp() {

  return (
    <>
      <div className="mb-4 mt-5">
        <h2>CREA TU CUENTA AHORA</h2>
      </div>
      <div>
        <img
          className="mb-4"
          height="180px"
          src={greenLogo}
          alt="certificacion"
        />
      </div>

      <Container className="d-flex justify-content-center">
        <Form>

          <div className="form-outline mb-4">
            <input type="email" id="form1SignUp" className="form-control" />
            <label className="form-labelSign">Nombre</label>
          </div>

          <div className="form-outline mb-4">
            <input type="email" id="form1SignUp" className="form-control" />
            <label className="form-labelSign">Apellido paterno</label>
          </div>

          <div className="form-outline mb-4">
            <input type="email" id="form1SignUp" className="form-control" />
            <label className="form-labelSign">Apellido materno</label>
          </div>

          <div className="form-outline mb-4">
            <input type="email" id="form1SignUp" className="form-control" />
            <label className="form-labelSign">Email</label>
          </div>

          <div className="form-outline mb-5">
            <input type="password" id="form1SignUp" className="form-control" />
            <label className="form-labelSign">Contraseña</label>
          </div>

          <div className="form-check d-flex justify-content-center mb-4">
            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
            <label className="form-check-label">
              Subscríbete a nuestro newsletter
            </label>
          </div>

          <Link to="/Profile">
            <button type="buttom" className="signUp btn-primary btn-block mb-4">ÚNETE</button>
          </Link>

          <div className="text-center m-3">
            <p>¿No eres miembro? <a className="anchorLogin" href="http://localhost:3000/SignUp">Regístrate aquí</a></p>
            <p>O ingresa por:</p>

            <button type="button" className="btn btn-link btn-floating mx-1 text-muted">
              <i className="fab fa-facebook-f fa-2x"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1 text-muted">
              <i className="fab fa-google fa-2x"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1 text-muted">
              <i className="fab fa-twitter fa-2x"></i>
            </button>

          </div>
        </Form>
      </Container>

    </>

  );
};

export default SignUp;