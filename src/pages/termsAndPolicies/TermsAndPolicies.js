import React from 'react';
import { motion } from 'framer-motion';
import './TermsAndPolicies.css';
import EmailLink from '../../components/emailLink/EmailLink';
import PhoneLink from '../../components/phoneLink/PhoneLink';

const TermsAndPolicies = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="terms-policies" aria-labelledby="terms-title">
      <div className="terms-container">
        <motion.h1
          id="terms-title"
          className="terms-title"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true }}
        >
          Terms and Policies
        </motion.h1>
        <motion.div
          className="terms-dash"
          initial={{ width: 0 }}
          whileInView={{ width: '100px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          aria-hidden="true"
        />

        {/* Introduction */}
        <motion.div
          className="terms-section"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true }}
        >
          <h2>Introduction</h2>
          <p>
            The Association of Persons with Disabilities Living with HIV and those affected by TB (ADPHA) - Uganda herein referd to as "ADPHA" is committed to advocating for inclusive health and support services. These Terms and Policies outline our operational guidelines, member rights, and responsibilities as of February 26, 2025. By engaging with ADPHA, you agree to abide by these terms.
          </p>
        </motion.div>

        {/* Membership */}
        <motion.div
          className="terms-section"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true }}
        >
          <h2>Membership</h2>
          <p>
            Membership is open to persons with disabilities living with HIV or affected by TB, their families, and supporters in Uganda and all over the world. Members are expected to:
          </p>
          <ul>
            <li>Participate in advocacy and peer support activities.</li>
            <li>Respect confidentiality of personal health information.</li>
            <li>Contribute to ADPHA’s mission of inclusion and empowerment.</li>
          </ul>
          <p>Membership may be terminated for violations of these terms or actions detrimental to ADPHA’s goals.</p>
        </motion.div>

        {/* Privacy Policy */}
        <motion.div
          className="terms-section"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true }}
        >
          <h2>Privacy Policy</h2>
          <p>
            ADPHA is committed to protecting your privacy and handling your personal data responsibly. Our practices are guided by the principles of the Constitution of the Republic of Uganda, including the right to privacy as enshrined in Article 27, and are fully compliant with the Data Protection and Privacy Act, 2019.
          </p>
          <p>
            ADPHA collects personal data (e.g., names, contact details, health status) to effectively provide our services and engage in advocacy work. Specifically, we:
          </p>
          <ul>
            <li><b>Safeguard your data:</b> We ensure the confidentiality and security of your personal data, adhering to the principles of data protection as outlined in the Constitution of the Republic of Uganda, including Article 27, and as detailed in the Data Protection and Privacy Act, 2019. We maintain strict internal policies and procedures to prevent unauthorized access, use, or disclosure of your information.</li>
            <li><b>Use data responsibly:</b> We use your data solely for the purposes of program implementation, service delivery, and reporting related to our mission. We will not use your data for any other purpose without your explicit consent.</li>
            <li><b>Limit data sharing:</b> We do not share your personal data with any third party without your explicit consent, unless required by law or to comply with a legal obligation. In such limited circumstances, we will only disclose the minimum necessary information. </li>
            <li>
            <b>Respect your rights:</b> You have the right to access, correct, or request the deletion of your personal data. To exercise these rights, or if you have any questions or concerns about our data handling practices, please contact us at <EmailLink email="info@adpha-uganda.org" subject="Inquiry on Data Access and Correction" style={{ color: 'blue', textDecoration: 'underline' , fontStyle: 'italic' }}> info@adpha-uganda.org</EmailLink>. We will respond to your request promptly and in accordance with the Data Protection and Privacy Act, 2019. 
            </li>
          </ul>
        </motion.div>

        {/* Service Access */}
        <motion.div
          className="terms-section"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true }}
        >
          <h2>Service Access</h2>
          <p>
          ADPHA provides peer support, health education, and advocacy services free of charge. We strive for accessibility but cannot guarantee uninterrupted service due to funding or logistical constraints.
          </p>
        </motion.div>

        {/* Code of Conduct */}
        <motion.div
          className="terms-section"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true }}
        >
          <h2>Code of Conduct</h2>
          <p>
            Members and partners must:
          </p>
          <ul>
            <li>Uphold respect, dignity, and non-discrimination.</li>
            <li>Avoid actions that harm ADPHA’s reputation or community.</li>
            <li>Comply with Ugandan laws and ADPHA policies.</li>
          </ul>
        </motion.div>



        {/* Code of Conduct */}
        <motion.div
          className="terms-section"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true }}
        >
          <h2>Accessibility Policy</h2>
          <p>
            ADPHA - Uganda is dedicated to creating an inclusive and accessible online environment for all individuals, particularly persons with disabilities living with HIV and those affected by TB. We are committed to ensuring that our website provides equal access to information and services, regardless of disability. This policy outlines our commitment to accessibility and the measures we are taking to achieve this.
          </p>
          <p><b>Our Commitment:</b> ADPHA recognizes the importance of digital accessibility and strives to remove barriers that may prevent individuals from fully engaging with our online content. We are guided by the principles of:</p>
          <ul>
            <li><b>Equal Access:</b> Ensuring that all users, including those with disabilities, can access and interact with our website.</li>
            <li><b>User-Centric Design:</b> Creating a website that is easy to navigate, understand, and use for all individuals.</li>
            <li><b>Continuous Improvement:</b> Regularly evaluating and improving our website's accessibility based on user feedback and evolving best practices.</li>
          </ul>
          <p><b>Accessibility Features and Standards:</b> ADPHA is committed to the following accessibility measures:</p>
          <ul>
            <li><b>Alternative Text:</b> Providing descriptive alternative text for images and other non-text content to ensure users with visual impairments can understand the content.</li>
            <li><b>Keyboard Navigation:</b> Designing our website to be navigable using a keyboard, allowing users who cannot use a mouse to access all features.</li>
            <li><b>Clear and Consistent Structure:</b> Organizing content in a clear and logical manner, using headings, lists, and other structural elements to enhance readability and navigation.</li>
            <li><b>Resizable Text:</b> Enabling users to adjust text size to their preference without loss of content or functionality.</li>
            <li><b>Color Contrast:</b> Ensuring sufficient color contrast between text and background to improve readability for users with visual impairments.</li>
            <li><b>Captions and Transcripts:</b> Providing captions for videos and transcripts for audio content to make them accessible to users with hearing impairments.</li>
            <li><b>Accessible Forms:</b> Designing forms that are easy to complete using assistive technologies.</li>
            <li><b>Consistent Navigation:</b> Maintaining a consistent navigation structure throughout the website to enhance usability.</li>
            <li><b>Plain Language:</b> Using clear, concise, and easy-to-understand language.</li>
          </ul>
            <p><b>Ongoing Efforts: </b>ADPHA is committed to ongoing efforts to improve the accessibility of our website. This includes:</p>
            <ul>
              <li><b>Regular Audits:</b> Conducting regular accessibility audits to identify and address any accessibility issues.</li>
              <li><b>User Testing:</b> Involving users with disabilities in the testing and evaluation of our website.</li>
              <li><b>Staff Training:</b> Providing training to our staff on web accessibility best practices.</li>
              <li><b>Feedback Mechanism:</b> Establishing a clear and accessible feedback mechanism for users to report accessibility issues.</li>
            </ul>
            <p><b>Feedback and Contact Information:</b>  We welcome your feedback on the accessibility of the ADPHA website. If you encounter any accessibility barriers or have suggestions for improvement, please contact us at:</p>
            <ul>
              <li>
                <EmailLink 
                  email="info@adpha-uganda.org" 
                  subject="Inquiry on Data Access and Correction" 
                  style={{ color: 'blue', textDecoration: 'underline' , fontStyle: 'italic' }}
                >
                  info@adpha-uganda.org
                </EmailLink>         
              </li>
              <li>
                <PhoneLink 
                  phoneNumber= "+256 800 111 499"
                  style={{ color: 'blue', textDecoration: 'underline' , fontStyle: 'italic' }}
                >
                  +256 800 111 499
                </PhoneLink>
              </li>
            </ul>
            <p>We will make every effort to address your concerns and provide you with the information you need.</p>
          {/* </ul> */}
        </motion.div>








        {/* Changes to Terms */}
        <motion.div
          className="terms-section"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true }}
        >
          <h2>Changes to Terms</h2>
          <p>
            ADPHA reserves the right to update these terms as needed. Changes will be communicated via our website or direct outreach. Continued engagement implies acceptance of updated terms.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsAndPolicies;