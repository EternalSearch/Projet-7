import Header from '../../components/Header';
import SectionBanner from '../../components/SectionBanner';
import Gallery from '../../components/Gallery';
import Footer from '../../components/Footer';
import "../../styles/index.scss";

const HomePage = () => {
    return (
        <div className="home">
            <Header />
            <SectionBanner />
            <Gallery />
            <Footer />
        </div>
    );
};
export default HomePage;