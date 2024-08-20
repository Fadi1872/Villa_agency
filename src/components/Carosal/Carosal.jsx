import "./Carosal.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

const Carosal = ({ imgs }) => {
  const [shown, setShown] = useState(0);
  const handleClickRight = () => {
    if (shown == imgs.length - 1) {
      setShown(0);
    } else {
      setShown(shown + 1);
    }
  };
  const handleClickleft = () => {
    if (shown == 0) {
      setShown(imgs.length -1);
    } else {
      setShown(shown - 1);
    }
  };
  return (
    <>
      {imgs.map((element, index) => (
        <img
          key={index}
          src={element}
          alt="villa"
          className={`carosal_img ${shown < index ? "hidden" : ""}`}
        />
      ))}
      <button className="arrow_btn left" onClick={handleClickleft}>
        <IoIosArrowBack />
      </button>
      <button className="arrow_btn right" onClick={handleClickRight}>
        <IoIosArrowForward />
      </button>
    </>
  );
};

export default Carosal;
