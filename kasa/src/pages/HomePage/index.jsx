import Banner from "../../components/Banner";
import Gallery from "../../components/Gallery";
import ImgBanner from "../../images/Imagesource1.png";
import "../../styles/index.scss";

const HomePage = () => {
  return (
    <div className="home">
      <Banner
        bannerImg={ImgBanner}
        altImg="Rochers"
        opacityDark="60%"
        slogan="Chez vous, partout et ailleurs"
      />
      <Gallery />
    </div>
  );
};
export default HomePage;
