import React, { useEffect, useState } from "react";
import "../App.css";
import "../styles/experience.css";
import bubbleImage from "../assets/9.png";
import randomBubble from "../assets/10.png";
import experiencesData from "../data/experience.json";
import intershipData from "../data/experience2.json";

const getRandomPosition = () => ({
  top: `${Math.random() * 80}%`,
  left: `${Math.random() * 80}%`,
});

const getRandomSize = () => `${40 + Math.random() * 100}px`;

const ExperiencesPage = () => {
  const [experiences, setExperiences] = useState([]);
  const [randomBubbles, setRandomBubbles] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    setExperiences(
      experiencesData.map((exp) => ({
        ...exp,
        position_style: getRandomPosition(),
      }))
    );

    const bubbleCount = experiencesData.length * 5;
    setRandomBubbles(
      Array.from({ length: bubbleCount }, (_, index) => ({
        id: `random-${index}`,
        position_style: getRandomPosition(),
        size: getRandomSize(),
        popped: false,
      }))
    );
  }, []);

  const handleBubbleClick = (id) => {
    setRandomBubbles((prevBubbles) =>
      prevBubbles.map((bubble) =>
        bubble.id === id ? { ...bubble, popped: true } : bubble
      )
    );
  };

  const handleSortExperiences = () => {
    setIsSorted(true);
  };

  return (
    <div className="experiences-page">
      <img src={bubbleImage} alt="bubble-title" className="bubble-image" />
      <h6>💥 POP IT! 💥</h6>
      <h4>Work</h4>
      <div className="experiences-container" onClick={handleSortExperiences}>
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className={`experience-item ${isSorted ? "sorted" : ""}`}
          >
            <div className="card-inner">
              <div className="card-front">
                <h5>{experience.position}</h5>
                <p>{experience.company}</p>
                <p>{experience.begin_date} - {experience.end_date}</p>
                <p>{experience.description}</p>
              </div>
              <div className="card-back">
                <img 
                  src={experience.logo} 
                  alt={`${experience.company} logo`}
                  className="company-logo" 
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <h4>Internship</h4>

      <div className="experiences-container">
        {intershipData.map((experience) => (
          <div key={experience.id} className="experience-item">
            <div className="card-inner">
              <div className="card-front">
                <h5>{experience.position}</h5>
                <p>{experience.company}</p>
                <p>{experience.begin_date} - {experience.end_date}</p>
                <p>{experience.description}</p>
              </div>
              <div className="card-back">
                <img
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  className="company-logo"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Random bubbles */}
      {randomBubbles.map((bubble) => (
        !bubble.popped && (
          <img
            key={bubble.id}
            src={randomBubble}
            alt="random-bubble"
            className="random-bubble"
            onClick={() => handleBubbleClick(bubble.id)}
            style={{
              ...bubble.position_style,
              position: "absolute",
              width: bubble.size,
              height: bubble.size,
              animation: `float ${2 + Math.random() * 3}s infinite alternate ease-in-out`,
              cursor: "pointer",
            }}
          />
        )
      ))}
    </div>
  );
};

export default ExperiencesPage;