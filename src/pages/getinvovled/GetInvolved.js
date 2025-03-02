import React, { useEffect } from "react";
import "./GetInvolved.css";
import attendevent from './attendevent.avif';
import fundraise from './fundraise.avif';
import internship from './internship.avif';
import partnerwithus from './partnerwithus.avif';
import raiseawareness from './raiseawareness.avif';
import spreadtheword from './spreadtheword.avif';
import volunteer from './volunteer.avif';
import donation from './donation.avif';

const GetInvolved = () => {
  // Scroll Animation
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8) {
          el.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const involvementOptions = [
    {
      id: 1,
      title: "Make a  Donation",
      description:
        "We believe the best way for our initiatives to be successful is for the community to become actively involved. If you are looking for a fulfilling means in which to be a part of our efforts, then it’s time to Make a Donation and join ADPHA-UGANDA efforts.",
      image: donation, 
    },
    {
      id: 2,
      title: "Partner With Us",
      description:
        "Become an Active Partner <br>Do you feel called to be a part of our work and support one of our programs? If you’ve decided to be part, rest assured that your time spent contributing to the work of ADPHA-UGANDA will be felt by the people that need it most.",
      image: partnerwithus,
    },
    {
      id: 3,
      title: "Volunteer",
      description:
        "Join Our Efforts <br>ADPHA-UGANDA depends on your commitment to Volunteer in order to promote real change on the ground and in local communities. A volunteer placement program is already well established and this program allows persons from our global community to experience ADPHA-UGANDA and the Ugandan lifestyle.  If it weren’t for the active participation of countless individuals, ADPHA-UGANDA would be far more limited.",
      image: volunteer,
    },
    {
      id: 4,
      title: "Spread The Word",
      description:
        "Every Contribution Counts <br>It is absolutely true that giving back and being a part of ADPHA-UGANDA’s work will not only improve the lives of so many but bring you a sense of unparalleled satisfaction. Making our world a better place starts with small steps that evolve into profound transformation.",
      image: spreadtheword,
    },
    {
      id: 5,
      title: "Attend an Event",
      description:
        "Become an Active Member<br>Do you feel called to be a part of our work and support one of our teams? If you’ve decided to Attend an Event, rest assured that your time spent contributing to the work of ADPHA-UGANDA will be felt by the people that need it most.",
      image: attendevent,
    },
    
    {
      id: 6,
      title: "Fundraise",
      description:
        "You Can Make a Difference<br>Wondering how to give back and be a part of a transformative program that helps so many people? It’s always the right time to Fundraise and become an invaluable part of our success.",
      image: fundraise,
    },
    {
      id: 7,
      title: "Raise Awareness",
      description:
        "Create an Impact<br>Our organization always appreciates the generosity and involvement of people like you, with your time and commitment going towards making ADPHA-UGANDA an even better Non-Governmental Organization",
      image: raiseawareness,
    },
    {
      id: 8,
      title: "Internship Placement",
      description:
        "Career Booster<br>Do you feel called to be a part of our work and support one of our teams? If you’ve decided to internship with us, rest assured that your time spent contributing to the work of ADPHA-UGANDA will be felt by the people that need it most. This is also a great activity to mention on your CV. No matter what field you work in and if it is similar to the  work you did or not, internship shows that you are passionate, proactive and willing to dedicate your time to an important cause. All of these are qualities that employers value highly and it will definitely be beneficial when you apply for a new job in the future.",
      image: internship,
    },
  ];

  return (
    <div className="get-involved-page">
      <header className="page-header">
        <h1>How You Can Get Involved</h1>
        <p>
          Explore the ways you can make a difference in the lives of people and
          communities we serve.
        </p>
      </header>

      <div className="involvement-options">
        {involvementOptions.map((option) => (
          <div className="involvement-card animate" key={option.id}>
            <img
              src={option.image}
              alt={option.title}
              className="involvement-image"
            />
            <div className="involvement-content">
              <h2 className="involvement-title">{option.title}</h2>
              {/* <div dangerouslySetInnerHTML={{ __html: option.description }} /> */}
              <p dangerouslySetInnerHTML={{ __html: option.description }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetInvolved;
