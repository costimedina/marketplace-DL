//STYLES
import "../assets/styles/signUp.css";
import { Container, Form } from "react-bootstrap";

//COMPONENTS
import { useContext } from "react";
import UsuariosContext from "../context/UsuariosContext";
import { nanoid } from 'nanoid';
import { useNavigate } from "react-router-dom";

//IMAGES
import greenLogo from '../assets/images/logos/logo-color.png';

function SignUp() {

  const { usuariosData, setUsuariosData } = useContext(UsuariosContext);
  const navigate = useNavigate();

  const onSubmit = () => {
    const name = document.getElementById("newName").value;
    const newApellidoPaterno = document.getElementById("newApellidoPaterno").value;
    const newApellidoMaterno = document.getElementById("newApellidoMaterno").value;
    const newEmail = document.getElementById("newEmail").value;
    const newPassword = document.getElementById("newPassword").value;
    const repeatNewPassword = document.getElementById("repeatNewPassword").value;
    //console.log(name, newApellidoPaterno, newApellidoMaterno, newEmail, newPassword, repeatNewPassword);
    if (name !== "" && newApellidoPaterno !== "" && newApellidoMaterno !== "" && newEmail !== "" && newPassword !== "" && repeatNewPassword !== "") {
      if (newPassword === repeatNewPassword) {
        //console.log({ usuariosData1: usuariosData });
        const foundExistence = usuariosData.usuarios.find((ingresar) => ingresar.email === newEmail);
        //console.log(foundExistence);
        if (!foundExistence) {
          setUsuariosData({
            usuarios: [
              ...usuariosData.usuarios,
              { id: nanoid(), apellidoPaterno: newApellidoPaterno, apellidoMaterno: newApellidoMaterno, nombre: name, email: newEmail, password: newPassword, fav: [] }
            ]
          });
          navigate("/logIn");
        }
      }
    }
  };

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

      <Container
        className="d-flex justify-content-center mt-3"
      >

        <Form>
          <div className="form-outline mb-4">
            <input
              id="newName"
              className="form-control"
              required
            />
            <label
              className="form-labelSign">
              Nombre
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              id="newApellidoPaterno"
              className="form-control"
              required
            />
            <label
              className="form-labelSign">
              Apellido paterno
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              id="newApellidoMaterno"
              className="form-control"
              required
            />
            <label
              className="form-labelSign">
              Apellido materno
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="email"
              id="newEmail"
              className="form-control"
              required
            />
            <label
              className="form-labelSign">
              Email
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="password"
              id="newPassword"
              className="form-control"
              required
            />
            <label
              className="form-labelSign">
              Contraseña
            </label>
          </div>

          <div className="form-outline mb-5">
            <input
              type="password"
              id="repeatNewPassword"
              className="form-control"
              required
            />
            <label
              className="form-labelSign">
              Repita su contraseña
            </label>
          </div>

          <div className="form-check d-flex justify-content-center mb-4">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value=""
              id="form2Example33"
            />
            <label
              className="form-check-label">
              Subscríbete a nuestro newsletter
            </label>
          </div>

          <button
            type="submit"
            className="login btn-submit btn-block mb-4"
            onClick={onSubmit}>
            REGÍSTRATE
          </button>

          <div className="text-center m-3">
            <p>¿No eres miembro?
              <a className="anchorLogin" href="http://localhost:3000/SignUp"> Regístrate aquí</a></p>
            <p>O ingresa por:</p>

            <button
              type="button"
              className="btn btn-link btn-floating mx-1 text-muted"
            >
              <i className="fab fa-facebook-f fa-2x"></i>
            </button>

            <button
              type="button"
              className="btn btn-link btn-floating mx-1 text-muted"
            >
              <i className="fab fa-google fa-2x"></i>
            </button>

            <button
              type="submit"
              className="btn btn-link btn-floating mx-1 text-muted"
            >
              <i className="fab fa-twitter fa-2x"></i>
            </button>
          </div>
        </Form>
      </Container>

    </>

  );
};

export default SignUp;