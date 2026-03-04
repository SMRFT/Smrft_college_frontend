import React from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  text-align: center;
  padding: 40px;
  background-color: #f5f5f5;
`;

const Heading = styled.h1`
  font-size: 2rem;
  color: #004080;
  margin-bottom: 20px;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.1rem;
  color: #333;
  line-height: 1.6;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const SportsAndRecreation = () => {
  return (
    <Container>
      <Heading>Sports And Recreation</Heading>
      <Content>
        <p>
          The sports facilities within the campus enable the students to engage in outdoor games such as volleyball,
          throw ball, tennis, basketball, high jump, long jump, etc. Indoor games such as chess, and carom board
          are also provided in the hostel.
        </p>
      </Content>
      <ImageContainer>
        <Image src="https://img.freepik.com/free-vector/gradient-national-sports-day-illustration_23-2148995776.jpg?t=st=1741071332~exp=1741074932~hmac=f4a3fb345542ecca145e38080e49c09c194e49e404cfe6e20ba66b26866237c0&w=2000" alt="Sports Activities" />
      </ImageContainer>
    </Container>
  );
};

export default SportsAndRecreation;
