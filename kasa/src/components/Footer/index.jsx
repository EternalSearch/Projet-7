import "../../styles/index.scss";
import Logo from "../../images/LOGO.png";

function Footer () {
    return (
      <footer className="site-footer">
        <img className="site-footer__logo" src={Logo} alt="Kasa logo " />
        <p className="site-footer__text">© 2020 Kasa. All rights reserved</p>
      </footer>
    );
  }
  export default Footer
  
 
  

