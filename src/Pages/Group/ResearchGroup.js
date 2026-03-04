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

const ResearchGroup = () => {
    return (
        <PageContainer>
            <SectionTitle>Research</SectionTitle>
            <ContentText>
                <p>
                    Research is a key component of academic excellence at Shanmuga College of Nursing. We encourage faculty and students to engage in research projects, dissertations, and publications to promote evidence-based practice.
                </p>
                <p>
                    Regular workshops and training programmes are conducted to enhance research skills.
                </p>

                <h3>Continuing Nursing Education (CNE)</h3>
                <p>
                    We regularly organise CNE programmes, workshops, and seminars to update the knowledge and skills of students and faculty.
                </p>

                <h3>Key Activities</h3>
                <ul>
                    <li>PG & UG Dissertations</li>
                    <li>Publications in National & International Journals</li>
                    <li>Paper Presentations</li>
                </ul>
            </ContentText>
        </PageContainer>
    );
};

export default ResearchGroup;
