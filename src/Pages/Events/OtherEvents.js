import React from "react";
import styled from "styled-components";
import image1 from "../../Components/Images/NSS.png";
import image2 from "../../Components/Images/repuplic.png";
import image3 from "../../Components/Images/Independence.png";
import image4 from "../../Components/Images/YRC.png";


const Container = styled.div`
  max-width: 900px;
  margin: 20px auto;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  color: #2c3e50;
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const SubTitle = styled.h3`
  color: #e74c3c;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  color: #555;
  line-height: 1.5;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-top: 10px;
`;

const TriFestProgramme = () => {
  return (
    <Container>
      <Title>Tri-Fest Programme & Events</Title>

      <Section>
        <SubTitle>Triple X Programme</SubTitle>
        <Paragraph>
          X-mas, New Year & Pongal were celebrated on 20.12.2024 between 10:00pm – 3:00pm at Shanmuga Campus. Various entertainment programs like dance and songs were performed.
        </Paragraph>
        <Image src={image4} alt="Event Image" />
      </Section>

      <Section>
        <SubTitle>Republic Day</SubTitle>
        <Paragraph>
          Republic Day was celebrated on 26.01.2024 at Shanmuga Hospital premises between 8:00am – 9:00pm. Certificates and mementos were distributed to participants and presenters of the CNE programme. Patriotic speech and dance were performed by B.Sc & GNM students.
        </Paragraph>
        <Image src={image2} alt="Event Image" />
      </Section>

      <Section>
        <SubTitle>Independence Day</SubTitle>
        <Paragraph>
          Independence Day was celebrated on 15.08.2024 at the Shanmuga hospital premises between 7:45am – 9:30am. The flag was hoisted by Dr. P.S. Panneerselvam, Chairman SCON. Certificates and prizes were distributed to the presenters of the CNE programme. A tree plantation programme was also held on the same day.
        </Paragraph>
        <Image src={image3} alt="Event Image" />
      </Section>

      <Section>
        <SubTitle>Other Events</SubTitle>
        <Paragraph>YRC - Women’s Day was celebrated on March 8th, 2024.</Paragraph>
        <Image src={image4} alt="Event Image" />
      </Section>

      <Section>
        <SubTitle>NSS Activities</SubTitle>
        <Paragraph>
          <strong>World Hypertension Day Camp:</strong> An awareness program was conducted with activities like displaying IEC material for hypertension prevention, monitoring blood pressure, and educating on lifestyle modifications.
        </Paragraph>
        <Image src={image1} alt="Event Image" />
      </Section>

      <Section>
        <SubTitle>Guidance & Counseling</SubTitle>
        <Paragraph>
          Guidance and counseling are provided to students on a regular basis. Every teacher is assigned a group of students for counseling. Students receive guidance upon admission and are regularly monitored for academic performance.
        </Paragraph>
        {/* <Image src={image4} alt="Event Image" /> */}
      </Section>
    </Container>
  );
};

export default TriFestProgramme;
