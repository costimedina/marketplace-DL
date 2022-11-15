//STYLES
import "../assets/styles/ourTeam.css";

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
    //console.log(data);
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
      <div className="contenedor d-flex">
        <div className="primaryText">
          <h3><strong>EN LA PLANTITA SOMOS NATURALES</strong></h3>
        </div>

        <div className="secondaryText">
          <p>Lorem <strong className="mision">ipsum dolor sit amet,</strong> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Lorem <strong className="mision">ipsum dolor sit amet,</strong> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Lorem <strong className="mision">ipsum dolor sit amet,</strong> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Lorem <strong className="mision">ipsum dolor sit amet,</strong> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>

      <Container className="mt-5">
        <div className="grilla-team">
          {teamData && teamData.map((equipo, index) => (
            <TeamCard
              key={index}
              profesional={equipo}
            />
          ))}
        </div>
      </Container>

      <div className="contenedorDown d-flex">
        <div className="secondaryTextDown">
          <h3><strong>TRABAJAR EN LA PLANTITA</strong></h3>
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <Link
          to="/wORKwITHuS"
        >
          <button
            type="button"
            className="btn-submit btn-block mb-5">
            RE - PLANTEATE
          </button>
        </Link>
      </div>
    </>
  );
};

export default OurTeam;