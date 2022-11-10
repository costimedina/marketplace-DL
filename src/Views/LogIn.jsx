//STYLES
import "../assets/styles/login.css";
import { Container, Form } from "react-bootstrap";

//COMPONENTS
import { useContext, useEffect, useState } from "react";
import UsuariosContext from "../context/UsuariosContext";
import { useNavigate } from "react-router-dom";
import RegisteredUserContext from "../context/RegisteredUserContext";

function LogIn() {

  const { usuariosData, setUsuariosData } = useContext(UsuariosContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setIsLoggedIn, setPrueba} = useContext(RegisteredUserContext)

  const navigate = useNavigate();
  

  const endpoint = "/usuarios.json";
  const fetchData = async () => {
    const response = await fetch(endpoint);
    let usuarios = await response.json();
    console.log(usuarios);
    setUsuariosData(usuarios);
  };

  //renderizado
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

   //función de búsqueda
   const ingresarE = (e) => {
    setEmail(e.target.value);
    //console.log(e.target.value);
  };

   //función de búsqueda
   const ingresarP = (e) => {
    setPassword(e.target.value);
    //console.log(e.target.value);
  };

  const handleClick = () => {
    const found = usuariosData.usuarios?.find((ingresar) => ingresar.email === email && ingresar.password === password);
    //console.log(found);
    if (found) {
     setIsLoggedIn(true) 
     setPrueba(true)
      navigate("/Catalogue")
   } else {
      window.alert("credenciales inválidas") 
   }

  }; 

  return (
    <>
      <div className="mb-4 mt-5">
        <h2>BIENVENIDO</h2>
      </div>

      <Container className="d-flex justify-content-center">
        <Form>

          <div className="form-outline mb-4">
            <input 
            type="email" 
            id="form1Login" 
            className="form-control" 
            value={email}
            onChange={ingresarE}
            />
            <label className="form-labelLogin">Correo electrónico</label>
          </div>

          <div className="form-outline mb-5">
            <input 
            type="password" 
            id="form1Login" 
            className="form-control" 
            value={password}
            onChange={ingresarP}
            />
            <label className="form-labelLogin">Contraseña</label>
          </div>

          <div class="row mb-4">
            <div class="col d-flex justify-content-center">

              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                <label className="form-check-label"> Remember me </label>
                <a className="anchorPassword" href="www.google.com"> ¿Recuperar contraseña?</a>
              </div>
            </div>
          </div>

          <button type="button" className="login btn-submit btn-block mb-4" onClick={handleClick}>INGRESAR</button>

          <div className="text-center mb-3">
            <p>¿No eres miembro? <a className="anchorLogin" href="http://localhost:3000/SignUp">Regístrate</a></p>
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

export default LogIn;