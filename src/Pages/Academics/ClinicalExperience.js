import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  Building,
  Activity,
  Users,
  Stethoscope,
  Monitor,
  Microscope,
  FlaskConical,
  HeartPulse,
  Dumbbell
} from 'lucide-react';

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
    margin-bottom: -4rem; 

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }
`;

const HeroTitle = styled(motion.h1)`
    font-family: 'Playfair Display', serif;
    font-size: 3.5rem;
    margin-bottom: 1rem;
    position: relative;
    z-index: 10;

    @media (max-width: 768px) {
        font-size: 2.25rem;
    }
`;

const HeroSubtitle = styled(motion.p)`
    font-size: 1.25rem;
    max-width: 700px;
    margin: 0 auto;
    opacity: 0.9;
    position: relative;
    z-index: 10;
    line-height: 1.6;
`;

const ContentWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    position: relative;
    z-index: 20;
`;

const StatsGrid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
`;

const StatCard = styled(motion.div)`
    background: white;
    padding: 2rem;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0,0,0,0.05);
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    }
`;

const StatNumber = styled.div`
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--primary-blue);
    margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
    color: var(--text-secondary);
    font-weight: 500;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
`;

const MainContent = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 2.5rem;
    margin-bottom: 3rem;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

const InfoSection = styled(motion.div)`
    background: white;
    border-radius: 24px;
    padding: 2.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
`;

const SectionHeader = styled.h2`
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    color: var(--primary-blue);
    border-bottom: 2px solid #f1f5f9;
    padding-bottom: 1rem;
    margin-bottom: 1.5rem;
`;

const Paragraph = styled.p`
    line-height: 1.8;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    font-size: 1.05rem;
`;

const FacilitiesList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const FacilityItem = styled.li`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border-bottom: 1px solid #f1f5f9;
    color: var(--text-primary);
    font-weight: 500;
    transition: background 0.2s;

    &:last-child {
        border-bottom: none;
    }

    &:hover {
        background: #f8fafc;
        border-radius: 12px;
    }

    svg {
        color: var(--primary-blue);
    }
`;

const SpecialtiesWrapper = styled.div`
    margin-top: 3rem;
`;

const SpecialtyGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
`;

const SpecialtyCard = styled(motion.div)`
    background: white;
    padding: 1.25rem;
    border-radius: 16px;
    border: 1px solid #e2e8f0;
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: all 0.3s ease;
    cursor: default;

    &:hover {
        border-color: var(--primary-blue);
        box-shadow: 0 4px 20px rgba(37, 99, 235, 0.1);
        transform: translateY(-2px);
    }
`;

const NumberBadge = styled.div`
    background: #e0f2fe;
    color: var(--primary-blue);
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.9rem;
    flex-shrink: 0;
`;

const ClinicalExperience = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Clinical Experience
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Providing hands-on training in our own 151-bed multi-specialty hospital, ensuring students gain specialized care experience across all departments.
        </HeroSubtitle>
      </HeroSection>

      <ContentWrapper>
        <StatsGrid
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <StatCard>
            <StatNumber>151</StatNumber>
            <StatLabel>Bed Capacity</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>90%+</StatNumber>
            <StatLabel>Daily Patient Overflow</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>20+</StatNumber>
            <StatLabel>Specialized Depts</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>24/7</StatNumber>
            <StatLabel>Emergency Care</StatLabel>
          </StatCard>
        </StatsGrid>

        <MainContent>
          <InfoSection
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeader>World-Class Training Ground</SectionHeader>
            <Paragraph>
              Our multi-specialty hospital caters to a large number of the needy, as inpatients and out-patients,
              providing specialized care in all departments. Nursing students are privileged to have clinical
              exposure in their own parent multi-specialty hospital.
            </Paragraph>
            <Paragraph>
              The average daily out-patient and inpatient attendance is over 90%. The students are exposed to
              adequate clinical materials and modern laboratories to a broad spectrum, preparing them for
              real-world medical challenges.
            </Paragraph>
          </InfoSection>

          <InfoSection
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeader>Key Facilities</SectionHeader>
            <FacilitiesList>
              <FacilityItem>
                <Building size={20} />
                150 In-patient Bed Strength
              </FacilityItem>
              <FacilityItem>
                <Monitor size={20} />
                Computerised Laboratory
              </FacilityItem>
              <FacilityItem>
                <Microscope size={20} />
                Pathology & Micro Biology Labs
              </FacilityItem>
              <FacilityItem>
                <FlaskConical size={20} />
                Biochemistry Research Facilities
              </FacilityItem>
              <FacilityItem>
                <Stethoscope size={20} />
                Full-Service Pharmacy
              </FacilityItem>
              <FacilityItem>
                <Dumbbell size={20} />
                Multi-Gymnasium Health Centre
              </FacilityItem>
            </FacilitiesList>
          </InfoSection>
        </MainContent>

        <SpecialtiesWrapper>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', color: 'var(--primary-blue)', marginBottom: '1rem' }}>
              Multi-Specialty Sectors
            </h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--accent-gold)', margin: '0 auto', borderRadius: '2px' }}></div>
          </div>

          <SpecialtyGrid>
            {[
              "Medical & Radio Oncology",
              "General Surgery",
              "Orthopedics & Rheumatology",
              "Cardiology",
              "General Medicine",
              "Paediatrics & Neonatology",
              "Pulmonology",
              "Obstetrics & Gynaecology",
              "Neurology",
              "Urology",
              "Psychiatry",
              "Radiology",
              "Otolaryngology (ENT)",
              "Diabetology",
              "Dentistry",
              "Physical Medicine",
              "Hematology",
              "Nephrology",
              "Cosmetic Unit"
            ].map((specialty, index) => (
              <SpecialtyCard
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <NumberBadge>{index + 1}</NumberBadge>
                <span style={{ fontWeight: '500', color: '#334155' }}>{specialty}</span>
              </SpecialtyCard>
            ))}
          </SpecialtyGrid>
        </SpecialtiesWrapper>

      </ContentWrapper>
    </PageContainer>
  );
};

export default ClinicalExperience;