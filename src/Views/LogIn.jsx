//STYLES
import "../assets/styles/login.css";
import { Container, Form } from "react-bootstrap";

//COMPONENTS
import { Link } from "react-router-dom";

//IMAGES 

function LogIn() {

  return (
    <>
      <div className="mb-5 mt-5">
        <h2>BIENVENIDO</h2>
      </div>

      <Container className="d-flex justify-content-center px-5 mt-5 mb-5">
        <Form>

          <div className="form-outline mb-4">
            <input type="email" id="form1Login" className="form-control"/>
            <label className="form-label" for="form2Example1">Correo electrónico</label>
          </div>


          <div className="form-outline mb-4">
            <input type="password" id="form1Login" className="form-control" />
            <label className="form-label" for="form2Example2">Contraseña</label>
          </div>


          <div class="row mb-4">
            <div class="col d-flex justify-content-center">

              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                <label className="form-check-label" for="form2Example31"> Remember me </label>
                <a className="anchorPassword" href="www.google.com"> ¿Recuperar contraseña?</a>
              </div>
            </div>
          </div>

          <Link to="/Profile">
            <button type="submit" className="login btn-submit btn-block mb-4">ÚNETE</button>
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

export default LogIn;