import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import "./Navbar.css";
import adphalogo from "./adpha-logo.svg";
import ContactHeader from "../contactHeader/ContactHeader";
import DonateButtonNav from "../donateButtonNav/DonateButtonNav";
import AdphaLogNav from "../adphaLogNav/AdphaLogNav";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  const [barStyle, setBarStyle] = useState({ width: 0, left: 0 });
  const navRef = useRef(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDrawerDropDownOpen, setIsDrawerDropDownOpen] = useState(false);




  useEffect(() => {
    const path = location.pathname;
    setActiveLink(path === "/" ? "home" : path.slice(1));

    // Delay updateBarStyle slightly to ensure layout is complete
    setTimeout(updateBarStyle, 50); // 50ms delay (adjust as needed)

    window.addEventListener("resize", updateBarStyle);
    return () => window.removeEventListener("resize", updateBarStyle);
}, [location]);

  // Update animated bar position
  const updateBarStyle = () => {
    const activeElement = navRef.current?.querySelector(`.nav-item.active`);
    if (activeElement) {
      const rect = activeElement.getBoundingClientRect();
      const navRect = navRef.current.getBoundingClientRect();
      setBarStyle({
        width: rect.width,
        left: rect.left - navRect.left,
      });
    }
  };

  // Handle drawer toggle
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Close drawer
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  // Handle dropdown toggle
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Handle drawer dropdown toggle
  const toggleDrawerDropdown = () => {
    setIsDrawerDropDownOpen(!isDrawerDropDownOpen);
  };


  

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.closest(".resources-toggle") &&
        !e.target.closest(".drawer-dropdown")
      ) {
        setIsDrawerDropDownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);



  // my function that checks screen width
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); 

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); // Clean up
  }, []);


  return (
    <div className="navbar-container">
      {/* Logo */}
      <a href="/" className="navbar-logo-container" onClick={() => navigate("/")}>
        <div className="adpha-navbar-logo">
         
          <AdphaLogNav />

          
        </div>
        
      </a>

      {/* Navbar */}

      <div>
        <ContactHeader />
        <nav className="navbar" ref={navRef}>
          
          <ul className="nav-links">
            {[
              { path: "/", label: "Home", id: "home" },
              { path: "/about", label: "About Us", id: "about" },
              { path: "/programs", label: "Programs", id: "programs" },
              { path: "/contact", label: "Contact Us", id: "contact" },
            ].map((link) => (
              <li
                key={link.id}
                className={`nav-item ${activeLink === link.id ? "active" : ""}`}
                onClick={() => setActiveLink(link.id)}
              >
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
            <li
              className={`nav-item ${activeLink === "resources" ? "active" : ""}`}
              onMouseEnter={toggleDropdown}
              onMouseLeave={closeDropdown}
            >
              Resources
              <span className="dropdown-icon">
                <IoIosArrowDown />
              </span>
              <ul className={`dropdown-menu ${isDropdownOpen ? "open" : ""}`}>
                {["Reports", "Blog", "Gallery"].map((item) => (
                  <Link
                    to={`/${item.toLowerCase()}`} 
                    // className="dropdown-link" 
                    onClick={() => setActiveLink("resources")} 
                  >
                    <li
                      key={item}
                      className="dropdown-item"                    
                    >
                        {item}       
                    </li>
                  </Link>
                ))}
              </ul>
            </li>
            <div className="animated-bar" style={barStyle}></div>
          </ul>

          <button className="menu-button" onClick={toggleDrawer} aria-label="Open menu">
            <IoMenu />
          </button>
          

          {!isMobile && <DonateButtonNav />}
        </nav>

      </div>
      

      {/* Side Drawer */}
      <div className={`side-drawer ${isDrawerOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <div className="drawer-logo">
            <img
              src={adphalogo}
              alt="Association of Persons with Disabilities Living with HIV (ADPHA) Uganda"
            />


          </div>
          <button className="close-button-drawer" onClick={closeDrawer} aria-label="Close menu">
            <IoClose />
          </button>
        </div>
        <ul className="drawer-list">
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About Us" },
            { path: "/programs", label: "Programs" },
            { path: "/contact", label: "Contact Us" },
          ].map((link) => (
            <li key={link.label} className="drawer-item">
              <Link to={link.path} onClick={closeDrawer}>
                {link.label}
              </Link>
            </li>
          ))}
          <li className="drawer-item">
            <span
              onClick={toggleDrawerDropdown}
              className="resources-toggle"
              aria-expanded={isDrawerDropDownOpen}
            >
              Resources
              <span className={`drawer-icon ${isDrawerDropDownOpen ? "flipped" : ""}`}>
                <IoIosArrowDown />
              </span>
            </span>
            <ul className={`drawer-dropdown ${isDrawerDropDownOpen ? "open" : ""}`}>
              {["Reports", "Blog", "Gallery"].map((item) => (
                <Link to={`/${item.toLowerCase()}`} key={item} onClick={closeDrawer}>
                  <li className="dropdown-item drawer-dot-margin">
                    {item}
                  </li>
                </Link>
              ))}
            </ul>
          </li>
        </ul>
      </div>

      {/* Backdrop */}
      {isDrawerOpen && <div className="backdrop" onClick={closeDrawer}></div>}
    </div>
  );
}

export default Navbar;

