import InfoCard from "../InfoCard/InfoCard";
import Container from "../styledComponents/Container";
import Title from "../Title/Title";
import "./SectionVideos.css";
import { FaPlay } from "react-icons/fa";

const SectionVideos = ({ background, videoImage, title, subtitle, info }) => {
  return (
    <section id="videos">
      <div
        className="videos_container"
        style={{ "--img-url": `url(${background})` }}
      >
        <Container className="section_container">
          <div className="title_container">
            <Title title={title} subtitle={subtitle} center white />
          </div>
        </Container>
      </div>
      <Container>
        <div className="video_container">
          <img src={videoImage} alt="video image" className="video_frame" />
          <div className="play_button">
            <FaPlay className="text-orange" />
          </div>
        </div>
        <div className="info_container">
          {info.map((element, index) => (
            <div>
              <InfoCard
                number={element.number}
                text={element.text}
                key={index}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SectionVideos;
