
import "../../styles/index.scss";
import Logo from "../../images/LOGO.png";

function Header() {
  return (
    <header className="site-header">
      <img src={Logo} alt="Kasa logo" />
      <nav className="site-header__navbar">
        <p className="site-header__text__accueil">Accueil</p>
        <p className="site-header__text__apropos">A propos</p>
      </nav>
    </header>
  );
}
export default Header
                
