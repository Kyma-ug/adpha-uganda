import React, { useState } from "react";
import { FaSearch, FaFont, FaExpand, FaCompress, FaEye, FaAdjust, FaUnderline, FaSync, FaBolt, FaHeading, FaTimes, FaCog, FaAccessibleIcon } from "react-icons/fa";
import "./Accessibility.css";

function Accessibility() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [fontSize, setFontSize] = useState(16);
  const [isDarkContrast, setIsDarkContrast] = useState(false);
  const [isBrightContrast, setIsBrightContrast] = useState(false);
  const [isReadableFont, setIsReadableFont] = useState(false);
  const [isUnderlineLinks, setIsUnderlineLinks] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);
  const resetSettings = () => {
    setZoomLevel(1);
    setFontSize(16);
    setIsDarkContrast(false);
    setIsBrightContrast(false);
    setIsReadableFont(false);
    setIsUnderlineLinks(false);
    document.body.style.zoom = "1";
    document.body.style.fontSize = "16px";
    document.body.classList.remove("dark-contrast", "bright-contrast", "readable-font", "underline-links");
  };

  const applySettings = () => {
    document.body.style.zoom = zoomLevel;
    document.body.style.fontSize = `${fontSize}px`;
    document.body.classList.toggle("dark-contrast", isDarkContrast);
    document.body.classList.toggle("bright-contrast", isBrightContrast);
    document.body.classList.toggle("readable-font", isReadableFont);
    document.body.classList.toggle("underline-links", isUnderlineLinks);
  };

  React.useEffect(() => applySettings(), [zoomLevel, fontSize, isDarkContrast, isBrightContrast, isReadableFont, isUnderlineLinks]);

  return (
    <>
      {/* Floating Button */}
      <button className="floating-button" onClick={toggleDrawer}>
      <FaAccessibleIcon />
      </button>

      {/* Accessibility Drawer */}
      {isDrawerOpen && (
        <>
          <div className="accessibility-drawer">
            <button className="close-button" onClick={closeDrawer}>
              <FaTimes />
            </button>
            <h2>Accessibility Options</h2>
            <ul className="accessibility-list">
              <li>
                <button onClick={() => setZoomLevel((prev) => Math.min(prev + 0.1, 2))}>
                  <FaExpand /> Zoom In
                </button>
              </li>
              <li>
                <button onClick={() => setZoomLevel((prev) => Math.max(prev - 0.1, 1))}>
                  <FaCompress /> Zoom Out
                </button>
              </li>
              <li>
                <button onClick={() => setFontSize((prev) => Math.min(prev + 2, 24))}>
                  <FaFont /> Increase Font
                </button>
              </li>
              <li>
                <button onClick={() => setFontSize((prev) => Math.max(prev - 2, 12))}>
                  <FaFont /> Decrease Font
                </button>
              </li>
              <li>
                <button onClick={() => setIsReadableFont((prev) => !prev)}>
                  <FaEye /> Readable Font
                </button>
              </li>
              <li>
                <button onClick={() => setIsDarkContrast((prev) => !prev)}>
                  <FaAdjust /> Dark Contrast
                </button>
              </li>
              <li>
                <button onClick={() => setIsBrightContrast((prev) => !prev)}>
                  <FaAdjust /> Bright Contrast
                </button>
              </li>
              <li>
                <button onClick={() => setIsUnderlineLinks((prev) => !prev)}>
                  <FaUnderline /> Underline Links
                </button>
              </li>
              <li>
                <button>
                  <FaBolt /> Disable Flashes
                </button>
              </li>
              <li>
                <button>
                  <FaHeading /> Mark Headings
                </button>
              </li>
            </ul>
            <button className="reset-button" onClick={resetSettings}>
              <FaSync /> Reset Settings
            </button>
          </div>
          <div className="backdrop" onClick={closeDrawer}></div>
        </>
      )}
    </>
  );
}

export default Accessibility;
