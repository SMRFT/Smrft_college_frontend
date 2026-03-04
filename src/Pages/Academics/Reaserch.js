import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const ResearchShowcase = () => {
  const [activeTab, setActiveTab] = useState('ug2023');
  const [expandedProject, setExpandedProject] = useState(null);
  
  // Handle tab switching
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setExpandedProject(null);
  };
  
  // Toggle project expansion
  const toggleProject = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };
  
  // Research data organized by category
  const researchData = {
    ug2022: [
      "A study to assess the effectiveness of Cole applications on arteriovenous fistula puncture pain among patients undergoing hemodralysis at Shanmuga Hospital, Salem.",
      "A pre-experimental study to assess the level of knowledge on diabetic foot care among diabetic patient attending regular outpatient department at Shanmuga Hospital at Salem.",
      "A study to assess the effectiveness of stress reduction technique among newly joined I year B.Sc Nursing students in a selected College, Salem.",
      "A study to assess the knowledge on childhood obesity among mothers of school going children in a selected hospital, Salem."
    ],
    ug2023: [
      "A study to assess the effectiveness of Video-Assisted Teaching program about bushing technique on knowledge regarding prevention of dental cares among children's in selected school at Salem.",
      "A study to assess the level of knowledge regarding the effects of substance abuse among students in a selected college at Salem.",
      "A study to assess the effectiveness of video assisted teaching program on knowledge and attitude towards the hazards of plastic usage among selected community area at Salem.",
      "A study to assess the effectiveness of yoga on stress reduction among the male students in a college, Salem.",
      "A study to assess the level of knowledge on Biomedical waste and its management among nursing students in selected college at salem.",
      "A study to assess the knowledge on substance use and its effects among the student studying in a selected college, Salem."
    ],
    pg2022: [
      "A study to assess the effectiveness of ocular exercise for computer vision syndrome in terms of severity & self reported practice among childen in selected School at salem.",
      "A study to assess the effectiveness of laughter therapy on quality of life among cancer patients undergoing radiation therapy in selected community area at salem.",
      "A study to assess the effectiveness of VAT program on dementia in terms of knowledge and attitude among elderly people in a selected community area at salem.",
      "A study to assess the effectiveness of ICCE massage of Hegu point on pain during AVF puncture among Hemodialysis patient in selected hospital at salem.",
      "A study to assess the effectiveness of VAT program on immune boosting measures on Covid-19 in term of knowledge & self reported practice among mother of school age Children in selected community area at salem.",
      "A study to assess the effectiveness of information booklet on early detection of breast cancer interm of knowledge among women attending out patient department in selected hospital at salem.",
      "Effectiveness of self affirmation technique on depression anxiety and stress among adolescent at selected schools salem.",
      "A study to evaluate the effectiveness of VAT program on knowledge and attitude regarding social media addiction & its impact among nursing students in selected college at salem.",
      "A study to evaluate the effectiveness of token economy on behavioural problem among mentally challenge children special school at salem.",
      "A study to correlate the stress coping strategies among parents of special needs child at selected center in salem.",
      "A study to evaluate the effectiveness of bibliotherapy on self esteem among adolescent in selected college of Nursing.",
      "A study to assess the effectiveness of IEC on prevention of polycystic ovarian syndrome interm of knowledge & self reported practice among adolescent girls selected college at salem.",
      "A study to assess the effectiveness of cutanous stimulation level of pain related A V fistula puncture in patient undergoing Hemodialysis in shanmuga Hospital at Salem.",
      "A study to assess the effectiveness of cold application on pain after hemorechoidation among patient in shanmuga hospital at salem."
    ],
    pg2023: [
      "A study to evaluate the effectiveness of targeted educational approach on postmenopausal empowerment strategies in term of knowledge & attitude among perimenopausal work women in selected college at salem.",
      "A study to evaluate the effectiveness of comprehensive reproductive health intervention interms of knowledge & self reported practice among late adolescent girls in selected college at salem.",
      "A study to assess the effectiveness of Nursing intervention based on Newman model for chemotherapy induced Nausea & Vomiting among chemotherapy patient at Shanmuga Hospital.",
      "A study to assess the effectiveness of STP on knowledge & practice regarding the maintenance of Body mechanism during transfer of patient among internship student selected nursing college salem.",
      "A study to assess the effectiveness of planned teaching on knowledge regarding prevention & management of varicose vein among sales personnel at selected shop in salem.",
      "A study to assess the effectiveness on VATP on First Aid for common medical emergencies in children interms of knowledge & selected reported practice among school teachers at selected school at salem.",
      "A study to assess the effectiveness of muscle strengthen exercise interm of knowledge & practice regarding low back pain among women in selected rural area at salem.",
      "A study to assess the effectiveness of adaptive strategies stress among 1 year nursing students in a selected nursing college at salem.",
      "A study to assess the effectiveness of constructive educational approach on preeclampsia in terms of knowledge & self reported practice among ANM at selected hospital at salem."
    ]
  };
  
  return (
    <ResearchContainer>
      <Header>
        <Title>Research Projects</Title>
        <Subtitle>Explore our academic contributions to nursing and healthcare</Subtitle>
      </Header>
      
      <TabsContainer>
        <TabButton 
          active={activeTab === 'ug2022'} 
          onClick={() => handleTabChange('ug2022')}
        >
          UG 2022
        </TabButton>
        <TabButton 
          active={activeTab === 'ug2023'} 
          onClick={() => handleTabChange('ug2023')}
        >
          UG 2023
        </TabButton>
        <TabButton 
          active={activeTab === 'pg2022'} 
          onClick={() => handleTabChange('pg2022')}
        >
          PG 2022
        </TabButton>
        <TabButton 
          active={activeTab === 'pg2023'} 
          onClick={() => handleTabChange('pg2023')}
        >
          PG 2023
        </TabButton>
      </TabsContainer>
      
      <ContentSection>
        <CategoryLabel>
          {activeTab.includes('ug') ? 'Undergraduate' : 'Postgraduate'} Research Projects ({activeTab.slice(-4)})
        </CategoryLabel>
        
        <ProjectsGrid>
          {researchData[activeTab].map((project, index) => (
            <ProjectCard 
              key={index} 
              onClick={() => toggleProject(index)}
              expanded={expandedProject === index}
            >
              <ProjectNumber>#{index + 1}</ProjectNumber>
              <ProjectTitle expanded={expandedProject === index}>
                {project}
              </ProjectTitle>
              
              {expandedProject === index && (
                <ProjectDetails>
                  <DetailRow>
                    <DetailLabel>Research Type:</DetailLabel>
                    <DetailValue>{project.toLowerCase().includes('assess') ? 'Assessment Study' : 'Effectiveness Study'}</DetailValue>
                  </DetailRow>
                  <DetailRow>
                    <DetailLabel>Location:</DetailLabel>
                    <DetailValue>Salem</DetailValue>
                  </DetailRow>
                  <DetailRow>
                    <DetailLabel>Category:</DetailLabel>
                    <DetailValue>
                      {project.toLowerCase().includes('hospital') ? 'Hospital-based' : 
                       project.toLowerCase().includes('community') ? 'Community-based' :
                       project.toLowerCase().includes('school') ? 'School-based' :
                       project.toLowerCase().includes('college') ? 'College-based' : 'Clinical Study'}
                    </DetailValue>
                  </DetailRow>
                </ProjectDetails>
              )}
              
              <ExpandIcon expanded={expandedProject === index}>
                {expandedProject === index ? '−' : '+'}
              </ExpandIcon>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ContentSection>
      
      <StatsContainer>
        <StatItem>
          <StatNumber>{researchData.ug2022.length + researchData.ug2023.length}</StatNumber>
          <StatLabel>UG Projects</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>{researchData.pg2022.length + researchData.pg2023.length}</StatNumber>
          <StatLabel>PG Projects</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>
            {Object.values(researchData).flat().length}
          </StatNumber>
          <StatLabel>Total Studies</StatLabel>
        </StatItem>
      </StatsContainer>
    </ResearchContainer>
  );
};

// Animation keyframes
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideInUp = keyframes`
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Styled Components
const ResearchContainer = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #ebf0f6 100%);
  font-family: 'Poppins', sans-serif;
  min-height: 100vh;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  animation: ${fadeIn} 0.8s ease-out;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  
  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #3498db, #2c3e50);
    margin: 1rem auto;
    border-radius: 2px;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #5d6d7e;
  max-width: 600px;
  margin: 0 auto;
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const TabButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: ${props => props.active ? 'linear-gradient(135deg, #3498db, #2980b9)' : 'white'};
  color: ${props => props.active ? 'white' : '#34495e'};
  border: none;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);
  }
`;

const ContentSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  animation: ${slideInUp} 0.6s ease-out;
`;

const CategoryLabel = styled.h3`
  font-size: 1.4rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-weight: 600;
  padding-left: 0.5rem;
  border-left: 4px solid #3498db;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  height: ${props => props.expanded ? 'auto' : '120px'};
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectNumber = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(52, 152, 219, 0.1);
  color: #3498db;
  padding: 0.3rem 0.7rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const ProjectTitle = styled.h4`
  font-size: 1rem;
  line-height: 1.6;
  color: #2c3e50;
  margin-bottom: ${props => props.expanded ? '1.5rem' : '0'};
  padding-right: 2rem;
  display: -webkit-box;
  -webkit-line-clamp: ${props => props.expanded ? 'unset' : '3'};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ProjectDetails = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px dashed #e0e6ed;
  animation: ${fadeIn} 0.4s ease-out;
`;

const DetailRow = styled.div`
  display: flex;
  margin-bottom: 0.8rem;
  font-size: 0.9rem;
`;

const DetailLabel = styled.span`
  font-weight: 600;
  color: #34495e;
  width: 120px;
`;

const DetailValue = styled.span`
  color: #5d6d7e;
  flex: 1;
`;

const ExpandIcon = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1.5rem;
  width: 28px;
  height: 28px;
  background: ${props => props.expanded ? 'linear-gradient(135deg, #e74c3c, #c0392b)' : 'linear-gradient(135deg, #3498db, #2980b9)'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  transition: all 0.3s ease;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 3rem;
  flex-wrap: wrap;
`;

const StatItem = styled.div`
  text-align: center;
  background: white;
  padding: 1.5rem 2.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  min-width: 180px;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #3498db;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: #7f8c8d;
  font-weight: 500;
`;

export default ResearchShowcase;