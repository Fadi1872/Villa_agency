import { elements } from "../../data/accordionElements";
import GrayBox from "../GrayBox/GrayBox";
import PaymentCard from "../PaymentCard/PaymentCard";
import Container from "../styledComponents/Container";
import Title from "../Title/Title";
import "./FeaturedSection.css";

const FeaturedSection = ({ img, stampIcon, features }) => {
  return (
    <section id="featured">
      <Container className="columns_container">
        <div className="width-30">
          <div className="main_img-container">
            <img src={img} alt="table" className="main_img" />
            <div className="main_img-stamp">
              <img src={stampIcon} alt="icon" />
            </div>
          </div>
        </div>
        <div className="width-40">
          <div className="featured_title">
            <Title title="Best Appartement& Sea View" subtitle="Featured" />
          </div>
          <GrayBox elements={elements} />
        </div>
        <div className="width-30">
          <PaymentCard features={features} />
        </div>
      </Container>
    </section>
  );
};

export default FeaturedSection;
