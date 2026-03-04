import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const FooterContainer = styled.footer`
  background: #1e293b;
  color: white;
  padding: 4rem 1.5rem 1rem;
  font-family: 'Inter', sans-serif;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.25rem;
  color: var(--accent-gold);
  margin-bottom: 1.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 40px;
    height: 2px;
    background: var(--accent-gold);
  }
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled(Link)`
  display: block;
  color: #94a3b8;
  text-decoration: none;
  margin-bottom: 0.75rem;
  transition: color 0.2s;

  &:hover {
    color: white;
    padding-left: 5px;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
  color: #94a3b8;

  svg {
    flex-shrink: 0;
    color: var(--accent-gold);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SocialIcon = styled.a`
  color: white;
  background: rgba(255,255,255,0.1);
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;

  &:hover {
    background: var(--primary-blue);
  }
`;

const Copyright = styled.div`
  border-top: 1px solid #334155;
  padding-top: 1.5rem;
  text-align: center;
  color: #64748b;
  font-size: 0.875rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <div>
          <SectionTitle>Shanmuga Group of Institutions</SectionTitle>
          <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>
            Empowering the future of healthcare through excellence in nursing education, research, and compassionate patient care.
          </p>
          <SocialLinks>
            <SocialIcon href="#"><Facebook size={18} /></SocialIcon>
            <SocialIcon href="#"><Twitter size={18} /></SocialIcon>
            <SocialIcon href="#"><Instagram size={18} /></SocialIcon>
            <SocialIcon href="#"><Linkedin size={18} /></SocialIcon>
          </SocialLinks>
        </div>

        <div>
          <SectionTitle>Quick Links</SectionTitle>
          <LinkList>
            <li><FooterLink to="/ShanmugaNursingCollege/About">About Us</FooterLink></li>
            <li><FooterLink to="/ShanmugaNursingCollege/Courses">Our Courses</FooterLink></li>
            <li><FooterLink to="/ShanmugaNursingCollege/Faculty">Faculty</FooterLink></li>
            <li><FooterLink to="/ShanmugaNursingCollege/PlacementDetails">Placements</FooterLink></li>
            <li><FooterLink to="/ShanmugaNursingCollege/Alumni">Alumni</FooterLink></li>
          </LinkList>
        </div>

        <div>
          <SectionTitle>Contact Us</SectionTitle>
          <ContactItem>
            <MapPin size={20} />
            <span>
              24, Sarada College Road,<br />
              Salem - 636 007,<br />
              Tamil Nadu.
            </span>
          </ContactItem>
          <ContactItem>
            <Phone size={20} />
            <span>0427 231 5610</span>
          </ContactItem>
          <ContactItem>
            <Mail size={20} />
            <span>info@shanmugacollege.com</span>
          </ContactItem>
        </div>

        <div>
          <SectionTitle>Location</SectionTitle>
          <iframe
            src="https://maps.google.com/maps?q=Shanmuga%20College%20of%20Nursing%2C%20Salem&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="200"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="College Location"
          ></iframe>
        </div>
      </FooterGrid>

      <Copyright>
        &copy; {new Date().getFullYear()} Shanmuga Group of Institutions. All Rights Reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
