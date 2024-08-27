import { useEffect, useState } from "react";
import Container from "../styledComponents/Container";
import "./SectionFilterProperties.css";
import { properties } from "../../data/Properties";
import PropertyCard from "../PropertyCard/PropertyCard";

const SectionFilterProperties = () => {
  const [active, setActive] = useState("Show All");
  const [cards, setCards] = useState(properties);
  const filters = ["Show All", "Appartment", "Villa House", "Penthhouse"];

  useEffect(() => {
    if (active == "Show All") setCards(properties);
    else {
      let newProperties = properties.filter(
        (element) => element.type == active
      );
      setCards(newProperties);
    }
  }, [active]);
  return (
    <div id="filter_section">
      <Container>
        <div className="tabs_container">
          {filters.map((element, index) => (
            <div
              key={index}
              className={`tab ${active == element ? "active" : ""}`}
              onClick={() => setActive(element)}
            >
              {element}
            </div>
          ))}
        </div>
        <div className="filter_container">
          {cards.map((element, index) => (
            <div key={index} className="filter_card">
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
    </div>
  );
};

export default SectionFilterProperties;
