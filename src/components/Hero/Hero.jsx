import "./Hero.css";
import Carosal from "../Carosal/Carosal";
import NavBar from "../NavBar/NavBar";
import { FaBagShopping } from "react-icons/fa6";
import CircleButton from "../CircleButton/CircleButton";

const Hero = ({ title, imgs }) => {
  let navs = ["Home", "Properties", "Property detailes", "Contact us"];
  let button = <CircleButton icon={<FaBagShopping />} text="Scadual a visit" />
  return (
    <div className="hero">
      <Carosal imgs={imgs} />
      <NavBar logoType="VILLA" navs={navs} button={button} />
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
