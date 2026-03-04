import React from 'react';
import styled from 'styled-components';
import { HeartPulse, Calendar } from 'lucide-react';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  font-family: 'Inter', sans-serif;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
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

const ActivityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ActivityCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  border: 1px solid #f1f5f9;
`;

const CardHeader = styled.div`
  background: var(--primary-blue);
  color: white;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CardBody = styled.div`
  padding: 1.5rem;
  color: var(--text-primary);
  line-height: 1.6;
`;

const Activities = () => {
  return (
    <PageContainer>
      <Title>Trust Activities</Title>
      <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        The trust has been actively conducting various health initiatives to support the community.
      </p>

      <ActivityGrid>
        <ActivityCard>
          <CardHeader>
            <Calendar size={28} />
            <h3 style={{ margin: 0 }}>Camps & Screenings</h3>
          </CardHeader>
          <CardBody>
            <ul style={{ paddingLeft: '1.2rem', margin: 0, listStyle: 'none' }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                <div style={{ minWidth: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-gold)', marginTop: '8px' }}></div>
                Free cancer screening/detection camps.
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                <div style={{ minWidth: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-gold)', marginTop: '8px' }}></div>
                Free General Medical check up.
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                <div style={{ minWidth: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-gold)', marginTop: '8px' }}></div>
                Distribution of free Medicines and free investigation during the camps.
              </li>
            </ul>
          </CardBody>
        </ActivityCard>

        <ActivityCard>
          <CardHeader>
            <HeartPulse size={28} />
            <h3 style={{ margin: 0 }}>Free Cancer Treatments</h3>
          </CardHeader>
          <CardBody>
            <p style={{ fontWeight: '600', marginBottom: '1rem', color: 'var(--primary-blue)' }}>Providing free cancer treatments:</p>
            <ul style={{ paddingLeft: '1.2rem', margin: 0, listStyle: 'none' }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                <div style={{ minWidth: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-gold)', marginTop: '8px' }}></div>
                Free beds
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                <div style={{ minWidth: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-gold)', marginTop: '8px' }}></div>
                Free medicine
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                <div style={{ minWidth: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-gold)', marginTop: '8px' }}></div>
                Free surgery
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                <div style={{ minWidth: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-gold)', marginTop: '8px' }}></div>
                Free food to the poor cancer patients who cannot afford this time consuming and cost effective treatments.
              </li>
            </ul>
          </CardBody>
        </ActivityCard>
      </ActivityGrid>
    </PageContainer>
  );
};

export default Activities;
