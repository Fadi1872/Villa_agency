import { features } from "../../data/Features";
import PaymentCard from "../PaymentCard/PaymentCard";
import Container from "../styledComponents/Container";
import "./SectionSingleProperty.css";
import img from "./../../assets/images/property-01.jpg";
import GrayBox from "../GrayBox/GrayBox";
import { elements } from "../../data/accordionElements";

const SectionSingleProperty = () => {
  return (
    <div>
      <Container>
        <div className="single_property">
          <div className="w-7">
            <img src={img} alt="property image" className="property_img" />
            <p className="type_badge">Appartment</p>
            <h1 className="title">24 New Street Miami, OR 24589</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur aliquam nesciunt obcaecati velit corporis soluta, qui
              est, a dicta quibusdam adipisci quos ipsam fugit ipsum laboriosam
              non? Cum obcaecati sed similique facere! Consequatur magnam
              eligendi perferendis qui sunt dolore quaerat animi repellendus
              dolorum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              qui veniam cupiditate magni, doloribus quod quisquam voluptatem
              nisi culpa et! Cum obcaecati sed similique facere! Consequatur
              magnam eligendi perferendis qui sunt.
            </p>
            <GrayBox elements={elements} />
          </div>
          <div className="w-3">
            <div className="position_sticky">
              <PaymentCard features={features} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SectionSingleProperty;
