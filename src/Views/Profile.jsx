//STYLES
import "../assets/styles/profile.css";
import { Container, Form } from "react-bootstrap";

//COMPONENTS

//IMAGES
import profile from '../assets/images/team/profile-small.jpg';
import { Link } from "react-router-dom";


function Profile() {

  return (
    <>

      <div className="mb-5 mt-5">
        <h2>BIENVENIDO A TU PERFIL</h2>
      </div>

      <Container className="d-flex justify-content-around px-5 flex-wrap">

        <div>
          <img
            className="profileImg"
            height="280px"
            src={profile}
            alt="foto de perfil"
          />
        </div>

        <Form>
          <div className="form-outline mb-4">
            <label className="form-label" id="perfil" for="form2Example1">Nombre</label>
            <input type="text" id="form1Profile" className="form-control" />

          </div>
          <div className="form-outline mb-4">
            <label className="form-label" for="form2Example1">Correo electrónico</label>
            <input type="email" id="form1Profile" className="form-control" />

          </div>
          <div className="form-outline mb-4">
            <label className="form-label" for="form2Example1">Teléfono de contacto</label>
            <input type="number " id="form1Profile" className="form-control" />

          </div>
          <div className="form-outline mb-4">
            <label className="form-label " for="form2Example1">Dirección</label>
            <input type="text" id="form1Profile" className="form-control" />
          </div>
        </Form>

      </Container>

      <Container className="d-flex flex-column align-items-start">

        <div className="mb-2 mt-5">
          <h2>Mis Publicaciones</h2>
        </div>

        <Link to="/Profile">
          <button type="submit" className="login btn-submit btn-block mb-4">Agregar plantita</button>
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

    </>

  );
};

export default Profile;