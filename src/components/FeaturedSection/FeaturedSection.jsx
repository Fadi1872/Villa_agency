import HorizentalCard from "../HorizentalCard/HorizentalCard";
import Container from "../styledComponents/Container";
import ShadowBox from "../styledComponents/ShadowBox";
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
          <div className="gray_box">
            <p className="text-orange">Best Useful Links?</p>
            <p>get <b>the best villa</b> website template in HTML CSS and bootstrap for yout bussiness. TemplateMo provides you the best free CSS template in the wold. Please tell your friends about it</p>
            <p><b>How does this work?</b></p>
            <p><b>Why is villa agency the best?</b></p>
          </div>
        </div>
        <div className="width-30 features_cards">
          <ShadowBox>
            {
              features.map((element, index) => (
                <HorizentalCard img={element.img} title={element.title} sub={element.sub} key={index} />
              ))
            }
          </ShadowBox>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedSection;
