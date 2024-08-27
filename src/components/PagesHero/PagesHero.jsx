import Container from "../styledComponents/Container";
import "./PagesHero.css";

const PagesHero = ({ title, sub, img }) => {
  return (
    <div className="pages_hero" style={{ "--img": `url(${img})` }}>
      <div className="pages_hero-container">
        <p className="sub_title">{sub}</p>
        <h1 className="title">{title}</h1>
      </div>
    </div>
  );
};

export default PagesHero;
