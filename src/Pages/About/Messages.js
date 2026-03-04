import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Styled Components
const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 3rem 1rem;
`;

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
  animation: ${fadeIn} 0.8s ease-out;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #3498db, #9b59b6);
    border-radius: 2px;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(90deg, #2c3e50, #4a69bd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  color: #7f8c8d;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const MessagesSection = styled.section`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: rgba(44, 62, 80, 0.1);
    z-index: 0;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Tab = styled.button`
  padding: 1rem 1.5rem;
  background: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.5)'};
  border: none;
  border-radius: 30px;
  font-weight: ${props => props.active ? '600' : '400'};
  font-size: 1rem;
  color: ${props => props.active ? '#3498db' : '#7f8c8d'};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${props => props.active ? '0 5px 15px rgba(52, 152, 219, 0.2)' : 'none'};
  
  &:hover {
    background: white;
    color: #3498db;
    box-shadow: 0 5px 15px rgba(52, 152, 219, 0.2);
  }
`;

const MessageCard = styled.div`
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  padding: 3rem;
  margin: 0 auto;
  max-width: 800px;
  position: relative;
  z-index: 1;
  animation: ${fadeIn} 0.6s ease-out;
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: linear-gradient(135deg, #3498db, #9b59b6);
    border-radius: 20px;
    z-index: -1;
    opacity: 0.1;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 0.2;
  }
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: -25px;
  left: 30px;
  background: linear-gradient(135deg, #3498db, #9b59b6);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
`;

const MessageTitle = styled.h2`
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 1rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #3498db, #9b59b6);
    border-radius: 1.5px;
  }
`;

const MessageContent = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #34495e;
  position: relative;
  text-align: justify;
`;

const Decoration = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(52, 152, 219, 0.1), rgba(155, 89, 182, 0.1));
  z-index: 0;
  
  &.top-right {
    top: -100px;
    right: -100px;
  }
  
  &.bottom-left {
    bottom: -100px;
    left: -100px;
  }
`;

const EnhancedLeadershipMessages = () => {
  const messages = [
    {
      title: "Chairman's Message",
      content: `It is my great pleasure to write you as your Chairman of Shanmuga Group of Institutions. The times are very challenging and also it's our response that health is the most valuable gift given to us. Life has no equal in this world, for life to exist healthy body and mind is essential. Unfortunately the diseased / unhealthy patients are handed over to doctor, nurses and other medical fraternities. It is our responsibility to maintain prolong and to ensure good quality of life in them. This is noble task for the doctors and paramedical staffs in the hospitals to do their best to achieve desirable results with our medical knowledge and viable facilities. As our Parent Hospital has been awarded with NABH accreditation and Nursing Excellency. I am proud that students are exposed to obtain necessary skill in dealing with the patient conditions.`
    },
    {
      title: "Correspondent's Message",
      content: `It gives me an immense pleasure to be a part of Shanmuga Group of Institutions with the aim to educate and develop excellent nurses to carry out the challenges faced in the medical field. It is a matter of pride that the College has been granted as ISO 9001 – 2000 in the year 2004. Also our college has been awarded by Salem Consumer Voice as College with potential for Excellency.`
    },
    {
      title: "CEO Message",
      content: `Being a Surgeon to Hospital administrator and CEO of Shanmuga Hospital Ltd the modern medicine has changed that human life and health is important during the hospital stay were the nursing care plays the vital role. As a CEO I am proud in saying that as our college students get their chance in developing the skills in planning, organizing, directing and controlling the nursing outcome.`
    },
    {
      title: "Principal's (SCAHS) Message",
      content: `Education is an act of acquiring knowledge and skill to lead life and forming ones personality. We have excelled in every initiative to face the challenges in realizing quality education. We focus on discovering, developing and drawing out hidden talents among the students. As our hospital is standardized with NABH & Nursing Excellency, The criterion based steps in all the professional aspects will mould the students skill appropriately to meet the educational needs in the clinical environment.`
    },
    {
      title: "Principal's (SCON) Message",
      content: `Welcome to "Shanmuga College of Nursing" to find an opportunity to get at one of the best College, which has been nurtured and beneficed by a great mission and celestial vision. The College has the privilege of having a healthy, harmonious, ambience and rich values which have played pivotal role in shaping the future of innumerable students. Our mission is to transform students into rational thinkers, competent workers, law abiding citizens and spiritually enlightened individuals. The College has been accredited and approved to Indian Nursing Council. We offer DGNM, B.Sc Nursing and M.Sc Nursing program in that about 2500 Under Graduates and 750 Post Graduates have successfully walked out from the portals of College of Nursing holding the banner high and the ambassadors of our College in different countries. We have achieved much in the field of nursing Education, Service and Research. The staff and students have been inspired and guided through the years by the motto "Search, Share and Care" where nurses search for knowledge, Share their knowledge and care with the updated knowledge. Moreover, measures initiated by the Honorable Management, steps taken by the college administration. The willing contribution of the teaching and non-teaching staff and over whelming response and enthusiastic participation of my dear students in the college activities in the recent past all vouch for this. I am proud of being a principal of such a wounderful institution dedicated to the cause of better India. Come on, let's give our best and make this institution a modern role model of learning through our diligence, devotion and dedication. Wishing you all the best ……………`
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <PageWrapper>
      <PageContainer>
        <Header>
          <Title>Leadership Insights</Title>
          <Subtitle>
            Wisdom and vision from the leaders shaping our institution's excellence and future
          </Subtitle>
        </Header>
        
        <MessagesSection>
          <TabsContainer>
            {messages.map((message, index) => (
              <Tab 
                key={index} 
                active={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              >
                {message.title.split(' ')[0]}
              </Tab>
            ))}
          </TabsContainer>
          
          <MessageCard>
            <QuoteIcon>"</QuoteIcon>
            <Decoration className="top-right" />
            <Decoration className="bottom-left" />
            <MessageTitle>{messages[activeIndex].title}</MessageTitle>
            <MessageContent>{messages[activeIndex].content}</MessageContent>
          </MessageCard>
        </MessagesSection>
      </PageContainer>
    </PageWrapper>
  );
};

export default EnhancedLeadershipMessages;