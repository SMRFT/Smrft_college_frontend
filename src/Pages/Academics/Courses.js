import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Award, BookOpen, GraduationCap, ChevronRight } from 'lucide-react';
import MscImage from '../../Components/Images/MscNursing.png';
import BscImage from '../../Components/Images/BscNursing.png';
import DiplomaImage from '../../Components/Images/DiplomaNursing.png';
import AlliedImage from '../../Components/Images/AlliedHealth.png';

// Sample courses data
const coursesData = [
  {
    title: 'M.Sc Nursing',
    subtitle: 'Master of Science in Nursing',
    duration: '2 Years',
    description: `Advance your nursing career with specialized knowledge and leadership skills.`,
    image: MscImage,
    icon: <GraduationCap size={24} />,
    details: `
      <div>
        <div class="affiliation-badge">Affiliated to The Tamilnadu Dr.M.G.R Medical University, Chennai</div>
        <p>The Master of Science in Nursing program is designed to prepare nurses for leadership roles in clinical practice, administration, and education. It addresses the critical need for advanced nursing professionals to manage emerging healthcare challenges.</p>
        
        <h4 class="modal-section-title">Course Objectives</h4>
        <ul class="feature-list">
          <li>Acquire in-depth knowledge in specialized nursing fields.</li>
          <li>Demonstrate advanced skills using modern concepts and theories.</li>
          <li>Function efficiently as nurse administrators and educators.</li>
          <li>Conduct and apply research to improve nursing practice.</li>
          <li>Take up leadership roles in the advancement of the profession.</li>
        </ul>

        <h4 class="modal-section-title">Specialties Available</h4>
        <div class="branches-grid">
          <div class="branch-item">
            <span class="branch-name">Medical Surgical Nursing</span>
            <span class="seat-count">5 Seats</span>
          </div>
          <div class="branch-item">
            <span class="branch-name">Child Health Nursing</span>
            <span class="seat-count">3 Seats</span>
          </div>
          <div class="branch-item">
            <span class="branch-name">Obstetric & Gynaecological Nursing</span>
            <span class="seat-count">5 Seats</span>
          </div>
          <div class="branch-item">
            <span class="branch-name">Community Health Nursing</span>
            <span class="seat-count">3 Seats</span>
          </div>
          <div class="branch-item">
            <span class="branch-name">Mental Health Nursing</span>
            <span class="seat-count">5 Seats</span>
          </div>
        </div>

        <h4 class="modal-section-title">Eligibility Criteria</h4>
        <p>Candidates must possess a B.Sc. Nursing degree or equivalent, be registered with the State Nursing Council, and have at least one year of experience in a teaching hospital or college.</p>
      </div>
    `,
  },
  {
    title: 'B.Sc Nursing',
    subtitle: 'Bachelor of Science in Nursing',
    duration: '4 Years',
    description: 'A comprehensive program preparing students for a professional career in nursing.',
    image: BscImage,
    icon: <BookOpen size={24} />,
    details: `
      <div>
        <div class="affiliation-badge">Affiliated to The Tamilnadu Dr.M.G.R Medical University, Chennai</div>
        <p>The Basic B.Sc. Nursing program provides a broad foundation in nursing, emphasizing both theoretical knowledge and practical skills essential for professional nursing practice.</p>
        
        <h4 class="modal-section-title">Program Highlights</h4>
         <ul class="feature-list">
          <li>Comprehensive curriculum covering all major nursing disciplines.</li>
          <li>Hands-on clinical training in affiliated hospitals.</li>
          <li>Focus on holistic patient care and ethical practice.</li>
          <li>Preparation for competitive exams and higher studies.</li>
        </ul>

        <h4 class="modal-section-title">Eligibility Criteria</h4>
        <p>Pass in +2 / HSC with Science subjects (Physics, Chemistry, Biology) or equivalent qualification.</p>
      </div>
    `,
  },
  {
    title: 'Diploma in Nursing',
    subtitle: 'General Nursing and Midwifery (GNM)',
    duration: '3 Years',
    description: 'Foundational course in general nursing care and midwifery.',
    image: DiplomaImage,
    icon: <Award size={24} />,
    details: `
      <div>
        <div class="affiliation-badge">Recognized by Indian Nursing Council</div>
        <p>The Diploma in General Nursing and Midwifery program offers comprehensive education in nursing practices, patient care, and community health.</p>
         
        <h4 class="modal-section-title">Program Highlights</h4>
        <ul class="feature-list">
          <li>Focus on bedside nursing and patient comfort.</li>
          <li>Training in emergency care and first aid.</li>
          <li>Community health nursing field visits.</li>
          <li>Maternity and child health care training.</li>
        </ul>

        <h4 class="modal-section-title">Eligibility Criteria</h4>
        <p>Pass in +2 / HSC with any group (Science/Arts/Commerce) with minimum aggregate marks.</p>
      </div>
    `,
  },
  {
    title: 'Allied Health Sciences',
    subtitle: 'B.Sc Allied Health Programs',
    duration: '3 Years',
    description: 'Specialized programs in advanced medical technologies and therapies.',
    image: AlliedImage,
    icon: <Clock size={24} />,
    details: `
      <div>
        <div class="affiliation-badge">Affiliated to The Tamilnadu Dr.M.G.R Medical University, Chennai</div>
        <p>Allied Health Science professionals are an integral part of the healthcare team. This program offers specialized training in various technical and therapeutic fields.</p>
        
        <h4 class="modal-section-title">Career Opportunities</h4>
        <p>Graduates can find placements in Shanmuga Hospitals, Government Hospitals, or work as tutors. Opportunities for working abroad and pursuing higher education are immense.</p>

        <h4 class="modal-section-title">Available Specializations</h4>
        <div class="branches-grid">
          <div class="branch-item"><span class="branch-name">Operation Theatre & Anaesthesia Tech</span></div>
          <div class="branch-item"><span class="branch-name">Physician Assistant</span></div>
          <div class="branch-item"><span class="branch-name">Respiratory Therapy</span></div>
          <div class="branch-item"><span class="branch-name">Radiotherapy Technology</span></div>
          <div class="branch-item"><span class="branch-name">Radiography & Imaging Technology</span></div>
        </div>

        <h4 class="modal-section-title">Eligibility Criteria</h4>
        <p>Pass in +2 / HSC with Science subjects.</p>
      </div>
    `,
  },
];

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  background-color: var(--bg-light);
  font-family: 'Inter', sans-serif;
  padding-bottom: 4rem;
