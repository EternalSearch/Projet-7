// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

import '../../styles/index.scss';
import BannerImg from '../../images/Imagesource1.png';

export default SectionBanner
function SectionBanner() {
  return (
   <div className='banner'>
      <img className='banner__img' src={BannerImg} alt="Rocher"/><h1 className='banner__slogan'>Chez vous partout et ailleurs</h1>
      </div>  
  );}

  

  
  
  







// const Logement = () => {
//   const { id } = useParams(); // Récupérer l'id du logement depuis l'URL
//   const [logement, setLogement] = useState(null);
// }


//   // Simuler une fonction qui récupère les infos d'un logement à partir d'une API ou d'un fichier JSON
//   const fetchLogement = async (logementId) => {
//     // Supposons qu'on ait une API ou un fichier local contenant les données des logements
//     const data = await fetch(logements.json)
//       // .then((response) => response.json())
//       // .catch((error) => console.error('Erreur lors de la récupération du logement:', error));

//     // Filtrer les données pour obtenir le logement correspondant à l'id de l'URL
//     const foundLogement = data.find((item) => item.id === logementId);
//     setLogement(foundLogement);
//   };

//   // Appeler la fonction de récupération des données lorsque le composant est monté
//   useEffect(() => {
//     if (id) {
//       fetchLogement(id); // Charger le logement correspondant à l'id
//     }
//   }, [id]);

//   if (!logement) {
//     return <p>Chargement du logement...</p>;
//   }

//   return (
//     <div>
//       <h1>{logement.name}</h1>
//       <img src={logement.imageUrl} alt={logement.name} />
//       <p>{logement.description}</p>
//     </div>
//   );
// };

// // export default Logements.json;