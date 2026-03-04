import React from 'react';
import styled from 'styled-components';

import NBEMSLogo from '../../Components/Images/Affiliations/nbems_logo.png';
import TNGovtLogo from '../../Components/Images/Affiliations/tn_govt_logo.png';
import TNNMCLogo from '../../Components/Images/Affiliations/tnnmc_logo.png';
import MGRLogo from '../../Components/Images/Affiliations/mgr_university_logo.png';
import INCLogo from '../../Components/Images/Affiliations/inc_logo.png';
import DrPrabuImage from '../Smrft/images/dr-prabu-sankar.jpg';
import DrPSPSImage from '../Smrft/images/vijayarathna-dr-psps.jpg';

const PageContainer = styled.div`
  background-color: #f8fafc;
  min-height: 100vh;
  padding-bottom: 4rem;
  font-family: 'Inter', sans-serif;
  color: #1e293b;
`;

const HeroHeader = styled.div`
  background: linear-gradient(135deg, var(--primary-blue) 0%, #172554 100%);
  color: white;
  padding: 5rem 2rem;
  text-align: center;
  margin-bottom: 3rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  
  h1 {
    font-family: 'Playfair Display', serif;
    font-size: 3.5rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }
  
  p {
    font-size: 1.2rem;
    opacity: 0.9;
    max-width: 600px;
    margin: 0 auto;
    font-weight: 300;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const Section = styled.section`
  margin-bottom: 4rem;
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.25rem;
  color: var(--primary-blue);
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    display: block;
    width: 60%;
    height: 4px;
    background: var(--accent-gold);
    margin-top: 0.5rem;
    border-radius: 2px;
  }
`;

const ContentText = styled.div`
  font-size: 1.05rem;
  line-height: 1.8;
  color: #475569;
  text-align: justify;

  p {
    margin-bottom: 1.5rem;
  }
  
  h3 {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    color: #0f172a;
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
  }

  ul {
    padding-left: 1.5rem;
    margin-bottom: 1.5rem;
    
    li {
      margin-bottom: 0.5rem;
      position: relative;
      &::marker {
        color: var(--primary-blue);
      }
    }
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const InfoCard = styled.div`
  background: linear-gradient(to bottom right, #ffffff, #f8fafc);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.02);
  border: 1px solid #f1f5f9;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.08);
    border-color: var(--primary-blue);
  }

  h3 {
    color: var(--primary-blue);
    margin-bottom: 1rem;
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    border-bottom: 2px solid var(--accent-gold);
    padding-bottom: 0.5rem;
    display: inline-block;
  }
`;

const LeaderMessageCard = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
  border: 1px solid #f1f5f9;
  transition: transform 0.3s ease;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }

  &:hover {
    transform: translateY(-5px);
  }
`;

const LeaderImageContainer = styled.div`
  flex: 0 0 300px;
  height: 350px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${LeaderMessageCard}:hover & img {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 250px;
    flex: none;
  }
`;

const LeaderContent = styled.div`
  padding: 2.5rem;
  flex: 1;

  h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    color: var(--primary-blue);
    margin-bottom: 0.5rem;
  }

  h4 {
    font-size: 1.1rem;
    color: var(--accent-gold);
    font-weight: 600;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  p {
    font-size: 1.05rem;
    line-height: 1.8;
    color: #475569;
    font-style: italic;
  }
`;

const LogoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  margin: 3rem 0;
  padding: 2rem;
  background: #f8fafc;
  border-radius: 16px;
  border: 1px dashed #cbd5e1;
`;

const LogoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 160px;
  cursor: pointer;

  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin-bottom: 1rem;
    transition: transform 0.3s ease;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
  }

  &:hover img {
    transform: scale(1.1) rotate(2deg);
  }

  p {
    font-size: 0.85rem;
    color: #334155;
    font-weight: 600;
    line-height: 1.4;
  }
