import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Alumni.css';

function Alumni() {
    const navigate = useNavigate(); // Hook for navigation

    const handleNavigate = () => {
        navigate('/ShanmugaNursingCollege/AlumniRegistration'); // Navigate to the Alumni Registration page
    };

    return (
        <div className="alumni-container">
            <div className="alumni-header">
                <h6 className='heading'>Alumni</h6>
                <button className="alumni-register-button" onClick={handleNavigate}>
                    Alumni Registration
                </button>
            </div>
            <div className="alumni-section">
                <p>
                    The Alumni Association is established and functions with yearly meetings where alumni share their new experiences.
                    Even during the COVID-19 pandemic, they communicated through Zoom, continuing to strengthen the bond among alumni members.
                </p>
            </div>
        </div>
    );
}

export default Alumni;
