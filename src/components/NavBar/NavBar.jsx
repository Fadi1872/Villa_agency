import { useEffect, useState } from "react";
import Container from "../styledComponents/Container";
import "./NavBar.css";
import { FaBars } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { NavLink } from "react-router-dom";

const NavBar = ({ logoType, navs, button }) => {
  const [show, setShow] = useState(false);
  const [fixed, setFixed] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 40) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="nav_container">
      <nav className={`navbar ${fixed ? "fixed" : ""}`}>
        <Container>
          <div className="navbar-body">
            <h1 className="logo">{logoType}</h1>
            <div className={`nav-links_button ${show ? "" : "hide"}`}>
              <ul className="nav_links">
                {navs.map((element, index) => (
                  <li key={index}>
                    <NavLink to={element.path}>{element.text}</NavLink>
                  </li>
                ))}
              </ul>
              {button}
            </div>
            {show ? (
              <IoIosClose
                className="togglebar"
                onClick={() => setShow(!show)}
              />
            ) : (
              <FaBars className="togglebar" onClick={() => setShow(!show)} />
            )}
          </div>
        </Container>
      </nav>
    </div>
  );
};

export default NavBar;
