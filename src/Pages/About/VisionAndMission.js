import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Star, ShieldCheck, Check } from 'lucide-react';

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: var(--bg-light);
  font-family: 'Inter', sans-serif;
`;

const HeroSection = styled.div`
  background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-dark) 100%);
  color: white;
  padding: 4rem 1.5rem;
  text-align: center;
`;

const HeroTitle = styled(motion.h1)`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  margin: 0 0 1rem;
  
  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

const TabContainer = styled.div`
  max-width: 1000px;
  margin: -3rem auto 0;
  padding: 0 1.5rem;
  position: relative;
  z-index: 10;
`;

const TabList = styled.div`
  display: flex;
  background: white;
  padding: 0.5rem;
  border-radius: 99px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
  
  @media (max-width: 640px) {
    border-radius: 12px;
    flex-direction: column;
  }
`;

const TabButton = styled.button`
  flex: 1;
  border: none;
  background: none;
  padding: 1rem 2rem;
  border-radius: 99px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  color: ${props => props.isActive ? 'var(--primary-blue)' : 'var(--text-secondary)'};
  transition: color 0.3s;
  font-family: 'Inter', sans-serif;

  @media (max-width: 640px) {
    width: 100%;
    border-radius: 8px;
    text-align: left;
  }
`;

const ActiveIndicator = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: #eff6ff;
  border-radius: 99px;
  z-index: -1;
  border: 1px solid #dbeafe;

  @media (max-width: 640px) {
    border-radius: 8px;
  }
`;

const ContentCard = styled(motion.div)`
  background: white;
  padding: 3rem;
  border-radius: 24px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  margin-bottom: 4rem;
  border: 1px solid #f1f5f9;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
    margin-bottom: 3rem;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  color: var(--primary-blue);

  h2 {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    margin: 0;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.25rem;
  color: var(--text-primary);
  line-height: 1.6;

  span:first-child {
    color: var(--accent-gold);
    flex-shrink: 0;
    margin-top: 0.2rem;
  }
`;

const VisionMission = () => {
  const [activeTab, setActiveTab] = useState('vision');

  const tabs = [
    { id: 'vision', label: 'Vision & Mission', icon: Target },
    { id: 'salient', label: 'Salient Features', icon: Star },
    { id: 'quality', label: 'Quality Policy', icon: ShieldCheck },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'vision':
        return (
          <motion.div
            key="vision"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div style={{ marginBottom: '3rem' }}>
              <SectionHeader>
                <Target size={32} />
                <h2>Vision</h2>
              </SectionHeader>
              <p style={{ fontSize: '1.25rem', color: '#475569', fontStyle: 'italic', marginBottom: '2rem' }}>
                "To become a global leader in Medical Science Education."
              </p>
              <List>
                <ListItem><Check size={20} /><span>To provide quality Management in service and education.</span></ListItem>
                <ListItem><Check size={20} /><span>To work relentlessly to contribute to global knowledge and skill.</span></ListItem>
                <ListItem><Check size={20} /><span>To impact knowledge and interact with organizations of similar interest to reach the unreachable.</span></ListItem>
              </List>
            </div>

            <div>
              <SectionHeader>
                <Target size={32} />
                <h2>Mission</h2>
              </SectionHeader>
              <p style={{ lineHeight: 1.8, fontSize: '1.1rem', color: '#334155' }}>
                To impart futuristic and comprehensive medical education of global standards with a high sense of discipline and social relevance in a serene and invigorating environment. We focus on learner-centered medical education, professionalism in education, services, and management to meet regional and national needs through strategic future-oriented planning and inter-organizational linkage.
              </p>
            </div>
          </motion.div>
        );
      case 'salient':
        return (
          <motion.div
            key="salient"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <SectionHeader>
              <Star size={32} />
              <h2>Salient Features</h2>
            </SectionHeader>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <List>
                <ListItem><Check size={20} /><span>Well qualified internal and external lecturers.</span></ListItem>
                <ListItem><Check size={20} /><span>Extensive practical-oriented education and training.</span></ListItem>
                <ListItem><Check size={20} /><span>Weekly guest lecture programs from specialized hospital medical professionals.</span></ListItem>
                <ListItem><Check size={20} /><span>Good interactions with major health services institutions.</span></ListItem>
                <ListItem><Check size={20} /><span>Central Government approved vocational apprenticeship training.</span></ListItem>
              </List>
              <List>
                <ListItem><Check size={20} /><span>Highly sophisticated internet facilities for Global reference.</span></ListItem>
                <ListItem><Check size={20} /><span>Specialization in Cancer studies and Research.</span></ListItem>
                <ListItem><Check size={20} /><span>Complete training with all the 355 bedded patients in Shanmuga hospitals.</span></ListItem>
                <ListItem><Check size={20} /><span>Intensive critical care training.</span></ListItem>
                <ListItem><Check size={20} /><span>Subject and student-centered learning.</span></ListItem>
              </List>
            </div>
          </motion.div>
        );
      case 'quality':
        return (
          <motion.div
            key="quality"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <SectionHeader>
              <ShieldCheck size={32} />
              <h2>Quality Policy</h2>
            </SectionHeader>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.8 }}>
              Shanmuga Institute is committed to providing quality education to students enabling them to excel in the field of science and medicine to cater to the changing and challenging needs of society.
            </p>
            <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '16px' }}>
              <List>
                <ListItem><Check size={20} /><span>Contributing to the academic standing and overall knowledge development of the student.</span></ListItem>
                <ListItem><Check size={20} /><span>Maintaining state-of-the-art infrastructure and congenial learning environment.</span></ListItem>
                <ListItem><Check size={20} /><span>Enhancing the competence of faculty to a very high level and making them adopt all modern methods.</span></ListItem>
                <ListItem><Check size={20} /><span>Inculcating moral and ethical values among students and staff.</span></ListItem>
                <ListItem><Check size={20} /><span>Promoting research and development programs for the growth of the economy.</span></ListItem>
              </List>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <PageContainer>
      <HeroSection>
        <HeroTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Purpose & Values
        </HeroTitle>
        <p style={{ opacity: 0.9, fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Defining the path to excellence in medical education.
        </p>
      </HeroSection>

      <TabContainer>
        <TabList>
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              <span style={{ position: 'relative', zIndex: 2 }}>{tab.label}</span>
              {activeTab === tab.id && (
                <ActiveIndicator
                  layoutId="activeTab"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </TabButton>
          ))}
        </TabList>

        <AnimatePresence mode="wait">
          <ContentCard>
            {renderContent()}
          </ContentCard>
        </AnimatePresence>
      </TabContainer>
    </PageContainer>
  );
};

export default VisionMission;
