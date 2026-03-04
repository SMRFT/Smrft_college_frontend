import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Send, X, MessageSquare, Award, Book, Guitar as Hospital, Activity, User, Mail, Phone, BookOpen, School, Calendar } from 'lucide-react';
import emailjs from 'emailjs-com';
import axios from 'axios';
import { API_BASE_URL } from '../../apiConfig';

// Course data
const coursesData = [
  {
    title: "M.Sc Nursing - 2 Years",
    description: `Master's degree in nursing and healthcare.`,
    icon: <Award size={28} />,
    details: `
      <div>
        <strong>(Affiliated to The Tamilnadu Dr.M.G.R Medical University, Chennai)</strong>
        <p>The need to have a separate course exclusively in the Post Graduate Medical Education level was keenly felt for over a period of years.</p>
        <p>The effective delivery of health care service will depend largely on the nature of education and training.</p>
        <p>Offering a Master's course in Nursing will prepare high-quality Nurses to face emerging diseases.</p>
        <strong>Objectives of The Course:</strong>
        <p>Acquires in-depth knowledge in different specialties. Demonstrates a high level of skill utilizing the advanced concepts and theories. Functions efficiently at different levels as Administrator and Educator. Develops competencies in conditions of research programmes. Takes up leadership in the advancement of Nursing practice and Education.</p>
        <strong>Specialties Available:</strong>
        <br>
      <strong>Branches:</strong><br>
     <ul class="branch-list">
        <li>Branch I – Medical Surgical Nursing – 5 seats</li>
        <li>Branch II – Child Health Nursing - 3 seats</li>
        <li>Branch III – Obstetric and Gynecological Nursing - 5 seats</li>
        <li>Branch IV – Community Health Nursing - 3 seats</li>
        <li>Branch V – Mental Health Nursing - 5 seats</li>
      </ul>
        <strong>Duration:</strong> 2 Years <br>
        <strong>Eligibility:</strong> <p>The candidate should have passed the qualification of B.Sc Nursing degree or equivalent. Should have registered with the State Registration Council of Nursing and Mid-Wifery. Should have one year of experience in teaching hospitals or nursing colleges.</p>
      </div>
    `,
    branches: [
      "Medical Surgical Nursing",
      "Child Health Nursing",
      "Obstetric and Gynecological Nursing",
      "Community Health Nursing",
      "Mental Health Nursing",
    ],
  },
  {
    title: "Basic B.Sc Nursing - 4 Years",
    description: "Bachelors degree in nursing.",
    icon: <Book size={28} />,
    details: `
      <div>
        <strong>Duration:</strong> 4 years <br>
        <strong>Eligibility:</strong>
        <strong>Detailed information about B.Sc College of Nursing:</strong>
        The B.Sc Nursing program prepares students for a professional career in nursing, emphasizing both practical and theoretical knowledge.
      </div>
    `,
    branches: [],
  },
  {
    title: "Diploma in Nursing - 3 Years",
    description: "Diploma course in nursing education.",
    icon: <Hospital size={28} />,
    details: `
      <div>
        <strong>Detailed information about Diploma in Nursing:</strong>
        This program offers a comprehensive education in nursing practices and patient care.
      </div>
    `,
    branches: [],
  },
  {
    title: "Allied Health Science - 3 Years",
    description: "Study in various allied health science programs.",
    icon: <Activity size={28} />,
    details: `
      <div>
        <strong>Allied Health Science details:</strong>
        <p>Can be absorbed by the line-up Hospitals of Shanmuga. Can get a placement in Government Hospitals. Can stand as a college Tutor. Can go Abroad or pursue Higher Education.</p>
        <strong>Eligibility:</strong> 
        <p>
          B.Sc – Operation Theatre and Anaesthesia Technology <br>
          B.Sc – Physician Assistant <br>
          B.Sc – Respiratory Therapy <br>
          B.Sc – Radiotherapy Technology <br>
          B.Sc – Radiography & Imaging Technology
        </p>
        <p>+2 Passed with Science Subject (H.Sc./CBSE/PUC/DCP).</p>
      </div>
    `,
    branches: [
      "Operation Theatre and Anaesthesia Technology",
      "Physician Assistant",
      "Respiratory Therapy",
      "Radiotherapy Technology",
      "Radiography & Imaging Technology",
    ],
  },
];

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Styled Components
const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  font-family: 'Poppins', sans-serif;
  pointer-events: none; /* Let clicks pass through empty areas */
