import React from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  background: linear-gradient(to right, #dfe9f3, #ffffff);
  color: #333;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 50px auto;
  text-align: center;
`;

const Heading = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 15px;
  color: #6a11cb;
  border-bottom: 3px solid #6a11cb;
  display: inline-block;
  padding-bottom: 5px;
`;

const Section = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 8px;
  box-shadow: inset 0px 3px 10px rgba(0, 0, 0, 0.1);
  text-align: justify;
  margin-bottom: 25px;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
`;

const CampusInfo = () => {
  return (
    <Container>
      <Heading>Scholarship</Heading>
      <Section>
        <Paragraph>
          The reservation category students belonging to <b>SC/ST/BC/MBC/DNC</b> communities can approach the college for scholarships provided by the
          District Adi Dravida Tribal Welfare Department and the District Backward Classes & Minority Welfare Department.
          The application for the same will be forwarded by the college to the authorities upon request.
          The same procedure is applicable for students seeking educational loans from nationalized banks.
        </Paragraph>
      </Section>

      <Heading>Anti-Ragging Policies</Heading>
      <Section>
        <Paragraph>
          As per the direction of the Honorable <b>Supreme Court of India</b> on ragging and the orders of various authorities,
          ragging in any form is strictly prohibited inside the campus.
        </Paragraph>
      </Section>
    </Container>
  );
};

export default CampusInfo;
