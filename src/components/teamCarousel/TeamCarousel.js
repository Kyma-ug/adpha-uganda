import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./TeamCarousel.css";


import quotesIcon from "./quotation.svg";

import AdphaChairman from "./CHAIRPERSON_ADPHA_BOARD.avif";



const teamMembers = [
  { name: "DICK BUGEMBE", title: "Chairman Board ADPHA", image: AdphaChairman, message: "Dick Bugembe joined ADPHA-UGANDA with the vision and drive to improve the Non-Governmental Organization and make its name synonymous with social change and human betterment. He has focused on developing the organization with great integrity." },
  { name: "WINNIE NAKAYIBA", title: "Chairman Board ADPHA", image: AdphaChairman, message: "A well-respected member of the ADPHA-UGANDA team and has played a vital role in shaping our vision and programs." },
  { name: "CATE WANYANA NALONGO", title: "Treasurer of the Board", image: AdphaChairman, message: "With us since our founding, Cate is one of our veteran team members who has seen ADPHA-UGANDA grow and make a measurable impact." },
  { name: "REHEMA NABBANJA", title: "Member of the Board", image: AdphaChairman, message: "A well-respected member of the ADPHA-UGANDA team, who has played a vital role in shaping our vision and programs, in making ADPHA-UGANDA a household name." },
  { name: "JAMES MPAGI", title: "Member of the Board", image: AdphaChairman, message: "A well-respected member of the ADPHA-UGANDA team, who has played a vital role in shaping our vision and programs, in making ADPHA-UGANDA a household name." },
  { name: "OLIVIA NAKANWAGI", title: "Member of the Board", image: AdphaChairman, message: "A well-respected member of the ADPHA-UGANDA team, who has played a vital role in shaping our vision and programs, in making ADPHA-UGANDA a household name." },
  { name: "EDWARD MUWANGA", title: "Member of the Board", image: AdphaChairman, message: "A well-respected member of the ADPHA-UGANDA team, who has played a vital role in shaping our vision and programs, in making ADPHA-UGANDA a household name." },
  { name: "RICHARD MUSISI", title: "Director", image: AdphaChairman, message: "An invaluable part of the ADPHA-UGANDA staff and leadership, Richard has witnessed the continued evolution of our programs from the start. He offers a unique skill-set that ensures undeniable impact." },
  { name: "JOSEPHINE NASSIWA", title: "Finance Officer", image: AdphaChairman, message: "Words cannot describe the role that Josephine has had in ensuring that ADPHA-UGANDA always stays on track. With Her continued dedication to her work, Josephine is our greatest asset in managing our finances." },
  { name: "NISSY NAMUYOMBA", title: "Programs  Officer", image: AdphaChairman, message: "Nissy Namuyomba, is the program officer at ADPHA Uganda and the chairperson of the Greater Masaka Association of Youth with Disabilities, She  joined the organization in 2021 through the Tweyambe project. She works with partners and allies to foster long-term relationships and successfully deliver ADPHA's programme strategy. Namuyomba, a skilled team player with a Bachelor's Degree in Business Administration and Management, is dedicated to creating an inclusive society for people with disabilities, HIV/AIDS, and TB. She excels in financial accountability and fostering a cohesive team spirit. Additionally she holds a certificate in Disability Justice Project Digital Storytelling Workshop, and a Certificate in International Youth Leader Training Seminar" },
  { name: "CAROL NAMATA", title: "Membership Development HIV ,TB &Malaria Intervention Officer", image: AdphaChairman, message: "NAMATA CAROL is an enthusiastic, self-motivated, reliable, responsible and hard-working person with a Bachelor’s Degree in Social Work and Social Administration. She is a complete team worker and adaptable to all challenging situations. She is able to work well both in a team environment as well as using own initiative. She is able to work well under pressure and adhere to strict deadlines. In her roles, Namata Carol ensures that ADPHA’s membership structures increase their capacity and strengthened through coordinating project implementation at cluster levels." },
  { name: "ALEX MUWONGE", title: "Project Officer", image: AdphaChairman, message: "Muwonge Alex is a professional counsellor with a strong background in disability rights and activism currently serving as a Project Officer at ADPHA-Uganda, showcasing his communication and interpersonal skills. Muwonge has effectively promoted disability inclusion in employment, education, and empowering individuals with disabilities, offering instructional and technical support for their meaningful participation in the fifth industrial revolution. His contributions to youth empowerment, job opportunities, and inclusive initiatives, including teaching at Sure Prospects Schools, demonstrate his commitment to research, documentation, and leadership. He hold a Bachelors Degree in Guidance and Counselling" },
  { name: "CHARLES PETER SSAGALA", title: "Project Assistant", image: AdphaChairman, message: "Mr. SSAGALA PETER CHARLES is a Professional and self-motivated hardworking gentle man with four years Experience in Computer Science and Information Technology, Good communication Skills, with excellent leadership skills. Very flexible with high levels of Commitment to work .Such a pleasant social individual with ability to execute assigned duties and responsibilities effectively with a fast learning mind to take on changes to achieve better results. He holds a diploma in Computer Science  and  Information Technology." },
  { name: "WILSON KUTAMBA", title: "Communications Officer", image: AdphaChairman, message: "Wilson Kutamba is an experienced journalist with a Mass Communication degree and five years of experience as a Daily Monitor correspondent in Masaka.  He's also taught journalism and media studies.  Kutamba is skilled in active listening, confident communication, giving constructive feedback, empathy, and respecting diverse perspectives.  As a reputation manager, he navigates media complexities and promotes strategic communications, making him a valuable asset to ADPHA Uganda." },
  { name: "Namiwanda Allena Patricia", title: "Sexual Reproductive Health Rights and Youth Development Officer (SRHR)", image: AdphaChairman, message: "Namiwanda Allena Patricia is a graduate from Makerere University with a bachelors in arts with Education (literature and English). She is the Sexual Reproductive Health Rights and Youth Development Officer (SRHR) at ADPHA Uganda, with experience in disability rights advocacy concerning Sexual Reproductive Health, confidence building, documentation of cases on SRH and making referrals of Persons with Disabilities to access SRH services." },
  { name: "DOROTHY NAKYANZI", title: "Administrative Assistant ", image: AdphaChairman, message: "Dorothy Nakyanzi is an administrative assistant at ADPHA Uganda, dedicated to supporting people with disabilities living with HIV and affected by TB.  She manages administrative tasks like scheduling, documentation, and communication to improve office efficiency.  Her strong organizational skills and compassionate nature help create an inclusive environment.  She holds a diploma in Social Work and Social Administration." },
  { name: "ELIZABETH NDAGANO", title: "Projects assistant", image: AdphaChairman, message: "Elizabeth Ndagaano .She is an assistant projects officer at ADPHA Uganda. Experienced in working with people with disabilities in various settings, advocating for disability rights regarding sexual reproductive health, building confidence of people with disabilities and supporting people with disabilities who are abused so as to get justice in courts of law." },
];





