import React from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Experienced Team",
      description:
        "Our team comprises highly skilled professionals committed to delivering excellence.",
      icon: "🌟",
    },
    {
      title: "Innovative Solutions",
      description:
        "We offer creative and forward-thinking approaches to meet your needs.",
      icon: "💡",
    },
    {
      title: "Customer Focused",
      description:
        "We prioritize your satisfaction and strive to exceed your expectations.",
      icon: "🤝",
    },
    {
      title: "Proven Impact",
      description:
        "Our track record speaks volumes about our ability to create lasting change.",
      icon: "📈",
    },
  ];

  return (
    <div className="why-choose-us">
      <div className="header-section">
        <h2>Why Choose Us?</h2>
        <p>
          Here’s why we stand out and continue to make a difference in our
          community.
        </p>
      </div>
      <div className="reasons-grid">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="reason-card"
            style={{
              animationDelay: `${index * 0.2}s`,
            }}
          >
            <div className="icon">{reason.icon}</div>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
