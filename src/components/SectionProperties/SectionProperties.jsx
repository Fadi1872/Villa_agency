import PropertyCard from "../PropertyCard/PropertyCard";
import Container from "../styledComponents/Container";
import Title from "../Title/Title";
import "./SectionProperties.css";
import { properties } from "../../data/Properties";

const SectionProperties = () => {
  return (
    <section id="properties">
      <Container>
        <div className="title_container">
          <Title
            title="We Provide The Best Property You Like"
            subtitle="PROPERTIES"
            center
          />
        </div>
        <div className="properties_container">
          {properties.slice(0, 6).map((element, index) => (
            <div key={index} className="property_card-container">
              <PropertyCard
                img={element.img}
                type={element.type}
                price={element.price}
                location={element.location}
                features={element.features}
                button="schedual a visit"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SectionProperties;
