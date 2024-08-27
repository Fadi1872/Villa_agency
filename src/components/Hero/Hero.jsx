import "./Hero.css";
import Carosal from "../Carosal/Carosal";
import NavBar from "../NavBar/NavBar";


const Hero = ({ title, imgs }) => {
  
  return (
    <div className="hero">
      <Carosal imgs={imgs} />
      <div className="hero_title-body">
        <p className="hero_subtitle">
          Toronto, <span className="text-orange">Canada</span>
        </p>
        <h1 className="hero_title">{title}</h1>
      </div>
    </div>
  );
};

export default Hero;
