import "./App.css";
import CollapsingBar from "./components/CollapsingBar/CollapsingBar";
import Hero from "./components/Hero/Hero.jsx";
import { contact, information } from "./data/CollapsingBar.jsx";
import img1 from "./assets/images/banner-01.jpg";
import img2 from "./assets/images/banner-02.jpg";
import img3 from "./assets/images/banner-03.jpg";
import featured from "./assets/images/featured.jpg";
import featuredIcon from "./assets/images/featured-icon.png";
import FeaturedSection from "./components/FeaturedSection/FeaturedSection.jsx";
import { features } from "./data/Features.js";
import SectionVideos from "./components/SectionVideos/SectionVideos.jsx";
import videoSectionBackground from './assets/images/deal-01.jpg'
import videoFrame from './assets/images/video-frame.jpg'
import { info } from "./data/Features.js";
import SectionDeal from "./components/SectionDeal/SectionDeal.jsx";
import { tabs } from "./data/deal.js";
import Footer from "./components/Footer/Footer.jsx";
import SectionProperties from "./components/SectionProperties/SectionProperties.jsx";
import SectionContact from "./components/SectionContact/SectionContact.jsx";

function App() {
  const imgs = [img1, img2, img3]
  return (
    <>
      <CollapsingBar info={information} social={contact} />
      <Hero title="HARRY! GET THE BEST VILLA FOR YOU" imgs={imgs} />
      <FeaturedSection img={featured} stampIcon={featuredIcon} features={features} />
      <SectionVideos background={videoSectionBackground} title="Get Closer View & Different Feeling" subtitle="video view" videoImage={videoFrame} info={info} />
      <SectionDeal tabs={tabs} title="Find Your Best Deal Right Now" subtitle="BEST DEAL" />
      <SectionProperties />
      <SectionContact />
      <Footer />
    </>
  );
}

export default App;