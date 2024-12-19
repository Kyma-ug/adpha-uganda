import React, { useState, useEffect, useRef } from "react";

import { Link, useNavigate } from "react-router-dom";

import { IoMenu } from "react-icons/io5";



import "./Navbar.css";

import adphalogo from './adpha-logo-navbar.png';

function Navbar() {
  const navigate = useNavigate();


  const [activeLink, setActiveLink] = useState("home");
  const [barStyle, setBarStyle] = useState({ width: 0, left: 0 });
  const navRef = useRef(null);

  useEffect(() => {
    updateBarStyle();
    window.addEventListener("resize", updateBarStyle); // Recalculate on resize

    return () => window.removeEventListener("resize", updateBarStyle);
  }, [activeLink]);

  const updateBarStyle = () => {
    const activeElement = navRef.current.querySelector(`.nav-item.active`);
    if (activeElement) {
      const rect = activeElement.getBoundingClientRect();
      const navRect = navRef.current.getBoundingClientRect();
      setBarStyle({
        width: rect.width,
        left: rect.left - navRect.left,
      });
    }
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    const section = document.getElementById(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDonateClick = () => {
    // Redirect to the donate page
    window.location.href = "/donate";
  };


    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };



  return (
    <div className="navbar-container">
                  
        <a href="/" className="navbar-logo-container" onClick={() => navigate("/")}>
            <div className="adpha-navbar-logo">
                <img src={adphalogo} alt="Inclusive Advocacy" />
            </div>
            <div className="adpha-logo-text">
                <strong>ADPHA Uganda</strong>
                <p>Dedication . <span>Service</span> . Hope</p>
            </div>
            
        </a>

        
        <nav className="navbar"  ref={navRef}>
            <ul className="nav-links">
                <li
                className={`nav-item ${activeLink === "home" ? "active" : ""}`}
                onClick={() => handleLinkClick("home")}
                >
                  <Link to={"/"}>

                    Home
                  </Link>
                </li>
                
                
                <li
                className={`nav-item ${activeLink === "about" ? "active" : ""}`}
                onClick={() => handleLinkClick("about")}
                >
                  <Link to={"/about"}>
                    About Us
                  </Link>
                </li>
                <li
                className={`nav-item ${activeLink === "programs" ? "active" : ""}`}
                onClick={() => handleLinkClick("programs")}
                >
                  <Link to={"/getinvolved"}>
                    Programs
                  </Link>
                </li>
                <li
                className={`nav-item ${activeLink === "contact" ? "active" : ""}`}
                onClick={() => handleLinkClick("contact")}
                >
                  <Link to={"/contact"}>
                    Contact Us
                  </Link>
                
                </li>
            <div className="animated-bar" style={barStyle}></div>
            </ul>
            <div className="donate-button-wrapper">
                <button className="intro-cta primary">
                <Link to={"/"}>
                  Donate
                </Link>
                </button>
            </div>
            <button className="menu-button" onClick={toggleDrawer}>
              <IoMenu /> 

            </button>
        </nav>


        {/* Side Drawer */}
        <div className={`side-drawer ${isDrawerOpen ? "open" : ""}`}>
            <ul className="drawer-list">
                <li className="drawer-item">
                  <Link to={"/"}>
                    Home
                  </Link>
                </li>
                <li className="drawer-item">
                  <Link to={"/about"}>
                    About Us
                  </Link>
                </li>
                <li className="drawer-item">
                  <Link to={"/getinvolved"}>
                    Programs
                  </Link>
                </li>
                <li className="drawer-item">
                  <Link to={"/contact"}>
                    Contact Us
                  </Link>
                </li>
            </ul>
        </div>

        {/* Backdrop */}

        {isDrawerOpen && <div className="backdrop" onClick={closeDrawer}></div>}


    </div>
  );
}

export default Navbar;
