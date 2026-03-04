import React from "react";
import styled from "styled-components";
import LibraryImage from "../../Components/Images/library.jpg";

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #f9fafb, #e5e7eb);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #1e3a8a;
  margin-bottom: 30px;
  text-align: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  gap: 30px;
`;

const TextSection = styled.div`
  flex: 1;
  min-width: 300px;
  font-size: 1.1rem;
  color: #374151;
  line-height: 1.6;
`;

const StyledList = styled.ul`
  margin-top: 15px;
  list-style: none;
  padding-left: 0;
  
  li {
    background: #eff6ff;
    color: #1e40af;
    padding: 10px;
    margin: 5px 0;
    border-radius: 8px;
    font-weight: 500;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  min-width: 300px;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

const Library = () => {
  return (
    <Container>
      <Heading>Library</Heading>
      <ContentWrapper>
        <TextSection>
          <p>
            The Library and learning resource center is an invaluable resource for students and faculty of Nursing education. It has the most complete collection with around 5000 text and reference books, audio and video materials, professional journals, and magazines.
          </p>
          <p>
            It is one of the most lively places in the college, providing a comfortable and reader-friendly environment that enables learning, the advancement of knowledge, and promotes scholarship.
          </p>
          <StyledList>
            <li>Computerized library</li>
            <li>More than ten thousand books</li>
            <li>International and Indian Journals</li>
            <li>Research reports and presentations</li>
            <li>Audio-Visual Aids</li>
            <li>Multi-media library</li>
            <li>Internet facility</li>
            <li>Photo copying facility</li>
            <li>Separate floor for reference books</li>
          </StyledList>
        </TextSection>
        <ImageWrapper>
          <img src={LibraryImage} alt="Library" />
        </ImageWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default Library;
