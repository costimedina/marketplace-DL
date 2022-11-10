//STYLES
import "../assets/styles/catalogueCard.css";

//COMPONENTS
import { useState } from 'react';
import ModalPlantDetails from "./ModalPlantDetails"


//IMAGES

function CatalogueCard({ especie }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <hr />

          <p className="card-subtitle muted-text">{especie.name}</p>
          
          <h4 className="card-subtitle"><strong>{especie.price}</strong></h4>
          <hr />

          <div className="d-flex">
            <button 
            className="login btn-submit btn-block mb-4" 
            type="button"
            onClick={handleShow}>
            Ver más
            </button>

          </div>
        </div>
      </div>

      <ModalPlantDetails show={show} planta={especie} handleClose={handleClose}  />

    </>
  );
}

export default CatalogueCard;


