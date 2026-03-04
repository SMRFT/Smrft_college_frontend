import React from 'react';
import styled from 'styled-components';
import FcraImage from './images/fcra.jpg';

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

const Content = styled.div`
  line-height: 1.8;
  color: var(--text-primary);
  font-size: 1.1rem;
`;

const ApprovalBox = styled.div`
  background: white;
  border: 2px solid #e2e8f0;
  padding: 3rem;
  text-align: center;
  border-radius: 12px;
  margin-top: 2rem;
`;


const FCRA = () => {
  return (
    <PageContainer>
      <Title>FCRA Approval</Title>
      <Content>
        <p>
          The Shanmuga Medical Research Foundation Trust (SMRFT) is fully compliant with government regulations.
        </p>
        <ApprovalBox>
          <img
            src={FcraImage}
            alt="FCRA Approval Document"
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              marginBottom: '2rem'
            }}
          />
          <h2 style={{ color: 'var(--primary-blue)' }}>Foreign Contribution (Regulation) Act</h2>
          <p>
            We are registered under the FCRA, enabling us to receive foreign contributions for our charitable activities.
            This approval validates our transparency and commitment to utilizing funds effectively for the intended social causes.
          </p>
        </ApprovalBox>
      </Content>
    </PageContainer>
  );
};

export default FCRA;
