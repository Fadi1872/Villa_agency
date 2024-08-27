import "./TabsBody.css";
import CircleButton from "../CircleButton/CircleButton";
import { FaBagShopping } from "react-icons/fa6";
import ShadowBox from "../styledComponents/ShadowBox";


const TabsBody = ({title, img, info}) => {
    const infoEntries = Object.entries(info)


  return (
    <div className="body_container">
      <div className="col-3">
        <ShadowBox>
          <div className="deal_info-container">
            {infoEntries.map(([text, value], index) => (
              <div className="deal_info" key={index}>
                <p>{text.replaceAll('_', " ")}</p>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </ShadowBox>
      </div>
      <div className="col-4">
        <img src={img} alt="house img" className="deal_img" />
      </div>
      <div className="col-3 deal_text">
        <p>{title}</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo dolor
          doloremque ut ipsam, reprehenderit aspernatur cum impedit quidem
          aliquam. Cumque necessitatibus qui nisi ratione blanditiis autem
          adipisci voluptatem esse itaque?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, sit
          magnam nisi laborum amet eligendi eveniet numquam natus optio debitis
          obcaecati reiciendis in a consequuntur rerum sunt molestias autem.
          Porro.
        </p>
        <CircleButton icon={<FaBagShopping />} text="Scadual a visit" />
      </div>
    </div>
  );
};

export default TabsBody;
