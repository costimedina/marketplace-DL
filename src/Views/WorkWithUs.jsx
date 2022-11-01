//STYLES
import "../assets/styles/workWithUs.css";
import { Form, Button } from "react-bootstrap";

//COMPONENTS

//IMAGES
import workImage from '../assets/images/backgrounds/work-with-laplantita.jpg';


function WorkWithUs() {

  return (
    <>
    
      <h1>Trabaja con nosotros</h1>
      <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h3>

      <img
              height="280px"
              src={workImage}
              alt="Plano de arquitectura"
            />
      <Form>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" required placeholder="Nombre" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" required placeholder="Apellidos" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="email" required placeholder="Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="number" required placeholder="Teléfono" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="text" required placeholder="Perfíl de LinkedIn" />
        </Form.Group>

        <h3>Adjunta CV</h3>

        <Button variant="primary" required type="submit">
          Adjuntar archivo
        </Button>

        <Button variant="primary" type="submit">
          Ingresar Información
        </Button>

      </Form>

    </>
  );
};

export default WorkWithUs;