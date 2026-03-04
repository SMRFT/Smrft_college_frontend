import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Menu, X, ChevronDown, MessageCircle, GraduationCap, ArrowRight } from "lucide-react";

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px -10px rgba(0, 0, 0, 0.1);
  font-family: 'Inter', sans-serif;
`;

const TopBar = styled.div`
  background: var(--primary-blue);
  color: white;
  padding: 0.5rem 1.5rem;
  font-size: 0.875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const TopBarLink = styled(Link)`
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: var(--accent-gold);
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const LogoSection = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LogoText = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  color: var(--primary-blue);
  margin: 0;
  font-weight: 700;
  line-height: 1.2;

  span {
    display: block;
    font-size: 0.875rem;
    font-family: 'Inter', sans-serif;
    color: var(--text-secondary);
    font-weight: 400;
    margin-top: 0.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
    span {
      font-size: 0.8rem;
    }
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 1024px) {
    display: flex; /* Always flex, just hidden by transform */
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 280px; /* Standard mobile drawer width */
    background: white;
    flex-direction: column;
    padding: 0; /* Removing padding here, will add to inner container */
    box-shadow: ${props => props.isOpen ? '2px 0 20px rgba(0,0,0,0.1)' : 'none'};
    transform: translateX(${props => props.isOpen ? '0' : '-100%'});
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1001;
    overflow-y: auto;
    visibility: ${props => props.isOpen ? 'visible' : 'hidden'}; /* Hide when closed to prevent focus */
  }
`;

const NavLink = styled(Link)`
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: color 0.2s;
  position: relative;
  padding: 0.5rem 0;

  &:hover {
    color: var(--primary-blue);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--accent-gold);
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 1024px) {
    width: 100%;
    padding: 1rem 0;
    border-bottom: 1px solid #f1f5f9;
    
    &:hover::after {
      display: none;
    }
  }
`;

const DropdownWrapper = styled.div`
  position: relative;
  
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const DropdownTrigger = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--text-primary);
  padding: 0.5rem 0;

  &:hover {
    color: var(--primary-blue);
  }

  @media (max-width: 1024px) {
    width: 100%;
    justify-content: space-between;
    padding: 1rem 0;
    border-bottom: 1px solid #f1f5f9;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  min-width: 220px;
  border-radius: 12px;
  box-shadow: 0 10px 30px -10px rgba(0,0,0,0.15);
  padding: 1rem;
  display: ${props => props.isOpen ? 'flex' : 'none'};
  flex-direction: column;
  gap: 0.5rem;
  z-index: 100;
  border: 1px solid #f1f5f9;

  @media (max-width: 1024px) {
    position: static;
    transform: none;
    box-shadow: none;
    border: none;
    padding: 0.5rem 0 0.5rem 1rem;
    background: #f8fafc;
  }
`;

const MobileMenuBtn = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--text-primary);
  cursor: pointer;

  @media (max-width: 1024px) {
    display: block;
  }
`;

const Overlay = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.5);
    z-index: 1000;
  }
`;

const EnquiryBtn = styled.div`
  background: var(--primary-blue);
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 99px;
  font-weight: 600;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 6px rgba(37, 99, 235, 0.2);

  &:hover {
    background: var(--primary-blue-dark);
    transform: translateY(-1px);
    box-shadow: 0 6px 12px rgba(37, 99, 235, 0.3);
  }

  @media (max-width: 1024px) {
    width: 100%;
    justify-content: center;
    margin-top: 1rem;
  }
`;

const BottomBar = styled.div`
  background: linear-gradient(to right, var(--primary-blue), var(--primary-blue-dark));
  color: white;
  text-align: center;
  padding: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  transition: background 0.3s;

  &:hover {
    background: var(--primary-blue-dark);
  }
`;

const SidebarContent = styled.div`
  display: contents;
  
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
  }
`;

const SidebarHeader = styled.div`
  display: none;
  
  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #f1f5f9;
  }
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-secondary);
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  
  &:hover {
    background: #f1f5f9;
    color: var(--text-primary);
  }
`;

