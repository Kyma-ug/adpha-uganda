import React, { useEffect } from "react";
import "./AboutUs.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const AboutUs = () => {
  // Add scroll animations
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-us">



      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content animate-on-scroll">
          <h1>About Us</h1>
          <p>
            Empowering lives through inclusion, innovation, and advocacy. Learn more about
            who we are and what drives us.
          </p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="mission-vision">
        <div className="mission animate-on-scroll">
          <h2>Our Mission</h2>
          <p>
          To promote access to comprehensive HIV/TB services and sustainable livelihood by all people with disabilities.
          </p>
        </div>
        <div className="vision animate-on-scroll">
          <h2>Our Vision</h2>
          <p>
            Our vision is a society  where all persons with disabilities living with HIV or affected  by Tuberculosis(TB) have equal and timely access to adequate HIV and TB and other health related  information and services  without discrimination
          </p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact">
        <h2 className="animate-on-scroll">Our Impact</h2>
        <div className="impact-cards">
          <div className="card animate-on-scroll">
            <h3>15,000+ Lives Changed</h3>
            <p>
              We’ve empowered thousands through our education, health, and advocacy
              initiatives.
            </p>
          </div>
          <div className="card animate-on-scroll">
            <h3>120+ Programs Delivered</h3>
            <p>
              We work tirelessly to bring transformative programs to underserved communities.
            </p>
          </div>
          <div className="card animate-on-scroll">
            <h3>50+ Partnerships</h3>
            <p>
              Collaboration is at the heart of our work, enabling us to reach more people.
            </p>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default AboutUs;
