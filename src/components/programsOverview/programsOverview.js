import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './programsOverview.css';

import awareness from "./awareness-creation.webp";
import empowerment from "./digital-empowerment-for-the-disabled.webp";
import reproductive from "./disability-reproductive-rights.webp";
import capacitybuilding from "./organisaztional-capacity-building.webp";
import peersupport from "./peer-support.webp";
import advocacy from "./advocacy-task-force.webp";



const ProgramsOverview = () => {
  const [expandedProgram, setExpandedProgram] = useState(null);

  const programsData = [
    {
      id: 1,
      title: "Awareness Creation on Disability, HIV and TB",
      description: "Mobilizing and creating awareness HIV and TB among  people with disabilities to use HIV and TB testing/ screening, treatment and care and support services",
      image: awareness,
      details: "The Intersection of disability, HIV/AIDS and Tuberculosis (TB) is not yet understood by a wide spectrum of stakeholders in the health professional, donor sector, HIV/AIDS and TB service providers and PWDs themselves. ADPHA frame the problem through research, detailed case analysis and market the issue through foras, media, and publications and community awareness and engagement  meetings. ADPHA Uganda promotes HIV/TB testing and screening, treatment and care among  people with disabilities  and encourages the disclosure of HIV/TB status to create awareness of the problem through; providing information about HIV and TB and related services to people with disabilities  in appropriate format , supporting people with disabilities living  HIV and TB survivors trained counsellors to provide counselling support at various HIV/TB service centres, peer counselling, radio talk shows, follow up on members with challenges of drug adherence as well as conducting family dialogue meetings to provide family support. Lack of access to HIV/TB education, information and prevention exposes people with disabilities  to the same risk factors of HIV/TB infection as their non –disabled peers. Nevertheless, HIV/TB infection is more likely among  people with disabilities due to their marginalized and vulnerable positions in the community making people with disabilities  to engage in ill-informed and risky sexual behaviors.",
    },
    {
      id: 2,
      title: "Social Livelihoods and Economic Empowerment",
      description: "Improving the social livelihoods and economic empowerment of ADPHA members",
      image: empowerment,
      details: "Disability, Poverty  HIV& TB in Uganda are impossible to separate. ADPHA Uganda also focuses on improving livelihood of people with disabilities s living with and affected by HIV and TB through empowerment in terms of skills and competencies in managing viable income generating activities (IGAs) as well as empowering PWD households to be able to meet their basic needs and advocates for inclusion of PWDs on community economic empowerments programs, to enable them utilize available opportunities and increase their participation hence improve their economic capabilities.",
    },
    {
      id: 3,
      title: "Human Rights, Gender and Disability",
      description: "Promoting  Disability, Sexual Gender based and Reproductive Health rights",
      image: reproductive,
      details: "ADPHA Uganda  embarked on creating awareness and advocate for implementation of policies and laws on rights of persons with disability living HIV& TB and mainstreaming the rights based approach to all ADPHA Uganda’s programs. The fact that there are no explicit HIV and TB interventions targeting people with Disabilities  and even where efforts have been made to address disability concerns, the interventions address a few categories. Available HIV and TB services and policies do not provide for special emphasis on disability friendly services especially for Women with Disabilities (WWDs) but are rather lumped under the vulnerable populations. Even the National Strategic Plan for HIV and TB gives limited attention to disability. The relationship between gender, disability and HIV/AIDS is even not well catered for in the plan Gender inequality makes women more vulnerable to HIV, with women and girls now having the highest rates of infection in heavily affected countries. This is due to women’s deep political, social, economic, and sexual subordination, which is enshrined in culture and practice. Discrimination, stigma, and Sexual and Gender based violence are also daily realities for many women living with HIV and affected by TB.",
    },
    {
      id: 4,
      title: "Organisational Capacity Building",
      description: "Powered to realise the changes we want to see",
      image: capacitybuilding,
      details: "ADPHA Uganda will continuously engage in activities of building its members,  managerial, institutional, resource mobilization and fundraising capacity; and the capacity of the target stakeholders to ensure improved quality and accessibility of services delivered to people with  living with HIV/TB irrespective of age, category, gender, cultural background or abilities. Internal systems like monitoring, financial management, human resource and volunteer’s management, planning mechanisms.",
    },
    {
      id: 5,
      title: "Promoting Community Peer Support",
      description: "Forming and strengthening the capacity of peer support groups",
      image: peersupport,
      details: "ADPHA Uganda supports  the formation of  District Associations and peer support groups among Peoples with disabilities  living with HIV or TB survivors  within their localized area as a strategy of bringing them together, provide peer counselling support to each other and also form one strong voice of advocacy to voice out their needs to local authority and coordination. The capacity building trainings and meetings are conducted on quarterly basis with availability of fund at disposal, however in situation of low funding, the secretariat links up peer support groups to sub county authorities for further support and also continue making follow up to ensure their existence",
    },
    {
      id: 6,
      title: "Advocacy for the Rights of People with Disabilities in HIV/TB Service Delivery at All Levels.",
      description: "The work of the National Advocacy HIV/TB disability (NADITH) Taskforce",
      image: advocacy,
      details: "Using its newly acquired national status, ADPHA  Uganda led the establishment of the National Advocacy on Disability TB and HIV Taskforce(NADITH) to   explore   opportunities for   concerted national level   advocacy for disability inclusive HIV/AIDS and TB services. Members of the National Advocacy on Disability TB and HIV Taskforce include representatives from CCM, Ministry of Health, development partners, ADPHA-Uganda, and the National Union of Disabled Persons of Uganda The task force conducted consultative meetings with   the National Equity secretariat, Uganda Stop TB partnership, the Private sector representative for TB programming, the Ministry of health and Ministry of gender and social development between September and November. The   consultation revealed that  despite Consistent  commitments  to deal with the  unique challenges of marginalized  groups  like people with disabilities  in  many   HIV,  TB  and  Malaria policies  and programs, Disability inclusive and accessible  IEC materials on HIV, TB  and malaria  are limited; Limited   utilization of the few Indicators to monitor the extent of inclusion of people with disabilities in HIV TB and   malaria programs. Limited and inconsistent representation of people with disabilities in HIV, TB and malaria decision-making.",
    },
  ];

  const toggleProgramDetails = (id) => {
    setExpandedProgram(expandedProgram === id ? null : id);
  };

  return (
    <section className="programs-component-overview" aria-labelledby="programs-heading">
       
      <section className="what-we-do">
        <motion.h2 
          id="what-we-do-title" 
          className="what-we-do-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What We Do
        </motion.h2>
        <motion.div 
          className="what-we-do-title-dash" 
          aria-hidden="true"
          initial={{  width: 0 , originX: '0%' }}
          whileInView={{ width: "100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
        </motion.div>
        <motion.p 
          className="what-we-do-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
            ADPHA Uganda is an association of Persons with Disabilities living with HIV or affected by TB ; which advocates and Networks for inclusive health and support services; to enable people with disabilities living with HIV or TB survivors generate meaningful healthy and productive lives in Uganda . <br/>For successful implementation of the ADPHA Uganda strategic Interventions  attention should be paid to the following factors
        </motion.p>
      </section>

      <div className="programs-list-overview">
        {programsData.map((program, index) => (
          <motion.div
            key={program.id}
            className={`program-item-overview ${index % 2 === 0 ? 'left-image' : 'right-image'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="program-image-container-overview">
              <img
                src={program.image}
                alt={program.title}
                className="program-image-overview"
                aria-hidden="true"
              />
            </div>
            <div className="program-content-overview">
              <h3>{program.title}</h3>
              <motion.div
                className="title-dash-overview"
                aria-hidden="true"
                initial={{ width: 0, originX: "50%" }} 
                whileInView={{ width: "100px", originX: "50%" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                variants={{
                  mobile: {
                    initial: { width: 0, originX: "50%" },
                    whileInView: { width: "100px", originX: "50%" },
                  },
                  desktop: {
                    initial: { width: 0, originX: "0%" },
                    whileInView: { width: "100px", originX: "0%" },
                  },
                }}
                custom={window.innerWidth} 
                viewport={{ once: true }}
              />
              <p>{program.description}</p>

     
            <AnimatePresence>
                {expandedProgram === program.id && (
                    <motion.div
                    className="program-details-overview"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    aria-live="polite"
                    >
                    <p>{program.details}</p>
                    </motion.div>
                )}
            </AnimatePresence>

            <a
                onClick={() => toggleProgramDetails(program.id)}
                aria-label={`Learn more about ${program.title}`}
            >
                {expandedProgram === program.id ? "Show Less" : "Learn More"}
            </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
   
  );
};

export default ProgramsOverview;