import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Target, CheckCircle, ArrowRight } from 'lucide-react';
import ObjectiveImage from '../../Components/Images/objectives.jpg';

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
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    margin-bottom: 2rem;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  margin: 0 0 1rem;
  
  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Breadcrumb = styled.div`
  color: rgba(255,255,255,0.7);
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: start;

  @media (min-width: 1024px) {
    grid-template-columns: 1.2fr 0.8fr;
  }
  
  @media (max-width: 768px) {
    gap: 2rem;
    padding-bottom: 2rem;
  }
`;

const ObjectivesCard = styled(motion.div)`
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.05);
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  color: var(--primary-blue);
  border-bottom: 1px solid #f1f5f9;
  padding-bottom: 1rem;

  h2 {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    margin: 0;
  }
  
  @media (max-width: 600px) {
    h2 { font-size: 1.75rem; }
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled(motion.li)`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.25rem;
  color: var(--text-primary);
  line-height: 1.6;
  font-size: 1.05rem;
  align-items: flex-start;
  
  &:last-child {
    margin-bottom: 0;
  }

  svg {
    color: var(--primary-blue);
    flex-shrink: 0;
    margin-top: 0.2rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    gap: 0.75rem;
  }
`;

const ImageContainer = styled(motion.div)`
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  position: relative;
  
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s;
    object-fit: cover;
    min-height: 400px;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
  
  @media (max-width: 1024px) {
    display: none; /* Hide image on smaller screens if desired, or keep it */
    /* Let's show it, but maybe below? */
    display: block;
    order: -1; /* Show image first on mobile? Or stick to standard order */
    order: 0;
  }
  
  @media (max-width: 1024px) {
    img {
      min-height: 300px;
    }
  }
`;

const Objectives = () => {
  const objectivesList = [
    "To offer world-class Under Graduate, Post Graduate and Doctoral programmes in Medical Education.",
    "To provide enriching, stimulating, and rewarding experiences from the practical world.",
    "To promote and strengthen national and international linkages with Medical Institutes, Academics, and society in general.",
    "To carry out research and development activities useful to society.",
    "To develop holistic personality with positive and creative attitudes.",
    "To offer modern and career-oriented education.",
    "To give priority to health professionals.",
    "To offer self-employment and campus interviews.",
    "To enhance students' intake ability.",
    "To deliver complete practical-oriented training from our multi-specialty Shanmuga Hospital and Salem Cancer Institute."
  ];

  return (
    <PageContainer>
      <HeroSection>
        <Breadcrumb>About Us</Breadcrumb>
        <HeroTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Objectives
        </HeroTitle>
        <p style={{ opacity: 0.9, fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Key goals driving our commitment to medical excellence.
        </p>
      </HeroSection>

      <ContentContainer>
        <ObjectivesCard
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SectionHeader>
            <Target size={32} />
            <h2>Core Objectives</h2>
          </SectionHeader>

          <List>
            {objectivesList.map((item, index) => (
              <ListItem
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (index * 0.05) }}
              >
                <CheckCircle size={20} />
                <span>{item}</span>
              </ListItem>
            ))}
          </List>
        </ObjectivesCard>

        <ImageContainer
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img src={ObjectiveImage} alt="Students learning objectives" />
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
            padding: '2rem',
            color: '#ffffff',
            zIndex: 2
          }}>
            <h3 style={{ margin: 0, fontSize: '1.5rem', fontFamily: 'Playfair Display, serif', color: '#ffffff' }}>Global Standards</h3>
            <p style={{ margin: '0.5rem 0 0', opacity: 0.9, color: 'rgba(255, 255, 255, 0.9)' }}>Committed to excellence in healthcare education.</p>
          </div>
        </ImageContainer>
      </ContentContainer>
    </PageContainer>
  );
};

export default Objectives;
