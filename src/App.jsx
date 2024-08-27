import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { contact, information } from "./data/CollapsingBar.jsx";
import CollapsingBar from "./components/CollapsingBar/CollapsingBar.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import { FaBagShopping } from "react-icons/fa6";
import CircleButton from "./components/CircleButton/CircleButton";
import Home from "./pages/Home.jsx";
import Properties from "./pages/Properties.jsx";
import PropertiesDetailes from "./pages/PropertiesDetailes.jsx";
import ContactUs from "./pages/ContactUs.jsx";

function App() {
  let navs = [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "Properties",
      path: "/properties",
    },
    {
      text: "Property detailes",
      path: "/property_detailes",
    },
    {
      text: "Contact us",
      path: "/contact",
    },
  ];
  let button = <CircleButton icon={<FaBagShopping />} text="Scadual a visit" />;


  return (
    <>
      <CollapsingBar info={information} social={contact} />
      <NavBar logoType="VILLA" navs={navs} button={button} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Properties" element={<Properties />} />
        <Route path="/property_detailes" element={<PropertiesDetailes />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
