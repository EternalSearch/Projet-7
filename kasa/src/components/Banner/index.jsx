import "../../styles/index.scss";
import BannerImg from "../../images/Imagesource1.png";

const SectionBanner = ({ bannerImg,altImg,opacityDark,slogan }) => {
  return (
    <div className="banner">
      <img className="banner__img" src={bannerImg} alt={altImg} />
      <div className="banner__dark" style={{ opacity: opacityDark }}></div>
      <h1 className="banner__slogan">{slogan}</h1>
    </div>
  );
}

export default SectionBanner;
