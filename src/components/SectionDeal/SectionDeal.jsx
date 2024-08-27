import { useEffect, useState } from "react";
import Container from "../styledComponents/Container";
import TabsBody from "../TabsBody/TabsBody";
import Title from "../Title/Title";
import "./SectionDeal.css";
import { bestDealsInfo } from "../../data/deal";

const SectionDeal = ({ title, subtitle, tabs }) => {
  const [tab, setTab] = useState("Appartment");
  const findDeal = (array, target) => {
    return array.find((object) => object.type == target)
  };
  let bestDealInfo = findDeal(bestDealsInfo, tab);
  useEffect(() => {
    bestDealInfo = findDeal(bestDealsInfo, tab);
  }, [tab]);

  return (
    <section id="deal">
      <Container>
        <div className="title_container">
          <div className="title_max-width">
            <Title title={title} subtitle={subtitle} />
          </div>
          <div className="tabs_container">
            {tabs.map((element, index) => (
              <div
                key={index}
                className={`tab ${tab == element ? "active" : ""}`}
                onClick={() => setTab(element)}
              >
                {element}
              </div>
            ))}
          </div>
        </div>
        <TabsBody
          title={bestDealInfo.title}
          img={bestDealInfo.img}
          info={bestDealInfo.info}
        />
      </Container>
    </section>
  );
};

export default SectionDeal;
