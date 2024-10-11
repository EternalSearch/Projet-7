
import "../../styles/index.scss";
import Logo from "../../images/LOGO.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <img className="site-header__logo" src={Logo} alt = "Logo Kasa" />
      <nav className="site-header__navbar">
        <p className="site-header__text buttonaccueil ">
        <Link to="/">Accueil</Link>
        </p>
        <p className="site-header__text buttonabout">
        <Link to="/about">A Propos </Link>
        </p>
      </nav>
    </header>
  );
}
export default Header
                
