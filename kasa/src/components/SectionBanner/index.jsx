import "../../styles/index.scss";
import BannerImg from "../../images/Imagesource1.png";

const SectionBanner = ({ bannerImg,opacity,slogan }) => {
  return (
    <div className="banner">
      <img className="banner__img" src={BannerImg} alt="Rocher" />
      <div className="banner__dark"></div>
      <h1 className="banner__slogan">Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default SectionBanner;
