import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Heart, Activity } from 'lucide-react';
import HeroImage from '../../Components/Images/home1.png';
import AlliedHealthImage from '../../Components/Images/AlliedHealth.png';
import BscNursingImage from '../../Components/Images/BscNursing.png';
import DiplomaNursingImage from '../../Components/Images/DiplomaNursing.png';
import MscNursingImage from '../../Components/Images/MscNursing.png';
import SmrftImage from '../../Components/Images/smrft-logo.png';

// Lab Images
import AnatomyLabImage from '../../Components/Images/Lab/ANATOMY LAB/Picture64.png';
import ChildHealthLabImage from '../../Components/Images/Lab/CHILD HEALTH NURSING LAB/Picture1.png';
import AvAidsLabImage from '../../Components/Images/Lab/AV AIDS LAB/Picture50.png';

// Affiliation Images
import IncLogo from '../../Components/Images/Affiliations/inc_logo.png';
import MgrLogo from '../../Components/Images/Affiliations/mgr_university_logo.png';
import NbemsLogo from '../../Components/Images/Affiliations/nbems_logo.png';
import TnGovtLogo from '../../Components/Images/Affiliations/tn_govt_logo.png';
import TnnmcLogo from '../../Components/Images/Affiliations/tnnmc_logo.png';

const LandingContainer = styled.div`
  width: 100%;
`;

const HeroSection = styled.div`
  height: 80vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${HeroImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 0 1rem;

  @media (max-width: 768px) {
    height: 70vh;
    padding: 0 1.5rem;
  }
`;

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  
  span {
    display: block;
    font-size: 1.5rem;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    margin-top: 1rem;
    color: var(--accent-gold);
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Slogan = styled.p`
  font-size: 1.8rem;
  font-style: italic;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 800px;
  line-height: 1.6;
`;

const CTAButton = styled(Link)`
  padding: 1rem 2rem;
  background: var(--accent-gold);
  color: #1e293b;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: transform 0.2s, background 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    background: #f1c40f;
  }
`;

const FeaturesSection = styled.div`
  padding: 5rem 2rem;
  background: #f8fafc;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const FeaturesGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled(Link)`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }

  h3 {
    margin: 1.5rem 0 1rem;
    color: var(--primary-blue);
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
  }

  p {
    color: #64748b;
    line-height: 1.6;
  }

  img {
    width: 120px;
    height: 120px;
    object-fit: contain;
    margin-bottom: 1rem;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: var(--primary-blue);
  margin-bottom: 3rem;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: var(--accent-gold);
    margin: 1rem auto 0;
    border-radius: 2px;
  }
`;

const LabSection = styled.div`
  padding: 5rem 2rem;
  background: white;
`;

const AffiliationSection = styled.div`
  padding: 4rem 2rem;
  background: #f8fafc;
  text-align: center;
`;

const AffiliationGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  img {
    height: 80px;
    object-fit: contain;
    filter: grayscale(100%);
    opacity: 0.7;
    transition: all 0.3s;

    &:hover {
      filter: grayscale(0%);
      opacity: 1;
      transform: scale(1.1);
    }
  }
`;

const GroupLanding = () => {
  return (
    <LandingContainer>
      <HeroSection>
        <Title>
          Shanmuga Group of Institutions
          <span>Salem, Tamil Nadu</span>
        </Title>
        <Slogan>"Excellence in Education, Compassion in Care."</Slogan>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <CTAButton to="/Group/About">
            Discover More <ArrowRight size={20} />
          </CTAButton>
        </div>
      </HeroSection>

      <FeaturesSection>
        <SectionTitle>Our Institutions</SectionTitle>
        <FeaturesGrid>
          <FeatureCard to="/Group/Programmes">
            <img src={AlliedHealthImage} alt="Allied Health Sciences" />
            <h3>Shanmuga College of Allied Health Sciences</h3>
            <p>Prepare for a rewarding career in allied health sciences with our comprehensive programmes.</p>
          </FeatureCard>

          <FeatureCard to="/ShanmugaNursingCollege/About">
            <img src={BscNursingImage} alt="College of Nursing" />
            <h3>Shanmuga College of Nursing</h3>
            <p>Nurturing the future of healthcare through excellence in nursing education and compassionate care.</p>
          </FeatureCard>

          <FeatureCard to="/Smrft/About">
            <img src={SmrftImage} alt="SMRFT" />
            <h3>SMRFT</h3>
            <p>Shanmuga Medical Research Foundation Trust - Serving society through health, education, and research.</p>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>


      <LabSection>
        <SectionTitle>Our Laboratories</SectionTitle>
        <FeaturesGrid>
          <FeatureCard as="div">
            <img src={AnatomyLabImage} alt="Anatomy Lab" />
            <h3>Anatomy Lab</h3>
            <p>State-of-the-art anatomy laboratory for practical learning.</p>
          </FeatureCard>
          <FeatureCard as="div">
            <img src={ChildHealthLabImage} alt="Child Health Lab" />
            <h3>Child Health Nursing</h3>
            <p>Specialized lab for pediatric nursing training.</p>
          </FeatureCard>
          <FeatureCard as="div">
            <img src={AvAidsLabImage} alt="AV Aids Lab" />
            <h3>AV Aids Lab</h3>
            <p>Advanced audio-visual aids for enhanced education.</p>
          </FeatureCard>
        </FeaturesGrid>
      </LabSection>

      <AffiliationSection>
        <SectionTitle>Affiliations & Recognitions</SectionTitle>
        <AffiliationGrid>
          <img src={TnGovtLogo} alt="Tamil Nadu Government" title="Government of Tamil Nadu" />
          <img src={MgrLogo} alt="MGR University" title="The Tamil Nadu Dr. M.G.R. Medical University" />
          <img src={IncLogo} alt="Indian Nursing Council" title="Indian Nursing Council" />
          <img src={NbemsLogo} alt="NBEMS" title="National Board of Examinations in Medical Sciences" />
          <img src={TnnmcLogo} alt="TNNMC" title="Tamil Nadu Nurses and Midwives Council" />

        </AffiliationGrid>
      </AffiliationSection>

    </LandingContainer >
  );
};

export default GroupLanding;
