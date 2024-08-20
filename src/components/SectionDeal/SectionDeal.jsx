import Container from "../styledComponents/Container";
import ShadowBox from "../styledComponents/ShadowBox";
import Title from "../Title/Title";
import "./SectionDeal.css";
import { dealInfo } from "../../data/deal";
import dealimg from "./../../assets/images/deal-01.jpg"
import CircleButton from "../CircleButton/CircleButton";
import { FaBagShopping } from "react-icons/fa6";

const SectionDeal = ({ title, subtitle, tabs }) => {
  return (
    <section id="deal">
      <Container>
        <div className="title_container">
          <div className="title_max-width">
            <Title title={title} subtitle={subtitle} />
          </div>
          <div className="tabs_container">
            {tabs.map((element, index) => (
              <div key={index} className={`tab ${index == 0 ? "active" : ""}`}>
                {element}
              </div>
            ))}
          </div>
        </div>
        <div className="body_container">
          <div className="col-3">
            <ShadowBox>
              <div className="deal_info-container">
                {dealInfo.map((element, index) => (
                  <div className="deal_info" key={index}>
                    <p>{element.text}</p>
                    <p>{element.value}</p>
                  </div>
                ))}
              </div>
            </ShadowBox>
          </div>
          <div className="col-4">
            <img src={dealimg} alt="house img" className="deal_img" />
          </div>
          <div className="col-3 deal_text">
            <p>Exta info about property</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo dolor doloremque ut ipsam, reprehenderit aspernatur cum impedit quidem aliquam. Cumque necessitatibus qui nisi ratione blanditiis autem adipisci voluptatem esse itaque?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, sit magnam nisi laborum amet eligendi eveniet numquam natus optio debitis obcaecati reiciendis in a consequuntur rerum sunt molestias autem. Porro.</p>
            <CircleButton icon={<FaBagShopping />} text="Scadual a visit" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SectionDeal;
