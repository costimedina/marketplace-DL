//STYLES
import { Container, Form } from "react-bootstrap";

//COMPONENTS

//IMAGES

function PlantForm() {

  return (
    <>
    <Container>
        <Form>

<Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="text" placeholder="Nombre" />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="text" placeholder="Nombre científico" />
</Form.Group>

<button className="btn btn-primary dropdown-toggle" type="button" id="dropdown1" data-toggle="dropdown">
    tipo de plantita
</button>

<div class="dropdown-menu">
    <a class="dropdown-item" href="http://www.google.com">Google</a>
    <a class="dropdown-item" href="http://www.bing.com">Bing</a>
    <a class="dropdown-item" href="http://www.yahoo.com">Yahoo</a>
</div>

<Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="text" placeholder="Origen" />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="text" placeholder="Descripción" />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="text" placeholder="Exposición" />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="text" placeholder="Suelo" />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="text" placeholder="Esparcimiento" />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="text" placeholder="Usos" />
</Form.Group>

</Form>
</Container>

    </>

  );
};

export default PlantForm;