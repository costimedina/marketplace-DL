//STYLES
import { Form, Container } from "react-bootstrap";

//COMPONENTS

//IMAGES
import workImage from '../assets/images/backgrounds/work-with-laplantita.jpg';


function WorkWithUs() {

  return (
    <>
      <div className="banner"></div>

      <div className="mb-4 mt-5">
        <h2>TRABAJA CON NOSOTROS</h2>
      </div>

      <div>
        <img
          className="mb-4"
          height="180px"
          src={workImage}
          alt="certificacion"
        />
      </div>

      <Container
        className="d-flex justify-content-center mt-3"
      >
        <Form>
          <div className="form-outline mb-4">
            <input
              type="text"
              id="form1Login"
              className="form-control"
            />
            <label
              className="form-labelLogin">
              Nombre
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="text"
              id="form1Login"
              className="form-control"
            />
            <label
              className="form-labelLogin">
              Apellido Materno
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="text"
              id="form1Login"
              className="form-control"
            />
            <label
              className="form-labelLogin">
              Apellido Paterno
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="email"
              id="form1Login"
              className="form-control"
            />
            <label
              className="form-labelLogin">
              Email
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="text"
              id="form1Login"
              className="form-control"
            />
            <label
              className="form-labelLogin">
              Número de contacto
            </label>
          </div>

          <div className="form-outline mb-5">
            <input
              type="text"
              id="form1Login"
              className="form-control"
            />
            <label
              className="form-labelLogin">
              LinkedIn
            </label>
          </div>

          <div className="d-flex justify-content-between">
            <button
              type="button"
              className="login btn-submit btn-block mb-4"
            >
              ADJUNTAR CV
            </button>

            <button
              type="button"
              className="login btn-submit btn-block mb-4"
            >
              INGRESAR
            </button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default WorkWithUs;