`;

const ChatbotButton = styled.button`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1e3a8a, #172554, #2563eb);
  color: white;
  border: none;
  box-shadow: 0 10px 25px rgba(30, 58, 138, 0.4);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 0;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 1002;
  pointer-events: auto; /* Re-enable clicks for the button */
  
  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    bottom: 5px; /* Adjust bottom spacing for mobile */
    right: 5px;
  }
  
  &:hover {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 15px 35px rgba(30, 58, 138, 0.5);
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.5);
    opacity: 0;
    animation: ${pulse} 2s infinite;
  }
`;

const ChatWindow = styled.div`
  width: 400px;
  height: 600px;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-bottom: 85px;
  transform: ${props => props.isOpen ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(20px)'};
  opacity: ${props => props.isOpen ? '1' : '0'};
  transform-origin: bottom right;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  pointer-events: ${props => props.isOpen ? 'auto' : 'none'};
  border: 1px solid rgba(0, 0, 0, 0.05);

  @media (max-width: 480px) {
    width: calc(100vw - 30px); /* Slightly more margin on sides */
    height: calc(100vh - 100px); /* Adjust height to fit above keyboard/nav */
    max-height: 600px; /* Prevent it from being too tall on large phones */
    position: fixed;
    bottom: 85px;
    right: 15px;
    left: 15px; /* Center horizontally if width allows, or constrained by left/right */
    margin-bottom: 0;
    transform-origin: bottom right;
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.2);
  }
