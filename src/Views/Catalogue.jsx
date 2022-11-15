//STYLES
import "../assets/styles/catalogue.css";
import { Container, Form } from "react-bootstrap";

//COMPONENTS
import { useEffect, useContext, useState } from "react";
import CatalogueCard from "../components/CatalogueCard";
import PlantasContext from "../context/PlantasContext";

function Catalogue() {

  const [searchPlantas, setSearchPlantas] = useState("");
  const { plantasData, setPlantasData } = useContext(PlantasContext);

  //función que trae los datos de la API
  const endpoint = "/plantas.json";
  const fetchData = async () => {
    const response = await fetch(endpoint);
    let data = await response.json();
    //console.log(data);
    setPlantasData(data);
  };

  //renderizado
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //funcion de búsqueda por tipo de especie en el input
  const typeSearcher = (typeEvent) => {
    setSearchPlantas(typeEvent.target.value);
    //console.log(typeEvent.target.value);
  };

  //función para filtrado los productos en el select (nombre y precio)
  const filterSearcher = (filterEvent) => {
    let sortProducts = filterEvent.target.value;
    if (sortProducts === "ordenarNombreA") {
      plantasData.sort((a, b) => a.commonName.localeCompare(b.commonName));
      setPlantasData([...plantasData]);
    } else if (sortProducts === "ordenarNombreD") {
      plantasData.sort((a, b) => b.commonName.localeCompare(a.commonName));
      setPlantasData([...plantasData]);
    }

    if (sortProducts === "ordenarPrecioA") {
      plantasData.sort((a, b) => a.price - b.price);
      setPlantasData([...plantasData]);
    } else if (sortProducts === "ordenarPrecioD") {
      plantasData.sort((a, b) => b.price - a.price);
      setPlantasData([...plantasData]);
    }
  };

  //Función que realiza un filtro para buscar tipos de especies
  const resultado = !searchPlantas ? plantasData : plantasData.filter((dato) => dato.type
    .toLowerCase()
    //se excluye la busqueda con tilde para faciliar la expetiencia
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .includes(searchPlantas.toLocaleLowerCase()));

  return (
    <>

      <Container className="d-flex justify-content-around px-5 mt-5 mb-2">

        <div className="form-outline mb-4">
          <input
            className="form-control"
            type="text"
            id="form1Catalogue"
            placeholder="¿Qué tipo de especie estás buscando?                 🔍"
            value={searchPlantas}
            onChange={typeSearcher}
          />
        </div>

        <Form.Select
          className="form-select mb-4"
          id="select1Catalogue"
          aria-label="Default select example"
          value={searchPlantas}
          onChange={filterSearcher}
          >

          <option value="">
            Categorías
          </option>
          <option value="ordenarPrecioA">Precio Menor a Mayor</option>
          <option value="ordenarPrecioD">Precio Mayor a Menor</option>
          <option value="ordenarNombreA">Nombre común: de A - Z</option>
          <option value="ordenarNombreD">Nombre común: de Z - A</option>

        </Form.Select>

      </Container>

      <Container>

        <div className="grilla-plantas">
          {resultado.map((publicacion, index) => (
            <CatalogueCard
              key={index}
              especie={publicacion}
            />
          ))}
        </div>

      </Container>

    </>
  );
}

export default Catalogue;
