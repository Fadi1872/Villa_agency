import { useState } from "react";
import "./GrayBox.css";

const GrayBox = ({ elements }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="gray_box">
      {elements.map((element, index) => (
        <div className="accordion_element" key={index}>
          <p className="element_title" onClick={() => setActive(index)}>
            {element.title}
          </p>
          <div className={`element_body ${active == index ? "active" : ""}`}>
            <div>
              <p>{element.body}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GrayBox;
