import Container from "../styledComponents/Container";
import "./CollapsingBar.css";

const CollapsingBar = ({ info, social }) => {
  let newInfo = [];
  info.forEach((element, index) => {
    newInfo.push(
      <a key={element.text} href={element.link} className="information_link">
        {element.icon} {element.text}
      </a>
    );
    if (index != info.length - 1) {
      newInfo.push(<p key={index}>|</p>);
    }
  });

  return (
    <div className="collapsing_bar">
      <Container className="text-orange">
        <div className="collapsing_bar-body">
          <div className="links-container">
            {newInfo.map((element) => element)}
          </div>
          <div className="social_link-container">
            {social.map((element, index) => (
              <a key={index} href={element.link} className="social_link">
                {element.icon}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CollapsingBar;
