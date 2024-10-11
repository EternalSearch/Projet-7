import { useParams } from "react-router-dom";
import "../../styles/index.scss";
import logementsData from "../../logements.json";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Collapses from "../../components/Collapses";
import Error from "../Error";

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
    return <Error/>;
  }

  const {
    pictures,
    title,
    description,
    host: { name, picture },
    rating,
    location,
    equipments,
    tags,
  } = accomodation;

  const nbPictures = pictures.length;

  const faArrowright = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === nbPictures - 1 ? 0 : prevIndex + 1
    );
  };
  const faArrowLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? nbPictures - 1 : prevIndex - 1
    );
  };

  const Notation = ({ rating }) => {
    const maxStars = 5;
    const stars = [];
    for (let i = 1; i <= maxStars; i++) {
      if (i <= rating) {
        stars.push(
          <FontAwesomeIcon key={i} icon={faStar} className="colorfulstar" />
        );
      } else {
        stars.push(
          <FontAwesomeIcon key={i} icon={faStar} className="emptystar " />
        );
      }
    }
    return <p className="stars">{stars}</p>;
  };

  return (
    <div className="accomodation-description ">
      <div className="accomodation-description__carousel">
        <img
          className="accomodation-description__img"
          src={pictures[currentIndex]}
          alt={`Aperçu ${currentIndex + 1} du logement ${title}`}
        />

        {nbPictures <= 1 ? null : (
          <>
            <FontAwesomeIcon
              icon={faChevronLeft}
              onClick={faArrowLeft}
              className="accomodation-description__chevron accomodation-description__leftchevron"
            />
            <FontAwesomeIcon
              icon={faChevronRight}
              onClick={faArrowright}
              className="accomodation-description__chevron accomodation-description__rightchevron"
            />
            <p className="accomodation-description__number">
              {currentIndex + 1}/{pictures.length}
            </p>
          </>
        )}
      </div>
      <div className="accomodation-description__container">
        <div className="accomodation-description__studio">

          <h2 className="accomodation-description__title">{title}</h2>
          <p className="accomodation-description__location">{location}</p>
          <div className="accomodation-description__tags">
            {tags.map((tag, index) => (
              <div className="accomodation-description__tag" key={index}>
                {tag}
              </div>
            ))}
          </div>
          
        </div>
        <div className="def">
          <div className="accomodation-description__namepicture">
            <p className="accomodation-description__hostname">
              {name}
           </p>
              <img
                className="accomodation-description__picturehost"
                src={picture}
                alt={`Hôte du logement`}
              />
          </div> 
            <div className="accomodation-description__rating">
              <Notation rating={rating} />
            </div>
          </div>
      
      </div>

      <div className="colorfulstar stars"></div>

      <div className="accomodation-description__collapses">
        <Collapses
          title="Description"
          description={description}
          className="accomodation-description__text"
        />

        <Collapses
          title="Équipements"
          description={equipments.map((equipments, index) => (
            <ul className="accomodation-description__equipmentslist">
              {" "}
              <li key={index}>{equipments}</li>
            </ul>
          ))}
        />
      </div>
    </div>
  );
}

export default AccommodationDescription;
