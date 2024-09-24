import "../../styles/index.scss";
import logements from "../../logements.json";
import { Link } from "react-router-dom";


function Gallery() {
  return (
    <div className="gallery">
      {logements.map((logement) => (
        <Link to={`/logement/${logement.id}`}>
        <div className="gallery__card" key={logement.id}>
       
          <img
            className="gallery__img"
            src={logement.cover}
            alt={logement.title}
          />
          <h2 className="gallery__titleimg">{logement.title}</h2>
        </div>
        </Link>
      ))}
    </div>
  );
}

export default Gallery;

// function Renvoie (){
//   return (
//     <div className="gal">
//     {logements.map((description) => (
//       <div className="gallery__Kard" key={description.pictures []}>
//         {/* <Link to ={`/logement/${location}`}> */}
//         <img
//           className="galleri__img"
//           src={pictures}
//           alt={photos logement}
//         />
//         <h2 className="galleri__titleimg">{host}</h2>
//       </div>
//         <h2 className="galleri__titleimg">{rating}</h2>
//       </div>
//     ))}
//     {/* // <Link to="/">Accueil</Link> */}
//   )
// export {Renvoie}
// // {/* <Link to="/">Accueil</Link>
// //         </p>
// //         <p className="site-header__text buttonabout">
// //         <Link to="/about">A propos </Link>
// //         </p> */}
