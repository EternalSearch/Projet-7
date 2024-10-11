import "../../styles/index.scss";
// import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="errorpage">           
            <h3 className="errorpage__code">404</h3>
            <p className="errorpage__text">Oups! La page que vous demandez n'existe pas</p>
            <p className="errorpage__return">Retourner sur la page d'accueil</p>
            {/* <Link to = "/"> Revenir sur la page d'accueil</Link> */}
        </div>
    );
};
export default Error;

