import React from "react";
import styled from "styled-components";

// Helper function to import all images from a context
function importAll(r) {
  return r.keys().map(r);
}

const Laboratory = () => {
  // Import images from each lab folder
  // Note: These paths must match the actual folder structure in src/Components/Images/Lab/
  const anatomyImages = importAll(require.context('../../Components/Images/Lab/ANATOMY LAB', false, /\.(png|jpe?g|svg)$/));
  const avAidsImages = importAll(require.context('../../Components/Images/Lab/AV AIDS LAB', false, /\.(png|jpe?g|svg)$/));
  const childHealthImages = importAll(require.context('../../Components/Images/Lab/CHILD HEALTH NURSING LAB', false, /\.(png|jpe?g|svg)$/));
  const communityHealthImages = importAll(require.context('../../Components/Images/Lab/COMMUNITY HEALTH NURSING LAB', false, /\.(png|jpe?g|svg)$/));
  const fonImages = importAll(require.context('../../Components/Images/Lab/FON LAB', false, /\.(png|jpe?g|svg)$/));
  const msnImages = importAll(require.context('../../Components/Images/Lab/MSN LAB', false, /\.(png|jpe?g|svg)$/));
  const nutritionImages = importAll(require.context('../../Components/Images/Lab/NUTRITION LAB', false, /\.(png|jpe?g|svg)$/));
  const obgImages = importAll(require.context('../../Components/Images/Lab/OBG LAB', false, /\.(png|jpe?g|svg)$/));
  const psychiatricImages = importAll(require.context('../../Components/Images/Lab/PSYCHIATRIC NURSING LAB', false, /\.(png|jpe?g|svg)$/));

  const labs = [
    { title: "Anatomy Laboratory", images: anatomyImages },
    { title: "A.V. Aids Laboratory", images: avAidsImages },
    { title: "Child Health Nursing Laboratory", images: childHealthImages },
    { title: "Community Health Nursing Laboratory", images: communityHealthImages },
    { title: "Nursing Foundation (FON) Laboratory", images: fonImages },
    { title: "Medical Surgical Nursing (MSN) Laboratory", images: msnImages },
    { title: "Nutrition Laboratory", images: nutritionImages },
    { title: "Obstetrics and Gynaecology (OBG) Laboratory", images: obgImages },
    { title: "Psychiatric Nursing Laboratory", images: psychiatricImages },
  ];

  return (
    <Container>
      <Header>Laboratories</Header>
      <Description>
        Our College of Nursing is the training ground for B.Sc(N) and DGNM
        students to develop their professional and technical skills in Nursing
        before stepping into ward practice. The laboratories are well furnished
        and equipped with dummies, manikins, specimens, models, puppets, charts,
        posters, instruments, bones, linen, trays, advanced equipment, and other
        related articles to practice nursing procedures efficiently. Students
        gain sufficient exposure to the basics of nursing service and enjoy
        individual hands-on experience on various practical procedures.
      </Description>

      <LabFacilitiesSection>
        <FacilitiesHeader>Our Laboratory Facilities</FacilitiesHeader>
        <FacilitiesList>
          <FacilityColumn>
            <FacilityItem>Nursing Foundation Laboratory</FacilityItem>
            <FacilityItem>Nutrition Laboratory</FacilityItem>
            <FacilityItem>Medical Surgical Nursing Laboratory</FacilityItem>
            <FacilityItem>Community Health Nursing Laboratory</FacilityItem>
          </FacilityColumn>
          <FacilityColumn>
            <FacilityItem>MCH Laboratory</FacilityItem>
            <FacilityItem>Computer Laboratory</FacilityItem>
            <FacilityItem>A.V. Aids Laboratory</FacilityItem>
            <FacilityItem>Anatomy Physiology Laboratory</FacilityItem>
          </FacilityColumn>
          <FacilityColumn>
            <FacilityItem>ACN Laboratory</FacilityItem>
            <FacilityItem>Psychiatric Laboratory</FacilityItem>
            <FacilityItem>Microbiology & Pathology Laboratory</FacilityItem>
          </FacilityColumn>
        </FacilitiesList>
      </LabFacilitiesSection>

      <GalleryContainer>
        {labs.map((lab, index) => (
          <LabSection key={index}>
            <LabCategoryTitle>{lab.title}</LabCategoryTitle>
            <ImageGrid>
              {lab.images.map((img, imgIndex) => (
                <ImageCard key={imgIndex}>
                  <LabImage src={img} alt={`${lab.title} ${imgIndex + 1}`} />
                </ImageCard>
              ))}
            </ImageGrid>
          </LabSection>
        ))}
      </GalleryContainer>
    </Container>
  );
};

export default Laboratory;

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background: #fff;

  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`;

const Header = styled.h1`
  font-size: 2.5rem;
  color: #3a547c;
  margin-bottom: 20px;
  text-align: center;
  position: relative;
  padding-bottom: 15px;
  
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: #3a547c;
    border-radius: 2px;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 40px;
  text-align: justify;
`;

const LabFacilitiesSection = styled.div`
  background-color: #f8f9fb;
  padding: 30px;
  border-radius: 10px;
  margin-bottom: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const FacilitiesHeader = styled.h2`
  font-size: 1.8rem;
  color: #3a547c;
  margin-bottom: 25px;
  text-align: center;
`;

const FacilitiesList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

const FacilityColumn = styled.div`
  flex: 1;
  min-width: 250px;
  
  @media (max-width: 480px) {
    min-width: 100%;
  }
`;

const FacilityItem = styled.div`
  padding: 12px 15px;
  background: white;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    background: #e5e9f2;
  }
`;

const GalleryContainer = styled.div`
  margin-top: 40px;
`;

const LabSection = styled.div`
  margin-bottom: 50px;
`;

const LabCategoryTitle = styled.h3`
  font-size: 1.6rem;
  color: #3a547c;
  margin-bottom: 25px;
  padding-left: 15px;
  border-left: 4px solid #ea4031; /* Using a brand color accent */
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`;

const ImageCard = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 220px;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const LabImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${ImageCard}:hover & {
    transform: scale(1.05);
  }
`;