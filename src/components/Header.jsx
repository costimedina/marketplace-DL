//STYLES
import "../assets/styles/header.css";

//
import { Link } from "react-router-dom";

function Header() {

  return (
    <>

      <div className="banner">
      </div>

      <div>
        <div
          className="d-flex flex-column justify-content-between px-5 text-white py-5"
          variant="light"
          style={{ background: "#212225" }}>

          <h2 className="mt-2 mb-5">REVISA NUESTRAS ESPECIES EN EL CATÁLOGO Y CONSIGUE TUS SIGUIENTES PLANTITAS</h2>

          <Link to="/SignUp">
            <button 
            type="button" 
            className="btn-submit btn-block mb-4" >INGRESA AQUÍ</button>
          </Link>

        </div>
      </div>
   
    </>

  );
};

export default Header;