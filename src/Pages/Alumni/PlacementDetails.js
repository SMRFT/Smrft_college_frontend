import React, { useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import placement from '../../Components/Images/placement.png';
import { useNavigate } from 'react-router-dom';
// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// Styled Components
const Section = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(120deg, #f8fafc 0%, #e2e8f0 100%);
  font-family: 'Poppins', sans-serif;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -50px;
    right: -50px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(30, 58, 138, 0.05) 0%, rgba(30, 58, 138, 0) 70%);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -80px;
    left: -80px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(30, 58, 138, 0.05) 0%, rgba(30, 58, 138, 0) 70%);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  animation: ${fadeInUp} 0.8s ease-out;
  
  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #1e3a8a, #2563eb);
    border-radius: 2px;
  }
`;

const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  color: var(--primary-blue);
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
  background: linear-gradient(90deg, #1e293b, var(--primary-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 992px) {
    grid-template-columns: 45% 55%;
  }
  
  @media (max-width: 991px) {
    gap: 2rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  height: 100%;
  min-height: 350px;
  animation: ${fadeInUp} 1s ease-out;
  
  @media (max-width: 768px) {
    min-height: 250px;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
    z-index: 1;
  }
`;

const StylishBadge = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.9);
  color: var(--primary-blue);
  padding: 0.5rem 1.2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 2;
  backdrop-filter: blur(5px);
`;

const PlacementImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease;
  
  ${ImageWrapper}:hover & {
    transform: scale(1.08);
  }
`;

const ContentCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  animation: ${fadeInUp} 1.2s ease-out;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 150px;
    height: 150px;
    background: linear-gradient(135deg, rgba(30, 58, 138, 0.05) 0%, rgba(30, 58, 138, 0) 70%);
    border-radius: 0 0 0 150px;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary-blue);
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background: #2563eb;
    border-radius: 1.5px;
  }
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
`;

const ListItem = styled.li`
  position: relative;
  padding-left: 2rem;
  margin-bottom: 1rem;
  font-size: 1.05rem;
  color: var(--text-primary);
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    width: 12px;
    height: 12px;
    background: #2563eb;
    border-radius: 50%;
    transform: scale(0.7);
    transition: transform 0.2s ease;
  }
  
  &:hover::before {
    transform: scale(1);
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CountriesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin: 1.5rem 0;
`;

const CountryTag = styled.span`
  background: ${props => props.featured ?
    'linear-gradient(135deg, var(--primary-blue), #2563eb)' :
    'linear-gradient(135deg, var(--text-secondary), #475569)'};
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(30, 58, 138, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(30, 58, 138, 0.3);
  }
  
  ${props => props.featured && css`
    animation: ${float} 3s ease-in-out infinite;
  `}
  
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
`;

const StatisticsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2.5rem;
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const StatCard = styled.div`
  background: #f8fafc;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(30, 58, 138, 0.1);
  
  &:hover {
    background: white;
    box-shadow: 0 8px 20px rgba(30, 58, 138, 0.15);
    transform: translateY(-5px);
  }
  
  @media (max-width: 600px) {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: var(--primary-blue);
  margin-bottom: 0.5rem;
  background: linear-gradient(90deg, var(--primary-blue), #2563eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 600px) {
    font-size: 1.5rem;
    margin-bottom: 0;
  }
`;

const StatText = styled.div`
  font-size: 0.95rem;
  color: var(--text-secondary);
  font-weight: 500;
`;

const HighlightBanner = styled.div`
  background: linear-gradient(135deg, #1e3a8a, #172554);
  border-radius: 12px;
  padding: 1.5rem 2rem;
  margin-top: 2.5rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 8px 20px rgba(30, 58, 138, 0.2);
  
  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    padding: 1.5rem;
  }
`;

const BannerText = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
`;

const BannerBtn = styled.button`
  background: white;
  color: #1e3a8a;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const PlacementDetails = () => {
  const sectionRef = useRef(null);

  const navigate = useNavigate(); // Hook for navigation
  // Featured countries will have animation and special styling
  const countries = [
    { name: "USA", featured: true },
    { name: "UK", featured: true },
    { name: "Ireland", featured: false },
    { name: "New Zealand", featured: false },
    { name: "Australia", featured: true },
    { name: "Singapore", featured: false },
    { name: "Europe", featured: false },
    { name: "Malaysia", featured: false }
  ];

  const placementOptions = [
    "State hospitals (Private & Government)",
    "Industrial hospitals and healthcare facilities",
    "Central government healthcare sectors",
    "Global healthcare institutions and medical centers"
  ];

  return (
    <Section ref={sectionRef}>
      <Container>
        <Header>
          <Title>Global Placement Opportunities</Title>
          <Subtitle>Building healthcare careers across borders</Subtitle>
        </Header>

        <ContentWrapper>
          <ImageWrapper>
            <StylishBadge>Global Success</StylishBadge>
            <PlacementImage
              src={placement}
              alt="Students placed in global healthcare institutions"
            />
          </ImageWrapper>

          <ContentCard>
            <CardTitle>Your Journey to Global Healthcare</CardTitle>

            <Paragraph>
              Our graduates build successful careers in prestigious healthcare institutions worldwide, with exceptional placement records spanning multiple continents.
            </Paragraph>

            <StyledList>
              {placementOptions.map((option, index) => (
                <ListItem key={index}>{option}</ListItem>
              ))}
            </StyledList>

            <Paragraph>
              <strong>Where our graduates excel:</strong> Our alumni network spans across these international healthcare markets, creating a global footprint of excellence.
            </Paragraph>

            <CountriesList>
              {countries.map((country, index) => (
                <CountryTag
                  key={index}
                  featured={country.featured}
                >
                  {country.name}
                </CountryTag>
              ))}
            </CountriesList>

            <StatisticsGrid>
              <StatCard>
                <StatNumber>95%+</StatNumber>
                <StatText>Placement Rate</StatText>
              </StatCard>
              <StatCard>
                <StatNumber>30+</StatNumber>
                <StatText>Global Partners</StatText>
              </StatCard>
              <StatCard>
                <StatNumber>8</StatNumber>
                <StatText>Countries</StatText>
              </StatCard>
            </StatisticsGrid>

            <HighlightBanner>
              <BannerText>Ready to start your global healthcare journey?</BannerText>
              <BannerBtn onClick={() => navigate('/ShanmugaNursingCollege/EnquiryAndCourses')}>
                Contact Us
              </BannerBtn>
            </HighlightBanner>
          </ContentCard>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default PlacementDetails;