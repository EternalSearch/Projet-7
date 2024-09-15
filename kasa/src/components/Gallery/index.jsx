import "../../styles/index.scss";
import logements from "../../logements.json";

function Gallery() {
  return (
    <div className="gallery">
      {logements.map((logement) => (
        <div className="gallery__card" key={logement.id}>
          <img
            className="gallery__img"
            src={logement.cover}
            alt={logement.title}
          />
          <h2 className="gallery__titleimg">{logement.title}</h2>
          {/* <p>{logement.location}</p> */}
        </div>
      ))}
    </div>
  );
}

export default Gallery;
