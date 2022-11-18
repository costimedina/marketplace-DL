//STYLES
import "../assets/styles/notFound.css";

//COMPONENTS
import { Link } from "react-router-dom";

function NotFound() {
  
  return (
    <div className="notFound text-center">
      <h1 className="text-black py-5">Sal de aquí que se puso feo 👹 </h1>

      <Link 
      className="volver-inicio" 
      to="/"
      >
        Te invito a voler al inicio
      </Link>
    </div>
  );
};

export default NotFound;