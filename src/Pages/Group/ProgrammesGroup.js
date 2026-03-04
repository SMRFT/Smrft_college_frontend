import React from 'react';
import styled from 'styled-components';
import BscNursingImage from '../../Components/Images/BscNursing.png';
import MscNursingImage from '../../Components/Images/MscNursing.png';
import DiplomaNursingImage from '../../Components/Images/DiplomaNursing.png';
import AlliedHealthImage from '../../Components/Images/AlliedHealth.png';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  font-family: 'Inter', sans-serif;
  color: #334155;
`;

const Section = styled.section`
  margin-bottom: 5rem;
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: var(--primary-blue);
  margin-bottom: 2rem;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: var(--accent-gold);
    margin-top: 0.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContentText = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #475569;

  ul {
    margin-left: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
`;

const CourseCard = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  border: 1px solid #f1f5f9;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  h3 {
    color: var(--primary-blue);
    margin-bottom: 1rem;
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: 1rem;
  }

  h4 {
    color: var(--text-primary);
    margin: 1.5rem 0 0.5rem;
    font-size: 1.2rem;
  }

  .course-image {
    width: 100%;
    height: 300px;
    object-fit: contain;
    border-radius: 8px;
    margin-bottom: 2rem;
    background: #f8fafc;
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

const ProgrammesGroup = () => {
  const [activeTab, setActiveTab] = React.useState('bsc_nursing');

  return (
    <PageContainer>
      <SectionTitle style={{ textAlign: 'center' }}>Our Programmes</SectionTitle>

      <TabContainer>
        <TabButton active={activeTab === 'bsc_nursing'} onClick={() => setActiveTab('bsc_nursing')}>B.Sc. Nursing</TabButton>
        <TabButton active={activeTab === 'msc_nursing'} onClick={() => setActiveTab('msc_nursing')}>M.Sc. Nursing</TabButton>
        <TabButton active={activeTab === 'dgnm'} onClick={() => setActiveTab('dgnm')}>DGNM</TabButton>
        <TabButton active={activeTab === 'ahs'} onClick={() => setActiveTab('ahs')}>Allied Health Sciences</TabButton>
      </TabContainer>

      <Section>


        {activeTab === 'bsc_nursing' && (
          <CourseCard>
            <img src={BscNursingImage} alt="B.Sc Nursing" className="course-image" />
            <h3>B.Sc. Nursing</h3>
            <ContentText>
              <h4>Course Duration</h4>
              <ul>
                <li>4 years (Full-time undergraduate program)</li>
                <li>Includes theory classes, simulation lab training, and clinical postings.</li>
                <li>Total Intake: 60 Students/year</li>
              </ul>

              <h4>Eligibility Criteria</h4>
              <ul>
                <li><strong>Qualification:</strong> Passed 10+2 / HSC with Physics, Chemistry, Biology, and English.</li>
                <li><strong>Minimum Marks:</strong> 45% for General, 40% for SC/ST/OBC.</li>
                <li><strong>Age Limit:</strong> Minimum 17 years. No upper age limit.</li>
                <li><strong>Gender:</strong> Male and Female candidates eligible.</li>
                <li><strong>Health:</strong> Use be medically fit.</li>
              </ul>

              <h4>Career Opportunities</h4>
              <p>Registered Nurse, Nurse Educator, Community Health Nurse, ICU Nurse, Nursing Officer, Research Assistant, etc.</p>
            </ContentText>
          </CourseCard>
        )}

        {activeTab === 'msc_nursing' && (
          <CourseCard>
            <img src={MscNursingImage} alt="M.Sc Nursing" className="course-image" />
            <h3>M.Sc. Nursing</h3>
            <ContentText>
              <h4>Specialties Offered</h4>
              <ul>
                <li>Medical Surgical Nursing - 5 seats</li>
                <li>Paediatric (Child Health) Nursing - 4 seats</li>
                <li>Obstetric and Gynaecological Nursing - 5 seats</li>
                <li>Community Health Nursing - 4 seats</li>
                <li>Psychiatric (Mental Health) Nursing - 5 seats</li>
              </ul>

              <h4>Course Duration</h4>
              <ul>
                <li>2 years (Full-time postgraduate programme)</li>
              </ul>

              <h4>Eligibility Criteria</h4>
              <ul>
                <li>Completed B.Sc. Nursing / Post Basic B.Sc. Nursing.</li>
                <li>min 55% aggregate marks (5% relaxation for SC/ST).</li>
                <li>Registered Nurse and Registered Midwife (RNRM).</li>
                <li>Minimum 1 year of work experience after B.Sc. Nursing.</li>
              </ul>
            </ContentText>
          </CourseCard>
        )}

        {activeTab === 'dgnm' && (
          <CourseCard>
            <img src={DiplomaNursingImage} alt="Diploma in Nursing" className="course-image" />
            <h3>Diploma in General Nursing & Midwifery (DGNM)</h3>
            <ContentText>
              <p>The DGNM program prepares students to become skilled and compassionate nursing professionals.</p>
              <h4>Course Duration</h4>
              <ul>
                <li>3 years of academic and clinical training</li>
                <li>Total Intake: 20 students/year</li>
              </ul>
              <h4>Eligibility Criteria</h4>
              <ul>
                <li>10+2 pass in any stream (Science preferred).</li>
                <li>Minimum 40% marks.</li>
                <li>Age limit: 17 to 35 years.</li>
              </ul>
            </ContentText>
          </CourseCard>
        )}

        {activeTab === 'ahs' && (
          <CourseCard>
            <img src={AlliedHealthImage} alt="Allied Health Sciences" className="course-image" />
            <h3>B.Sc. Allied Health Sciences</h3>
            <ContentText>
              <h4>Courses Offered</h4>
              <ul>
                <li>B.Sc – Operation Theatre and Anaesthesia Technology</li>
                <li>B.Sc – Physician Assistant</li>
                <li>B.Sc – Respiratory Therapy</li>
                <li>B.Sc – Radiotherapy Technology</li>
                <li>B.Sc – Radiography & Imaging Technology</li>
              </ul>

              <h4>Course Duration</h4>
              <ul>
                <li>4 Years (3 years academic + 1 year internship)</li>
                <li>Total Intake: 20 Students/year in each branch</li>
              </ul>

              <h4>Eligibility Criteria</h4>
              <ul>
                <li>Passed 10+2 with Physics, Chemistry, Biology.</li>
                <li>Minimum 50% aggregate in PCB subjects.</li>
                <li>Minimum age 17 years.</li>
              </ul>
              <h4>Admission Requirements</h4>
              <p>10th & 12th Mark Sheets, TC, Community Certificate, Aadhaar, Photos, Medical Fitness.</p>
            </ContentText>
          </CourseCard>
        )}
      </Section>
    </PageContainer>
  );
};

export default ProgrammesGroup;
