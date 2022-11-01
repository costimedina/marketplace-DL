//STYLES
import "../assets/styles/catalogue.css";
import { Container } from "react-bootstrap";

//COMPONENTS
import { useEffect, useContext } from "react";
import CatalogueCard from "../components/CatalogueCard";
import NavBarCategories from "../components/NavBarCategories";
import PlantasContext from "../context/PlantasContext";

//IMAGES

function Catalogue() {
  const { plantasData, setPlantasData } = useContext(PlantasContext);

  const endpoint = "/plantas.json";
  const fetchData = async () => {
    const response = await fetch(endpoint);
    let data = await response.json();
    console.log(data);
    setPlantasData(data);
  };

  //renderizado
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>

      <NavBarCategories />

      <Container className="d-flex justify-content-around px-5 mt-5 mb-2">

        <div className="form-outline mb-4">
          <input type="text" id="form1Catalogue" className="form-control" placeholder="¿Qué estás buscando?" />
        </div>

        <select className="form-select mb-4" id="select1Catalogue" aria-label="Default select example">
          <option selected>Ordenar por:</option>
          <option value="1">Precio mayor</option>
          <option value="2">Precio menor</option>
          <option value="3">Cantidad</option>
          <option value="4">Favoritos</option>
        </select>

      </Container>

      <Container>

        <div className="grilla-plantas">
          {plantasData && plantasData.map((publicacion, index) => (
            <CatalogueCard key={index} especie={publicacion}
            />
          ))}
        </div>

      </Container>
    </>
  );
}

export default Catalogue;