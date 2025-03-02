import React, { useState, useEffect, useRef } from "react";

import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


import "./TeamCarousel.css";

import quotesIcon from "./quotation.svg";
import AdphaChairman from "./CHAIRPERSON_ADPHA_BOARD.avif";
import alex from "./ALEX.avif";
import allenah from "./Allenah.avif";
import mpagi from "./mpagi.avif";
import caro from './Caro.avif';
import charles from './Charles.avif';
import dorah from './Dorah.avif';
import josephine from './Josephine_Nassiwa.avif'
import liz from './liz.avif';
import nissy from './Nissy Namuyomba.avif';
import richard from './Richard Musisi.avif';
import secretary from './SECRETARY BOARD MEMBER.avif';
import treasurer from "./TREASURER ADPHA UGANDA.avif";
import vice from './VICE CHAIRPERSON ADPHA UGANDA_.avif';
import wilson from "./Wilson Kutamba_edited.avif";
import edward from './edward.avif';
import olivia from './olivia.avif';


const teamMembers = [
  {  name: "DICK BUGEMBE", title: "Chairman Board ADPHA", image: AdphaChairman, message: "Dick Bugembe joined ADPHA-UGANDA with the vision and drive to improve the Non-Governmental Organization and make its name synonymous with social change and human betterment. He has focused on developing the organization with great integrity." },
  {  name: "WINNIE NAKAYIBA", title: "Vice Chairperson of the Board", image: vice, message: "A well-respected member of the ADPHA-UGANDA team and has played a vital role in shaping our vision and programs." },
  {  name: "CATE WANYANA NALONGO", title: "Treasurer of the Board", image: treasurer, message: "With us since our founding, Cate is one of our veteran team members who has seen ADPHA-UGANDA grow and make a measurable impact." },
  {  name: "REHEMA NABBANJA", title: "Member of the Board", image: secretary, message: "A well-respected member of the ADPHA-UGANDA team, who has played a vital role in shaping our vision and programs, in making ADPHA-UGANDA a household name." },
  { name: "JAMES MPAGI", title: "Member of the Board", image: mpagi, message: "A well-respected member of the ADPHA-UGANDA team, who has played a vital role in shaping our vision and programs, in making ADPHA-UGANDA a household name." },
  {  name: "OLIVIA NAKANWAGI", title: "Member of the Board", image: olivia, message: "A well-respected member of the ADPHA-UGANDA team, who has played a vital role in shaping our vision and programs, in making ADPHA-UGANDA a household name." },
  {  name: "EDWARD MUWANGA", title: "Member of the Board", image: edward, message: "A well-respected member of the ADPHA-UGANDA team, who has played a vital role in shaping our vision and programs, in making ADPHA-UGANDA a household name." },
  {  name: "RICHARD MUSISI", title: "Director", image: richard, message: "An invaluable part of the ADPHA-UGANDA staff and leadership, Richard has witnessed the continued evolution of our programs from the start. He offers a unique skill-set that ensures undeniable impact." },
  {   name: "JOSEPHINE NASSIWA", title: "Finance Officer", image: josephine, message: "Words cannot describe the role that Josephine has had in ensuring that ADPHA-UGANDA always stays on track. With Her continued dedication to her work, Josephine is our greatest asset in managing our finances." },
  {  name: "NISSY NAMUYOMBA", title: "Programs  Officer", image: nissy, message: "Nissy Namuyomba is the program officer at ADPHA Uganda and chairperson of the Greater Masaka Association of Youth with Disabilities.  Joining ADPHA in 2021, she works with partners to deliver the organization's program strategy.  With a Business Administration and Management degree, she's dedicated to inclusivity for people with disabilities, HIV/AIDS, and TB.  She's skilled in financial accountability and teamwork, and also holds certificates in Disability Justice Project Digital Storytelling and International Youth Leader Training." },
  {  name: "CAROL NAMATA", title: "Membership Development HIV ,TB &Malaria Intervention Officer", image: caro, message:  "Namata Carol is ADPHA's Membership Development HIV, TB, & Malaria Intervention Officer.  With a Social Work and Social Administration degree, she's enthusiastic, self-motivated, reliable, and a team player.  She works well under pressure and meets deadlines.  Her role focuses on strengthening ADPHA's membership capacity by coordinating project implementation at the cluster level." },
  {  name: "ALEX MUWONGE", title: "Project Officer", image: alex, message: "Muwonge Alex is a professional counselor and disability rights activist working as a Project Officer at ADPHA-Uganda. He promotes disability inclusion in employment and education, empowering individuals with disabilities to participate in the fifth industrial revolution.  His work includes youth empowerment, creating job opportunities, and teaching at Sure Prospects Schools. He holds a Bachelor's Degree in Guidance and Counselling." },
  {  name: "CHARLES PETER SSAGALA", title: "Project Assistant", image: charles, message: "Ssagala Peter Charles is a professional and self-motivated individual with four years of experience in Computer Science and IT. He has good communication and leadership skills, is flexible and committed to his work. He's a pleasant and social person who can effectively execute duties and learn quickly. He holds a diploma in Computer Science and IT." },
  {  name: "WILSON KUTAMBA", title: "Communications Officer", image: wilson, message: "Wilson Kutamba is an experienced journalist and media studies instructor with a Mass Communication degree and five years at the Daily Monitor.  He possesses strong communication and interpersonal skills, including active listening and empathy.  His experience as a reputation manager makes him a valuable asset to ADPHA Uganda." },
  {  name: "Namiwanda Allena Patricia", title: "Sexual Reproductive Health Rights and Youth Development Officer (SRHR)", image: allenah, message: "Namiwanda Allena Patricia, a Makerere University graduate with a Bachelor of Arts in Education (Literature and English), is ADPHA Uganda's Sexual Reproductive Health Rights and Youth Development Officer.  She has experience in disability rights advocacy, specifically concerning sexual reproductive health, confidence building, documenting SRH cases, and referring persons with disabilities to SRH services." },
  {  name: "DOROTHY NAKYANZI", title: "Administrative Assistant ", image: dorah, message: "Dorothy Nakyanzi is an administrative assistant at ADPHA Uganda, supporting people with disabilities affected by HIV and TB.  She handles administrative tasks, contributing to office efficiency and an inclusive environment.  She has a diploma in Social Work and Social Administration." },
  {  name: "ELIZABETH NDAGANO", title: "Projects assistant", image: liz, message: "Elizabeth Ndagaano is an assistant projects officer at ADPHA Uganda. She has experience working with people with disabilities, advocating for their sexual reproductive health rights, building their confidence, and supporting abuse survivors in seeking justice." },
];





