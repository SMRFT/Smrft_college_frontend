import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Lock, User, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(30, 58, 138, 0.9) 0%, rgba(30, 58, 138, 0.7) 100%), url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
  background-size: cover;
  background-position: center;
  font-family: 'Inter', sans-serif;
  padding: 1rem;
`;

const LoginCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  padding: 3.5rem 3rem;
  border-radius: 24px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  width: 100%;
  max-width: 420px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.5);
  
  @media (max-width: 480px) {
    padding: 2rem;
  }
`;

const IconWrapper = styled.div`
  background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-dark) 100%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
  
  svg {
    color: white;
    width: 32px;
    height: 32px;
  }
`;

const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  color: var(--primary-blue);
  font-size: 2.25rem;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
`;

const Subtitle = styled.p`
  color: #64748b;
  font-size: 0.95rem;
  margin-bottom: 2.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const InputGroup = styled.div`
  text-align: left;
  
  label {
    display: block;
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #334155;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  .input-wrapper {
    position: relative;
    
    .icon-left {
      position: absolute;
      left: 1rem;
      top: 50%;
      transform: translateY(-50%);
      color: #94a3b8;
      transition: color 0.2s;
    }

    .icon-right {
      position: absolute;
      right: 1rem;
      top: 50%;
      transform: translateY(-50%);
      color: #94a3b8;
      cursor: pointer;
      transition: color 0.2s;
      
      &:hover {
        color: var(--primary-blue);
      }
    }
    
    input {
      width: 100%;
      padding: 0.875rem 2.75rem 0.875rem 2.75rem;
      border: 2px solid #e2e8f0;
      border-radius: 12px;
      font-family: 'Inter', sans-serif;
      font-size: 1rem;
      transition: all 0.2s;
      background: #f8fafc;
      color: #1e293b;
      box-sizing: border-box;
      
      &::placeholder {
        color: #cbd5e1;
      }
      
      &:focus {
        outline: none;
        border-color: var(--primary-blue);
        background: white;
        box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
      }

      &:focus ~ .icon-left {
        color: var(--primary-blue);
      }
    }
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-dark) 100%);
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  box-shadow: 0 10px 20px -5px rgba(37, 99, 235, 0.4);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 25px -5px rgba(37, 99, 235, 0.5);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const ErrorMessage = styled(motion.div)`
  background: #fef2f2;
  color: #ef4444;
  padding: 0.75rem;
  border-radius: 8px;
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
  border: 1px solid #fee2e2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple hardcoded authentication for demonstration
    if (username === 'admin' && password === 'Smrft@2024') {
      localStorage.setItem('isAdminAuthenticated', 'true');
      navigate('/AdminDashboard');
    } else {
      setError('Invalid username or password');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <Container>
      <LoginCard
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <IconWrapper>
          <Lock />
        </IconWrapper>

        <Title>Welcome Back</Title>
        <Subtitle>Please sign in to access the dashboard</Subtitle>

        {error && (
          <ErrorMessage
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {error}
          </ErrorMessage>
        )}

        <Form onSubmit={handleLogin}>
          <InputGroup>
            <label>Username</label>
            <div className="input-wrapper">
              <User size={18} className="icon-left" />
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </InputGroup>

          <InputGroup>
            <label>Password</label>
            <div className="input-wrapper">
              <Lock size={18} className="icon-left" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className="icon-right"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>
            </div>
          </InputGroup>

          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Sign In <ArrowRight size={18} />
          </SubmitButton>
        </Form>
      </LoginCard>
    </Container>
  );
};

export default AdminLogin;