`;

const HeroSection = styled.div`
  background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-dark) 100%);
  color: white;
  padding: 5rem 1.5rem;
  text-align: center;
  margin-bottom: 4rem;
`;

const HeroTitle = styled(motion.h1)`
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  margin: 0 0 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 2.5rem;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const CourseCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-color: var(--accent-gold);
    
    img {
      transform: scale(1.05);
    }
  }
`;

const ImageContainer = styled.div`
  height: 220px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%);
  }
`;

const Badge = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  background: rgba(255, 255, 255, 0.9);
  padding: 0.5rem 1rem;
  border-radius: 99px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--primary-blue);
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 10;
`;

const CardContent = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CourseTitle = styled.h3`
  font-size: 1.5rem;
  font-family: 'Playfair Display', serif;
  color: var(--primary-blue);
  margin: 0 0 0.5rem;
`;

const CourseSubtitle = styled.p`
  color: #64748b;
  font-size: 0.95rem;
  margin: 0 0 1.5rem;
  font-weight: 500;
`;

const CourseDescription = styled.p`
  color: #475569;
  line-height: 1.6;
  margin: 0 0 2rem;
  flex: 1;
`;

const DetailsButton = styled.button`
  background: white;
  color: var(--primary-blue);
  border: 2px solid var(--primary-blue);
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  
  &:hover {
    background: var(--primary-blue);
    color: white;
  }
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  padding: 1rem;
`;

const ModalContainer = styled(motion.div)`
  background: white;
  border-radius: 24px;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 4px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: #f1f5f9;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #64748b;
  transition: all 0.2s;
  z-index: 10;
  
  &:hover {
    background: #fee2e2;
    color: #ef4444;
  }
`;

const ModalHeader = styled.div`
  position: relative;
  height: 200px;
  background: var(--primary-blue);
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  padding: 2rem;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  }
  
  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.6;
  }
`;

const ModalTitle = styled.h2`
  position: relative;
  z-index: 2;
  color: white;
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const ModalContent = styled.div`
  padding: 2.5rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  .affiliation-badge {
    display: inline-block;
    background: #eff6ff;
    color: var(--primary-blue);
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
    border: 1px solid #dbeafe;
  }

  p {
    line-height: 1.8;
    color: #475569;
    font-size: 1.05rem;
    margin-bottom: 1.5rem;
  }

  .modal-section-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    color: var(--primary-blue);
    margin: 2rem 0 1rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    
    &::before {
      content: '';
      width: 4px;
      height: 24px;
      background: var(--accent-gold);
      border-radius: 2px;
    }
  }

  .feature-list {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      position: relative;
      padding-left: 1.5rem;
      margin-bottom: 0.75rem;
      color: #334155;
      
      &::before {
        content: '•';
        color: var(--accent-gold);
        font-weight: bold;
        position: absolute;
        left: 0;
        font-size: 1.25rem;
        line-height: 1;
      }
    }
  }

  .branches-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1rem;
    margin-top: 1rem;

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }

  .branch-item {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    padding: 1rem;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .branch-name {
      font-weight: 600;
      color: #334155;
    }
    
    .seat-count {
      background: var(--primary-blue);
      color: white;
      padding: 0.25rem 0.6rem;
      border-radius: 6px;
      font-size: 0.8rem;
      font-weight: 500;
    }
  }
`;

function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <PageContainer>
      <HeroSection>
        <HeroTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Academic Programs
        </HeroTitle>
        <p style={{ opacity: 0.9, fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Preparing the next generation of healthcare leaders with excellence and compassion.
        </p>
      </HeroSection>

      <ContentContainer>
        <CoursesGrid>
          {coursesData.map((course, index) => (
            <CourseCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ImageContainer>
                <img src={course.image} alt={course.title} />
                <Badge>
                  {course.icon}
                  {course.duration}
                </Badge>
              </ImageContainer>

              <CardContent>
                <CourseTitle>{course.title}</CourseTitle>
                <CourseSubtitle>{course.subtitle}</CourseSubtitle>
                <CourseDescription>{course.description}</CourseDescription>
                <DetailsButton onClick={() => setSelectedCourse(course)}>
                  View Details <ChevronRight size={18} />
                </DetailsButton>
              </CardContent>
            </CourseCard>
          ))}
        </CoursesGrid>
      </ContentContainer>

      <AnimatePresence>
        {selectedCourse && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCourse(null)}
          >
            <ModalContainer
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={() => setSelectedCourse(null)}>
                <X size={20} />
              </CloseButton>

              <ModalHeader>
                <img src={selectedCourse.image} alt={selectedCourse.title} />
                <ModalTitle>{selectedCourse.title}</ModalTitle>
              </ModalHeader>

              <ModalContent dangerouslySetInnerHTML={{ __html: selectedCourse.details }} />
            </ModalContainer>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </PageContainer>
  );
}

export default Courses;