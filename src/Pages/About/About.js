import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CheckCircle, Award } from 'lucide-react';
import DRIMAGE from '../../Components/Images/sims-dr.jpg';

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
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 768px) {
    gap: 2rem;
    padding-bottom: 2rem;
  }
`;

const TextContent = styled(motion.div)`
  line-height: 1.8;
  font-size: 1.1rem;
  color: var(--text-primary);
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HighlightBox = styled.div`
  border-left: 4px solid var(--accent-gold);
  padding-left: 1.5rem;
  margin: 2rem 0;
  font-style: italic;
  color: var(--text-secondary);
  font-size: 1.15rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 1.5rem 0;
    padding-left: 1rem;
  }
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s;
  }

  &:hover img {
    transform: scale(1.05);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    border: 1px solid rgba(0,0,0,0.1);
    z-index: 1;
    pointer-events: none;
  }
`;

const AffiliationList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 2rem;
`;

const ListItem = styled(motion.li)`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
  
  svg {
    color: var(--primary-blue);
    flex-shrink: 0;
    margin-top: 0.3rem;
  }
  
  span {
    font-size: 1rem;
    
    @media (max-width: 768px) {
      font-size: 0.95rem;
    }
  }
`;

const ChairmanName = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  margin-top: -2rem;
  position: relative;
  z-index: 2;
  margin-left: 2rem;
  margin-right: 2rem;
  text-align: center;
  border: 1px solid #f1f5f9;

  h3 {
    margin: 0;
    color: var(--primary-blue);
    font-family: 'Playfair Display', serif;
  }

  p {
    margin: 0.5rem 0 0;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }
  
  @media (max-width: 480px) {
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: -1.5rem;
    padding: 1rem;
  }
`;

const About = () => {
  return (
    <PageContainer>
      <HeroSection>
        <Breadcrumb>About Us</Breadcrumb>
        <HeroTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          A Legacy of Excellence
        </HeroTitle>
      </HeroSection>

      <ContentContainer>
        <TextContent
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            Shanmuga Institute of Post Graduate Medical Science was established in 1998
            under the visionary leadership of Dr. P.S. Panneer Selvam.
            Our institution stands as a beacon of medical education, committed to nurturing
            health professionals with both knowledge and compassion.
          </p>

          <HighlightBox>
            "A self-contained campus accompanied by the 355-bed Shanmuga Hospital and
            Salem Cancer Institute, providing unparalleled clinical exposure."
          </HighlightBox>

          <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.5rem', marginTop: '2rem', color: 'var(--text-primary)' }}>
            Accreditations & Approvals
          </h3>
          <AffiliationList>
            <ListItem initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
              <CheckCircle size={20} />
              <span>Affiliated to the Tamil Nadu Dr. MGR Medical University</span>
            </ListItem>
            <ListItem initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
              <Award size={20} />
              <span>Approved by the Government of Tamil Nadu (Autonomous Structure)</span>
            </ListItem>
            <ListItem initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
              <CheckCircle size={20} />
              <span>Approved by Indian Nursing Council (INC)</span>
            </ListItem>
            <ListItem initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
              <CheckCircle size={20} />
              <span>Permanently approved by Tamil Nadu Nursing and Midwifery Council</span>
            </ListItem>
          </AffiliationList>
        </TextContent>

        <div style={{ position: 'relative' }}>
          <ImageWrapper
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img src={DRIMAGE} alt="Dr. P.S. Panneer Selvam" />
          </ImageWrapper>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <ChairmanName>
              <h3>Dr. P.S. Panneer Selvam</h3>
              <p>MS, MNAMS, FAIS, FICS, FIAGES</p>
              <p style={{ marginTop: '0.25rem', fontWeight: 500 }}>Chairman</p>
            </ChairmanName>
          </motion.div>
        </div>
      </ContentContainer>
    </PageContainer>
  );
};

export default About;
