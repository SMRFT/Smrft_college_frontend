import React from 'react';
import styled from 'styled-components';
import { Stethoscope, Activity, Users } from 'lucide-react';
import ServiceImage from './images/services.jpg';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  font-family: 'Inter', sans-serif;
`;

const Title = styled.h1`
  color: var(--primary-blue);
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-family: 'Playfair Display', serif;
  border-bottom: 3px solid var(--accent-gold);
  display: inline-block;
  padding-bottom: 0.5rem;
`;

const ServiceList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled.div`
  text-align: center;
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  border: 1px solid #f1f5f9;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--primary-blue);
  }
`;

const IconCircle = styled.div`
  width: 80px;
  height: 80px;
  background: #eff6ff;
  color: var(--primary-blue);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
`;


const Services = () => {
  return (
    <PageContainer>
      <Title>Our Services</Title>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <img
          src={ServiceImage}
          alt="SMRFT Services"
          style={{
            width: '100%',
            maxHeight: '400px',
            objectFit: 'cover',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
        />

        <ServiceCard style={{ textAlign: 'left', padding: '3rem' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '1.5rem' }}>
            {[
              "Established Salem Cancer Institute in the year 1995.",
              "Rotational Teletherapy Cobalt-60 Unit theratronics Phoenix Equipment imported from Canada.",
              "Bhabha Atomic Research Centre’s Cs-137 Manual after loading Brachytherapy Unit.",
              "50 bedded free inpatient cancer ward.",
              "Free cancer counseling.",
              "Free consultation on all Saturdays.",
              "Radiotherapy accessories.",
              "Separate block for consultants and a day care center."
            ].map((item, index) => (
              <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                <div style={{
                  minWidth: '24px',
                  height: '24px',
                  background: 'var(--primary-blue)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '14px',
                  marginTop: '2px'
                }}>
                  <Activity size={14} />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </ServiceCard>
      </div>
    </PageContainer>
  );
};

export default Services;
