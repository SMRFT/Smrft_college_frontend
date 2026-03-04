import React from 'react';
import styled from 'styled-components';
import ClassroomImg from '../../Components/Images/Facilities/classroom.png';
import LaboratoryImg from '../../Components/Images/Facilities/laboratory.png';
import LibraryImg from '../../Components/Images/Facilities/library.png';
import AuditoriumImg from '../../Components/Images/Facilities/auditorium.png';
import ConferenceImg from '../../Components/Images/Facilities/conference.png';
import CanteenImg from '../../Components/Images/Facilities/canteen.png';
import TransportImg from '../../Components/Images/Facilities/transport.png';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  font-family: 'Inter', sans-serif;
  color: #334155;
`;

const Section = styled.section`
  margin-bottom: 5rem;
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: var(--primary-blue);
  margin-bottom: 2rem;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: var(--accent-gold);
    margin-top: 0.5rem;
  }
`;

const ContentText = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #475569;
`;

const FacilityCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  border: 1px solid #f1f5f9;
  margin-bottom: 1.5rem;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 1.5rem;
  }
  
  h3 {
    color: var(--primary-blue);
    margin-bottom: 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
      content: '';
      display: block;
      width: 8px;
      height: 24px;
      background: var(--accent-gold);
      border-radius: 4px;
    }
  }

  p {
    margin-bottom: 1rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const FacilitiesGroup = () => {
    return (
        <PageContainer>
            <Section id="facilities">
                <SectionTitle>Our Facilities</SectionTitle>
                <GridContainer>
                    <FacilityCard>
                        <img src={ClassroomImg} alt="Classrooms" />
                        <h3>Classrooms</h3>
                        <ContentText>
                            <p>Our classrooms are designed to create a productive and engaging learning environment. Each classroom is spacious, well-ventilated, and equipped with modern audio-visual aids including LCD projectors and smart boards.</p>
                        </ContentText>
                    </FacilityCard>

                    <FacilityCard>
                        <img src={LaboratoryImg} alt="Laboratories" />
                        <h3>Laboratories</h3>
                        <ContentText>
                            <p>We boast a wide range of specialized laboratories including Nursing Foundation, Adult Health Nursing, Advanced Nursing, Community Health Nursing, Nutrition, OBG, Child Health, Mental Health, Simulation, Pre-Clinical Science, and Computer Labs. Every lab is fully equipped to provide hands-on training to students.</p>
                        </ContentText>
                    </FacilityCard>

                    <FacilityCard>
                        <img src={LibraryImg} alt="Library" />
                        <h3>Library</h3>
                        <ContentText>
                            <p>The Library stocks more than 10,000 books, national and international journals, and e-resources. It offers a quiet environment for study, with separate sections for reference and digital learning tools.</p>
                        </ContentText>
                    </FacilityCard>

                    <FacilityCard>
                        <img src={AuditoriumImg} alt="Auditorium" />
                        <h3>Auditorium</h3>
                        <ContentText>
                            <p>A spacious 500-capacity hall equipped with modern sound systems and LCD projectors, used for academic, cultural, and professional events.</p>
                        </ContentText>
                    </FacilityCard>

                    <FacilityCard>
                        <img src={ClassroomImg} alt="Examination Hall" /> {/* Reusing Classroom Img for now as per plan */}
                        <h3>Examination Hall</h3>
                        <ContentText>
                            <p>Designed for fair and disciplined assessment, equipped with individual seating and surveillance systems.</p>
                        </ContentText>
                    </FacilityCard>

                    <FacilityCard>
                        <img src={ConferenceImg} alt="Conference Hall" />
                        <h3>Conference Hall</h3>
                        <ContentText>
                            <p>A professional space for meetings, seminars, and workshops, featuring audio-visual aids and internet connectivity.</p>
                        </ContentText>
                    </FacilityCard>

                    <FacilityCard>
                        <img src={ConferenceImg} alt="Counseling Room" /> {/* Reusing Conference Img for professional look */}
                        <h3>Counseling Room</h3>
                        <ContentText>
                            <p>A private space for students to receive academic and personal guidance from trained counselors.</p>
                        </ContentText>
                    </FacilityCard>

                    <FacilityCard>
                        <h3>Faculty Office</h3>
                        <ContentText>
                            <p>Desginated workstations for teaching staff to facilitate lesson planning, research, and student mentoring.</p>
                        </ContentText>
                    </FacilityCard>

                    <FacilityCard>
                        <img src={ConferenceImg} alt="AV Aids Room" /> {/* Reusing Conference Img */}
                        <h3>Audio-Visual Aids Room</h3>
                        <ContentText>
                            <p>Dedicated to modern educational tools, enhancing teaching with multimedia resources.</p>
                        </ContentText>
                    </FacilityCard>

                    <FacilityCard>
                        <img src={CanteenImg} alt="Canteen" />
                        <h3>Canteen</h3>
                        <ContentText>
                            <p>Provides healthy, hygienic, and affordable food in a clean and comfortable environment.</p>
                        </ContentText>
                    </FacilityCard>

                    <FacilityCard>
                        <img src={TransportImg} alt="Transport" />
                        <h3>Transport Facilities</h3>
                        <ContentText>
                            <p>Two college buses (60-seat and 40-seat) ensure safe travel for clinical postings, field visits, and college events.</p>
                        </ContentText>
                    </FacilityCard>

                    <FacilityCard>
                        <h3>Other Facilities</h3>
                        <ContentText>
                            <p>Includes RO-purified drinking water in all major areas and well-maintained sanitary facilities for hygiene and comfort.</p>
                        </ContentText>
                    </FacilityCard>
                </GridContainer>
            </Section>
        </PageContainer>
    );
};

export default FacilitiesGroup;
