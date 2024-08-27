import Container from "../styledComponents/Container";
import "./SectionContact.css";
import background from "./../../assets/images/contact-bg.jpg";
import Title from "../Title/Title";
import SectionContactForm from "../SectionContactForm/SectionContactForm";

const SectionContact = () => {
  return (
    <section id="contact">
      <div
        className="contact"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Container>
          <div className="contact_container">
            <div className="title_container">
              <Title
                subtitle="CONTACT US"
                title="Get In Touch With Our Agents"
                center
                white
              />
            </div>
          </div>
        </Container>
      </div>
      <SectionContactForm />
    </section>
  );
};

export default SectionContact;
