//STYLES
import "../assets/styles/teamCard.css";

//COMPONENTS
import { useNavigate } from "react-router-dom";

//IMAGES

function TeamCard({ profesional }) {
  const navigate = useNavigate();


  return (
    <div className="card col-lg-3 col-md-6" key={profesional.id}>
      <img className="card-img-top"
        src="https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/articulos/perfil-resilencia.jpg"
        alt={profesional.commonName}
      />
      <div className="card-body">
        <p className="card-title">{profesional.commonName}</p>
        <hr />
        <h5 className="card-title">{profesional.name}</h5>
        <hr />
        <p className="card-title">{profesional.price}</p>
        <div className="d-flex">

          <button className="login btn-submit btn-block mb-4" onClick={() => navigate(`${profesional.id}/details/`)}> Ver más 👀</button>
          <hr />
          
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
