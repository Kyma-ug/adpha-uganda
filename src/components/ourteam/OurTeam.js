import React from "react";
import "./OurTeam.css";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Jane Doe",
      jobTitle: "Chief Executive Officer",
      description:
        "Jane is a visionary leader with over a decade of experience in organizational growth and management.",
      image: "jane.jpg", // Replace with your local images
    },
    {
      name: "John Smith",
      jobTitle: "Operations Manager",
      description:
        "John ensures the smooth execution of all operations, bringing innovation to every process.",
      image: "john.jpg",
    },
    {
      name: "Emily Johnson",
      jobTitle: "Creative Director",
      description:
        "Emily leads our creative efforts, ensuring everything we do stands out and inspires.",
      image: "emily.jpg",
    },
    {
      name: "Mark Brown",
      jobTitle: "Technical Lead",
      description:
        "Mark brings technical expertise and a passion for problem-solving to our team.",
      image: "mark.jpg",
    },
  ];

  return (
    <div className="our-team">
      <div className="header-section">
        <h2>Our Team</h2>
        <p>
          Meet the passionate individuals who drive our mission and make our
          work impactful.
        </p>
      </div>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <div
              className="image-container"
              style={{
                backgroundImage: `url(${member.image})`,
              }}
            ></div>
            <h3>{member.name}</h3>
            <p className="job-title">{member.jobTitle}</p>
            <p className="description">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
