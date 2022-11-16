//STYLES
import "../assets/styles/catalogueCard.css";

//COMPONENTS
import { useContext, useState } from 'react';
import ModalPlantDetails from "./ModalPlantDetails";
import PlantasContext from "../context/PlantasContext";

function CatalogueCard({ especie }) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { plantasData, setPlantasData } = useContext(PlantasContext);

  const setFav = (id) => {
    const elemIndex = plantasData.findIndex((p) => p.id === id);
    plantasData[elemIndex].fav = !plantasData[elemIndex].fav;
    setPlantasData([...plantasData]);
  };

  return (
    <>
      <div className="card col-lg-3 col-md-6" key={especie.id}>
        <img
          className="card-img-top"
          src={especie.img}
          alt={especie.commonName}
        />
        <div className="card-body">
          <p className="card-title"><strong>{especie.commonName}</strong></p>
          <h6 className="card-subtitle">{especie.type}</h6>
          <hr />
          <p className="card-subtitle muted-text">{especie.name}</p>
          <h4 className="card-subtitle"><strong>${especie.price}</strong></h4>
          <hr />

          <div className="d-flex">
            <button
              className="login btn-submit btn-block mb-4"
              type="button"
              onClick={handleShow}
            >
              Ver más
            </button>

            <button>
              <i className="fa-solid fa-cart-shopping"></i>
            </button>

            <svg
              onClick={() => setFav(especie.id)}
              width="40px"
              viewBox="0 0 24 24">
              <path
                fill={especie.fav ? "red" : "white"}
                d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
              />
            </svg>

          </div>
        </div>
      </div>

      <ModalPlantDetails
        show={show}
        planta={especie}
        handleClose={handleClose} />
    </>
  );
}

export default CatalogueCard;