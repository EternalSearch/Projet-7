import "../../styles/index.scss";
import BannerImg from '../../images/bannerpagescollapses.png';
const About = () => {
    return (
        <div className="aboutdescription">            
            <img className = "banner__img" src={BannerImg} alt="Montagnes"/>
            <div className = "aboutdescription__collapses">
                <li>
                    <ul className = "aboutdescription__title">Fiabilité</ul><p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulierement vérifiées par nos équipes.</p>
                    <ul className = "aboutdescription__title">Respect </ul><p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                    <ul className = "aboutdescription__title">Service</ul><p>La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires,soit empreinte de respect et de bienveillance </p>
                    <ul className = "aboutdescription__title">Securité </ul><p>La securité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critéres de securité de établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes. </p>                    
                </li>
            </div>            
        </div>
    );
};
export default About;
    




  
