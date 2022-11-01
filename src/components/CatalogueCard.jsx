//STYLES
import "../assets/styles/catalogueCard.css";

//COMPONENTS
import { useNavigate } from "react-router-dom";

//IMAGES

function CatalogueCard({ especie }) {
  const navigate = useNavigate();

  return (
    <div className="card col-lg-3 col-md-6" key={especie.id}>
      <img className="card-img-top"
        src="https://imagenes.elpais.com/resizer/PN_ZuW3w1Tj-KMCBl4pImDfRAj0=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/L76UYHYCLLOQWMJW3Q5ZSAFY5M.jpg"
        alt={especie.commonName}
      />
      <div className="card-body">
        <p className="card-title">{especie.commonName}</p>
        <hr />
        <h5 className="card-title">{especie.name}</h5>
        <hr />
        <p className="card-title">{especie.price}</p>
        <div className="d-flex">

          <button className="login btn-submit btn-block mb-4" onClick={() => navigate(`${especie.id}/details/`)}> Ver más 👀</button>
          <hr />
          
        </div>
      </div>
    </div>
  );
}

export default CatalogueCard;
