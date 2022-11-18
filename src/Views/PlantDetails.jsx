//ESTA PARTE DEL CODIGO NO VA ...SE ELIMINA

//COMPONENTS
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import PlantasContext from '../context/PlantasContext';

//IMAGES 

function PlantDetails() {
  
  const { id } = useParams();
  const { addToCart, plantasData } = useContext(PlantasContext);

  const planta = plantasData.find((register) => register.id === +id);
  console.log(planta);

  return (
    <>

      <Container className="d-flex justify-content-center px-5 mt-6 mb-5">
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

          <div className="precio-details">
            <h3 className="card-title"> {planta?.price}</h3>
            <button className="btn btn-warning mb-5 mx-2" onClick={() => addToCart(planta)}>Añadir 🛒</button>
            <button className="btn btn-warning mb-5 mx-2" onClick={() => addToCart(planta)}>Volver</button>
          </div>

        </div>
      </Container>
    </>

  );
};

export default PlantDetails;