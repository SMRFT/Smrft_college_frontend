import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../apiConfig';
import './AlumniRegistration.css';

function AlumniRegistration() {
    const [registerData, setRegisterData] = useState({
        register_number: '',
        name: '',
        dob: '',
        gender: '',
        blood_group: '',
        email: '',
        phone: '',
        linkedin_profile: '',
        academic_year: '',
        department: '',
        organization: '',
        designation: '',
        address: ''
    });

    const handleChange = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Data being submitted:', registerData);

        fetch(`${API_BASE_URL}/register/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(registerData),
        })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(errorData => {
                        throw new Error(errorData.message);
                    });
                }
                return response.json();
            })
            .then(data => {
                alert(data.message);
                window.location.reload();
            })
            .catch(error => {
                alert(error.message);
                console.error('Error:', error);
                window.location.reload();
            });
    };

    const navigate = useNavigate(); // Hook for navigation

    const handleBack = () => {
        navigate('/ShanmugaNursingCollege/Alumni'); // Navigate to the Alumni Registration page
    };


    return (
        <div className="register-container">
            <div className='register-content'>
                <div className="alumni-header">
                    <h1 className='heading'>Alumni Registration</h1>
                    <button className="alumni-back-button" onClick={handleBack}>
                        Alumni
                    </button>
                </div>
                <form onSubmit={handleSubmit}>

                    <div className="form-section">
                        <h3 className="section-title">Personal Details</h3>
                        <div className="form-row">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={registerData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="date"
                                name="dob"
                                placeholder="Date of Birth"
                                value={registerData.dob}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-row">
                            <select name="gender" value={registerData.gender} onChange={handleChange} required>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            <select name="blood_group" value={registerData.blood_group} onChange={handleChange}>
                                <option value="">Blood Group</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-section">
                        <h3 className="section-title">Academic Information</h3>
                        <div className="form-row">
                            <input
                                type="text"
                                name="register_number"
                                placeholder="Register Number"
                                value={registerData.register_number}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="academic_year"
                                placeholder="Batch (e.g., 2018-2022)"
                                value={registerData.academic_year}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="department"
                                placeholder="Department"
                                value={registerData.department}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-section">
                        <h3 className="section-title">Contact Details</h3>
                        <div className="form-row">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={registerData.email}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone Number"
                                value={registerData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* <div className="form-group">
                            <input
                                type="url"
                                name="linkedin_profile"
                                placeholder="LinkedIn Profile URL (Optional)"
                                value={registerData.linkedin_profile}
                                onChange={handleChange}
                            />
                        </div> */}
                        <div className="form-group">
                            <textarea
                                name="address"
                                placeholder="Current Residential Address"
                                value={registerData.address}
                                onChange={handleChange}
                                className="alumni-textarea"
                                rows="2"
                            />
                        </div>
                    </div>

                    <div className="form-section">
                        <h3 className="section-title">Professional Information</h3>
                        <div className="form-row">
                            <input
                                type="text"
                                name="organization"
                                placeholder="Current Company / Organization"
                                value={registerData.organization}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="designation"
                                placeholder="Designation / Job Title"
                                value={registerData.designation}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <button type="submit">Submit Registration</button>
                </form>
            </div>
        </div>
    );
}

export default AlumniRegistration;
