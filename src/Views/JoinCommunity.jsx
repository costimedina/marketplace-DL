//STYLES
import { Container } from 'react-bootstrap';

//IMAGES
import communityPhoto from '../assets/images/backgrounds/community.png';

function JoinCommunity() {

  return (
    <>
      <div className="mb-5 mt-5">
        <h2>ÚNETE A LA COMUNIDAD DE LA PLANTITA</h2>
      </div>

      <div className="photo">
        <img
          width="600"
          src={communityPhoto}
          alt="banner LaPlantita"
        />
      </div>

      <Container className="d-flex justify-content-around space-around mt-5 mb-5 flex-wrap">
        <div className="anchorHome home2">
          <a className="home2" href="https://www.google.com/"> <i className="fa-solid fa-podcast fa-3x"></i></a>
        </div>

        <div className="anchorHome home3">
          <a className="home3" href="https://www.google.com/"> <i className="fab fa-twitter fa-3x"></i></a>
        </div>

        <div className="anchorHome home4">
          <a className="home4" href="https://www.google.com/"> <i className="fab fa-facebook-f fa-3x"></i></a>
        </div>
      </Container>

    </>

  );
}

export default JoinCommunity;