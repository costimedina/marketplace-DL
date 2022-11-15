//STYLES
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalPlantDetails({ show, handleClose, planta }) {

  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Detalles del producto 🌱</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <div className="card-block text-center mt-2 mb-3" key={planta?.id}>
          <h5 className="card-title text-center"><strong>Nombre:</strong> {planta?.name}</h5>
          <h6 className="card-subtitle text-muted"><strong>Nombre común:</strong> {planta.commonName}</h6>
        </div>

        <div className="d-flex flex-column card-block mx-1">
          <p className="card-text"><strong>Origen:</strong> {planta?.origin}</p>
          <p className="card-text"><strong>Descripción:</strong> {planta?.desc}</p>
          <p className="card-text"><strong>Exposición:</strong> {planta?.exposition}</p>
          <p className="card-text"><strong>Suelo:</strong> {planta?.topsoil}</p>
          <p className="card-text"><strong>Esparcimiento:</strong> {planta?.spreading}</p>
          <p className="card-text"><strong>Usos:</strong> {planta?.use}</p>
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