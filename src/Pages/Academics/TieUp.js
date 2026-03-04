import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  color: #2c3e50;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #34495e;
  margin: 10px 0;
`;

const TieUp = () => {
  return (
    <Container>
      <Title>TIE UP</Title>
      <Paragraph>
        Students obtain clinical experience from tie-up hospitals for
        speciality areas at Govt. Mohan Kumaramangalam Medical College &
        Hospital, Salem and Rural & Urban community field experience in PHCs at
        Salem. And also Arockya Hospital for Obstetric & Gynaecological
        Nursing.
      </Paragraph>
      <Title>AUDITORIUM</Title>
      <Paragraph>
        We have a well-ventilated and sophisticated A/C auditorium named
        MUTHAMIZH ARANGAM with 400 seating capacity. The facilities include an
        LCD projector and the best audio system for organizing CNE & cultural
        events.
      </Paragraph>
    </Container>
  );
};

export default TieUp;
