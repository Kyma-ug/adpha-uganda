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
  { name: "NISSY NAMUYOMBA", title: "Programs  Officer", image: AdphaChairman, message: "Nissy Namuyomba is the program officer at ADPHA Uganda and chairperson of the Greater Masaka Association of Youth with Disabilities.  Joining ADPHA in 2021, she works with partners to deliver the organization's program strategy.  With a Business Administration and Management degree, she's dedicated to inclusivity for people with disabilities, HIV/AIDS, and TB.  She's skilled in financial accountability and teamwork, and also holds certificates in Disability Justice Project Digital Storytelling and International Youth Leader Training." },
  { name: "CAROL NAMATA", title: "Namata Carol is ADPHA's Membership Development HIV, TB, & Malaria Intervention Officer.  With a Social Work and Social Administration degree, she's enthusiastic, self-motivated, reliable, and a team player.  She works well under pressure and meets deadlines.  Her role focuses on strengthening ADPHA's membership capacity by coordinating project implementation at the cluster level." },
  { name: "ALEX MUWONGE", title: "Project Officer", image: AdphaChairman, message: "Muwonge Alex is a professional counselor and disability rights activist working as a Project Officer at ADPHA-Uganda. He promotes disability inclusion in employment and education, empowering individuals with disabilities to participate in the fifth industrial revolution.  His work includes youth empowerment, creating job opportunities, and teaching at Sure Prospects Schools. He holds a Bachelor's Degree in Guidance and Counselling." },
  { name: "CHARLES PETER SSAGALA", title: "Project Assistant", image: AdphaChairman, message: "Ssagala Peter Charles is a professional and self-motivated individual with four years of experience in Computer Science and IT. He has good communication and leadership skills, is flexible and committed to his work. He's a pleasant and social person who can effectively execute duties and learn quickly. He holds a diploma in Computer Science and IT." },
  { name: "WILSON KUTAMBA", title: "Communications Officer", image: AdphaChairman, message: "Wilson Kutamba is an experienced journalist and media studies instructor with a Mass Communication degree and five years at the Daily Monitor.  He possesses strong communication and interpersonal skills, including active listening and empathy.  His experience as a reputation manager makes him a valuable asset to ADPHA Uganda." },
  { name: "Namiwanda Allena Patricia", title: "Sexual Reproductive Health Rights and Youth Development Officer (SRHR)", image: AdphaChairman, message: "Namiwanda Allena Patricia, a Makerere University graduate with a Bachelor of Arts in Education (Literature and English), is ADPHA Uganda's Sexual Reproductive Health Rights and Youth Development Officer.  She has experience in disability rights advocacy, specifically concerning sexual reproductive health, confidence building, documenting SRH cases, and referring persons with disabilities to SRH services." },
  { name: "DOROTHY NAKYANZI", title: "Administrative Assistant ", image: AdphaChairman, message: "Dorothy Nakyanzi is an administrative assistant at ADPHA Uganda, supporting people with disabilities affected by HIV and TB.  She handles administrative tasks, contributing to office efficiency and an inclusive environment.  She has a diploma in Social Work and Social Administration." },
  { name: "ELIZABETH NDAGANO", title: "Projects assistant", image: AdphaChairman, message: "Elizabeth Ndagaano is an assistant projects officer at ADPHA Uganda. She has experience working with people with disabilities, advocating for their sexual reproductive health rights, building their confidence, and supporting abuse survivors in seeking justice." },
];





// const TeamCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const intervalRef = useRef(null);

//   const getVisibleCards = () => (window.innerWidth <= 768 ? 2 : 3); 

//   useEffect(() => {
//     intervalRef.current = setInterval(() => {
//       setCurrentIndex((prev) => (prev + getVisibleCards()) % teamMembers.length);
//     }, 10000);
//     return () => clearInterval(intervalRef.current);
//   }, []);

//   return (
//     <section className="team-carousel">
//       <motion.h2 className="carousel-title">Meet Our Team</motion.h2>
//       <motion.div className="title-dash" />
      
//       <div className="carousel-container"
//         onMouseEnter={() => clearInterval(intervalRef.current)}
//         onMouseLeave={() => {
//           intervalRef.current = setInterval(() => {
//             setCurrentIndex((prev) => (prev + getVisibleCards()) % teamMembers.length);
//           }, 10000);
//         }}>
//         <motion.div
//           className="carousel-track"
//           animate={{ x: `-${currentIndex * (100 / getVisibleCards())}%` }}
//           transition={{ ease: "easeInOut", duration: 1.5 }}
//         >
//           {teamMembers.map((member, index) => (
//             <motion.div key={index} className="carousel-card">
//               <div className="card-face card-front">
//                 <img src={member.image} alt={member.name} className="team-image" />
//                 <h3 className="team-name">{member.name}</h3>
//                 <p className="team-title">{member.title}</p>
//               </div>
//               <div className="card-face card-back">
//                 <img src={quotesIcon} alt="" className="quotes-bg" />
//                 <p className="team-message">{member.message}</p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       <div className="carousel-dots">
//         {Array.from({ length: Math.ceil(teamMembers.length / getVisibleCards()) }).map((_, index) => (
//           <motion.div
//             key={index}
//             className={`dot ${index === Math.floor(currentIndex / getVisibleCards()) ? "active" : ""}`}
//             animate={{ scale: index === Math.floor(currentIndex / getVisibleCards()) ? 1.3 : 1 }}
//             transition={{ duration: 0.5 }}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TeamCarousel;




const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const carouselRef = useRef(null); // Ref for the carousel container

  const getVisibleCards = () => window.innerWidth <= 768 ? 1 : 3; // Display 1 card on mobile

  useEffect(() => {
    const startAutoscroll = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + getVisibleCards()) % teamMembers.length);
      }, 10000);
    };

    startAutoscroll(); // Start autoscroll initially

    return () => clearInterval(intervalRef.current); // Clear on unmount
  }, [teamMembers]);


  const handleScroll = (event) => {
    clearInterval(intervalRef.current); // Stop autoscroll on manual scroll
    // You might want to calculate the new index based on scroll position here if needed.
    // For basic scroll, just let the user scroll and autoscroll will resume after a delay.
    setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + getVisibleCards()) % teamMembers.length);
      }, 10000);
    }, 3000); // Restart autoscroll after 3 seconds of inactivity

  };

  const cardWidth = window.innerWidth <= 768 ? window.innerWidth : (window.innerWidth / 3) - 16; // Calculate card width dynamically

  return (
    <section className="team-carousel">
      <motion.h2 className="carousel-title">Meet Our Team</motion.h2>
      <motion.div className="title-dash" />

      <div
        className="carousel-container"
        ref={carouselRef}
        onMouseEnter={() => clearInterval(intervalRef.current)}
        onMouseLeave={() => {
          intervalRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + getVisibleCards()) % teamMembers.length);
          }, 10000);
        }}
        onWheel={handleScroll} // Use onWheel for better cross-browser support
        style={{ overflowX: 'auto', scrollSnapType: 'x mandatory' }} // Enable horizontal scrolling and snapping
      >
        <motion.div
          className="carousel-track"
          animate={{ x: `-${currentIndex * cardWidth}px` }} // Use pixel-based animation
          transition={{ ease: "easeInOut", duration: 1.5 }}
          style={{ display: 'flex', gap: '1rem' }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="carousel-card"
              style={{ width: cardWidth, scrollSnapAlign: 'start', flexShrink: 0 }} // Set card width and enable scroll snapping
            >
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