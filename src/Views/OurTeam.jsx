//STYLES
import "../assets/styles/ourTeam.css";

//COMPONENTS

//IMAGES

//COMPONENTS
import { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import TeamCard from "../components/TeamCard";
import TeamContext from "../context/TeamContext";


function OurTeam() {
  const { teamData, setTeamData } = useContext(TeamContext);

  const endpoint = "/team.json";
  const fetchData = async () => {
    const response = await fetch(endpoint);
    let data = await response.json();
    console.log(data);
    setTeamData(data);
  };

  //renderizado
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>

      <div className="banner"></div>

      <Container className="d-flex justify-content-between px-5 mt-5 mb-5">

        <div className="mb-5 mt-5">
          <h3>EN LA PLANTITA SOMOS NATURALES</h3>
        </div>

        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

      </Container>

      <Container>

        <div className="grilla-team">
          {teamData && teamData.map((equipo, index) => (
            <TeamCard key={index} profesional={equipo}
            />
          ))}
        </div>

      </Container>


      <div>
        <h2>TTRABAJAR EN LA PLANTITA</h2>
        <Link className="volver-inicio" to="/WorkWithUs">
          <button>TRABAJA CON NOSOTROS</button>
        </Link>
      </div>
    </>
  );
};

export default OurTeam;