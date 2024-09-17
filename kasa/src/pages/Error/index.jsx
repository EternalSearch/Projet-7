import Header from '../../components/Header';
import Footer from '../../components/Footer';
import "../../styles/index.scss";

const Error = () => {
    return (
        <div className="errorpage">
            <Header />
            <p>404</p>
            <h3>Oups! La page que vous demandez n'existe pas</h3>
            <p>Revenir sur la page d'accueil</p>
            <Footer />
        </div>
    );
};
export default Error;

