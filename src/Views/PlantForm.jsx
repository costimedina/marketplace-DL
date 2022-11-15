//STYLES
import "../assets/styles/plantForm.css";
import { Container, Form } from "react-bootstrap";

//COMPONENTS
//import bsCustomFileInput from 'bs-custom-file-input'



function PlantForm() {

  //$(document).ready(function () {
  // bsCustomFileInput.init()
  // })

  return (
    <>

      <div className="mb-4 mt-5">
        <h2>PUBLICA TU PLANTITA</h2>
      </div>

      <Container className="d-flex justify-content-center mt-3">
        <Form>

          <div className="row form-outline mb-4">
            <div className="col">
              <input
                className="form-control"
                placeholder="Indicar nombre cientifico"
              />
            </div>

            <div className="col">
              <input
                className="form-control"
                placeholder="Indicar nombre común"
              />
            </div>
          </div>

          <div className="form-outline mb-4">
            <div
              className="form-group">
              <label
                for="exampleFormControlSelect1">
                Selecciona el tipo de especie
              </label>
              <select
                className="form-control"
                id="exampleFormControlSelect1"
              >
                <option selected>Abre el menú de selección</option>
                <option value="1">Árboles</option>
                <option value="2">Arbustos</option>
                <option value="3">Cactáceas/Suculentas</option>
                <option value="3">Herbáceas perennes</option>
                <option value="3">Pastos ornamentáles</option>
              </select>
            </div>
          </div>

          <div className="row form-outline mb-4">
            <div className="col">
              <input
                className="form-control"
                placeholder="Indicar origen"
              />
            </div>

            <div className="col">
              <input
                className="form-control"
                placeholder="Indicar exposición"
              />
            </div>
          </div>

          <div className="row form-outline mb-4">
            <div className="col">
              <input
                className="form-control"
                placeholder="Indicar tipo de suelo"
              />
            </div>
            <div className="col">
              <input
                className="form-control"
                placeholder="Indicar esparcimiento"
              />
            </div>
          </div>

          <div className="col">
            <input
              className="form-control"
              placeholder="Indicar usos"
            />
          </div>

          <div className="form-outline mb-4">
            <label
              className="col-md-6 mt-4 control-label">
              Breve descripción de la especie
            </label>
            <textarea
              className="form-control"
              id="product_description"
              name="product_description">
            </textarea>
          </div>

          <div className="row form-outline mb-4">
            <div className="col">
              <input
                class="form-control"
                placeholder="Indicar ID"
              />
            </div>

            <div className="col">
              <input
                className="form-control"
                placeholder="Indicar precio"
              />
            </div>
          </div>

          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="customFile"
              />
            
            <label
              className="custom-file-label"
              for="customFile">
              Sube una foto
            </label>
          </div>

          <div className="d-flex justify-content-center mt-5">
            <button
              type="button"
              className="signUp btn-primary btn-block mb-4">
              PUBLICAR FICHA
            </button>
          </div>

        </Form>
      </Container>
    </>

  );
};

export default PlantForm;;