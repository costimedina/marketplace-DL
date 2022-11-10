
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalPlantDetails({ show, handleClose, planta }) {


  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <div className="card col-5" key={planta?.id}>
          <div className="card-block mt-3 mb-3">
            <h5 className="card-title text-center"><strong>Nombre:</strong> {planta?.name}</h5>
            <h6 className="card-subtitle text-muted"><strong>Nombre común:</strong> {planta.commonName}</h6>
          </div>
          <img className="card-img-top"
            src={planta?.img}
            alt={planta?.name}
          />
          <div className="d-flex flex-column card-block mx-5">
            <p className="card-text"><strong>Origen:</strong> {planta?.origin}</p>
            <hr />
            <p className="card-text"><strong>Descripción:</strong> {planta?.desc}</p>
            <hr />
            <p className="card-text"><strong>Exposición:</strong> {planta?.exposition}</p>
            <hr />
            <p className="card-text"><strong>Exposición:</strong> {planta?.exposition}</p>
            <hr />
            <p className="card-text"><strong>Suelo:</strong> {planta?.topsoil}</p>
            <hr />
            <p className="card-text"><strong>Esparcimiento:</strong> {planta?.spreading}</p>
            <hr />
            <p className="card-text"><strong>Usos:</strong> {planta?.use}</p>
          </div>
          <hr />
        </div>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalPlantDetails;