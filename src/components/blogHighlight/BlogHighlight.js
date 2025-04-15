import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './BlogHighlight.css'; 

import chairpersonImage from "./CHAIRPERSON_ADPHA_BOARD.avif";

const BlogHighlight = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const title = "A New Lease of Life? Reflection on Developments in the Development Assistance Sector";

  const summary = `ADPHA Uganda, supporting disabled individuals affected by HIV/AIDS & TB, initially faced a funding halt but saw it reinstated following advocacy efforts. While their vital programs continue, they call for the complete reversal of development assistance cuts impacting other organizations and commit to reforms ensuring transparency and effectiveness.`;

  const fullText = `
    Like many community development organizations providing life-saving interventions, the heart of ADPHA Uganda, the association of disabled people and their family members leaving with and affected by HIV/AIDS and Tuberculosis (TB), leaped when Stop TB/UNOPS shared the notice of temporary stoppage of all funded programs.

    Thankfully, ADPHA’s funding was reinstated enabling the continuation of programs for Training Health workers on the intersectionality between disability, TB and HIV/AIDS, psychosocial support to persons with disabilities affected by TB and HIV/AIDS and experiencing domestic violence, Facilitating disabled children to access health, rehabilitation and assistive devices, promoting access to safe menstrual Hygiene Management products for girls and women with disabilities, and strengthening peer support groups to advocate for inclusive TB and HIV/AIDS services.

    ADPHA commends the relentless campaigns of several human rights and citizen activists within the US and across the globe which caused the minimal changes in the stoppage of Development assistance by the US administration.

    ADPHA is equally aware that a lot of life saving health, community empowerment, education, livelihood, psychosocial and organizational development work is at a standstill because of the termination of development assistance and joins the call for the total reversal of the policies which brought up the situation.

    ADPHA also recognizes and commits to the urgent reforms needed to restore full trust in the integrity, efficiency and transformational work of non-profits utilizing development assistance.
  `;

  const authorName = "Mr. Dick Bugembe";
  const authorTitle = "Chairperson Association of Disabled Persons with HIV/AIDS Uganda.";

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const contentVariants = {
    collapsed: { height: 0, opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } },
    expanded: { height: 'auto', opacity: 1, transition: { duration: 0.4, ease: "easeInOut" } },
  };

  return (
    <div className="blog-highlight-container">
      {/* Chairperson Image Section */}
      <div className="chairperson-image-container">
        <motion.img
          src={chairpersonImage}
          alt={`${authorName}, ${authorTitle}`}
          className="chairperson-image"
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        />
      </div>

      {/* Text Content Section */}
      <div className="text-content">
        <h2 className="blog-title">{title}</h2>
        <p className="blog-summary">{summary}</p>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              key="content"
              className="blog-full-text"
              variants={contentVariants}
              initial="collapsed"
              animate="expanded"
              exit="collapsed"
              viewport={{ once: true }}
            >
              {/* Split full text into paragraphs for better spacing */}
              {fullText.trim().split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph.trim()}</p>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
            className="read-more-button-blog-highlight"
            onClick={toggleReadMore}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </motion.button>

        <div className="blog-author">
          <strong>{authorName}</strong> <br />
          {authorTitle}
        </div>
      </div>
    </div>
  );
};

export default BlogHighlight;