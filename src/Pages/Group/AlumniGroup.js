import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  font-family: 'Inter', sans-serif;
  color: #334155;
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: var(--primary-blue);
  margin-bottom: 2rem;
  border-bottom: 2px solid var(--accent-gold);
  padding-bottom: 1rem;
`;

const ContentText = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #475569;
`;

const AlumniGroup = () => {
    return (
        <PageContainer>
            <SectionTitle>Alumni</SectionTitle>
            <ContentText>
                <p>
                    The Alumni Association maintains a lifelong bond between the institution and former students. Our alumni are placed in reputed hospitals and organizations worldwide.
                </p>
                <p>
                    They contribute to the institution's growth through mentorship, career guidance, and academic support.
                </p>
            </ContentText>
        </PageContainer>
    );
};

export default AlumniGroup;
