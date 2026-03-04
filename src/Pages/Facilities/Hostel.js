import React from 'react';
import styled from 'styled-components';
import hostelBuilding from '../../Components/Images/hostel.png';

const Hostel = () => {
  return (
    <HostelContainer>
      <HostelHeader>Hostel Facilities</HostelHeader>

      <HostelContent>
        <HostelImageSection>
          <HostelImage src={hostelBuilding} alt="Shanmuga College Hostel Building" />
          <ImageCaption>Our Modern Hostel Building</ImageCaption>
        </HostelImageSection>

        <HostelFacilities>
          <FacilitiesHeader>We Provide</FacilitiesHeader>
          <FacilitiesList>
            <FacilityItem>Adequate recreational facilities</FacilityItem>
            <FacilityItem>Nutritionally adequate food facilities (Both Veg & Non-veg)</FacilityItem>
            <FacilityItem>Very good warden supervision</FacilityItem>
            <FacilityItem>500 Students can be accommodated in the hostel</FacilityItem>
            <FacilityItem>Safety drinking water</FacilityItem>
            <FacilityItem>Hygienic Modern Kitchen</FacilityItem>
            <FacilityItem>Best maintained bathrooms/toilets</FacilityItem>
            <FacilityItem>Pollution-free environment</FacilityItem>
            <FacilityItem>Reading room facility</FacilityItem>
            <FacilityItem>Indoor/Outdoor games facility</FacilityItem>
            <FacilityItem>Mess committee by students</FacilityItem>
            <FacilityItem>Round-the-clock security</FacilityItem>
          </FacilitiesList>
        </HostelFacilities>
      </HostelContent>
    </HostelContainer>
  );
};

export default Hostel;

// Styled Components
const HostelContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background: #fff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const HostelHeader = styled.h1`
  font-size: 2.5rem;
  color: #3a547c;
  margin-bottom: 30px;
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

const HostelContent = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 30px;
  margin-top: 20px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const HostelImageSection = styled.div`
  flex: 1;
  
  @media (min-width: 768px) {
    position: sticky;
    top: 20px;
  }
`;

const HostelImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const ImageCaption = styled.p`
  text-align: center;
  margin-top: 12px;
  font-size: 0.9rem;
  color: #666;
  font-style: italic;
`;

const HostelFacilities = styled.div`
  flex: 1;
  background-color: #f8f9fb;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const FacilitiesHeader = styled.h2`
  font-size: 1.8rem;
  color: #3a547c;
  margin-bottom: 20px;
  text-align: center;
`;

const FacilitiesList = styled.ul`
  padding-left: 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  
  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FacilityItem = styled.li`
  font-size: 1.1rem;
  line-height: 1.5;
  color: #444;
  position: relative;
  padding-left: 10px;
  
  &:before {
    content: "✓";
    color: #3a547c;
    position: absolute;
    left: -15px;
    font-weight: bold;
  }
  
  &:hover {
    color: #3a547c;
  }
`;