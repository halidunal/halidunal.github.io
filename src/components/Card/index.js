import React, { useCallback, useEffect, useState } from "react";
import "./style.css";
import image from "../../assets/avatar.png";
import pp from "../../assets/pp.jpg";
import { chooseLanguage } from "../../store/actions/pageActions";
import { connect, useSelector } from "react-redux";
import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

function Card() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const page = useSelector((state) => state.page);
  const skills = [
    "C#",
    ".NET MVC",
    "JavaScript",
    "React",
    "Angular",
    "jQuery",
    "ReactNative",
    "NativeScript",
    "CSS3",
    "HTML5",
    "MSSQL",
    "PostgreSQL",
    "Firebase",
  ];

  const [headsTails, setHeadsTails] = useState(true);
  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    const flip = () => {
      headsTails
        ? setTimeout(() => {
            setHeadsTails(!headsTails);
            document
              .getElementsByClassName("front-flip")[0]
              ?.setAttribute("class", "back-flip");
          }, 5000)
        : setTimeout(() => {
            setHeadsTails(!headsTails);
            document
              .getElementsByClassName("back-flip")[0]
              ?.setAttribute("class", "front-flip");
          }, 5000);
    };
    flip();
  }, [headsTails]);

  return (
    <>
      {windowWidth > 700 ? (
        <div className="card card-container">
          <div className="left-card">
            <div className="left-top">
              <div className="front-flip">
                <div className="front">
                  <img className="card-img" src={image} alt="" />
                </div>
                <div className="back">
                  <img className="card-img" src={pp} alt="" />
                </div>
              </div>
            </div>
            <div className="left-bottom">
              <h2 className="text">Halid Ünal</h2>
              <h4 className="text-min">
                {page.language === "tr"
                  ? "Full Stack Yazılım Geliştirici"
                  : "Full Stack Software Developer"}
              </h4>
              <h5 className="text">
                {page.language === "tr" ? "Ankara/TÜRKİYE" : "Ankara/TURKEY"}
              </h5>
            </div>
          </div>
          <div className="flex">
            <div className="icons">
              <a
                className="icon"
                href="https://github.com/halidunal/"
                target="blank"
                title="github"
              >
                <FaGithub />
              </a>
              <a
                className="icon"
                href="https://www.linkedin.com/in/halid%C3%BCnal/"
                target="blank"
                title="linkedin"
              >
                <FaLinkedin />
              </a>
              <a
                className="icon"
                href="https://instagram.com/halidunall"
                target="blank"
                title="instagram"
              >
                <FaInstagramSquare />
              </a>
            </div>
            <a
              className="mail"
              href="https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcSBmltWKTMnSSwLnVGXZhKprXPkjmhHsCnqkcddxWMrdcCmQCjwbpXMqNVfBwLGbBDFvkFtC"
              target="blank"
            >
              halidunal@gmail.com
            </a>
            <div className="skills">
              {skills.map((skill, key) => (
                <p className="skill" key={key}>
                  {skill}
                </p>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="mobile-card card-container">
          <div className="mobile-card-content">
            <div className="left-card-mobile">
              <div className="left-top-mobile">
                <div className="front-flip">
                  <div className="front">
                    <img className="card-img" src={image} alt="" />
                  </div>
                  <div className="back">
                    <img className="card-img" src={pp} alt="" />
                  </div>
                </div>
              </div>
              <div className="left-bottom-mobile">
                <h2 className="text">Halid Ünal</h2>
                <h4 className="text-min">
                  {page.language === "tr"
                    ? "Full Stack Yazılım Geliştirici"
                    : "Full Stack Software Developer"}
                </h4>
                <h5 className="text">
                  {page.language === "tr" ? "Ankara/TÜRKİYE" : "Ankara/TURKEY"}
                </h5>
              </div>
            </div>
          </div>
          <div className="mobile-flex">
            <div style={{ padding: "20px 0px 15px 0px" }}>
              <div className="icons">
                <a
                  className="icon"
                  href="https://github.com/halidunal/"
                  target="blank"
                  title="github"
                >
                  <FaGithub />
                </a>
                <a
                  className="icon"
                  href="https://www.linkedin.com/in/halid%C3%BCnal/"
                  target="blank"
                  title="linkedin"
                >
                  <FaLinkedin />
                </a>
                <a
                  className="icon"
                  href="https://instagram.com/halidunall"
                  target="blank"
                  title="instagram"
                >
                  <FaInstagramSquare />
                </a>
              </div>
            </div>
            <a
              className="mail"
              style={{ marginTop: 0 }}
              href="https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcSBmltWKTMnSSwLnVGXZhKprXPkjmhHsCnqkcddxWMrdcCmQCjwbpXMqNVfBwLGbBDFvkFtC"
              target="blank"
            >
              halidunal@gmail.com
            </a>
            <div className="skills">
              {skills.map((skill, key) => (
                <p className="skill" key={key}>
                  {skill}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Card);
