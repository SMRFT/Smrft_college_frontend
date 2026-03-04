import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { motion } from "framer-motion"
import { Calendar, MapPin, Award, Users, Sparkles } from "lucide-react"
import Image from "../../Components/Images/Graduation.png"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600;700&display=swap');
`

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #f8fafc;
  background-image: 
    radial-gradient(at 0% 0%, rgba(37, 99, 235, 0.1) 0px, transparent 50%),
    radial-gradient(at 100% 100%, rgba(234, 179, 8, 0.1) 0px, transparent 50%);
  font-family: 'Inter', sans-serif;
  padding: 4rem 1.5rem;
  color: #1e293b;
`

const Card = styled(motion.div)`
  max-width: 1000px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.5);
  overflow: hidden;
`

const HeroSection = styled.div`
  position: relative;
  height: 400px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(30, 58, 138, 0.9) 0%, rgba(30, 58, 138, 0.4) 60%, transparent 100%);
  }
`

const HeroImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 10;
  padding: 3rem;
  width: 100%;
  color: white;
`

const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #fbbf24;
`

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
  margin: 0 0 0.5rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.25rem;
  opacity: 0.9;
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.02em;
`

const Content = styled.div`
  padding: 3rem;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 3rem;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const InfoCard = styled(motion.div)`
  background: #f8fafc;
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid #e2e8f0;
`

const SectionTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #1e3a8a;
  font-size: 1.5rem;
  margin: 0 0 1.5rem;
  font-family: 'Playfair Display', serif;
`

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;
  
  &:last-child {
    margin-bottom: 0;
  }

  svg {
    color: #2563eb;
    margin-top: 0.25rem;
    flex-shrink: 0;
  }
`

const InfoLabel = styled.span`
  display: block;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #64748b;
  margin-bottom: 0.25rem;
  font-weight: 600;
`

const InfoValue = styled.p`
  margin: 0;
  color: #334155;
  font-weight: 500;
  line-height: 1.5;
`

const MedalistSection = styled.div`
  h2 {
    color: #1e3a8a;
    font-size: 2rem;
    font-family: 'Playfair Display', serif;
    margin: 0 0 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    
    &::after {
      content: '';
      flex: 1;
      height: 1px;
      background: #e2e8f0;
    }
  }
`

const MedalistGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
`

const RankCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid #f1f5f9;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: default;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: #eab308; /* Gold bar */
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    border-color: #fbbf24;
  }
`

const ProgramName = styled.div`
  font-size: 0.875rem;
  color: #64748b;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`

const StudentName = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
  color: #0f172a;
  line-height: 1.3;
`

const Footer = styled.div`
  background: #1e3a8a;
  color: white;
  text-align: center;
  padding: 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  opacity: 0.9;
`

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
}

export default function GraduationAnnouncement() {
  const medalists = [
    { program: "M.Sc (N)", name: "Ms. Maniyarasi. K" },
    { program: "B.Sc (N)", name: "Ms. Abitha Elizabeth Sabu" },
    { program: "DGNM", name: "Ms. Christibha. B" },
    { program: "B.Sc (OTAT)", name: "Ms. Anupama Celine Jose" },
    { program: "B.Sc (PA)", name: "Ms. Eva Mariya Joby" },
    { program: "B.Sc (RT)", name: "Ms. Anitha Vijayan" },
    { program: "B.Sc (RTT)", name: "Ms. Rejma Raj" },
    { program: "B.Sc (RIT)", name: "Ms. Ebin A Francis" },
  ]

  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <Card
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <HeroSection>
            <HeroImage
              src={Image}
              alt="Graduation Ceremony"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            />
            <HeroContent
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Badge>
                <Sparkles size={16} />
                Ceremony Highlights
              </Badge>
              <Title>20th Graduation Day</Title>
              <Subtitle>Shanmuga Group of Institutions, Salem</Subtitle>
            </HeroContent>
          </HeroSection>

          <Content>
            <Grid>
              <InfoCard variants={itemVariants}>
                <SectionTitle>
                  <Calendar size={24} />
                  Event Details
                </SectionTitle>

                <InfoItem>
                  <Calendar size={20} style={{ color: '#eab308' }} />
                  <div>
                    <InfoLabel>Date</InfoLabel>
                    <InfoValue>September 24, 2024</InfoValue>
                  </div>
                </InfoItem>

                <InfoItem>
                  <MapPin size={20} style={{ color: '#eab308' }} />
                  <div>
                    <InfoLabel>Venue</InfoLabel>
                    <InfoValue>Windsor Castle Astoria Hall, Salem</InfoValue>
                  </div>
                </InfoItem>

                <InfoItem>
                  <Users size={20} style={{ color: '#eab308' }} />
                  <div>
                    <InfoLabel>Graduates</InfoLabel>
                    <InfoValue>84 Students</InfoValue>
                  </div>
                </InfoItem>

                <div style={{ margin: '2rem 0', height: '1px', background: '#e2e8f0' }} />

                <SectionTitle style={{ fontSize: '1.25rem' }}>Dignitaries</SectionTitle>
                <InfoItem>
                  <div>
                    <InfoLabel>Presided By</InfoLabel>
                    <InfoValue>Dr. P.S. Panneer Selvam & Mrs. Jayalakshmi Panneerselvam</InfoValue>
                  </div>
                </InfoItem>
                <InfoItem>
                  <div>
                    <InfoLabel>Chief Guest</InfoLabel>
                    <InfoValue>Mrs. K. Mayil, Special Dy. Collector</InfoValue>
                  </div>
                </InfoItem>
                <InfoItem>
                  <div>
                    <InfoLabel>Special Guest</InfoLabel>
                    <InfoValue>Dr. A. Mohan, City Health Officer, Salem Corporation</InfoValue>
                  </div>
                </InfoItem>
                <InfoItem>
                  <div>
                    <InfoLabel>Guest of Honor</InfoLabel>
                    <InfoValue>Dr. S.D. Kalaiamudhan, Advocate & Tamil Orator</InfoValue>
                  </div>
                </InfoItem>
                <InfoItem>
                  <div>
                    <InfoLabel>Also Present</InfoLabel>
                    <InfoValue>CEO Shanmuga Hospital, Principal of AHS & Principal of Shanmuga Nursing College</InfoValue>
                  </div>
                </InfoItem>
              </InfoCard>

              <MedalistSection>
                <motion.h2 variants={itemVariants}>
                  <Award size={32} color="#eab308" />
                  Gold Medalists
                </motion.h2>
                <MedalistGrid>
                  {medalists.map((student, index) => (
                    <RankCard key={index} variants={itemVariants} whileHover={{ scale: 1.02 }}>
                      <ProgramName>{student.program}</ProgramName>
                      <StudentName>{student.name}</StudentName>
                    </RankCard>
                  ))}
                </MedalistGrid>
              </MedalistSection>
            </Grid>
          </Content>

          <Footer>
            Congratulations to the Class of 2024! 🎓
          </Footer>
        </Card>
      </PageContainer>
    </>
  )
}

