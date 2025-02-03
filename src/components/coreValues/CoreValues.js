import React from "react";
import { motion } from "framer-motion";
import "./CoreValues.css";


import ADPHAEquityIcon from "./ADPHA_Equity_Icon.svg";
import ADPHAEmpathyIcon from "./ADPHA_Empathy_Icon.svg";
import ADPHALearningIcon from "./ADPHA_Learning.svg";
import ADPHAPartnershipIcon from "./ADPHA_Partnership.svg";
import ADPHATeamworkIcon from "./ADPHA_Teamwork.svg";
import ADPHATransparencyIcon from "./ADPHA_Transparency.svg";



const coreValues = [
  { title: "Equity & Inclusion", icon: ADPHAEquityIcon, description: "We ensure equal opportunities and accessibility for all individuals, regardless of their background or abilities." },
  { title: "Community & Teamwork", icon: ADPHATeamworkIcon, description: "We believe in collaboration, fostering strong partnerships and unity to create positive change." },
  { title: "Transparency & Accountability", icon: ADPHATransparencyIcon, description: "We uphold honesty and responsibility in all our actions, ensuring trust with stakeholders." },
  { title: "Respect & Empathy", icon: ADPHAEmpathyIcon, description: "We value dignity and understanding, fostering an environment of mutual care and support." },
  { title: "Learning & Openness", icon: ADPHALearningIcon, description: "We continuously evolve, embracing knowledge, feedback, and innovation for growth." },
  { title: "Partnership", icon: ADPHAPartnershipIcon, description: "We work collaboratively with individuals and organizations to maximize impact and sustainability." }
];

const CoreValues = () => {
  return (
    <section className="core-values">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Core Values
      </motion.h2>

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
            <img src={value.icon} alt={`${value.title} icon`} className="icon-wrapper" />
            <h3 className="value-title">{value.title}</h3>
            <p className="value-description">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