const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const getVisibleCards = () => (window.innerWidth <= 768 ? 2 : 3); 

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + getVisibleCards()) % teamMembers.length);
    }, 10000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="team-carousel">
      <motion.h2 className="carousel-title">Meet Our Team</motion.h2>
      <motion.div className="title-dash" />
      
      <div className="carousel-container"
        onMouseEnter={() => clearInterval(intervalRef.current)}
        onMouseLeave={() => {
          intervalRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + getVisibleCards()) % teamMembers.length);
          }, 10000);
        }}>
        <motion.div
          className="carousel-track"
          animate={{ x: `-${currentIndex * (100 / getVisibleCards())}%` }}
          transition={{ ease: "easeInOut", duration: 1.5 }}
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} className="carousel-card">
              <div className="card-face card-front">
                <img src={member.image} alt={member.name} className="team-image" />
                <h3 className="team-name">{member.name}</h3>
                <p className="team-title">{member.title}</p>
              </div>
              <div className="card-face card-back">
                <img src={quotesIcon} alt="" className="quotes-bg" />
                <p className="team-message">{member.message}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="carousel-dots">
        {Array.from({ length: Math.ceil(teamMembers.length / getVisibleCards()) }).map((_, index) => (
          <motion.div
            key={index}
            className={`dot ${index === Math.floor(currentIndex / getVisibleCards()) ? "active" : ""}`}
            animate={{ scale: index === Math.floor(currentIndex / getVisibleCards()) ? 1.3 : 1 }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamCarousel;
