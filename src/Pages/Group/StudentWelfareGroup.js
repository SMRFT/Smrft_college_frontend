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

const StudentWelfareGroup = () => {
    return (
        <PageContainer>
            <SectionTitle>Student Welfare</SectionTitle>
            <ContentText>
                <h3>Student Nurses Association (SNA)</h3>
                <p>
                    SNA promotes professional and personal development through academic programmes, cultural activities, and community outreach.
                </p>

                <h3>National Service Scheme (NSS)</h3>
                <p>
                    The NSS unit instils social responsibility through health camps, blood donation drives, and rural development activities.
                </p>

                <h3>Sports and Cultural</h3>
                <p>
                    We encourage participation in indoor and outdoor sports, as well as cultural events like annual days and festivals to ensure holistic development.
                </p>

                <h3>Achievements</h3>
                <p>
                    Our students consistently perform well in university exams, clinical training, and extracurricular activities. Many graduates have secured placements in reputed hospitals globally.
                </p>
            </ContentText>
        </PageContainer>
    );
};

export default StudentWelfareGroup;
