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
      <div className="mb-2 mt-5">
        <h2>CREA TU CUENTA AHORA</h2>
      </div>
      <div>
        <img
          height="180px"
          src={greenLogo}
          alt="certificacion"
        />
      </div>

      <Container className="d-flex justify-content-center px-5 mt-4 mb-5">
        <Form>

          <div className="form-outline mb-4">
            <input type="email" id="form1SignUp" className="form-control" />
            <label className="form-label" for="form3Example3">Nombres</label>
          </div>

          <div className="form-outline mb-4">
            <input type="email" id="form1SignUp" className="form-control" />
            <label className="form-label" for="form3Example3">Apellidos</label>
          </div>

          <div className="form-outline mb-4">
            <input type="email" id="form1SignUp" className="form-control" />
            <label className="form-label" for="form3Example3">Email</label>
          </div>

          <div className="form-outline mb-4">
            <input type="password" id="form1SignUp" className="form-control" />
            <label className="form-label" for="form3Example4">Contraseña</label>
          </div>

          <div className="form-check d-flex justify-content-center mb-4">
            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
            <label className="form-check-label" for="form2Example33">
              Subscríbete a nuestro newsletter
            </label>
          </div>

          <Link to="/Profile">
            <button type="submit" className="signUp btn-primary btn-block mb-4">Únete</button>
          </Link>

          <div class="text-center">
            <p>¿No eres miembro? <a className="anchorLogin"href="http://localhost:3000/SignUp">Regístrate</a></p>
            <p>O ingresa por:</p>

             <button type="button" className="btn btn-link btn-floating mx-1 text-muted">
              <i class="fab fa-facebook-f fa-2x"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1 text-muted">
              <i class="fab fa-google fa-2x"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1 text-muted">
              <i class="fab fa-twitter fa-2x"></i>
            </button>

          </div>
        </Form>
      </Container>

    </>

  );
};

export default SignUp;