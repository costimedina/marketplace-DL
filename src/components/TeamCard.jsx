//STYLES
import "../assets/styles/teamCard.css";

function TeamCard({ profesional }) {

  return (
    <div className="card col-lg-3 col-md-6" key={profesional.id}>
      <img
        className="card-img-top"
        src={profesional.img}
        alt={profesional.position}
      />

      <div className="card-body">
        <h4 className="card-title">{profesional.name}</h4>
        <hr />
        <p className="card-title"><strong>{profesional.position}</strong></p>
        <hr />
        <a className="link" href={profesional.contact}><i className="fa-brands fa-linkedin text-muted"></i> LinkedIn</a>
        <br />
        <br />
      </div>
    </div>
  );
}

export default TeamCard;
