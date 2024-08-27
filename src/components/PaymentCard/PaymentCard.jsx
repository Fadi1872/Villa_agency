import "./PaymentCard.css";
import ShadowBox from "../styledComponents/ShadowBox";
import HorizentalCard from "../HorizentalCard/HorizentalCard";


const PaymentCard = ({ features }) => {
  return (
    <div className="features_cards">
      <ShadowBox>
        {features.map((element, index) => (
          <HorizentalCard
            img={element.img}
            title={element.title}
            sub={element.sub}
            key={index}
          />
        ))}
      </ShadowBox>
    </div>
  );
};

export default PaymentCard;
