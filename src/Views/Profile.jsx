//STYLES
import "../assets/styles/profile.css";
import { Container, Form } from "react-bootstrap";

//COMPONENTS
import { Link } from "react-router-dom";
import { useContext } from "react";
import PlantasContext from "../context/PlantasContext";
import RegisteredUserContext from "../context/RegisteredUserContext";

function Profile() {

  const { plantasData, setPlantasData } = useContext(PlantasContext);

  const { loggedInUser } = useContext(RegisteredUserContext);

  const deleteFav = (id) => {
    const elemIndex = plantasData.findIndex((p) => p.id === id);
    plantasData[elemIndex].fav = !plantasData[elemIndex].fav;
    setPlantasData([...plantasData]);
  };
  console.log(setPlantasData);
  return (
    <>

      <div className="mb-5 mt-5">
        <h2>BIENVENIDO A TU PERFIL</h2>
      </div>

      <Container className="d-flex justify-content-around px-5 flex-wrap">
        <Form>
          <div className="form-outline mb-4">
            <label className="form-label" id="perfil">Nombre</label>
            <input type="text" id="form1Profile" className="form-control" defaultValue={loggedInUser.nombre} />

          </div>
          <div className="form-outline mb-4">
            <label className="form-label">Correo electrónico</label>
            <input type="email" id="form1Profile" className="form-control" defaultValue={loggedInUser.email} />

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

        <Link
          to="/PlantForm"
        >

          <button
            type="button"
            className="login btn-submit btn-block mb-4"
          >
            AGREGAR PLANTITA
          </button>
        </Link>
      </Container>

      <Container
        className="d-flex justify-content-center px-5 mt-5 mb-2"
      >
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

      <div className="mb-2 mt-5">
        <h2>Mis Favoritos</h2>
      </div>

      <Container
        className="d-flex justify-content-center px-5 mt-5 mb-2"
      >
        {plantasData
          .filter((plantFav) => plantFav.fav)
          .map((plantFav, index) => (

            <div className="card col-lg-3 col-md-6" key={plantFav.id}>
              <img
                className="card-img-top"
                src={plantFav.img}
                alt={plantFav.commonName}
              />
              <div className="card-body">
                <p className="card-subtitle muted-text">{plantFav.name}</p>
                <br />
                <h4 className="card-subtitle"><strong>${plantFav.price}</strong></h4>
          
                <svg
                  className="d-flex justify-content-left"
                  width="30px"
                  viewBox="0 0 24 35"
                  onClick={() => deleteFav(plantFav.id)}
                  key={index}>

                  <path
                    fill={plantFav.fav ? "red" : "white"}
                    d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                  />
                </svg>
              </div>
            </div>
          ))}
      </Container>
    </>
  );
};

export default Profile;