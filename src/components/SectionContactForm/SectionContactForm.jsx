import "./SectionContactForm.css";
import Container from "../styledComponents/Container";
import ShadowBox from "../styledComponents/ShadowBox";
import FormInput from "../FormInput/FormInput";
import phoneIcon from "./../../assets/images/phone-icon.png";
import emailIcon from "./../../assets/images/email-icon.png";
import Title from "../Title/Title";

const SectionContactForm = ({ contactPage }) => {
  return (
    <Container>
      <div
        className={`conact_form-container ${
          contactPage ? "contact_page" : "home_page"
        }`}
      >
        <div className="col-6">
          {!contactPage ? (
            <iframe
              className="home_page"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13672.747106946392!2d75.20156125499084!3d31.048899539223466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a16d6c7c2f3c9%3A0xb9aadf98c8b3e82e!2sMiani%2C%20Punjab%20144702%2C%20India!5e0!3m2!1sen!2s!4v1724190818319!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          ) : (
            <div>
              <div className="form_title">
                <Title
                  title="Get In Touch With Our Agents"
                  subtitle="CONTACT US"
                />
              </div>
              <p className="title_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                iure officiis a hic, natus blanditiis ipsa dolores laboriosam?
                Accusantium optio ipsam fuga obcaecati dolorem commodi non,
                distinctio in sequi illo culpa aliquam minima ducimus veniam
                suscipit, cupiditate at assumenda consequatur deleniti a esse
                nemo officiis veritatis tempora.
              </p>
            </div>
          )}
          <div
            className={`conact_blocks-container ${
              contactPage ? "contact_page" : ""
            }`}
          >
            <div className="col-5">
              <ShadowBox>
                <div className="contact_block">
                  <img src={phoneIcon} alt="" />
                  <div>
                    <h3>010-010-010</h3>
                    <p>Phone Number</p>
                  </div>
                </div>
              </ShadowBox>
            </div>
            <div className="col-5">
              <ShadowBox>
                <div className="contact_block">
                  <img src={emailIcon} alt="" />
                  <div>
                    <h3>info@focalx.com</h3>
                    <p>Bussiness Email</p>
                  </div>
                </div>
              </ShadowBox>
            </div>
          </div>
        </div>
        <div className="col-4">
          <ShadowBox>
            <form className="contact_form">
              <FormInput
                lable="full name"
                placrholder="fadi noumih"
                inputType="text"
              />
              <FormInput
                lable="email address"
                placrholder="fadinoumih@gmail.com"
                inputType="email"
              />
              <FormInput
                lable="subject"
                placrholder="subject"
                inputType="text"
              />
              <FormInput lable="message" placrholder="message" textArea />
              <button type="submit">send message</button>
            </form>
          </ShadowBox>
        </div>
        {contactPage && (
          <iframe
            className="contact_page-iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13672.747106946392!2d75.20156125499084!3d31.048899539223466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a16d6c7c2f3c9%3A0xb9aadf98c8b3e82e!2sMiani%2C%20Punjab%20144702%2C%20India!5e0!3m2!1sen!2s!4v1724190818319!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}
      </div>
    </Container>
  );
};

export default SectionContactForm;