const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCard, setActiveCard] = useState(null);
  const intervalRef = useRef(null);

  const getVisibleCards = () => (window.innerWidth <= 768 ? 1 : 3);
  const cardWidth = window.innerWidth <= 768 ? window.innerWidth * 0.8 : window.innerWidth / 3.5;
  const cardsPerPage = getVisibleCards();

  // Auto-scroll logic
  useEffect(() => {
    const startAutoscroll = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + cardsPerPage) % teamMembers.length);
      }, 15000);
    };

    startAutoscroll();
    return () => clearInterval(intervalRef.current);
  }, [cardsPerPage]);

  // Handle manual navigation
  const handlePrev = () => {
    clearInterval(intervalRef.current);
    setCurrentIndex((prev) => (prev - cardsPerPage + teamMembers.length) % teamMembers.length);
    restartAutoscroll();
  };

  const handleNext = () => {
    clearInterval(intervalRef.current);
    setCurrentIndex((prev) => (prev + cardsPerPage) % teamMembers.length);
    restartAutoscroll();
  };

  const restartAutoscroll = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + cardsPerPage) % teamMembers.length);
    }, 10000);
  };

  // Handle card hover/click
  const handleCardHover = (index) => {
    setActiveCard(index);
  };

  const handleCardLeave = () => {
    setActiveCard(null);
  };

  return (
    <section className="team-carousel">
      <motion.h2
        className="carousel-title-team"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        // animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Meet Our Team
      </motion.h2>
      <motion.div
        className="title-dash-team"
        initial={{  width: 0  }}
        whileInView={{ width: "100px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      />

      <div className="carousel-container-team">
        <div className="carousel-track-team" style={{ transform: `translateX(-${currentIndex * (cardWidth + 16)}px)` }}>
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className={`carousel-card-team ${activeCard === index ? "flipping-team" : ""}`}
              style={{ width: cardWidth }}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={handleCardLeave}
              onClick={() => handleCardHover(index)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="card-face-team card-fron-team">
                <div className="image-container-carousel-team">
                  <img src={member.image} alt={member.name} className="team-image" />
                </div>
                <motion.h3 className="team-name">{member.name}</motion.h3>
                <motion.p className="team-title">{member.title}</motion.p>
              </div>
              <div className="card-face-team card-back-team">
                <img src={quotesIcon} alt="" className="quotes-bg-team" />
                <motion.p
                  className="team-message"
                  initial={{ opacity: 0, y: 20 }}
                  animate={activeCard === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  {member.message}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="carousel-nav-team">
          <FaChevronLeft className="carousel-icon-team prev-team" onClick={handlePrev} />
          <FaChevronRight className="carousel-icon-team next-team" onClick={handleNext} />
        </div>
      </div>

      <div className="carousel-dots-team">
        {Array.from({ length: Math.ceil(teamMembers.length / cardsPerPage) }).map((_, index) => (
          <motion.div
            key={index}
            className={`dot-team ${index === Math.floor(currentIndex / cardsPerPage) ? "active-team" : ""}`}
            animate={{ scale: index === Math.floor(currentIndex / cardsPerPage) ? 1.3 : 1 }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamCarousel;

































// const TeamCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isFlipping, setIsFlipping] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const intervalRef = useRef(null);
//   const controls = useAnimation();
//   const carouselRef = useRef(null);

//   const getVisibleCards = () => (window.innerWidth <= 768 ? 1 : 3);
//   const cardWidth = window.innerWidth <= 768 ? window.innerWidth * 0.8 : window.innerWidth / 3.5;
//   const cardsPerPage = getVisibleCards();

//   // Auto-scroll logic
//   useEffect(() => {
//     const startAutoscroll = () => {
//       intervalRef.current = setInterval(() => {
//         setCurrentIndex((prev) => (prev + cardsPerPage) % teamMembers.length);
//       }, 10000);
//     };

//     startAutoscroll();
//     return () => clearInterval(intervalRef.current);
//   }, [cardsPerPage]);

//   // Handle manual navigation
//   const handlePrev = () => {
//     clearInterval(intervalRef.current);
//     setCurrentIndex((prev) => (prev - cardsPerPage + teamMembers.length) % teamMembers.length);
//     restartAutoscroll();
//   };

//   const handleNext = () => {
//     clearInterval(intervalRef.current);
//     setCurrentIndex((prev) => (prev + cardsPerPage) % teamMembers.length);
//     restartAutoscroll();
//   };

//   const restartAutoscroll = () => {
//     clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       setCurrentIndex((prev) => (prev + cardsPerPage) % teamMembers.length);
//     }, 10000);
//   };

//   // Handle card click (flip animation)
//   const handleCardClick = (index) => {
//     if (!isFlipping) {
//       setIsFlipping(true);
//       clearInterval(intervalRef.current);

//       setTimeout(() => {
//         setIsFlipping(false);
//         restartAutoscroll();
//       }, 10000); // Pause autoscroll for 10 seconds
//     }
//   };

//   // Swipe functionality
//   const handleSwipe = (event) => {
//     const swipeThreshold = 50;
//     const touch = event.touches[0];
//     const startX = touch.clientX;

//     const handleTouchMove = (e) => {
//       const moveX = e.touches[0].clientX;
//       const deltaX = moveX - startX;

//       if (deltaX > swipeThreshold) {
//         handlePrev();
//       } else if (deltaX < -swipeThreshold) {
//         handleNext();
//       }
//     };

//     carouselRef.current.addEventListener("touchmove", handleTouchMove);
//     carouselRef.current.addEventListener("touchend", () => {
//       carouselRef.current.removeEventListener("touchmove", handleTouchMove);
//     });
//   };

//   return (
//     <section className="team-carousel" ref={carouselRef} onTouchStart={handleSwipe}>
//       <motion.h2
//         className="carousel-title"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         Meet Our Team
//       </motion.h2>
//       <motion.div
//         className="title-dash"
//         initial={{ scaleX: 0 }}
//         animate={{ scaleX: 1 }}
//         transition={{ duration: 0.8, delay: 0.3 }}
//       />

//       <div className="carousel-container">
//         <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * (cardWidth + 16)}px)` }}>
//           {teamMembers.map((member, index) => (
//             <motion.div
//               key={index}
//               className={`carousel-card ${isFlipping ? "flipping" : ""}`}
//               style={{ width: cardWidth }}
//               onClick={() => handleCardClick(index)}
//               onHoverStart={() => setIsHovered(true)}
//               onHoverEnd={() => setIsHovered(false)}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.1 }}
//             >
//               <div className="card-face card-front">
//                 <img src={member.image} alt={member.name} className="team-image" />
//                 <motion.h3 className="team-name">{member.name}</motion.h3>
//                 <motion.p className="team-title">{member.title}</motion.p>
//               </div>
//               <div className="card-face card-back">
//                 <img src={quotesIcon} alt="" className="quotes-bg" />
//                 <motion.p
//                   className="team-message"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   {member.message}
//                 </motion.p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <div className="carousel-nav">
//           <FaChevronLeft className="carousel-icon prev" onClick={handlePrev} />
//           <FaChevronRight className="carousel-icon next" onClick={handleNext} />
//         </div>
//       </div>

//       <div className="carousel-dots">
//         {Array.from({ length: Math.ceil(teamMembers.length / cardsPerPage) }).map((_, index) => (
//           <motion.div
//             key={index}
//             className={`dot ${index === Math.floor(currentIndex / cardsPerPage) ? "active" : ""}`}
//             animate={{ scale: index === Math.floor(currentIndex / cardsPerPage) ? 1.3 : 1 }}
//             transition={{ duration: 0.5 }}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TeamCarousel;