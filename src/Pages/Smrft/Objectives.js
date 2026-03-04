import React from 'react';
import styled from 'styled-components';
import { Target, CheckCircle } from 'lucide-react';

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

const ObjectiveList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const ObjectiveItem = styled.li`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  transition: transform 0.2s;
  border: 1px solid #f1f5f9;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0,0,0,0.1);
  }
`;

const IconWrapper = styled.div`
  color: var(--primary-blue);
  background: #eff6ff;
  padding: 0.5rem;
  border-radius: 8px;
`;

const Section = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  color: var(--primary-blue);
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  font-family: 'Playfair Display', serif;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const ContentBox = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  border: 1px solid #f1f5f9;
  line-height: 1.7;
  color: var(--text-primary);
  font-size: 1.05rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;
`;

const ListItem = styled.li`
  display: flex;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
  align-items: flex-start;

  svg {
    color: var(--accent-gold);
    flex-shrink: 0;
    margin-top: 4px;
  }
`;

const Objectives = () => {
  return (
    <PageContainer>
      <Title>Our Mission & Vision</Title>

      <Section>
        <SectionTitle><Target size={28} /> Mission</SectionTitle>
        <ContentBox>
          <p>
            The Mission of Shanmuga Medical Research Foundation Trust an integrated charitable trust is to ensure that all cancer patients under its care achieve the following:
          </p>
          <List>
            {[
              "Parental care to patients in need.",
              "Excellent cancer health education.",
              "Totally dedicated team members.",
              "Independent patient care and their development.",
              "After treatment follow-up."
            ].map((item, i) => (
              <ListItem key={i}><CheckCircle size={18} /> {item}</ListItem>
            ))}
          </List>
          <p style={{ marginTop: '1.5rem', fontStyle: 'italic', borderLeft: '4px solid var(--accent-gold)', paddingLeft: '1rem' }}>
            As on today, more than 100 free camps have been conducted and more than 1000 patients are benefited through free treatments at our Salem Cancer Institute. We are providing individual attention to each one of them.
          </p>
        </ContentBox>
      </Section>

      <Section>
        <SectionTitle><Target size={28} /> Vision</SectionTitle>
        <ContentBox>
          <p>
            The soul of our country lives in the villages and health development of our people depends on the progress of the village health. There are many steps taken for the development from so many organizations.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Shanmuga Medical Research Foundation Trust, Salem is mainly concentrating on cancer awareness, prevention and treatment activities. Thus the vision is to give free treatments to all cancer patients irrespective of caste, creed, race, religion and sex.
          </p>
        </ContentBox>
      </Section>

      <Section>
        <SectionTitle><Target size={28} /> Goals</SectionTitle>
        <ContentBox>
          <p>
            The Shanmuga Medical Research Foundation Trust has established a cancer treatment Hospital and since 1995. it has been doing free treatments.
          </p>
          <List>
            {[
              "Community oriented cancer health programmes.",
              "Establishing cancer care centers.",
              "Modernising with latest treatments and its equipments.",
              "Updating the Chemotherapy drugs.",
              "Dharmasthala for the cancer patients.",
              "Communtiy support cancer activities.",
              "Expansion of the cancer projects to enable us to provide free treatments to entire country cancer population."
            ].map((item, i) => (
              <ListItem key={i}><CheckCircle size={18} /> {item}</ListItem>
            ))}
          </List>
        </ContentBox>
      </Section>
    </PageContainer>
  );
};

export default Objectives;