const MobileUtilityLinks = styled.div`
  display: none;
  
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const MobileContactInfo = styled.div`
  display: none;
  
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin-top: auto; /* Push to bottom if height allows */
    padding-top: 1.5rem;
    border-top: 1px solid #f1f5f9;
    font-size: 0.9rem;
    color: var(--text-secondary);
    
    div {
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // States for SMRFT Menus
  const [isSmrftOpen, setIsSmrftOpen] = useState(false);

  // States for Group Menus
  const [isGroupInstitutionsOpen, setIsGroupInstitutionsOpen] = useState(false);
  const [isGroupMoreOpen, setIsGroupMoreOpen] = useState(false);

  // States for College Menus
  const [isFacilitiesOpen, setIsFacilitiesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/ShanmugaNursingCollege/' || location.pathname === '/ShanmugaNursingCollege';
  const isGroupPage = location.pathname === '/' || location.pathname.toLowerCase().startsWith('/group');
  const isSmrftPage = location.pathname.toLowerCase().startsWith('/smrft');

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSmrftOpen(false);
    setIsFacilitiesOpen(false);
    setIsAboutOpen(false);
    setIsGroupInstitutionsOpen(false);
    setIsGroupMoreOpen(false);
  }, [location]);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <>
      <Overlay isOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
      <HeaderContainer>
        {!isGroupPage && !isSmrftPage && (
          <TopBar>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <span>📞 0427 231 5610</span>
              <span>✉️ info@shanmugacollege.com</span>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <TopBarLink to="/ShanmugaNursingCollege/Alumni">
                <GraduationCap size={16} /> Alumni
              </TopBarLink>
              <TopBarLink to="/ShanmugaNursingCollege/PrincipalsMessage">Principal's Desk</TopBarLink>
            </div>
          </TopBar>
        )}

        <NavContainer>
          <LogoSection to={isGroupPage ? "/" : (isSmrftPage ? "/Smrft/About" : "/ShanmugaNursingCollege/")}>
            <LogoText>
              {isGroupPage ? "Shanmuga Group" : (isSmrftPage ? "SMRFT" : "Shanmuga College")}
              <span>
                {isGroupPage
                  ? "of Institutions"
                  : (isSmrftPage ? "Shanmuga Medical Research Foundation Trust" : "of Nursing")}
              </span>
            </LogoText>
          </LogoSection>

          <MobileMenuBtn onClick={() => setIsMenuOpen(true)}>
            <Menu size={24} />
          </MobileMenuBtn>

          <DesktopNav isOpen={isMenuOpen}>
            <SidebarContent>
              <SidebarHeader>
                <LogoText style={{ fontSize: '1.2rem' }}>
                  {isGroupPage ? "Shanmuga Group" : (isSmrftPage ? "SMRFT" : "Shanmuga College")}
                  <span style={{ fontSize: '0.8rem' }}>
                    {isGroupPage
                      ? "of Institutions"
                      : (isSmrftPage ? "Research Foundation Trust" : "of Nursing")}
                  </span>
                </LogoText>
                <CloseBtn onClick={() => setIsMenuOpen(false)}>
                  <X size={24} />
                </CloseBtn>
              </SidebarHeader>

              {!isSmrftPage && (
                <MobileUtilityLinks>
                  <NavLink to="/ShanmugaNursingCollege/Alumni" onClick={() => setIsMenuOpen(false)}>
                    <GraduationCap size={18} style={{ marginRight: '8px', color: 'var(--primary-blue)' }} /> Alumni
                  </NavLink>
                  <NavLink to="/ShanmugaNursingCollege/PrincipalsMessage" onClick={() => setIsMenuOpen(false)}>
                    Principal's Desk
                  </NavLink>
                </MobileUtilityLinks>
              )}

              {/* Navigation Items based on Context */}
              {isGroupPage ? (
                // LANDING PAGE NAVIGATION
                <>
                  <NavLink to="/Group/About">About Us</NavLink>
                  <NavLink to="/Group/Programmes">Programmes</NavLink>
                  <NavLink to="/Group/Facilities">Facilities</NavLink>

                  <DropdownWrapper
                    onMouseEnter={() => window.innerWidth > 1024 && setIsGroupInstitutionsOpen(true)}
                    onMouseLeave={() => window.innerWidth > 1024 && setIsGroupInstitutionsOpen(false)}
                  >
                    <DropdownTrigger onClick={() => setIsGroupInstitutionsOpen(!isGroupInstitutionsOpen)}>
                      Institutions <ChevronDown size={16} style={{ transform: isGroupInstitutionsOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
                    </DropdownTrigger>
                    <DropdownMenu isOpen={isGroupInstitutionsOpen}>
                      <NavLink to="/ShanmugaNursingCollege/About">Shanmuga College of Nursing</NavLink>
                      <NavLink to="/Smrft/About">SMRFT (Trust)</NavLink>
                    </DropdownMenu>
                  </DropdownWrapper>

                  <DropdownWrapper
                    onMouseEnter={() => window.innerWidth > 1024 && setIsGroupMoreOpen(true)}
                    onMouseLeave={() => window.innerWidth > 1024 && setIsGroupMoreOpen(false)}
                  >
                    <DropdownTrigger onClick={() => setIsGroupMoreOpen(!isGroupMoreOpen)}>
                      More <ChevronDown size={16} style={{ transform: isGroupMoreOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
                    </DropdownTrigger>
                    <DropdownMenu isOpen={isGroupMoreOpen}>
                      <NavLink to="/Group/Clinical">Clinical Facilities</NavLink>
                      <NavLink to="/Group/Faculty">Faculty</NavLink>
                      <NavLink to="/Group/Hostel">Hostel</NavLink>
                      <NavLink to="/Group/Research">Research</NavLink>
                      <NavLink to="/Group/StudentWelfare">Student Welfare</NavLink>
                      <NavLink to="/Group/Alumni">Alumni</NavLink>
                    </DropdownMenu>
                  </DropdownWrapper>
                </>
              ) : isSmrftPage ? (
                // SMRFT NAVIGATION
                <>
                  <NavLink to="/">Home</NavLink>

                  <NavLink to="/Smrft/About">About SMRFT</NavLink>
                  <NavLink to="/Smrft/Objectives">Objectives</NavLink>
                  <NavLink to="/Smrft/Activities">Activities</NavLink>
                  <NavLink to="/Smrft/Services">Our Services</NavLink>
                  <NavLink to="/Smrft/FCRA">FCRA Approval</NavLink>
                  <NavLink to="/Smrft/Contribution">Contribution</NavLink>
                  {/* External or Other Section Links */}

                </>
              ) : (
                // COLLEGE NAVIGATION
                <>
                  <NavLink to="/">Home</NavLink>
                  <DropdownWrapper
                    onMouseEnter={() => window.innerWidth > 1024 && setIsAboutOpen(true)}
                    onMouseLeave={() => window.innerWidth > 1024 && setIsAboutOpen(false)}
                  >
                    <DropdownTrigger onClick={() => setIsAboutOpen(!isAboutOpen)}>
                      About Us <ChevronDown size={16} style={{ transform: isAboutOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
                    </DropdownTrigger>
                    <DropdownMenu isOpen={isAboutOpen}>
                      <NavLink to="/ShanmugaNursingCollege/About">About College</NavLink>
                      <NavLink to="/ShanmugaNursingCollege/VisionMission">Vision & Mission</NavLink>
                      <NavLink to="/ShanmugaNursingCollege/Objectives">Objectives</NavLink>
                    </DropdownMenu>
                  </DropdownWrapper>

                  <NavLink to="/ShanmugaNursingCollege/Courses">Courses</NavLink>
                  <NavLink to="/ShanmugaNursingCollege/Faculty">Faculty</NavLink>

                  <DropdownWrapper
                    onMouseEnter={() => window.innerWidth > 1024 && setIsFacilitiesOpen(true)}
                    onMouseLeave={() => window.innerWidth > 1024 && setIsFacilitiesOpen(false)}
                  >
                    <DropdownTrigger onClick={() => setIsFacilitiesOpen(!isFacilitiesOpen)}>
                      Facilities <ChevronDown size={16} style={{ transform: isFacilitiesOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
                    </DropdownTrigger>
                    <DropdownMenu isOpen={isFacilitiesOpen}>
                      <NavLink to="/ShanmugaNursingCollege/Classroom">Classroom</NavLink>
                      <NavLink to="/ShanmugaNursingCollege/Library">Library</NavLink>
                      <NavLink to="/ShanmugaNursingCollege/Laboratory">Laboratory</NavLink>
                      <NavLink to="/ShanmugaNursingCollege/Hostel">Hostel</NavLink>
                      <NavLink to="/ShanmugaNursingCollege/ClinicalExperience">Clinical Experience</NavLink>
                      <NavLink to="/ShanmugaNursingCollege/SportsAndRecreation">Sports & Recreation</NavLink>
                    </DropdownMenu>
                  </DropdownWrapper>

                  <NavLink to="/ShanmugaNursingCollege/PlacementDetails">Placement</NavLink>
                  <NavLink to="/ShanmugaNursingCollege/UpcomingEvents">Events</NavLink>
                </>
              )}

              <EnquiryBtn onClick={() => {
                navigate(isSmrftPage ? '/Contact' : '/ShanmugaNursingCollege/EnquiryAndCourses');
                setIsMenuOpen(false);
              }}>
                <MessageCircle size={18} />
                {isSmrftPage ? 'Contact Us' : 'Enquiry'}
              </EnquiryBtn>

              <MobileContactInfo>
                <div>📞 0427 231 5610</div>
                <div>✉️ {isSmrftPage ? 'info@smrft.org' : 'info@shanmugacollege.com'}</div>
              </MobileContactInfo>
            </SidebarContent>
          </DesktopNav>
        </NavContainer>
      </HeaderContainer>

      {/* Show BottomBar only on Home and NOT in SMRFT mode */}
      {isHome && !isSmrftPage && (
        <BottomBar onClick={() => navigate('/ShanmugaNursingCollege/About')}>
          Explore Shanmuga College Of Nursing
          <ArrowRight size={18} />
        </BottomBar>
      )}
    </>
  );
};

export default Header;