import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: var(--bg-light);
  font-family: 'Inter', sans-serif;
  padding: 4rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
    align-items: flex-start; /* better for scrolling on small screens */
  }
`;

const MessageCard = styled(motion.div)`
  max-width: 900px;
  background: white;
  border-radius: 24px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
`;

const Header = styled.div`
  background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-dark) 100%);
  color: white;
  padding: 3rem;
  text-align: center;
  position: relative;
  
  @media (max-width: 480px) {
    padding: 2.5rem 1.5rem;
  }
`;

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const Content = styled.div`
  padding: 4rem 3rem 3rem;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 2.5rem 1.25rem 2rem;
  }
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: -24px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--accent-gold);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  color: white;
`;

const Text = styled.div`
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--text-primary);
  text-align: justify;
  
  p {
    margin-bottom: 1.5rem;
  }
`;

const Highlight = styled.span`
  color: var(--primary-blue);
  font-weight: 600;
`;

const Signature = styled.div`
  margin-top: 3rem;
  text-align: right;
  border-top: 1px solid #f1f5f9;
  padding-top: 1.5rem;
  
  p {
    font-family: 'Playfair Display', serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--primary-blue);
    margin: 0;
  }
  
  span {
    font-size: 0.875rem;
    color: var(--text-secondary);
  }
`;

const PrincipalsMessage = () => {
  return (
    <PageContainer>
      <MessageCard
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Header>
          <Title>Principal’s Message</Title>
        </Header>

        <Content>
          <QuoteIcon>
            <Quote size={24} fill="currentColor" />
          </QuoteIcon>

          <Text>
            <p>
              Welcome to <Highlight>Shanmuga College of Nursing</Highlight>. It is a privilege to lead an institution
              that has been nurtured by a celestial vision and a great mission.
              Our College offers a healthy, harmonious ambiance and rich values that have played a pivotal role in
              shaping the future of countless students. Our mission is to transform students into rational thinkers,
              competent professionals, law-abiding citizens, and spiritually enlightened individuals.
            </p>
            <p>
              The College is <Highlight>accredited and approved</Highlight> by the Indian Nursing Council. We offer
              <Highlight> GNM, B.Sc Nursing, and M.Sc Nursing</Highlight> courses. We take pride in our alumni—over
              <Highlight> 2500 undergraduates and 750 postgraduates</Highlight>—who have graduated successfully and
              are representing our college globally in nursing education, service, and research.
            </p>
            <p>
              Our staff and students are guided by the motto <Highlight>“Search, Share and Care”</Highlight>.
              Nurses search for knowledge, share it, and care using updated practices. The success of our institution
              is a testament to the measures initiated by the Management, the administration's efforts, and the
              dedication of our teaching and non-teaching staff, along with the overwhelming response of our students.
            </p>
            <p>
              I am proud to be the Principal of such a wonderful institution dedicated to the cause of a better India.
              Let’s give our best and make this institution a modern role model of learning through our diligence,
              devotion, and dedication.
            </p>
          </Text>

          <Signature>
            <p>Principal</p>
            <span>Shanmuga College of Nursing</span>
          </Signature>
        </Content>
      </MessageCard>
    </PageContainer>
  );
};

export default PrincipalsMessage;
