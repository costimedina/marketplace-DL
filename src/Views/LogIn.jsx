//STYLES
import "../assets/styles/login.css";
import { Container, Form } from "react-bootstrap";

//COMPONENTS
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisteredUserContext from "../context/RegisteredUserContext";
import UsuariosContext from "../context/UsuariosContext";
import PlantasContext from "../context/PlantasContext";

function LogIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { usuariosData } = useContext(UsuariosContext);
  const { setIsLoggedIn, setLoggedInUser } = useContext(RegisteredUserContext);
  const { plantasData } = useContext(PlantasContext);


  const navigate = useNavigate();

  //función de búsqueda por mail
  const ingresarE = (e) => {
    setEmail(e.target.value);
    //console.log(e.target.value);
  };

  //función de búsqueda por contraseña
  const ingresarP = (e) => {
    setPassword(e.target.value);
    //console.log(e.target.value);
  };

  const handleClick = () => {
    const foundUser = usuariosData.usuarios?.find((usuario) => usuario.email === email && usuario.password === password);
    //console.log(found);
    //prueba en frontend para demostrar funcionamiento del codigo
    if (foundUser) {
      setIsLoggedIn(true);
      plantasData.forEach(plantita =>{
        if (
          foundUser.fav.includes(plantita.id)
        ){
          plantita.fav = true 
        }else{
          plantita.fav = false
        }
      })
      //seguir para completar usuario perfil
      setLoggedInUser(foundUser);
      navigate("/catalogue");
    } else {
      window.alert("credenciales inválidas");
    }
  };

  return (
    <>
      <div className="mb-4 mt-5">
        <h2>BIENVENIDO</h2>
      </div>

      <Container 
      className="d-flex justify-content-center"
      >
        <Form>
          <div className="form-outline mb-4">
            <input
              type="email"
              id="form1Login"
              className="form-control"
              value={email}
              onChange={ingresarE}
            />
            <label 
            className="form-labelLogin">
              Correo electrónico
            </label>
          </div>

          <div className="form-outline mb-5">
            <input
              type="password"
              id="form2Login"
              className="form-control"
              value={password}
              onChange={ingresarP}
            />
            <label 
            className="form-labelLogin">
              Contraseña
            </label>
          </div>

          <div className="row mb-4">
            <div className="col d-flex justify-content-center">

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox" 
                  value=""
                />

                <label className="form-check-label"> Recuérdame </label>
                <a className="anchorPassword" href="www.google.com"> ¿Recuperar contraseña?</a>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="login btn-submit btn-block mb-4"
            onClick={handleClick}>
            INGRESAR
          </button>

          <div className="text-center mb-3">
            <p>¿No eres miembro? <a className="anchorLogin" href="http://localhost:3000/SignUp">Regístrate</a></p>
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
            type="button" 
            className="btn btn-link btn-floating mx-1 text-muted">
              <i className="fab fa-twitter fa-2x"></i>
            </button>
          </div>
        </Form>
      </Container>
    </>

  );
};

export default LogIn;