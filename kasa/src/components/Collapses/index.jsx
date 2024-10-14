import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../../styles/index.scss";


const Collapses = ({ title, description }) => {  
  const [textVisible, setTextVisible] = useState(false);
  const toggleText = () => setTextVisible(!textVisible);

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
    </div>
  );
};

export default Collapses;
