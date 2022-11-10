//STYLES
import "../assets/styles/catalogue.css";
import { Container } from "react-bootstrap";

//COMPONENTS
import { useEffect, useContext, useState } from "react";
import CatalogueCard from "../components/CatalogueCard";
import PlantasContext from "../context/PlantasContext";

function Catalogue() {
  const { plantasData, setPlantasData } = useContext(PlantasContext);
  const [searchPlantas, setSearchPlantas] = useState("");

  //función que trae los datos de la API
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

  //función de búsqueda
  const searcher = (e) => {
    setSearchPlantas(e.target.value);
    console.log(e.target.value);
  };

  //FILTER Q NO FUNCIONA EN LA BARRA DE BÚSQUEDA
  const resultado = !searchPlantas ? plantasData : plantasData.filter((dato) => dato.type.toLowerCase().includes(searchPlantas.toLocaleLowerCase()));

  return (
    <>

      <Container className="d-flex justify-content-around px-5 mt-5 mb-2">

        <div className="form-outline mb-4">
          <input
            className="form-control"
            type="text"
            id="form1Catalogue"
            placeholder="¿Qué tipo de plantas estás buscando?"
            value={searchPlantas}
            onChange={searcher}
          />
        </div>

        <select className="form-select mb-4" id="select1Catalogue" aria-label="Default select example">
          <option selected>Ordenar por:</option>
          <option value="1">Árboles</option>
          <option value="2">Arbustos</option>
          <option value="3">Cactáceas/Suculentas</option>
          <option value="4">Herbáceas perennes</option>
          <option value="4">Pastos ornamentales</option>
        </select>

      </Container>

      <Container>

        <div className="grilla-plantas">
          {resultado.map((publicacion, index) => (
            <CatalogueCard key={index} especie={publicacion}
            />
          ))}
        </div>

      </Container>

    </>
  );
}

export default Catalogue;
