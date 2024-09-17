import "../../styles/index.scss";
import LOGOwhite from "../../images/Logowhite.png";

function Footer () {
    return (
      <footer className="site-footer">
        <div className="site-footer__container">
        <img className="site-footer__logo" src={LOGOwhite} alt="Logo Kasa " />
        <p className="site-footer__text">© 2020 Kasa. All rights reserved</p>
        </div>
      </footer>
    );
  }
  export default Footer
  
 
  

