//STYLES
import "../assets/styles/home.css";

//COMPONENTS
import Header from "../components/Header";
import { Link } from "react-router-dom";

//IMAGES
import cert1 from '../assets/images/certifications/4.png';
import cert2 from '../assets/images/certifications/5.png';
import cert3 from '../assets/images/certifications/6.png';
import cert4 from '../assets/images/certifications/7.png';
import { Container } from "react-bootstrap";

function Home() {

  return (
    <>
      <Header />

      <div className="mb-5 mt-5">
        <h2>NUESTROS COLABORADORES</h2>
      </div>

      <Container className="d-flex justify-content-around mt-5 mb-5 flex-wrap">
        <div>
          <div className="anchorHome home1">
            <a className="home1" href="https://www.google.com/"><i className="fa-sharp fa-solid fa-leaf fa-3x"></i></a>
          </div>
          <p className="mt-2">HUERTO A</p>
        </div>

        <div>
          <div className="anchorHome home2">
            <a className="home2" href="https://www.google.com/"><i className="fa-sharp fa-solid fa-leaf fa-3x"></i></a>
          </div>
          <p className="mt-2">HUERTO B</p>
        </div>

        <div>
          <div className="anchorHome home3">
            <a className="home3" href="https://www.google.com/"><i className="fa-sharp fa-solid fa-leaf fa-3x"></i></a>
          </div>
          <p className="mt-2">HUERTO C</p>
        </div>

        <div>
          <div className="anchorHome home4">
            <a className="home4" href="https://www.google.com/"><i className="fa-sharp fa-solid fa-leaf fa-3x"></i></a>
          </div>
          <p className="mt-2">HUERTO D</p>
        </div>

        <div>
          <div className="anchorHome home5">
            <a className="home5" href="https://www.google.com/"><i className="fa-sharp fa-solid fa-leaf fa-3x"></i></a>
          </div>
          <p className="mt-2">HUERTO E</p>
        </div>
      </Container>

      <div className="mb-5 mt-5">
        <h2>NUESTRAS CERTIFICACIONES</h2>
      </div>

      <Container>
        <div className="d-flex justify-content-between mt-5 mb-5 flex-wrap">

          <img
            height="220px"
            src={cert1}
            alt="certificacion"
          />

          <img
            height="220px"
            src={cert2}
            alt="pokemoncillos comiendo"
          />

          <img
            height="220px"
            src={cert3}
            alt="pokemoncillos comiendo"
          />

          <img
            height="220px"
            src={cert4}
            alt="pokemoncillos comiendo"
          />
        </div>
      </Container>

      <Container>
        <div className="px-5 mt-3 mb-5">
          <h2 className="mb-4 mt-5">ÚNETE A NUESTRA COMUNIDAD LA PLANTITA</h2>

          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h4>
        </div>

        <Link 
        to="/JoinCommunity"
        >
          <button
            type="button"
            className="btn-submit btn-block mb-5">
            ÚNETE
          </button>
        </Link>
      </Container>

      <div className="bannerHome">
        <div className="px-5 mt-5 mb-5">

          <h3 className="mb-4 text-light">Recibe ideas frescas e innovadoras de diseño para tus espacios
            <br />
            exteriores de manera gratuita y directo a tu inbox.</h3>

          <input
            type="email"
            className="form1Home"
            placeholder="Ingresa tu email"
            size="40"
          />
        </div>
      </div>

    </>
  );
};

export default Home;