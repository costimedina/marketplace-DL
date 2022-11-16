//STYLES
import "../assets/styles/profile.css";
import { Container, Form } from "react-bootstrap";

//COMPONENTS
import { Link } from "react-router-dom";
import { useContext } from "react";
import PlantasContext from "../context/PlantasContext";

function Profile() {

  const { plantasData, setPlantasData } = useContext(PlantasContext);

  const deleteFav = (id) => {
    const elemIndex = plantasData.findIndex((p) => p.id === id);
    plantasData[elemIndex].fav = !plantasData[elemIndex].fav;
    setPlantasData([...plantasData]);
  };

  return (
    <>

      <div className="mb-5 mt-5">
        <h2>BIENVENIDO A TU PERFIL</h2>
      </div>

      <Container className="d-flex justify-content-around px-5 flex-wrap">

        <Form>
          <div className="form-outline mb-4">
            <label className="form-label" id="perfil">Nombre</label>
            <input type="text" id="form1Profile" className="form-control" />

          </div>
          <div className="form-outline mb-4">
            <label className="form-label">Correo electrónico</label>
            <input type="email" id="form1Profile" className="form-control" />

          </div>
          <div className="form-outline mb-4">
            <label className="form-label">Teléfono de contacto</label>
            <input type="number " id="form1Profile" className="form-control" />

          </div>
          <div className="form-outline mb-4">
            <label className="form-label">Dirección</label>
            <input type="text" id="form1Profile" className="form-control" />
          </div>
        </Form>

      </Container>

      <Container className="d-flex flex-column align-items-start">

        <div className="mb-2 mt-5">
          <h2>Mis Publicaciones</h2>
        </div>

        <Link to="/PlantForm">

          <button
            type="button"
            className="login btn-submit btn-block mb-4"
          >
            AGREGAR PLANTITA
          </button>
        </Link>

      </Container>

      <Container className="d-flex justify-content-center px-5 mt-5 mb-2">
        <div className="card col-lg-3 col-md-6">
          <img className="card-img-top"
            src="https://imagenes.elpais.com/resizer/PN_ZuW3w1Tj-KMCBl4pImDfRAj0=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/L76UYHYCLLOQWMJW3Q5ZSAFY5M.jpg"
            alt="foto planta"
          />
          <div className="card-body">
            <p className="card-title">Nombre común:</p>
            <hr />
            <h5 className="card-title">Nombre científico:</h5>
            <hr />
            <p className="card-title">Prercio:</p>
          </div>
        </div>

        <div className="card col-lg-3 col-md-6">
          <img className="card-img-top"
            src="https://imagenes.elpais.com/resizer/PN_ZuW3w1Tj-KMCBl4pImDfRAj0=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/L76UYHYCLLOQWMJW3Q5ZSAFY5M.jpg"
            alt="foto planta"
          />
          <div className="card-body text-left">
            <p className="card-title">Nombre común:</p>
            <hr />
            <h5 className="card-title">Nombre científico:</h5>
            <hr />
            <p className="card-title">Prercio:</p>
          </div>
        </div>


        <div className="card col-lg-3 col-md-6">
          <img className="card-img-top"
            src="https://imagenes.elpais.com/resizer/PN_ZuW3w1Tj-KMCBl4pImDfRAj0=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/L76UYHYCLLOQWMJW3Q5ZSAFY5M.jpg"
            alt="foto planta"
          />
          <div className="card-body">
            <p className="card-title">Nombre común:</p>
            <hr />
            <h5 className="card-title">Nombre científico:</h5>
            <hr />
            <p className="card-title">Prercio:</p>
          </div>
        </div>

      </Container>


      <Container className="d-flex flex-column align-items-start">
        <h1>Fotos favoritas</h1>

        {plantasData
          .filter((plantFav) => plantFav.fav)
          .map((plantFav, index) => (
            <div className="card col-lg-3 col-md-6" key={plantFav.id}>
              <img

                className="card-img-top"
                src={plantFav.img}
                alt={plantFav.commonName}
                onClick={() => deleteFav(plantFav.id)}
                key={index}

              />
              <div className="card-body">
                <p className="card-title"><strong>{plantFav.commonName}</strong></p>
                <h6 className="card-subtitle">{plantFav.type}</h6>
                <hr />

                <p className="card-subtitle muted-text">{plantFav.name}</p>

                <h4 className="card-subtitle"><strong>${plantFav.price}</strong></h4>
                <hr />
              </div>
            </div>

          ))};

      </Container>

    </>

  );
};

export default Profile;