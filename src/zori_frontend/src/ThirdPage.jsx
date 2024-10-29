import React, { useState, useCallback } from "react";
import "./assets/css/Thirdpage.css";
import swati from "./assets/members/swati.jpg";
import shweta from "./assets/members/shweta.jpg";
import bhawna from "./assets/members/bhawna.jpg";
import yogita from "./assets/members/yogita.jpg";
import damini from "./assets/members/damini.jpg";
import SlideInSection from "./Components/SlideIn";

const ThirdPage = () => {
  const members = [
    { img: shweta, name: "Shweta Joshi", role: "Founder" },
    { img: swati, name: "Swati Goyal", role: "Advisor" },
    { img: bhawna, name: "Bhawna Batra", role: "Growth Head" },
    { img: yogita, name: "Yogita", role: "Head of Product" },
    { img: damini, name: "Damini Singla", role: "Technical Lead" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % members.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? members.length - 1 : prevIndex - 1
    );
  };

  const getVisibleMembers = () => {
    const visibleMembers = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % members.length;
      visibleMembers.push(members[index]);
    }
    return visibleMembers;
  };

  return (
    <div className="third-page">
      <SlideInSection>
        <h1>MEET THE TEAM</h1>
      </SlideInSection>

      <SlideInSection>
        <div className="carousel-container">
          <button className="carousel-button left" onClick={prevSlide}>
            &#10094;
          </button>
          <div className="carousel">
            {getVisibleMembers().map((member, index) => (
              <div className="member" key={`${member.name}-${index}`}>
                <div className="pfp-wrapper">
                  <img src={member.img} alt={member.name} />
                </div>
                <div className="info-wrapper">
                  <h2>{member.name}</h2>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-button right" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </SlideInSection>
    </div>
  );
};

export default ThirdPage;
