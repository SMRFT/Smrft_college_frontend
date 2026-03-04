import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  background-color: #f8fafc;
  min-height: 100vh;
  padding-bottom: 4rem;
  font-family: 'Inter', sans-serif;
  color: #1e293b;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
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

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    h1 {
      font-size: 2.5rem;
    }
  }
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const TabButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  background: ${props => props.active ? 'var(--primary-blue)' : '#ffffff'};
  color: ${props => props.active ? 'white' : '#64748b'};
  border-radius: 99px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Inter', sans-serif;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid ${props => props.active ? 'var(--primary-blue)' : '#e2e8f0'};

  &:hover {
    background: ${props => props.active ? 'var(--primary-blue)' : '#f8fafc'};
    transform: translateY(-2px);
  }
`;

const FacilityCard = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  transition: transform 0.3s ease;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    border-color: var(--primary-blue);
  }

  h3 {
    color: var(--primary-blue);
    margin-bottom: 1rem;
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    border-bottom: 2px solid var(--accent-gold);
    padding-bottom: 0.5rem;
    display: inline-block;
  }

  h4 {
    color: #0f172a;
    font-size: 1.2rem;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
    font-weight: 600;
  }
`;

const ContentText = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #475569;
  text-align: justify;

  p {
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-top: 1rem;
    
    li {
      margin-bottom: 0.75rem;
      padding-left: 1.5rem;
      position: relative;
      
      &:before {
        content: "•";
        color: var(--primary-blue);
        font-weight: bold;
        position: absolute;
        left: 0;
      }
    }
  }
`;

const ClinicalGroup = () => {
  const [activeTab, setActiveTab] = React.useState('parent');

  return (
    <PageContainer>
      <HeroHeader>
        <h1>Clinical Facilities</h1>
        <p>World-class training environments for hands-on medical experience</p>
      </HeroHeader>

      <ContentWrapper>
        <TabContainer>
          <TabButton active={activeTab === 'parent'} onClick={() => setActiveTab('parent')}>Parent Hospital</TabButton>
          <TabButton active={activeTab === 'affiliated'} onClick={() => setActiveTab('affiliated')}>Affiliated Hospitals</TabButton>
          <TabButton active={activeTab === 'community'} onClick={() => setActiveTab('community')}>Community Training</TabButton>
        </TabContainer>

        {activeTab === 'parent' && (
          <FacilityCard>
            <h3>Parent Hospital: Shanmuga Hospital</h3>
            <ContentText>
              <p>
                Shanmuga Hospital Ltd, established under the Shanmuga Medical Research Foundation Trust, serves as the primary clinical training site. It is a 151-bed multi-specialty hospital known for high-quality patient care and advanced diagnostic services.
              </p>
              <p>
                The hospital records over 90% occupancy, providing students with exposure to diverse clinical cases in General Medicine, Surgery, Paediatrics, OBG, Psychiatry, Oncology, Emergency Care, and more.
              </p>
              <h4>Key Facilities:</h4>
              <ul>
                <li>150+ In-patient beds</li>
                <li>Computerized Central Laboratory</li>
                <li>Research Labs for Pathology & Microbiology</li>
                <li>Advanced Biochemistry Research Facilities</li>
                <li>Multi-Gymnasium & Rehabilitation Centre</li>
              </ul>
            </ContentText>
          </FacilityCard>
        )}

        {activeTab === 'affiliated' && (
          <FacilityCard>
            <h3>Affiliated Hospitals</h3>
            <ContentText>
              <h4>Government Mohan Kumaramangalam Medical College & Hospital, Salem</h4>
              <p>
                Students are posted here for specialised clinical experience in Mental Health, Community Health, OBG, Child Health, Forensic Medicine, and other specialties like Cardiology and Neurology.
              </p>

              <h4>Arockya Hospital</h4>
              <p>
                Specialised training in Obstetric & Gynaecological Nursing is provided here, covering antenatal, intranatal, postnatal care, and newborn management.
              </p>
            </ContentText>
          </FacilityCard>
        )}

        {activeTab === 'community' && (
          <FacilityCard>
            <h3>Community Field Training</h3>
            <ContentText>
              <p>
                Students receive training in Urban and Rural Primary Health Centres (PHC) to understand community health needs, conduct home visits, and participate in national health programmes.
              </p>
              <p>
                This hands-on experience helps students develop skills in community diagnosis, health education, and implementing preventive healthcare measures at the grassroots level.
              </p>
            </ContentText>
          </FacilityCard>
        )}
      </ContentWrapper>
    </PageContainer>
  );
};

export default ClinicalGroup;
