import React from 'react';
import styled from 'styled-components';

import ShanmugaMudaliar from './images/p-shanmuga-mudaliar.jpg';
import PanneerSelvam from './images/vijayarathna-dr-psps.jpg';
import Jayalakshmi from './images/jayalashmi-panneerselvam.jpg';
import PrabuSankar from './images/dr-prabu-sankar.jpg';
import Murugavel from './images/dr-muruga-vel.jpg';

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

  p {
    margin-bottom: 1.5rem;
  }
`;

const InfoBox = styled.div`
  background: #f8fafc;
  border-left: 4px solid var(--primary-blue);
  padding: 1.5rem;
  margin: 2rem 0;
  border-radius: 0 8px 8px 0;
`;

const LeadershipSection = styled.div`
  margin-top: 4rem;
`;

const LeadershipTitle = styled.h2`
  text-align: center;
  color: var(--primary-blue);
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  margin-bottom: 3rem;
`;

const LeadershipGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  justify-items: center;
`;

const LeaderCard = styled.div`
  text-align: center;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LeaderImage = styled.img`
  width: 200px;
  height: 220px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  border: 4px solid white;
`;

const LeaderName = styled.h3`
  color: var(--primary-blue);
  font-size: 1.1rem;
  margin-bottom: 0.4rem;
  font-weight: 700;
`;

const Designation = styled.p`
  color: var(--accent-gold);
  font-weight: 600;
  font-size: 0.95rem;
  margin: 0;
`;

const Qualifications = styled.span`
  display: block;
  font-size: 0.8rem;
  color: #64748b;
  margin-top: 0.2rem;
  font-weight: 400;
`;

const About = () => {
  const leaders = [
    {
      name: "Thirumigu P.Shanmuga Mudaliar",
      designation: "Founder",
      image: ShanmugaMudaliar,
      qualifications: ""
    },
    {
      name: "‘Vijayarathna’ Dr.P.S.Panneer Selvam",
      designation: "Chairman",
      image: PanneerSelvam,
      qualifications: "MS., MNAMS., FAIS., FICS., FIAGES."
    },
    {
      name: "Mrs.P.Jayalakshmi Panneer Selvam",
      designation: "Correspondent",
      image: Jayalakshmi,
      qualifications: "M.A.,"
    },
    {
      name: "Dr.P.Prabusankar",
      designation: "Director",
      image: PrabuSankar,
      qualifications: "M.S., M.R.C.S.,"
    },
    {
      name: "Dr.R.Murugavel",
      designation: "Medical Superintendent",
      image: Murugavel,
      qualifications: "M.S.,"
    }
  ];

  return (
    <PageContainer>
      <Title>About SMRFT</Title>
      <Content>
        <p>
          <strong>SMRFT (Shanmuga Medical Research Foundation Trust)</strong>
        </p>
        <p>
          Cancer is a dreaded disease, help us to heal them and eradicate cancer. Out of 1000, one becomes the victim to this disease in India. Free early cancer screening, awareness camps and free treatments are the only way to eliminate the disease. We Shanmuga Medical Research Foundation Trust, since 1995, on the goal and task and giving free cancer treatments and conducting Free early cancer screening, awareness camps with available resources. But, still we are not convinced about the fulfilling their treatment follow up because of poor financial soundness.
        </p>

        <p>
          Shanmuga Medical Research Foundation Trust (SMRFT) was founded by <strong>Thirumigu.Vanavasi.P.Shanmugam</strong> and <strong>Dr.P.S.Panneerselvam</strong> on June 1996.
        </p>

        <InfoBox>
          It is registered, as a Charitable trust under the Trust Act. <strong>Reg.No.388/BK4 dated 25.06.96</strong>. Later a board was formed with three members for the purpose of administration and development.
        </InfoBox>

        <LeadershipSection>
          <LeadershipTitle>Our Leadership</LeadershipTitle>
          <LeadershipGrid>
            {leaders.map((leader, index) => (
              <LeaderCard key={index}>
                <LeaderImage src={leader.image} alt={leader.name} />
                <LeaderName>
                  {leader.name}
                  {leader.qualifications && <Qualifications>{leader.qualifications}</Qualifications>}
                </LeaderName>
                <Designation>{leader.designation}</Designation>
              </LeaderCard>
            ))}
          </LeadershipGrid>
        </LeadershipSection>
      </Content>
    </PageContainer>
  );
};

export default About;
