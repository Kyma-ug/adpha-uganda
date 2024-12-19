import React from 'react';
import './Programs.css';

import awarenessimg from './awareness-creation.avif';
import humanrightsimg from './human-rights.avif';
import nadithimg from './nadith-taskforce.avif';
import capacityimg from './organisational-capacity.avif';
import peerimg from './peer-support.avif';
import socialimg from './social-livelihoods.avif';


const programsData = [
  {
    title: 'AWARENESS CREATION ON DISABILITY, HIV AND TB',
    description: "<b>Mobilizing and creating awareness HIV and TB among  people with disabilities to use HIV and TB testing/ screening, treatment and care and support services<b> <br>The Intersection of disability, HIV/AIDS and Tuberculosis (TB) is not yet understood by a wide spectrum of stakeholders in the health professional, donor sector, HIV/AIDS and TB service providers and PWDs themselves. ADPHA frame the problem through research, detailed case analysis and market the issue through foras, media, and publications and community awareness and engagement  meetings. <br>ADPHA Uganda promotes HIV/TB testing and screening, treatment and care among  people with disabilities  and encourages the disclosure of HIV/TB status to create awareness of the problem through; providing information about HIV and TB and related services to people with disabilities  in appropriate format , supporting people with disabilities living  HIV and TB survivors trained counsellors to provide counselling support at various HIV/TB service centres, peer counselling, radio talk shows, follow up on members with challenges of drug adherence as well as conducting family dialogue meetings to provide family support. Lack of access to HIV/TB education, information and prevention exposes people with disabilities  to the same risk factors of HIV/TB infection as their non –disabled peers. Nevertheless, HIV/TB infection is more likely among  people with disabilities due to their marginalized and vulnerable positions in the community making people with disabilities  to engage in ill-informed and risky sexual behaviors.  ",

    imageUrl: awarenessimg,
    imagePosition: 'right',
  },
  {
    title: 'Social Livelihoods and Economic Empowerment',
    description: "<b>Improving the social livelihoods and economic empowerment of ADPHA members<b> <br>Disability, Poverty  HIV& TB in Uganda are impossible to separate. ADPHA Uganda also focuses on improving livelihood of people with disabilities s living with and affected by HIV and TB through empowerment in terms of skills and competencies in managing viable income generating activities (IGAs) as well as empowering PWD households to be able to meet their basic needs and advocates for inclusion of PWDs on community economic empowerments programs, to enable them utilize available opportunities and increase their participation hence improve their economic capabilities. ",

    imageUrl: socialimg,
    imagePosition: 'left',
  },
  {
    title: 'HUMAN RIGHTS, GENDER,AND DISABILITY',
    description: "<b>Promoting  Disability, Sexual Gender based  and Reproductive Health  rights<b><br>ADPHA Uganda  embarked on creating awareness and advocate for implementation of policies and laws on rights of persons with disability living HIV& TB and mainstreaming the rights based approach to all ADPHA Uganda’s programs. The fact that there are no explicit HIV and TB interventions targeting people with Disabilities  and even where efforts have been made to address disability concerns, the interventions address a few categories. Available HIV and TB services and policies do not provide for special emphasis on disability friendly services especially for Women with Disabilities (WWDs) but are rather lumped under the vulnerable populations.    Even the National Strategic Plan for HIV and TB gives limited attention to disability. The relationship between gender, disability and HIV/AIDS is even not well catered for in the plan. Gender inequality makes women more vulnerable to HIV, with women and girls now having the highest rates of infection in heavily affected countries. This is due to women’s deep political, social, economic, and sexual subordination, which is enshrined in culture and practice. Discrimination, stigma, and Sexual and Gender based violence are also daily realities for many women living with HIV and affected by TB.",

    imageUrl: humanrightsimg,
    imagePosition: 'right',
  },
  {
    title: 'ORGANISATIONAL CAPACITY BUILDING',
    description: "<b>Powered to realise the changes we want to see<b> <br>ADPHA Uganda will continuously engage in activities of building its members,  managerial, institutional, resource mobilization and fundraising capacity; and the capacity of the target stakeholders to ensure improved quality and accessibility of services delivered to people with  living with HIV/TB irrespective of age, category, gender, cultural background or abilities. Internal systems like monitoring, financial management, human resource and volunteer’s management, planning mechanisms.  ",

    imageUrl: capacityimg,
    imagePosition: 'left',
  },
  {
    title: 'PROMOTING COMMUNITY PEER SUPPORT',
    description: "<b>Forming and strengthening the capacity of peer support groups<b> <br>ADPHA Uganda supports  the formation of  District Associations and peer support groups among Peoples with disabilities  living with HIV or TB survivors  within their localized area as a strategy of bringing them together, provide peer counselling support to each other and also form one strong voice of advocacy to voice out their needs to local authority and coordination. The capacity building trainings and meetings are conducted on quarterly basis with availability of fund at disposal, however in situation of low funding, the secretariat links up peer support groups to sub county authorities for further support and also continue making follow up to ensure their existence  ",

    imageUrl: peerimg,
    imagePosition: 'right',
  },
  {
    title: 'ADVOCACY FOR THE RIGHTS OF PEOPLE WITH DISABILITIES IN HIV/TB SERVICE DELIVERY AT ALL LEVEL.',
    description: "<b>The work of the National Advocacy HIV/TB disability (NADITH)Taskforce<br>Using its newly acquired national status, ADPHA  Uganda led the establishment of the National Advocacy on Disability TB and HIV Taskforce(NADITH) to   explore   opportunities for   concerted national level   advocacy for disability inclusive HIV/AIDS and TB services.<br>Members of the National Advocacy on Disability TB and HIV Taskforce include representatives from CCM, Ministry of Health, development partners, ADPHA-Uganda, and the National Union of Disabled Persons of Uganda<br>The task force conducted consultative meetings with   the National Equity secretariat, Uganda Stop TB partnership, the Private sector representative for TB programming, the Ministry of health and Ministry of gender and social development between September and November.<br> The   consultation revealed that  despite Consistent  commitments  to deal with the  unique challenges of marginalized  groups  like people with disabilities  in  many   HIV,  TB  and  Malaria policies  and programs, Disability inclusive and accessible  IEC materials on HIV, TB  and malaria  are limited; Limited   utilization of the few Indicators to monitor the extent of inclusion of people with disabilities in HIV TB and   malaria programs. Limited and inconsistent representation of people with disabilities in HIV, TB and malaria decision-making. ",

    imageUrl: nadithimg,
    imagePosition: 'left',
  },
  
];

const Programs = () => {
  return (
    <div className="programs-container">
      <h1 className="programs-title">Our Programs</h1>
      <p className="programs-subtitle">Empowering individuals and communities through dedicated initiatives.</p>
      {programsData.map((program, index) => (
        <div
          key={index}
          className={`program-item ${program.imagePosition === 'left' ? 'reverse' : ''}`}
        >
          <div className="program-text">
            <h2>{program.title}</h2>
            <p>{program.description}</p>
          </div>
          <div className="program-image">
            <img src={program.imageUrl} alt={program.title} />
          </div>
        </div>
      ))}

    </div>
  );
};

export default Programs;
