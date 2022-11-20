//STYLES
import "../assets/styles/newProfile.css";
import { Form, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NewProfile() {
  return (
    <>

      <div className="mb-5 mt-5">
        <h2>AQUÍ PUEDES EDITAR TU PERFIL</h2>
      </div>

      <Container className="d-flex px-5 flex-wrap justify-content-lg-around justify-content-sm-between">
        <div className="profile">
          <img
            className="mb-4"
            height="180px"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt="certificacion"
          />

          <Link
            to="/Profile"
          >
            <button
              type="button"
              className="btn-block mb-5">
              GUARDAR
            </button>
          </Link>
        </div>

        <Form>
          <div className="form-outline mb-4">
            <label className="form-label" id="perfil">Nombre</label>
            <input
              type="text"
              id="form1Profile"
              className="form-control"
              placeholder="Editar nombre"
              required />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" id="perfil">Apellidos</label>
            <input
              type="text"
              id="form1Profile"
              className="form-control"
              placeholder="Editar apellidos"
              required />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label">Correo electrónico</label>
            <input
              type="email"
              id="form1Profile"
              className="form-control"
              placeholder="Editar email"
              required />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label">Teléfono de contacto</label>
            <input
              type="tel"
              id="form1Profile"
              className="form-control"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="+56 9"
              required />
          </div>
          <small>Formato: +56 9 999 999 99</small>

          <div className="form-outline mb-4">
            <label className="form-label">Dirección</label>
            <input
              type="text"
              id="form1Profile"
              className="form-control"
              placeholder="Editar dirección" />
          </div>

        </Form>

      </Container>
    </>
  );
};

export default NewProfile;