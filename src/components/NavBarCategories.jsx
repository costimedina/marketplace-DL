//SYLES

import { Navbar, Container } from "react-bootstrap";

//COMPONENTS

//IMAGES

function NavBarCategories() {
    return (
        <>
            <Navbar
                className="d-flex justify-content-between px-5"
                variant="light"
                style={{ background: "#F5B85D" }}
            >
                <Container className="containerNavbar">
                    <p>ÁRBOLES</p>
                    <p>ARBUSTOS</p>
                    <p>CACTACEAS / SUCULENTAS</p>
                    <p>HERBÁCEAS PERENNES</p>
                    <p>PASTOS ORNAMENTALES</p>
                </Container>
            </Navbar>

           
        </>
    );
};

export default NavBarCategories;