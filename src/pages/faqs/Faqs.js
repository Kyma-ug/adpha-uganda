import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Faqs.css';

const Faqs = () => {
  const [expanded, setExpanded] = useState(null);

  const faqData = [
    {
      id: 1,
      question: 'What is ADPHA Uganda?',
      answer: 'ADPHA Uganda is an association of persons with disabilities living with HIV or affected by TB. We advocate for inclusive health and support services to empower our members and create equitable communities in Uganda.',
    },
    {
      id: 2,
      question: 'Who can join ADPHA?',
      answer: 'Membership is open to persons with disabilities living with HIV or affected by TB, their families, and supporters in Uganda and all over the world who share our mission of inclusion and empowerment.',
    },
    {
      id: 3,
      question: 'What services does ADPHA provide?',
      answer: 'We offer peer support, health education, advocacy for inclusive policies, and community empowerment programs, all aimed at improving the lives of our members.',
    },
    {
      id: 4,
      question: 'How can I support ADPHA’s work?',
      answer: 'You can support us by volunteering, donating, or partnering with us. Visit our "Support Us" page or contact us at info@adpha-uganda.org for more details.',
    },
    {
      id: 5,
      question: 'Are your services free?',
      answer: 'Yes, our core services like peer support and advocacy are free, though availability may depend on funding and resources.',
    },
  ];

  const toggleFaq = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section className="faqs" aria-labelledby="faqs-title">
      <div className="faqs-container">
        <motion.h1
          id="faqs-title"
          className="faqs-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h1>
        <motion.div
          className="faqs-dash"
          initial={{ width: 0 }}
          whileInView={{ width: '100px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          aria-hidden="true"
        />

        <div className="faq-list" role="region" aria-label="Frequently Asked Questions List">
          {faqData.map((faq) => (
            <motion.div
              key={faq.id}
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: faq.id * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="faq-question"
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={expanded === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="faq-question-text">{faq.question}</span>
                <span className={`faq-toggle-icon ${expanded === faq.id ? 'expanded' : ''}`}>
                  {expanded === faq.id ? '−' : '+'}
                </span>
              </button>
              <AnimatePresence>
                {expanded === faq.id && (
                  <motion.div
                    id={`faq-answer-${faq.id}`}
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;