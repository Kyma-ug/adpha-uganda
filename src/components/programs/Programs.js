import React from "react";
import "./Programs.css";

const Programs = () => {
  const programs = [
    {
      title: "Health Awareness Campaigns",
      description:
        "We organize health awareness campaigns to educate the community about critical health issues.",
      image: "health-campaigns.jpg", // Replace with your local image paths
    },
    {
      title: "Support for Vulnerable Groups",
      description:
        "Our programs provide aid and resources to vulnerable groups in need.",
      image: "vulnerable-groups.jpg",
    },
    {
      title: "Community Empowerment",
      description:
        "Empowering communities through training, education, and sustainable development initiatives.",
      image: "community-empowerment.jpg",
    },
    {
      title: "HIV/AIDS Prevention",
      description:
        "We work to prevent the spread of HIV/AIDS through education and community outreach.",
      image: "hiv-prevention.jpg",
    },
  ];

  return (
    <div className="programs">
      <div className="header-section">
        <h2>Our Programs</h2>
        <p>
          Discover the initiatives that drive our mission to create a healthier,
          more empowered community.
        </p>
      </div>
      <div className="programs-grid">
        {programs.map((program, index) => (
          <div className="program-card" key={index}>
            <div
              className={`image-container ${
                index % 2 === 0 ? "right-box" : "left-box"
              }`}
              style={{ backgroundImage: `url(${program.image})` }}
            >
              <div className="highlight-box"></div>
            </div>
            <div className="text-content">
              <h3>{program.title}</h3>
              <p>{program.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
