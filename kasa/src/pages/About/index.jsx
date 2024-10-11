import "../../styles/index.scss";
import BannerImg from "../../images/bannerpagescollapses.png";
// import ErrorPage from "../Error";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Collapses from "../../components/Collapses";
import Banner from "../../components/Banner";
import BannerImg2 from "../../images/bannerpagescollapses.png";

const About = () => {
  return (
    <div className="about">
      <Banner
        bannerImg={BannerImg2}
        altImg="Montagnes"
        opacityDark="30%"
        slogan=""
      />

      <div className="about__description">
        <Collapses
          title="Flexibilité"
          description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
           régulierement vérifiées par nos équipes."
        />

        <Collapses
          title="Respect"
          description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme."
        />

        <Collapses
          title="Service"
          description="La qualité du service est au coeur de notre engagement chez Kasa.
            Nous veillons à ce que chaque interaction, que ce soit avec nos
            hôtes ou nos locataires, soit empreinte de respect et de
            bienveillance."
        />

        <Collapses
          title="Securité"
          description="La securité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critéres de
            securité de établis par nos services. En laissant une note aussi
            bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
            que les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
    </div>
  );
};
export default About;
