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

const FacultyGroup = () => {
    return (
        <PageContainer>
            <SectionTitle>Faculty</SectionTitle>
            <ContentText>
                <p>
                    The Shanmuga College of Nursing is supported by a team of professionally qualified and experienced faculty who handle all major departments, including Nursing Foundation, Adult-Health Nursing, Community Health Nursing, Midwifery/OBG, Child Health Nursing, and Mental Health Nursing.
                </p>
                <p>
                    Our faculty members are committed to quality teaching, student mentorship, clinical guidance, and research activities, ensuring holistic professional growth for every learner.
                </p>
                <p style={{ marginTop: '2rem', fontStyle: 'italic', color: '#94a3b8' }}>
                    * Detailed faculty list and photos to be added here *
                </p>
            </ContentText>

            <br /><br />
            <SectionTitle>Faculty Development Programmes (FDP)</SectionTitle>
            <ContentText>
                <p>
                    Faculty Development Programmes are regularly organised to enhance academic, clinical, and research competencies. Activities include workshops on teaching methodologies, research, and educational technology.
                </p>
            </ContentText>
        </PageContainer>
    );
};

export default FacultyGroup;
