import React from "react";
import "../App.css";
import "../styles/about.css"
import star from "../assets/24.svg";

const SpeechBubble = ({ text }) => {
  return (
    <blockquote className="bubble electric">
      <span>{text}</span>
    </blockquote>
  );
};

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="content-container">
        <div className="polka-dots"></div>
        <div className="header-section">
          <span className="text-about">About Me</span>
          <img src={star} alt="logo" className="star-top" />
        </div>
        <SpeechBubble text="As a full-stack developer, I bring expertise in both front-end and back-end technologies, mastering languages such as HTML, CSS, JavaScript, Python, and C#. My proficiency extends to frameworks, libraries, database management, and cloud services. I am dedicated to delivering innovative and tailored solutions that meet client expectations, staying at the forefront of industry trends and advancements" />
        <img src={star} alt="logo" className="star-bottom" />
      </div>
    </div>
  );
};

export default AboutPage;