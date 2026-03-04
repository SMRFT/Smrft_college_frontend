import React from "react";
import styled from "styled-components";
import Img1 from "../../Components/Images/Classroom/DSC08078.JPG";
import Img2 from "../../Components/Images/Classroom/DSC08118.JPG";
import Img3 from "../../Components/Images/Classroom/DSC08126.JPG";
import Img4 from "../../Components/Images/Classroom/DSC08164.JPG";
import Img5 from "../../Components/Images/Classroom/DSC08165.JPG";
import Img6 from "../../Components/Images/Classroom/DSC08190.JPG";
import Img7 from "../../Components/Images/Classroom/DSC08192.JPG";

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #f9fafb, #e5e7eb);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  font-family: 'Inter', sans-serif;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #1e3a8a;
  margin-bottom: 30px;
  text-align: center;
  font-family: 'Playfair Display', serif;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  gap: 30px;
  width: 100%;
`;

const TopSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-between;
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

const MainImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  min-width: 300px;

  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const GridImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

const Classroom = () => {
    const images = [Img2, Img3, Img4, Img5, Img6, Img7];

    return (
        <Container>
            <Heading>Classrooms</Heading>
            <ContentWrapper>
                <TopSection>
                    <TextSection>
                        <p>
                            Our classrooms are designed to create a productive and engaging learning environment. They play an essential role in providing students with a conducive atmosphere for theoretical and conceptual learning.
                        </p>
                        <p>
                            The nursing college is equipped with state-of-the-art classrooms that facilitate interactive and modern teaching methodologies, ensuring that students have the best academic experience.
                        </p>
                        <StyledList>
                            <li>Spacious and well-ventilated</li>
                            <li>Comfortable seating arrangements</li>
                            <li>Equipped with modern audio-visual aids</li>
                            <li>LCD Projectors and Smart Boards</li>
                            <li>Interactive learning environment</li>
                            <li>Wi-Fi enabled facilities</li>
                        </StyledList>
                    </TextSection>
                    <MainImageWrapper>
                        <img src={Img1} alt="Main Classroom" />
                    </MainImageWrapper>
                </TopSection>

                <div>
                    <h2 style={{ color: '#1e3a8a', fontFamily: 'Playfair Display, serif', marginBottom: '1rem', borderBottom: '2px solid #fbbf24', paddingBottom: '0.5rem', display: 'inline-block' }}>Gallery</h2>
                    <ImageGrid>
                        {images.map((img, index) => (
                            <GridImage key={index} src={img} alt={`Classroom view ${index + 2}`} />
                        ))}
                    </ImageGrid>
                </div>
            </ContentWrapper>
        </Container>
    );
};

export default Classroom;
