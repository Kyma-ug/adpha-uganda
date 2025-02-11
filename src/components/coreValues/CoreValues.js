import React from "react";
import { motion } from "framer-motion";
import "./CoreValues.css";

import AdphaEquityIcon from "./equity-and-inclusion.svg";
import AdphaEmpathyIcon from "./empathy.svg";
import AdphaLearningIcon from "./learning.svg";
import AdphaPartnershipIcon from "./partnership.svg";
import AdphaTeamworkIcon from "./teamwork.svg";
import AdphaTransparencyIcon from "./accountability.svg";



const coreValues = [
  { title: "Equity & Inclusion", icon: AdphaEquityIcon, description: "We ensure equal opportunities and accessibility for all individuals, regardless of their background or abilities." },
  { title: "Community & Teamwork", icon: AdphaTeamworkIcon, description: "We believe in collaboration, fostering strong partnerships and unity to create positive change." },
  { title: "Transparency & Accountability", icon: AdphaTransparencyIcon, description: "We uphold honesty and responsibility in all our actions, ensuring trust with stakeholders." },
  { title: "Respect & Empathy", icon: AdphaEmpathyIcon, description: "We value dignity and understanding, fostering an environment of mutual care and support." },
  { title: "Learning & Openness", icon: AdphaLearningIcon, description: "We continuously evolve, embracing knowledge, feedback, and innovation for growth." },
  { title: "Partnership", icon: AdphaPartnershipIcon, description: "We work collaboratively with individuals and organizations to maximize impact and sustainability." }
];

const CoreValues = () => {
  return (
    <section className="core-values">
      <motion.h2
        className="section-title-core-values"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Core Values
      </motion.h2>

      <motion.div
        className="title-dash-core"
        initial={{  width: 0  }}
        whileInView={{ width: "100px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      />

      <div className="values-grid">
        {coreValues.map((value, index) => (
          <motion.div
            key={index}
            className="value-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* <value.icon className="icon-wrapper-core-value" /> */}
            <img src={value.icon} alt={`${value.title} icon`} className="icon-wrapper-core-value" />
            <h3 className="value-title-core-value">{value.title}</h3>
            <p className="value-description-core-value">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
