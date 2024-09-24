import "../../styles/index.scss";

const Error = () => {
    return (
        <div className="errorpage">           
            <p className="errorpage__code">404</p>
            <h3 className="404">Oups! La page que vous demandez n'existe pas</h3>
            <p>Revenir sur la page d'accueil</p>
        </div>
    );
};
export default Error;

