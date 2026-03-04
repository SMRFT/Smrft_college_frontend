import React, { useState, useEffect } from "react"
import axios from "axios"
import { API_BASE_URL } from "../../apiConfig"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronRight, Send, Book, Award, Hospital, Clock, GraduationCap, CheckCircle, AlertCircle } from "lucide-react"
import { Link } from 'react-router-dom';
import './EnquiryAndCourses.css';
import MscImage from '../../Components/Images/MscNursing.png';
import BscImage from '../../Components/Images/BscNursing.png';
import DiplomaImage from '../../Components/Images/DiplomaNursing.png';
import AlliedImage from '../../Components/Images/AlliedHealth.png';

// Sample courses data - Keeping consistent with Courses.js
const coursesData = [
  {
    title: 'M.Sc Nursing',
    subtitle: 'Master of Science in Nursing',
    duration: '2 Years',
    description: `Advance your nursing career with specialized knowledge and leadership skills.`,
    image: MscImage,
    branches: [
      "Medical Surgical Nursing",
      "Child Health Nursing",
      "Obstetric and Gynecological Nursing",
      "Community Health Nursing",
      "Mental Health Nursing",
    ],
  },
  {
    title: 'B.Sc Nursing',
    subtitle: 'Bachelor of Science in Nursing',
    duration: '4 Years',
    description: 'A comprehensive program preparing students for a professional career in nursing.',
    image: BscImage,
    branches: [],
  },
  {
    title: 'Diploma in Nursing',
    subtitle: 'General Nursing and Midwifery',
    duration: '3 Years',
    description: 'Foundational course in general nursing care and midwifery.',
    image: DiplomaImage,
    branches: [],
  },
  {
    title: 'Allied Health Sciences',
    subtitle: 'B.Sc Allied Health Programs',
    duration: '3 Years',
    description: 'Specialized programs in advanced medical technologies and therapies.',
    image: AlliedImage,
    branches: [
      "Operation Theatre and Anaesthesia Technology",
      "Physician Assistant",
      "Respiratory Therapy",
      "Radiotherapy Technology",
      "Radiography & Imaging Technology",
    ],
  },
];

function EnquiryAndCourses() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    course: "",
    branch: "",
  })

  const [branches, setBranches] = useState([])
  const [message, setMessage] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})

  // Update branches when course changes
  useEffect(() => {
    if (formData.course) {
      const selectedCourseData = coursesData.find((course) => course.title === formData.course)
      const newBranches = selectedCourseData?.branches || []
      setBranches(newBranches)

      if (formData.branch && newBranches.length > 0 && !newBranches.includes(formData.branch)) {
        setFormData((prev) => ({ ...prev, branch: "" }))
      }
    } else {
      setBranches([])
      if (formData.branch) {
        setFormData((prev) => ({ ...prev, branch: "" }))
      }
    }
  }, [formData.course, formData.branch])

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Full Name is required";
      isValid = false;
    }

    if (!formData.mobile) {
      tempErrors.mobile = "Mobile Number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.mobile.replace(/\s/g, ''))) {
      tempErrors.mobile = "Please enter a valid 10-digit mobile number";
      isValid = false;
    }

    if (!formData.email) {
      tempErrors.email = "Email Address is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.course) {
      tempErrors.course = "Please select a course";
      isValid = false;
    }

    if (branches.length > 0 && !formData.branch) {
      tempErrors.branch = "Please select a specialization";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      // Optional: Shake animation or scroll to first error
      return;
    }

    setIsSubmitting(true)

    try {
      // Send data to backend - keeping original endpoint
      await axios.post(`${API_BASE_URL}/enquiry/`, formData)

      setMessage({
        type: "success",
        text: "Thank you for your enquiry! We will contact you shortly.",
      })

      setFormData({
        name: "",
        email: "",
        mobile: "",
        course: "",
        branch: "",
      })
      setErrors({})

      setTimeout(() => setMessage(null), 5000)
    } catch (error) {
      setMessage({
        type: "error",
        text: "There was an error submitting your enquiry. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="page-container">
      <div className="hero-section">
        <h1 className="page-title">Admissions Enquiry</h1>
        <p className="page-subtitle">
          Take the first step towards a rewarding career in healthcare.
          Fill out the form below and our counseling team will get in touch with you.
        </p>
      </div>

      <div className="content-container">
        <div className="enquiry-section">
          <div className="form-sidebar">
            <h3>Start Your Journey Here</h3>
            <p>
              Join Shanmuga College of Nursing and become part of a legacy of excellence in medical education.
            </p>
            <div className="contact-info">
              <div><Send size={18} /> admissions@shanmugacollege.com</div>
              <div><Hospital size={18} /> +91 123 456 7890</div>
            </div>
          </div>

          <div className="form-main">
            <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
              <AnimatePresence>
                {message && (
                  <motion.div
                    className={`alert-message ${message.type}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    {message.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                    {message.text}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="form-group">
                <label className="form-label" htmlFor="name">Full Name</label>
                <input
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {errors.name && <span className="error-text"><AlertCircle size={14} /> {errors.name}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="mobile">Mobile Number</label>
                <input
                  className={`form-input ${errors.mobile ? 'error' : ''}`}
                  type="tel"
                  id="mobile"
                  name="mobile"
                  placeholder="+91 98765 43210"
                  value={formData.mobile}
                  onChange={handleInputChange}
                />
                {errors.mobile && <span className="error-text"><AlertCircle size={14} /> {errors.mobile}</span>}
              </div>

              <div className="form-group full-width">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <span className="error-text"><AlertCircle size={14} /> {errors.email}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="course">Interested Course</label>
                <select
                  className={`form-select ${errors.course ? 'error' : ''}`}
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                >
                  <option value="">Select a course</option>
                  {coursesData.map((course, index) => (
                    <option key={index} value={course.title}>
                      {course.title}
                    </option>
                  ))}
                </select>
                {errors.course && <span className="error-text"><AlertCircle size={14} /> {errors.course}</span>}
              </div>

              {branches.length > 0 && (
                <div className="form-group">
                  <label className="form-label" htmlFor="branch">Specialization</label>
                  <select
                    className={`form-select ${errors.branch ? 'error' : ''}`}
                    id="branch"
                    name="branch"
                    value={formData.branch}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a specialization</option>
                    {branches.map((branch, index) => (
                      <option key={index} value={branch}>
                        {branch}
                      </option>
                    ))}
                  </select>
                  {errors.branch && <span className="error-text"><AlertCircle size={14} /> {errors.branch}</span>}
                </div>
              )}

              <motion.button
                className="submit-button"
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
                {!isSubmitting && <Send size={18} />}
              </motion.button>
            </form>
          </div>
        </div>

        <div className="courses-review-section">
          <h2>Explore Our Courses</h2>
          <div className="course-grid">
            {coursesData.map((course, index) => (
              <Link to="/Courses" key={index} className="mini-course-card">
                <div className="image-container">
                  <img src={course.image} alt={course.title} />
                </div>
                <div className="content">
                  <h4>{course.title}</h4>
                  <p>{course.subtitle}</p>
                  <div className="footer">
                    <span>{course.duration}</span>
                    <ChevronRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnquiryAndCourses;
