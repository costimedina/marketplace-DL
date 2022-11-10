//STYLES
import "../assets/styles/plantForm.css";
import { Container, Form } from "react-bootstrap";

//COMPONENTS


function PlantForm() {

  return (
    <>

      <div className="mb-5 mt-5">
        <h2>PUBLICA TU PLANTITA</h2>
      </div>

      <Container className="d-flex justify-content-center px-5 mt-4 mb-5">
        <Form>

          <div className="form-outline mb-4">
            <input id="product_id" name="product_id" className="form-control input-md" required="" type="text" />
            <label className="control-label">ID del Producto</label>
          </div>

          <div className="form-outline mb-4">
            <input id="product_id" name="product_name" className="form-control input-md" required="" type="text" />
            <label className="control-label">Nombre científico</label>
          </div>

          <div className="form-outline mb-4">
            <input id="product_id" name="product_name_fr" className="form-control input-md" required="" type="text" />
            <label className="col-md-4 control-label">Nombre común</label>
          </div>

          <div className="form-outline mb-4">
           
            <select id="product_id" name="product_categorie" className="form-control">
              <option selected>Abre el menú de selección</option>
              <option value="1">Árboles</option>
              <option value="2">Arbustos</option>
              <option value="3">Cactáceas/Suculentas</option>
              <option value="3">Herbáceas perennes</option>
              <option value="3">Pastos ornamentáles</option>
            </select>
            <label className="col-md-4 control-label">Tipo de especie</label>
          </div>

          <div className="form-outline mb-4">
            <input id="product_id" name="available_quantity" className="form-control input-md" required="" type="text" />
            <label className="col-md-4 control-label">Origen</label>
          </div>

          <div className="form-outline mb-4">
            <textarea className="form-control" id="product_description" name="product_description"></textarea>
            <label className="col-md-4 control-label">Breve descripción</label>
          </div>

          <div className="form-outline mb-4">
            <input id="product_id" name="percentage_discount" className="form-control input-md" required="" type="text" />
            <label className="col-md-4 control-label">Exposición</label>
          </div>

          <div className="form-outline mb-4">
            <input id="product_id" name="stock_alert" className="form-control input-md" required="" type="text" />
            <label className="col-md-4 control-label">Tipo de suelo</label>
          </div>

          <div className="form-outline mb-4">
            <input id="product_id" name="stock_critical" className="form-control input-md" required="" type="search" />
            <label className="col-md-4 control-label">Espacimiento</label>
          </div>

          <div className="form-outline mb-4">
            <input id="product_id" name="tutorial" className="form-control input-md" required="" type="search" />
            <label className="col-md-4 control-label">Usos</label>
          </div>

          <div className="form-outline mb-4">
            <input id="product_id" name="tutorial" className="form-control input-md" required="" type="search" />
            <label className="col-md-4 control-label">Precio unitario</label>
          </div>

          <Container>

            <div className="form-outline mb-4">
              <label className="col-md-5 mt-2 control-label">Imagen del producto</label>

              <div className="form-group">
                <div className="col-md-4">
                  <input id="filebutton" name="filebutton" className="input-file" type="file" />
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center mt-5">
              <button type="submit" className="signUp btn-primary btn-block mb-4">PUBLICAR FICHA</button>
            </div>

          </Container>

        </Form>
      </Container>
    </>

  );
};

export default PlantForm;;