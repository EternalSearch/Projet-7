import "../../styles/index.scss";
import Logo from "../../images/LOGO.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <img className="site-header__logo" src={Logo} alt="Logo Kasa" />
      <nav className="site-header__navbar">
        <p className="site-header__text buttonaccueil ">
          <NavLink to="/"  className = {({ isActive }) => (isActive ?'line' :'buttonstate' )}> Accueil </NavLink>
        </p>
        <p className="site-header__text buttonabout">
        <NavLink to="/about"  className = {({ isActive }) => (isActive ?'line' :'buttonstate' )}> A Propos </NavLink>       
        </p>
      </nav>
    </header>
  );
}
export default Header;

