import "../../styles/index.scss";
import logements from "../../logements.json";
import { Link } from "react-router-dom";

function Gallery() {
  return (
    <div className="gallery">
      {logements.map((logement) => (
        <Link className="gallery__link" to={`/logement/${logement.id}`} key={logement.id}>
          <div className="gallery__card">
            {/* <div className="gallery__essai"> */}
            <img
              className="gallery__img"
              src={logement.cover}
              alt={logement.title}
            />
            <h2 className="gallery__titleimg">{logement.title}</h2>

            {/* </div> */}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Gallery;