`;

const MemberCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #f1f5f9;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
    border-color: var(--accent-gold);
  }
  
  img {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1.5rem;
    border: 4px solid white;
    box-shadow: 0 0 0 3px var(--primary-blue);
    padding: 2px;
  }

  h4 {
    color: var(--primary-blue);
    margin: 0.5rem 0;
    font-size: 1.25rem;
    font-weight: 700;
  }

  p {
    color: #64748b;
    font-size: 0.95rem;
    line-height: 1.5;
  }
  
  strong {
    color: var(--accent-gold);
    display: block;
    margin: 0.5rem 0;
    font-weight: 600;
  }
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const TabButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  background: ${props => props.active ? 'var(--primary-blue)' : '#f1f5f9'};
  color: ${props => props.active ? 'white' : '#64748b'};
  border-radius: 99px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Inter', sans-serif;

  &:hover {
    background: ${props => props.active ? 'var(--primary-blue)' : '#e2e8f0'};
    transform: translateY(-2px);
  }
`;

const AboutGroup = () => {
  const [activeTab, setActiveTab] = React.useState('sims');
  return (
    <PageContainer>
      <HeroHeader>
        <h1>About Us</h1>
        <p>Shanmuga Group of Institutions - Excellence in Education, Compassion in Care</p>
      </HeroHeader>

      <ContentWrapper>
        {/* 2.1 Trust */}
        <Section id="trust">
          <SectionTitle>Shanmuga Medical Research Foundation Trust (SMRFT)</SectionTitle>
          <ContentText>
            <p>
              Shanmuga Medical Research Foundation Trust (SMRFT) was founded in June 1996 by Thirumigu. Vanavasi. P. Shanmugam and Dr. P. S. Panneerselvam with the aim of serving society through health, education, and research. The founders believed that quality healthcare and scientific knowledge should reach all sections of the community. With this vision, the trust began its journey to promote medical and nursing education, encourage research activities, and support programmes that improve the overall health and well-being of the public, especially the needy.
            </p>
            <p>
              The Trust is legally registered as a Charitable Trust under the Indian Trust Act, with Registration No. 388/BK4 dated 25.06.1996. Since its establishment, SMRFT has grown into a respected organisation known for its commitment to community service, professional development, and ethical practices. Through continuous training programmes, community outreach, and collaboration with healthcare institutions, the Trust works to strengthen healthcare delivery and empower professionals to provide compassionate and evidence-based care.
            </p>
          </ContentText>
        </Section>

        {/* 2.2 About Institution */}
        <Section id="institution">
          <SectionTitle>Our Institutions</SectionTitle>

          <TabContainer>
            <TabButton
              active={activeTab === 'sims'}
              onClick={() => setActiveTab('sims')}
            >
              SIMS
            </TabButton>
            <TabButton
              active={activeTab === 'nursing'}
              onClick={() => setActiveTab('nursing')}
            >
              College of Nursing
            </TabButton>
            <TabButton
              active={activeTab === 'ahs'}
              onClick={() => setActiveTab('ahs')}
            >
              Allied Health Sciences
            </TabButton>
          </TabContainer>

          <ContentText>
            {activeTab === 'sims' && (
              <div>
                <h3>Shanmuga Institute of Post Graduate Medical Science</h3>
                <p>
                  Shanmuga Institute of Post Graduate Medical Science (SIMS) was established in 1998 under the inspiring leadership and gracious presidentship of Dr. P. S. PanneerSelvam, MS, MNAMS, FAIS, FICS, FIAGES, the Chairman of Shanmuga Medical Research Foundation Trust. The institute was started with the vision to provide advanced education and quality training in medical and health sciences.
                </p>
                <p>
                  SIMS is a self-contained and self-sufficient institution, offering a supportive environment for postgraduate learning, clinical exposure, and research activities. The academic programmes are designed to build strong professional skills, encourage evidence-based practice, and promote ethical and compassionate care among students.
                </p>
                <p>
                  Our faculty comprises experienced clinicians, academicians, and researchers who guide students with personal attention, mentorship, and updated knowledge. State-of-the-art infrastructure, well-equipped laboratories, advanced clinical facilities, and tie-ups with hospitals ensure that students get exposure to a wide range of medical conditions, emergency care, and specialised treatments.
                </p>
                <p>
                  The Institute is accompanied by its own 151-bed parent Shanmuga Hospitals and the Salem Cancer Institute, which provide a rich clinical learning platform for students. Through these attached healthcare facilities, learners gain hands-on experience, exposure to diverse medical conditions, and opportunities to participate in patient care, clinical procedures, and specialised services.
                </p>
              </div>
            )}

            {activeTab === 'nursing' && (
              <div>
                <h3>SHANMUGA COLLEGE OF NURSING</h3>
                <p><em>"Nurturing the Future of Healthcare: Excellence in Nursing Education".</em></p>
                <p>
                  Shanmuga College of Nursing, established in year 2000 under the guidance of the Shanmuga Medical Research Foundation Trust (SMRFT), is a dedicated institution committed to developing skilled and compassionate nursing professionals. From its inception, the college has focused on building strong academic foundations and nurturing the values essential for quality nursing practice.
                </p>
                <p>
                  With modern infrastructure, advanced facilities, and experienced faculty, Shanmuga College of Nursing provides a supportive learning environment that blends classroom teaching with practical exposure. Skill-based training, simulation sessions, community postings, and hospital-based clinical experience help students gain confidence and competence in real healthcare settings.
                </p>
                <p>
                  The college aims to prepare graduates who can excel in the healthcare industry by demonstrating professional competence, ethical standards, and compassionate care. Through holistic development, continuous guidance, and a focus on patient-centred values, Shanmuga College of Nursing works to create nurses who contribute effectively to the well-being of individuals, families, and communities.
                </p>
              </div>
            )}

            {activeTab === 'ahs' && (
              <div>
                <h3>SHANMUGA COLLEGE OF ALLIED HEALTH SCIENCES</h3>
                <p><em>“Learn with Purpose, Serve with Compassion.”</em></p>
                <p>
                  Shanmuga College of Allied Health Sciences is a premier institution dedicated to preparing skilled allied health professionals who play a vital role in today’s healthcare system. The college functions under the guidance of the Shanmuga Medical Research Foundation Trust (SMRFT) and is committed to delivering quality education that blends scientific knowledge with practical clinical training.
                </p>
                <p>
                  Our college offers a supportive academic environment with modern infrastructure, specialised laboratories, advanced diagnostic equipment, and experienced faculty who bring both teaching expertise and clinical experience. Students are trained through classroom teaching, skill labs, clinical postings, and hands-on exposure in affiliated hospitals, giving them a strong foundation in professional practice.
                </p>
              </div>
            )}
          </ContentText>
        </Section>

        {/* 2.3 Management Team */}
        <Section id="management">
          <SectionTitle>Management Team</SectionTitle>
          <ContentText>
            <p>
              The management of our institutions functions under the guidance of the Shanmuga Medical Research Foundation Trust (SMRFT). The team consists of experienced leaders who provide direction, ensure quality, and support the growth of all academic and healthcare units.
            </p>
          </ContentText>
          <CardGrid>
            <MemberCard>
              <div style={{ width: '150px', height: '150px', background: '#ccc', borderRadius: '50%', margin: '0 auto 1rem' }}></div>
              <h4>Dr. P. S. Panneerselvam</h4>
              <p>MS, MNAMS, FAIS, FICS, FIAGES</p>
              <p><strong>Founder & Chairman</strong></p>
              <p>Provides strategic vision, leadership, and overall guidance.</p>
            </MemberCard>

            <MemberCard>
              <div style={{ width: '150px', height: '150px', background: '#ccc', borderRadius: '50%', margin: '0 auto 1rem' }}></div>
              <h4>President / Managing Trustee</h4>
              <p>Oversees trust activities, institutional development, and policy formulation.</p>
            </MemberCard>

            <MemberCard>
              <div style={{ width: '150px', height: '150px', background: '#ccc', borderRadius: '50%', margin: '0 auto 1rem' }}></div>
              <h4>Trustees</h4>
              <p>Support planning, administration, and expansion of educational and healthcare services.</p>
            </MemberCard>

            <MemberCard>
              <div style={{ width: '150px', height: '150px', background: '#ccc', borderRadius: '50%', margin: '0 auto 1rem' }}></div>
              <h4>Chief Executive Officer (CEO)</h4>
              <p>Responsible for implementing policies, coordinating departments, and ensuring smooth functioning of institutions.</p>
            </MemberCard>

            <MemberCard>
              <div style={{ width: '150px', height: '150px', background: '#ccc', borderRadius: '50%', margin: '0 auto 1rem' }}></div>
              <h4>Managing Director</h4>
              <p>Supervises day-to-day operations of hospitals, colleges, and allied units.</p>
            </MemberCard>
          </CardGrid>
        </Section>

        {/* 2.4 Vision and Mission */}
        <Section id="vision-mission">
          <SectionTitle>Vision & Mission</SectionTitle>
          <CardGrid>
            <InfoCard>
              <h3>Vision</h3>
              <ContentText>
                To develop competent, compassionate, and ethical nursing professionals who provide high-quality care, promote community health, and contribute to the advancement of the nursing profession at regional, national, and global levels.
              </ContentText>
            </InfoCard>
            <InfoCard>
              <h3>Mission</h3>
              <ContentText>
                <ul>
                  <li>To provide strong academic and clinical training that builds knowledge, skills, and confidence in nursing practice.</li>
                  <li>To promote professional values, ethical conduct, and patient-centred care in all learning experiences.</li>
                  <li>To create a supportive environment that encourages critical thinking, leadership, and lifelong learning.</li>
                  <li>To engage students in community health activities, research, and evidence-based practice.</li>
                  <li>To prepare graduates who respond effectively to healthcare needs and contribute to the well-being of individuals, families, and communities.</li>
                </ul>
              </ContentText>
            </InfoCard>
          </CardGrid>
        </Section>

        {/* 2.5 Quality Policy */}
        <Section id="quality-policy">
          <SectionTitle>Quality Policy</SectionTitle>
          <ContentText>
            <p>
              Shanmuga College of Nursing is committed to providing high-quality nursing education that meets national standards and prepares students to deliver safe, ethical, and compassionate care. We strive for continuous improvement in academic excellence, clinical training, research activities, and student support services.
            </p>
            <p>Our quality approach focuses on:</p>
            <ul>
              <li>Maintaining a learner-centred environment that promotes growth, competence, and confidence.</li>
              <li>Ensuring effective teaching–learning practices through qualified faculty, updated curriculum, and modern instructional methods.</li>
              <li>Offering structured clinical experiences in well-equipped hospitals to strengthen practical skills and professional behaviour.</li>
              <li>Encouraging research, innovation, and evidence-based practice among students and faculty.</li>
              <li>Promoting values of integrity, respect, teamwork, and accountability in all activities.</li>
              <li>Meeting regulatory requirements, accreditation standards, and institutional policies with transparency and responsibility.</li>
              <li>Regularly evaluating and upgrading infrastructure, resources, and support systems to enhance the educational experience.</li>
            </ul>
          </ContentText>
        </Section>

        {/* 2.6 Approval & Affiliation */}
        <Section id="approval">
          <SectionTitle>Approval and Affiliation</SectionTitle>
          <ContentText>
            <p>Our institutions function with full legal and academic approval from the competent authorities.</p>

            <LogoGrid>
              <LogoItem>
                <img src={NBEMSLogo} alt="NBEMS" />
                <p>THE NATIONAL BOARD OF EXAMINATIONS IN MEDICAL SCIENCES</p>
              </LogoItem>
              <LogoItem>
                <img src={TNGovtLogo} alt="Govt of Tamilnadu" />
                <p>GOVERNMENT OF TAMILNADU</p>
              </LogoItem>
              <LogoItem>
                <img src={TNNMCLogo} alt="TNNMC" />
                <p>THE TAMILNADU NURSES AND MIDWIVES COUNCIL CHENNAI</p>
              </LogoItem>
              <LogoItem>
                <img src={MGRLogo} alt="Dr. MGR University" />
                <p>THE TAMILNADU DR.M.G.R MEDICAL UNIVERSITY CHENNAI</p>
              </LogoItem>
              <LogoItem>
                <img src={INCLogo} alt="Indian Nursing Council" />
                <p>INDIAN NURSING COUNCIL NEW DELHI</p>
              </LogoItem>
            </LogoGrid>
            <br />
            <h3>Specific Approval, Affiliation, and Recognition</h3>
            <p>We maintain transparency, quality, and compliance with all statutory bodies to ensure our students receive a recognised, valuable education.</p>

            <h4>DIPLOMATE OF NATIONAL BOARD (DNB) PROGRAM</h4>
            <p>National Board of Examinations in Medical Sciences (NBEMS)</p>

            <h4>B.Sc. NURSING PROGRAM</h4>
            <ul>
              <li>G.O. No.: Ms. 09, Health and Family Welfare Department, Dated: 07.01.2000 (Starting of Program)</li>
              <li>G.O. No.: Ms. 2339, Health and Family Welfare Department, Dated: 27.06.2007 (Increase of Intake)</li>
              <li>TNNMC: Ref. No. 325/NC/172/2003, Dated: 18.12.2003</li>
              <li>University: Proc. No. 934/Affln.II(1)/2000, Dated: 16.05.2000</li>
              <li>INC: Certificate No. 18-1297/2001-INC, Dated: 11.11.2002</li>
            </ul>

            <h4>M.Sc. NURSING PROGRAM</h4>
            <ul>
              <li>TNNMC: Ref. No. 884/NC/172/06, Dated: 28.05.2006</li>
              <li>University: Proc. No. 4252/Affln.II(1)/04, Dated: 28.05.2004</li>
              <li>INC: Certificate No. 18-29/1267-INC</li>
            </ul>

            <h4>DIPLOMA IN GENERAL NURSING MIDWIFERY (DGNM) PROGRAM</h4>
            <ul>
              <li>G.O. No.: Ms. 479, Health and Family Welfare Department, Dated: 25.08.1998</li>
              <li>TNNMC: Ref. No. 274/NC/172/2003, Dated: 18.12.2003</li>
              <li>INC: Certificate No. 18-1301/2001-INC, Dated: 12.08.2002</li>
            </ul>

            <h4>ALLIED HEALTH SCIENCES (AHS) PROGRAM</h4>
            <ul>
              <li>University: Proc. No. Affln.V(4)/24138/2019, Dated: 10.10.2019</li>
            </ul>
          </ContentText>
        </Section>

        {/* Messages */}
        <Section id="messages">
          <SectionTitle>Leadership Messages</SectionTitle>

          <LeaderMessageCard>
            <LeaderImageContainer>
              <img src={DrPSPSImage} alt="Dr. P. S. Panneerselvam" />
            </LeaderImageContainer>
            <LeaderContent>
              <h3>Dr. P. S. Panneerselvam</h3>
              <h4>Chairman & Correspondent</h4>
              <p>
                "It is my privilege to extend warm greetings to all students, parents, faculty members, and well-wishers of the Shanmuga Group of Institutions. Our institutions were founded with a clear purpose—to provide quality education that combines academic excellence, professional competence, and strong human values. We believe that true education goes beyond textbooks; it is about building character, instilling compassion, and empowering individuals to serve society with dedication."
              </p>
            </LeaderContent>
          </LeaderMessageCard>

          <LeaderMessageCard>
            <LeaderImageContainer>
              <img src={DrPrabuImage} alt="Dr. Prabusankar" />
            </LeaderImageContainer>
            <LeaderContent>
              <h3>Dr. Prabusankar</h3>
              <h4>Chief Executive Officer (CEO)</h4>
              <p>
                "As a surgeon who has grown into the role of Hospital Administrator and CEO of Shanmuga Hospital Ltd., I have witnessed how modern medicine continues to evolve and how patient care has become more complex and demanding. At Shanmuga Group of Institutions, we are committed to preparing the next generation of healthcare professionals who are not only skilled but also adaptable, ethical, and patient-centric. Our goal is to bridge the gap between academic learning and real-world clinical practice."
              </p>
            </LeaderContent>
          </LeaderMessageCard>

        </Section>

      </ContentWrapper>
    </PageContainer>
  );
};

export default AboutGroup;
