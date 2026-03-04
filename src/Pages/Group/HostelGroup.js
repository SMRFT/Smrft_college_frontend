import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  font-family: 'Inter', sans-serif;
  color: #334155;
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: var(--primary-blue);
  margin-bottom: 2rem;
  border-bottom: 2px solid var(--accent-gold);
  padding-bottom: 1rem;
`;

const ContentText = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #475569;
`;

const ProposalBox = styled.div`
  background: #fff;
  border: 1px solid #e2e8f0;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1rem;
  
  h4 {
    color: var(--primary-blue);
    margin-bottom: 0.5rem;
  }
`;

const HostelGroup = () => {
    return (
        <PageContainer>
            <SectionTitle>Hostel Facilities</SectionTitle>
            <ContentText>
                <p>
                    The institution provides safe, comfortable, and well-organised hostel facilities for both boys and girls within the campus. Separate hostels are maintained with strict security measures.
                </p>
                <p>
                    Rooms are well-furnished with adequate ventilation, lighting, and study space. Visitor rooms allow students to meet parents in a monitored environment.
                </p>
                <p>
                    A spacious dining hall and mess provide nutritious vegetarian and non-vegetarian meals prepared under hygienic conditions.
                </p>

                <ProposalBox>
                    <h4>Anti-Ragging Measures</h4>
                    <p>
                        Shanmuga Group of Institutions follows a zero-tolerance policy towards ragging. An Anti-Ragging Committee and Squad monitor the campus to ensure student safety. Ragging is strictly prohibited as per UGC and INC norms.
                    </p>
                </ProposalBox>
            </ContentText>
        </PageContainer>
    );
};

export default HostelGroup;
