import React, { useState } from 'react';
import styled from 'styled-components';
import { CreditCard, Heart, Gift } from 'lucide-react';

const PageContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 2rem;
  font-family: 'Inter', sans-serif;
`;

const Title = styled.h1`
  color: var(--primary-blue);
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
  text-align: center;
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoSection = styled.div`
  h2 {
    color: var(--primary-blue);
    margin-bottom: 1.5rem;
  }
  p {
    margin-bottom: 1rem;
    line-height: 1.6;
    color: var(--text-primary);
  }
  ul {
    padding-left: 1.2rem;
    li {
      margin-bottom: 0.5rem;
    }
  }
`;

const FormSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  border: 1px solid #f1f5f9;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: var(--text-primary);
    font-size: 0.9rem;
  }

  input, textarea, select {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    font-size: 1rem;
    transition: border-color 0.2s;

    &:focus {
      outline: none;
      border-color: var(--primary-blue);
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
    }
  }
`;

const SubmitBtn = styled.button`
  width: 100%;
  padding: 1rem;
  background: var(--primary-blue);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: var(--primary-blue-dark);
  }
`;

const SectionTitle = styled.h3`
  color: var(--primary-blue);
  border-bottom: 2px solid var(--accent-gold);
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
  &:first-child { margin-top: 0; }
`;

const BankBox = styled.div`
  background: #f8fafc;
  border: 1px solid #cbd5e1;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;

  p {
    margin-bottom: 0.5rem;
  }
  strong {
    color: #334155;
  }
`;

const Contribution = () => {
  return (
    <PageContainer>
      <Title>HOW CAN YOU SEND YOUR CONTRIBUTION TO OUR TRUST?</Title>
      <Subtitle>
        You can generously contribute your donations either by currency or by Medicines, Equipments or aids to our Trust in the following manner:
      </Subtitle>

      <Grid>
        <InfoSection>
          <SectionTitle>A. CONTRIBUTION IN CASE OF CURRENCY</SectionTitle>
          <p>We accept your valuable contribution by your country’s currency by way of Telegraphic Transfer through Bank or by Demand Draft.</p>

          <p><strong>In case of Telegraphic Transfer (TT):</strong></p>
          <BankBox>
            <p><strong>TT IN FAVOUR OF:</strong> SHANMUGA MEDICAL RESEARCH FOUNDATION TRUST</p>
            <p><strong>Bank:</strong> PUNJAB NATIONAL BANK, SALEM MAIN BRANCH, TAMIL NADU (STATE)</p>
            <p><strong>IFSC Code:</strong> PUNB0041600</p>
            <p><strong>Current Account No:</strong> 0416002100032355</p>
            <p><strong>Email:</strong> info@smrft.org</p>
            <hr style={{ margin: '1rem 0', borderColor: '#e2e8f0' }} />
            <p><strong>FCRA Reg. No:</strong> 076000106</p>
            <p><strong>Nature of Activities:</strong> Educational / Social</p>
          </BankBox>

          <p><strong>In case of Demand Draft (DD):</strong></p>
          <p>You may take DD in favour of <strong>SHANMUGA MEDICAL RESEARCH FOUNDATION TRUST</strong>, payable at SALEM.</p>

          <SectionTitle>B. CONTRIBUTIONS IN CASE OF FOREIGN CURRENCY</SectionTitle>
          <BankBox>
            <p><strong>Bank:</strong> STATE BANK OF INDIA</p>
            <p><strong>Branch:</strong> FORT MAIN ROAD, SALEM (Code: 0913)</p>
            <p><strong>Account No:</strong> 10593907766</p>
            <p><strong>Type of Account:</strong> CA</p>
            <p><strong>IFSC Code:</strong> SBIN0000913</p>
            <p><strong>MICR Code:</strong> 636002011</p>
          </BankBox>

          <SectionTitle>C. CONTRIBUTIONS IN CASE OF OTHER THAN CURRENCY</SectionTitle>
          <p>
            You may intimate to our Trust through our Email <strong>info@smrft.org</strong> describing the things which you want to donate, its quantity, size, and CIF Value.
            The mode of delivery (i.e., By Sea or By Air). Kindly note that your port of discharge is Chennai Sea port or Chennai Air port.
          </p>
          <p>
            After receipt of your Email communication we will revert back to you for accept the same and we will intimate you, the manner by which you may send your contribution without any difficulty.
          </p>
          <BankBox>
            <strong>IMPORT AND EXPORT CODE NUMBER:</strong> 3201005517<br />
            <strong>ISSUED BY:</strong> THE MINISTRY OF COMMERCE, GOVERNMENT OF INDIA.
          </BankBox>

          <SectionTitle>OUR PLEA</SectionTitle>
          <p style={{ fontStyle: 'italic', borderLeft: '4px solid var(--accent-gold)', paddingLeft: '1rem' }}>
            Last but not least, We appeal to Foreign Donors to encourage us in our Trust activities by contribute donations generously to our Trust and share your feeling of poor cancer patients in India and we will always remember your courage and helping tendency in globalize manner.
          </p>
        </InfoSection>

        <FormSection>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary-blue)' }}>Contribution Details</h3>
          <form>
            <FormGroup>
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />
            </FormGroup>
            <FormGroup>
              <label>Name of the Organisation</label>
              <input type="text" placeholder="Enter organisation name" />
            </FormGroup>
            <FormGroup>
              <label>E-mail Address</label>
              <input type="email" placeholder="Enter your email" />
            </FormGroup>
            <FormGroup>
              <label>Website</label>
              <input type="url" placeholder="Enter website URL" />
            </FormGroup>
            <FormGroup>
              <label>Mode of Donation</label>
              <select>
                <option>Currency</option>
                <option>Equipments</option>
                <option>Medicine</option>
              </select>
            </FormGroup>
            <FormGroup>
              <label>Phone / Mobile</label>
              <input type="tel" placeholder="Enter phone/mobile number" />
            </FormGroup>
            <FormGroup>
              <label>Name of the Bank</label>
              <input type="text" placeholder="Enter bank name" />
            </FormGroup>
            <FormGroup>
              <label>Swift Code</label>
              <input type="text" placeholder="Enter swift code" />
            </FormGroup>
            <FormGroup>
              <label>Summary</label>
              <textarea rows="4" placeholder="Enter summary"></textarea>
            </FormGroup>
            <SubmitBtn type="button">Submit Contribution</SubmitBtn>
          </form>
        </FormSection>
      </Grid>
    </PageContainer>
  );
};

export default Contribution;
