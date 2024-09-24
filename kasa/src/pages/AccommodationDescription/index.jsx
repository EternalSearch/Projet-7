import { useParams,} from 'react-router-dom';
import "../../styles/index.scss";
import logementsData from "../../logements.json";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

    function AccommodationDescription() {
      const { id } = useParams(); 
      const [accomodation, setLogement] = useState(null);
      const [currentIndex, setCurrentIndex] = useState(0); 
     
    
      useEffect(() => {    
        const foundLogement = logementsData.find((logement) => logement.id === id);
        if (foundLogement) {
          setLogement(foundLogement);
        }
      }, [id]);
    
      if (!accomodation) {
        return <p>Logement en cours de chargement ou non trouvé</p>;
      }
    
      const { pictures, title, description, host:{name,picture},rating, location, equipments, tags } = accomodation;          
      const faArrowright = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        );
      };          
      const faArrowLeft = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );
      };
    
      return (
        <div>
        <div className="accomodation-description">
          {/* Section Carrousel */}
          {/* <div className="carousel"> */}
           
           
          {/* </div>     */}
            <img
              className="accomodation-description__img"
              src={pictures[currentIndex]}
              alt={`Aperçu ${currentIndex + 1} du logement ${title}`}
            />            

            <div className='accomodation-description__carouselleft'>
            <FontAwesomeIcon icon={faChevronLeft} onClick = {faArrowLeft}/>
            </div>
            <div className='accomodation-description__carouselright'></div>
            <FontAwesomeIcon icon ={faChevronRight} onClick={faArrowright}/>
          </div>

          <div className="accomodation-description__container">
            <h2 className="accomodation-description__title">{title}</h2>
            <p className="accomodation-description__hostname">{name}</p>
            <img className="accomodation-description__picturehost" src={picture} alt={`Hôte du logement`}/>
            <p className="accomodation-description__location">{location}</p>
            <p className="accomodation-description__tags">{tags}</p>                        
            <p className="accomodation-description__rating">{rating}</p>
            <p className="accomodation-description__text">{description}</p>

    
            <ul className="accomodation-description__equipments">
              {equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
    
            <div className="accomodation-description__tags">
              {tags.map((tag, index) => (
                <span key={index} className="accomodation-description__tag">{tag}</span>
              ))}
            </div>
          </div>
          </div>
      );
    }
    
    export default AccommodationDescription;   