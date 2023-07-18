import React, { useState} from "react";
import { Link } from "react-router-dom";
import "./style.css";
import trFlag from "../../assets/tr-flag.png";
import enFlag from "../../assets/en-flag.png";
import { chooseLanguage } from "../../store/actions/pageActions";
import { connect, useSelector } from "react-redux";
import { FaBars } from "react-icons/fa";

function Navbar(props) {
  const page = useSelector((state) => state.page);
  const [toggle,SetToggle] = useState(false)
  return (
    <div className="navbar">
      <FaBars className="toggle" onClick={() => SetToggle(!toggle)} style={{ fontSize: 25 }} />
      <div className="navbar-left">
        <Link to="/">{page.language === "tr" ? "Ana Sayfa" : "Home"}</Link>
        <Link to="/about" className="navbar-a">
          {page.language === "tr" ? "Hakkımda" : "About"}
        </Link>
        <Link to="/portfolio" className="navbar-a">
          {page.language === "tr" ? "Portfolyo" : "Portfolio"}
        </Link>
      </div>
      <div className={toggle ? "navbar-dropdown open" : "navbar-dropdown"}>
        <Link to="/">{page.language === "tr" ? "Ana Sayfa" : "Home"}</Link>
        <Link to="/about" className="navbar-a">
          {page.language === "tr" ? "Hakkımda" : "About"}
        </Link>
        <Link to="/portfolio" className="navbar-a">
          {page.language === "tr" ? "Portfolyo" : "Portfolio"}
        </Link>
      </div>
      <div className="navbar-right">
        <button
          className="flag"
          title={page.language === "tr" ? "Türkçe" : "Turkish"}
          onClick={() => props.chooseLanguage("tr")}
        >
          <img src={trFlag} alt="turkey flag" width={30} />
        </button>
        <button
          className="flag"
          title={page.language === "tr" ? "İngilizce" : "English"}
          onClick={() => props.chooseLanguage("en")}
        >
          <img src={enFlag} alt="england flag" width={30} />
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    page: state.page,
  };
};

const mapDispatchToProps = {
  chooseLanguage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
