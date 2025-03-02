import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './AdphaGallery.css';


import adphaTeam from './advocating-as-a-team.jpg';
import adphaevent from './hiv-tb-advocacy.avif';
import skillaquisition from './skill-aquisition-for-pwds.jpg';
import girlchild from './girl-child-empowerment.jpg';

import awareness from "./awareness-creation.webp";
import empowerment from "./digital-empowerment-for-the-disabled.webp";
import reproductive from "./disability-reproductive-rights.webp";
import capacitybuilding from "./organisaztional-capacity-building.webp";
import peersupport from "./peer-support.webp";
import advocacy from "./advocacy-task-force.webp";

import training from "./training-leadership-structures.avif";
import commemorating from "./commemorating-world-tb-day.avif";
import vaccination from "./vaccination-of-people-with-disabilities.avif";

import marching from "./marching-for-people-with-disabilities-leaving-no-one-behind.avif";
import nadith from "./accessibility-assessment-by-ndith.avif";
import peerSupport from "./promoting-community-peer-support.avif";

import workingTogether from "./working-together-for-change.jpg";
import annualReport from "./adpha-annual-report-2023-launch.jpg";




const AdphaGallery = ({ images }) => {
  // Default images if none provided
  const defaultImages = images || [
    { id: 1, src: adphaTeam, caption: 'Building stronger communities', size: 'large' },
    { id: 2, src: commemorating, caption: 'Commemorating World TB Day 2023', size: 'tall' },
    { id: 3, src: capacitybuilding, caption: 'Organizational Capcity Building', size: 'small' },
    { id: 9, src: awareness, caption: 'Creating Awareness about Disability Rights', size: 'small' },
    { id: 4, src: vaccination, caption: 'Vaccination Of People With Disabilities', size: 'tall' },
    { id: 14, src: marching, caption: 'Marching for People With Disabilities Leaving No One Behind', size: 'tall' },
    { id: 5, src: girlchild, caption: 'Spreading hope', size: 'large' },
    { id: 6, src: training, caption: 'Strengthening the Leadership Structure', size: 'tall' },
    { id: 7, src: peersupport, caption: 'Empowering through education', size: 'large' },
    { id: 8, src: peerSupport, caption: 'Promoting Community Peer Support', size: 'small' },
    { id: 8, src: nadith, caption: 'NADITH Task Force at work', size: 'small' },
    { id: 8, src: skillaquisition, caption: 'Skill Aquisition for Community Integration', size: 'small' },
    { id: 10, src: workingTogether, caption: 'Partnering for Change', size: 'tall' },
    { id: 10, src: adphaevent, caption: 'ADPHA Meeting 2024', size: 'large' },
    { id: 11, src: empowerment, caption: 'Digital Empowerment for People with Disabilities', size: 'large' },
    { id: 12, src: reproductive, caption: 'ADPHA Outreach', size: 'large' },
    { id: 13, src: advocacy, caption: 'Accessibility Accessment of Health Services', size: 'large' },
    { id: 13, src: annualReport, caption: "Launching the ADPHA Annual Report 2023", size: 'tall' },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  // Animation variants
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const lightboxVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  };

  return (
    <section className="adpha-gallery" aria-label="ADPHA Image Gallery">
      <motion.h1 
        className="gallery-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        ADPHA Gallery
      </motion.h1>

      <motion.div
        className="title-dash-gallery"
        initial={{  width: 0  }}
        whileInView={{ width: "100px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      />

      <motion.div
        className="gallery-grid"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {defaultImages.map((image) => (
          <motion.div
            key={image.id}
            className={`gallery-item ${image.size}`}
            variants={imageVariants}
            whileHover="hover"
            onClick={() => setSelectedImage(image)}
            role="button"
            tabIndex={0}
            aria-label={`View ${image.caption}`}
            onKeyPress={(e) => e.key === 'Enter' && setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt={image.caption}
              className="gallery-image"
              loading="lazy"
            />
            <div className="gallery-overlay">
              <p className="gallery-caption">{image.caption}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="gallery-lightbox"
            variants={lightboxVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-labelledby="lightbox-caption"
            aria-modal="true"
          >
            <motion.img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="lightbox-image"
              onClick={(e) => e.stopPropagation()} // Prevents closing when clicking image
            />
            <p id="lightbox-caption" className="lightbox-caption">
              {selectedImage.caption}
            </p>
            <button
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close gallery lightbox"
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AdphaGallery;