`;

const ChatHeader = styled.div`
  background: linear-gradient(135deg, #1e3a8a, #172554);
  color: white;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 15px rgba(30, 58, 138, 0.2);
`;

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CollegeLogo = styled.div`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
`;

const HeaderText = styled.div`
  h3 {
    font-size: 16px;
    margin: 0;
    font-weight: 700;
    letter-spacing: 0.3px;
  }
  
  p {
    font-size: 13px;
    margin: 0;
    opacity: 0.9;
    font-weight: 400;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 0;
  border-radius: 50%;
  transition: background 0.2s;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const ChatMessages = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  
  &::-webkit-scrollbar {
    width: 5px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 10px;
  }
  
  background-color: #f8fafc;
`;

const MessageBubble = styled.div`
  max-width: 80%;
  padding: 14px 18px;
  border-radius: ${props => props.isUser ? '20px 20px 4px 20px' : '20px 20px 20px 4px'};
  background: ${props => props.isUser ? 'linear-gradient(135deg, #1e3a8a, #2563eb)' : '#ffffff'};
  color: ${props => props.isUser ? 'white' : '#1e293b'};
  align-self: ${props => props.isUser ? 'flex-end' : 'flex-start'};
  box-shadow: ${props => props.isUser ? '0 4px 15px rgba(30, 58, 138, 0.3)' : '0 2px 10px rgba(0, 0, 0, 0.03)'};
  border: ${props => props.isUser ? 'none' : '1px solid #f1f5f9'};
  font-size: 14px;
  line-height: 1.5;
  animation: ${fadeIn} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  
  a {
    color: ${props => props.isUser ? 'white' : '#1e3a8a'};
    text-decoration: underline;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 5px;
  animation: ${fadeIn} 0.4s ease-out;
`;

const OptionButton = styled.button`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 50px;
  padding: 8px 16px;
  font-size: 13px;
  color: #475569;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.03);
  font-weight: 500;
  
  &:hover {
    background: #f1f5f9;
    border-color: #1e3a8a;
    color: #1e3a8a;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(30, 58, 138, 0.15);
  }
`;

const CourseCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 18px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  margin-bottom: 12px;
  border-left: 5px solid #1e3a8a;
  animation: ${fadeIn} 0.5s ease-out;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateX(4px);
  }
  
  h4 {
    margin: 0 0 8px 0;
    font-size: 16px;
    color: #2c3e50;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  p {
    margin: 0;
    font-size: 14px;
    color: #64748b;
  }
`;

const BranchList = styled.ul`
  margin: 10px 0 0 0;
  padding-left: 20px;
  font-size: 14px;
  color: #64748b;
  
  li {
    margin-bottom: 4px;
  }
`;

const CourseDetails = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-top: 10px;
  font-size: 14px;
  color: #334155;
  max-height: 200px;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #c3cfe2;
    border-radius: 2px;
  }
  
  strong {
    color: #1e293b;
  }
  
  p {
    margin: 8px 0;
  }
  
  ul {
    margin: 8px 0;
    padding-left: 20px;
  }
`;

const ChatInputContainer = styled.div`
  padding: 15px;
  border-top: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ChatInput = styled.input`
  flex: 1;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 10px 15px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
  
  &:focus {
  border-color: #1e3a8a;
    box-shadow: 0 0 0 3px rgba(30, 58, 138, 0.1);
  }
  
  &::placeholder {
    color: #94a3b8;
  }
`;

const SendButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1e3a8a, #172554, #2563eb);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 4px 12px rgba(30, 58, 138, 0.3);
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 15px rgba(30, 58, 138, 0.4);
  }
  
  &:disabled {
    background: #cbd5e1;
    cursor: not-allowed;
    transform: scale(1);
  }
`;

const EnquiryForm = styled.form`
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 12px;
  animation: ${fadeIn} 0.4s ease-out;
`;

const FormTitle = styled.h4`
  margin: 0 0 10px 0;
  font-size: 16px;
  color: #2c3e50;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const FormLabel = styled.label`
  font-size: 13px;
  color: #64748b;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const FormInput = styled.input`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
  
  &:focus {
    border-color: #1e3a8a;
    box-shadow: 0 0 0 3px rgba(30, 58, 138, 0.1);
  }
`;

const FormSelect = styled.select`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
  
  &:focus {
    border-color: #1e3a8a;
    box-shadow: 0 0 0 3px rgba(30, 58, 138, 0.1);
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #1e3a8a, #172554, #2563eb);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(30, 58, 138, 0.1);
  }
  
  &:disabled {
    background: #cbd5e1;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const StatusMessage = styled.div`
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 14px;
  background: ${props => props.isError ? '#fee2e2' : '#dcfce7'};
  color: ${props => props.isError ? '#b91c1c' : '#166534'};
  margin-top: 10px;
  animation: ${fadeIn} 0.3s ease-out;
`;

// Main Component
const ShanmugaChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState();
  const [formStatus, setFormStatus] = useState();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const messagesEndRef = useRef(null);

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initial greeting when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([
          {
            text: "Hello! Welcome to Shanmuga College of Nursing. How can I assist you today?",
            isUser: false
          }
        ]);
        setTimeout(() => setShowOptions(true), 500);
      }, 300);
    }
  }, [isOpen, messages.length]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const userMessage = {
      text: inputValue,
      isUser: true
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Process user message and respond
    setTimeout(() => {
      const lowerCaseInput = inputValue.toLowerCase();

      if (lowerCaseInput.includes('course') || lowerCaseInput.includes('program') || lowerCaseInput.includes('study')) {
        handleCourseQuery();
      } else if (lowerCaseInput.includes('enquiry') || lowerCaseInput.includes('apply') || lowerCaseInput.includes('admission') || lowerCaseInput.includes('join')) {
        handleEnquiryQuery();
      } else if (lowerCaseInput.includes('contact') || lowerCaseInput.includes('location') || lowerCaseInput.includes('address')) {
        handleContactQuery();
      } else {
        setMessages(prev => [...prev, {
          text: "I'm not sure I understand. Would you like to know about our courses, make an enquiry, or get contact information?",
          isUser: false
        }]);
        setShowOptions(true);
      }
    }, 500);
  };

  const handleOptionClick = (option) => {
    setShowOptions(false);

    const userMessage = {
      text: option,
      isUser: true
    };

    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      if (option === "Tell me about your courses") {
        handleCourseQuery();
      } else if (option === "I want to make an enquiry") {
        handleEnquiryQuery();
      } else if (option === "Contact information") {
        handleContactQuery();
      }
    }, 500);
  };

  const handleCourseQuery = () => {
    setMessages(prev => [...prev, {
      text: "We offer several nursing and allied health science programs. Here are our main courses:",
      isUser: false
    }]);

    setShowCourses(true);
  };

  const handleCourseClick = (courseTitle) => {
    setSelectedCourse(courseTitle);

    const course = coursesData.find(c => c.title === courseTitle);

    if (course) {
      setMessages(prev => [...prev, {
        text: `Here are the details for ${courseTitle}:`,
        isUser: false,
        html: course.details
      }]);

      setTimeout(() => {
        setMessages(prev => [...prev, {
          text: "Would you like to make an enquiry about this course?",
          isUser: false
        }]);

        setShowOptions(true);
      }, 1000);
    }
  };

  const handleEnquiryQuery = () => {
    setMessages(prev => [...prev, {
      text: "Great! Please fill out this form and we'll get back to you as soon as possible.",
      isUser: false
    }]);

    setShowEnquiryForm(true);
    setShowOptions(false);
  };

  const handleContactQuery = () => {
    setMessages(prev => [...prev, {
      text: "Here's how you can reach us:",
      isUser: false,
      html: `
        <div>
          <p><strong>Address:</strong> Shanmuga College of Nursing, Salem, Tamil Nadu, India</p>
          <p><strong>Phone:</strong> +91-1234567890</p>
          <p><strong>Email:</strong> Shanmuga158@gmail.com</p>
          <p><strong>Website:</strong> www.shanmuganursing.edu.in</p>
          <p><strong>Office Hours:</strong> Monday to Friday, 9:00 AM to 5:00 PM</p>
        </div>
      `
    }]);

    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Is there anything else you'd like to know?",
        isUser: false
      }]);

      setShowOptions(true);
    }, 1000);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    setFormStatus({ message: "Sending your enquiry...", isError: false });

    try {
      await axios.post(`${API_BASE_URL}/enquiry/`, {
        name: formData.name,
        email: formData.email,
        mobile: formData.phone,
        course: formData.course,
        message: formData.message,
        branch: ""
      });

      setFormStatus({ message: "Thank you! Your enquiry has been sent successfully. We'll contact you soon.", isError: false });

      setMessages(prev => [...prev, {
        text: "Thank you for your enquiry! Our team will contact you soon.",
        isUser: false
      }]);

      setTimeout(() => {
        setShowEnquiryForm(false);
        setShowOptions(true);
      }, 2000);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
      });
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      setFormStatus({ message: "There was an error sending your enquiry. Please try again.", isError: true });
    }
  };

  return (
    <ChatbotContainer>
      <ChatWindow isOpen={isOpen}>
        <ChatHeader>
          <HeaderTitle>
            <CollegeLogo>
              <School size={18} />
            </CollegeLogo>
            <HeaderText>
              <h3>Shanmuga Nursing College</h3>
              <p>Virtual Assistant</p>
            </HeaderText>
          </HeaderTitle>
          <CloseButton onClick={() => setIsOpen(false)}>
            <X size={14} />
          </CloseButton>
        </ChatHeader>

        <ChatMessages>
          {messages.map((message, index) => (
            <MessageBubble key={index} isUser={message.isUser}>
              {message.html ? (
                <div dangerouslySetInnerHTML={{ __html: message.html }} />
              ) : (
                message.text
              )}
            </MessageBubble>
          ))}

          {showOptions && (
            <OptionsContainer>
              <OptionButton onClick={() => handleOptionClick("Tell me about your courses")}>
                <BookOpen size={16} />
                Courses
              </OptionButton>
              <OptionButton onClick={() => handleOptionClick("I want to make an enquiry")}>
                <Mail size={16} />
                Enquiry
              </OptionButton>
              <OptionButton onClick={() => handleOptionClick("Contact information")}>
                <Phone size={16} />
                Contact
              </OptionButton>
            </OptionsContainer>
          )}

          {showCourses && (
            <div>
              {coursesData.map((course, index) => (
                <CourseCard key={index} onClick={() => handleCourseClick(course.title)}>
                  <h4>
                    {React.cloneElement(course.icon, { size: 20 })}
                    {course.title}
                  </h4>
                  <p>{course.description}</p>
                  {course.branches.length > 0 && (
                    <BranchList>
                      {course.branches.slice(0, 2).map((branch, idx) => (
                        <li key={idx}>{branch}</li>
                      ))}
                      {course.branches.length > 2 && <li>+ {course.branches.length - 2} more...</li>}
                    </BranchList>
                  )}
                </CourseCard>
              ))}
            </div>
          )}

          {showEnquiryForm && (
            <EnquiryForm onSubmit={handleFormSubmit}>
              <FormTitle>
                <Mail size={18} />
                Enquiry Form
              </FormTitle>

              <FormField>
                <FormLabel>
                  <User size={14} />
                  Full Name
                </FormLabel>
                <FormInput
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Enter your full name"
                  required
                />
              </FormField>

              <FormField>
                <FormLabel>
                  <Mail size={14} />
                  Email Address
                </FormLabel>
                <FormInput
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="Enter your email"
                  required
                />
              </FormField>

              <FormField>
                <FormLabel>
                  <Phone size={14} />
                  Phone Number
                </FormLabel>
                <FormInput
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  placeholder="Enter your phone number"
                  required
                />
              </FormField>

              <FormField>
                <FormLabel>
                  <BookOpen size={14} />
                  Course of Interest
                </FormLabel>
                <FormSelect
                  name="course"
                  value={formData.course}
                  onChange={handleFormChange}
                  required
                >
                  <option value="">Select a course</option>
                  {coursesData.map((course, index) => (
                    <option key={index} value={course.title}>
                      {course.title}
                    </option>
                  ))}
                </FormSelect>
              </FormField>

              <FormField>
                <FormLabel>
                  <MessageSquare size={14} />
                  Message (Optional)
                </FormLabel>
                <FormInput
                  as="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder="Any specific questions or information?"
                  style={{ minHeight: '80px', resize: 'vertical' }}
                />
              </FormField>

              <SubmitButton type="submit" disabled={formStatus?.message === "Sending your enquiry..."}>
                <Send size={16} />
                Submit Enquiry
              </SubmitButton>

              {formStatus && (
                <StatusMessage isError={formStatus.isError}>
                  {formStatus.message}
                </StatusMessage>
              )}
            </EnquiryForm>
          )}

          <div ref={messagesEndRef} />
        </ChatMessages>

        <ChatInputContainer>
          <ChatInput
            type="text"
            placeholder="Type your message here..."
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <SendButton onClick={handleSendMessage} disabled={inputValue.trim() === ''}>
            <Send size={18} />
          </SendButton>
        </ChatInputContainer>
      </ChatWindow>

      <ChatbotButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </ChatbotButton>
    </ChatbotContainer>
  );
};

export default ShanmugaChatbot;