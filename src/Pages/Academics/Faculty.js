import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Users, BookOpen, Heart, Activity, Brain, Baby, Stethoscope } from 'lucide-react';
import GroupPhoto from '../../Components/Images/Teacherday.png'; // Using Teacherday as a faculty group representation
import PrincipalImage from '../../Components/Images/sims-dr.jpg'; // Using sims-dr as Principal/Leadership

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: var(--bg-light);
  font-family: 'Inter', sans-serif;
  padding-bottom: 4rem;
`;

const HeroSection = styled.div`
  background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-dark) 100%);
  color: white;
  padding: 5rem 1.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
`;

const HeroTitle = styled(motion.h1)`
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  margin-bottom: 1rem;
  z-index: 10;
  position: relative;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto;
  opacity: 0.9;
  z-index: 10;
  position: relative;
`;

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
`;

const LeadershipCard = styled(motion.div)`
  display: flex;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  margin-bottom: 4rem;
  
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const LeadershipImage = styled.div`
  flex: 1;
  min-height: 400px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const LeadershipContent = styled.div`
  flex: 1.5;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: var(--primary-blue);
  margin-bottom: 2rem;
  text-align: center;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: var(--accent-gold);
    margin: 1rem auto;
    border-radius: 2px;
  }
`;

const FacultyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const DeptCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  border: 1px solid rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  text-align: center;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
    border-color: var(--accent-gold);
  }
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  background: #f0f9ff;
  color: var(--primary-blue);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 1.5rem;
`;

const DeptName = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #1e293b;
`;

const DeptDescription = styled.p`
  color: #64748b;
  line-height: 1.6;
`;

const GroupImageSection = styled.div`
  margin-top: 6rem;
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 40px -10px rgba(0,0,0,0.2);
  
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.02);
  }
  
  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
    display: flex;
    align-items: flex-end;
    padding: 3rem;
  }
  
  h3 {
    color: white;
    font-size: 2rem;
    font-family: 'Playfair Display', serif;
  }
`;

const Faculty = () => {
  const departments = [
    { name: 'Medical Surgical Nursing', icon: <Stethoscope size={32} />, desc: 'Specialized care for adult patients with varied medical conditions.' },
    { name: 'Child Health Nursing', icon: <Baby size={32} />, desc: 'Focused on the care of infants, children, and adolescents.' },
    { name: 'Obstetric & Gynaecological', icon: <Heart size={32} />, desc: 'Comprehensive care for women during pregnancy and childbirth.' },
    { name: 'Community Health', icon: <Users size={32} />, desc: 'Promoting health and preventing disease in population groups.' },
    { name: 'Mental Health Nursing', icon: <Brain size={32} />, desc: 'Specialized care for individuals with mental health disorders.' },
    { name: 'Nursing Education', icon: <BookOpen size={32} />, desc: 'Preparing the next generation of nursing professionals.' },
  ];

  return (
    <PageContainer>
      <HeroSection>
        <HeroTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Distinguished Faculty
        </HeroTitle>
        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Mentors, researchers, and practitioners dedicated to academic excellence.
        </Subtitle>
      </HeroSection>

      <SectionContainer>
        {/* Leadership Section */}
        <LeadershipCard
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <LeadershipImage>
            <img src={PrincipalImage} alt="Principal" />
          </LeadershipImage>
          <LeadershipContent>
            <h3 style={{ color: 'var(--primary-blue)', marginBottom: '0.5rem', fontFamily: 'Playfair Display, serif', fontSize: '2rem' }}>Leadership</h3>
            <p style={{ fontSize: '1.25rem', color: '#334155', marginBottom: '1.5rem' }}>Guiding the Future of Nursing</p>
            <p style={{ lineHeight: '1.8', color: '#475569' }}>
              Our faculty is led by experienced visionaries who bring decades of clinical and academic expertise.
              Under their guidance, the college fosters an environment of rigorous learning, research, and compassionate care.
              Postgraduate teachers are available for all departments, ensuring that every student receives
              personalized mentorship and advanced training.
            </p>
          </LeadershipContent>
        </LeadershipCard>

        {/* Departments Grid */}
        <SectionTitle>Departments & Specializations</SectionTitle>
        <FacultyGrid>
          {departments.map((dept, index) => (
            <DeptCard
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <IconWrapper>{dept.icon}</IconWrapper>
              <DeptName>{dept.name}</DeptName>
              <DeptDescription>{dept.desc}</DeptDescription>
            </DeptCard>
          ))}
        </FacultyGrid>

        {/* Group Photo Section */}
        <GroupImageSection>
          <img src={GroupPhoto} alt="Our Faculty Team" />
          <div className="overlay">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Dedicated to Excellence in Education
            </motion.h3>
          </div>
        </GroupImageSection>

      </SectionContainer>
    </PageContainer>
  );
};

export default Faculty;
