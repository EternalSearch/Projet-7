import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../../styles/index.scss";
// import { Link } from "react-router-dom";
// import About from "../../pages/About";

const Collapses = ({ title, description }) => {
  // Gestion de l'état ouvert/fermé
  const [textVisible, setTextVisible] = useState(false);

  const toggleText = () => setTextVisible(!textVisible);
  // Fonction pour inverser l'état lors du clic

  return (
    <div className="collapses">

    
      <div className="collapses__topbar">
        <p className="collapses__title">{title}</p>
        
     
        <div onClick={toggleText}>
          <FontAwesomeIcon
            icon={textVisible ? faChevronDown : faChevronUp}
            className="collapses__icon"
          />
        </div>
      </div>
      {textVisible && <p className="collapses__text">{description}</p>}
    {/* </div> */}
    </div>
  );
};

export default Collapses;
