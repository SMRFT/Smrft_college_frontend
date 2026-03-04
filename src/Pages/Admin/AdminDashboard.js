import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Plus, Calendar, Image as ImageIcon, Users, Layout, Search, Filter, Loader, LogOut } from 'lucide-react';
import imageCompression from 'browser-image-compression';
import { API_BASE_URL } from '../../apiConfig';

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #f1f5f9;
  font-family: 'Inter', sans-serif;
  color: var(--text-primary);
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  h1 {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    color: var(--primary-blue);
    margin: 0;
    
    @media (max-width: 600px) {
      font-size: 1.5rem;
    }
  }
`;

const TabsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  background: white;
  padding: 0.5rem;
  border-radius: 12px;
  width: fit-content;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
  max-width: 100%;
  overflow-x: auto;
  
  @media (max-width: 600px) {
    width: 100%;
    padding: 0.5rem;
    gap: 0.5rem;
    
    /* Hide scrollbar for cleaner look */
    &::-webkit-scrollbar {
      display: none; 
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const Tab = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  background: ${props => props.active ? 'var(--primary-blue)' : 'transparent'};
  color: ${props => props.active ? 'white' : '#64748b'};
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
  
  &:hover {
    background: ${props => props.active ? 'var(--primary-blue)' : '#f8fafc'};
    color: ${props => props.active ? 'white' : 'var(--primary-blue)'};
  }
  
  @media (max-width: 600px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`;

const ContentCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    padding: 1.25rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  label {
    font-weight: 600;
    font-size: 0.9rem;
    color: #475569;
  }
  
  input {
    padding: 0.75rem;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    font-family: 'Inter', sans-serif;
    width: 100%;
    box-sizing: border-box;
    
    &:focus {
      outline: none;
      border-color: var(--primary-blue);
      box-shadow: 0 0 0 2px rgba(30, 58, 138, 0.1);
    }
  }
`;

const FileInputWrapper = styled.div`
  border: 2px dashed #cbd5e1;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
  background: #f8fafc;
  
  &:hover {
    border-color: var(--primary-blue);
    background: #eff6ff;
  }
  
  input {
    display: none;
  }
`;

const Button = styled(motion.button)`
  background: var(--primary-blue);
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px; /* Ensure table doesn't squish too much */
  
  th {
    text-align: left;
    padding: 1rem;
    background: #f8fafc;
    color: #475569;
    font-weight: 600;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  td {
    padding: 1rem;
    border-bottom: 1px solid #f1f5f9;
    vertical-align: middle;
  }
  
  tr:last-child td {
    border-bottom: none;
  }
`;

const Badge = styled.span`
  background: #ecfdf5;
  color: #059669;
  padding: 0.25rem 0.75rem;
  border-radius: 99px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const Thumbnail = styled.img`
  width: 60px;
  height: 40px;
  object-fit: cover;
  border-radius: 6px;
`;

const ActionButton = styled.button`
  background: #fee2e2;
  color: #dc2626;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: #fecaca;
  }
`;

const LogoutButton = styled.button`
  background: white;
  color: #ef4444;
  border: 1px solid #fee2e2;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s;
  
  &:hover {
    background: #fef2f2;
  }
  
  @media (max-width: 600px) {
    width: 100%;
    justify-content: center;
  }
`;

const Alert = styled(motion.div)`
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  background: ${props => props.type === 'error' ? '#fef2f2' : '#ecfdf5'};
  color: ${props => props.type === 'error' ? '#b91c1c' : '#047857'};
  border: 1px solid ${props => props.type === 'error' ? '#fecaca' : '#a7f3d0'};
`;

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('events');
    const [events, setEvents] = useState([]);
    const [enquiries, setEnquiries] = useState([]);
    const [alumni, setAlumni] = useState([]);
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState(null);
    const navigate = useNavigate();

    // Event Form State
    const [eventForm, setEventForm] = useState({
        title: '',
        startDate: '',
        endDate: '',
        description: '',
        image: null
    });

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAdminAuthenticated');
        if (!isAuthenticated) {
            navigate('/Admin');
        } else {
            fetchEvents();
            fetchEnquiries();
            fetchAlumni();
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('isAdminAuthenticated');
        navigate('/Admin');
    };

    const fetchEvents = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/events/`);
            setEvents(response.data);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    const fetchEnquiries = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/enquiries/`);
            setEnquiries(response.data);
        } catch (error) {
            console.error('Error fetching enquiries:', error);
        }
    };

    const fetchAlumni = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/alumni/`);
            setAlumni(response.data);
        } catch (error) {
            console.error('Error fetching alumni:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEventForm(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setEventForm(prev => ({ ...prev, image: e.target.files[0] }));
        }
    };

    const handleSubmitEvent = async (e) => {
        e.preventDefault();

        if (!eventForm.image) {
            setNotification({ type: 'error', message: 'Please select an event image.' });
            setTimeout(() => setNotification(null), 3000);
            return;
        }

        setLoading(true);

        try {
            // Convert image to Base64
            const reader = new FileReader();

            const base64Promise = new Promise((resolve, reject) => {
                reader.onload = () => resolve(reader.result);
                reader.onerror = (error) => reject(error);
                reader.readAsDataURL(eventForm.image);
            });

            const base64Image = await base64Promise;

            const payload = {
                title: eventForm.title,
                startDate: eventForm.startDate,
                endDate: eventForm.endDate,
                description: eventForm.description,
                image: base64Image,
                filename: eventForm.image.name
            };

            await axios.post(`${API_BASE_URL}/events/add/`, payload, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            setNotification({ type: 'success', message: 'Event added successfully!' });
            setEventForm({ title: '', startDate: '', endDate: '', description: '', image: null });
            fetchEvents();
        } catch (error) {
            console.error('Upload error:', error);
            setNotification({ type: 'error', message: 'Failed to add event. Please try again.' });
        } finally {
            setLoading(false);
            setTimeout(() => setNotification(null), 3000);
        }
    };

    const handleDeleteEvent = async (id) => {
        if (window.confirm('Are you sure you want to delete this event?')) {
            try {
                await axios.delete(`${API_BASE_URL}/events/delete/${id}/`);
                setNotification({ type: 'success', message: 'Event deleted successfully!' });
                fetchEvents();
            } catch (error) {
                setNotification({ type: 'error', message: 'Failed to delete event.' });
            } finally {
                setTimeout(() => setNotification(null), 3000);
            }
        }
    };

    return (
        <PageContainer>
            <Header>
                <div>
                    <h1>Admin Dashboard</h1>
                    <Badge>Admin Access</Badge>
                </div>
                <LogoutButton onClick={handleLogout}>
                    <LogOut size={16} /> Logout
                </LogoutButton>
            </Header>

            <TabsContainer>
                <Tab active={activeTab === 'events'} onClick={() => setActiveTab('events')}>
                    <Calendar size={18} /> Manage Events
                </Tab>
                <Tab active={activeTab === 'enquiries'} onClick={() => setActiveTab('enquiries')}>
                    <Users size={18} /> Enquiries
                </Tab>
                <Tab active={activeTab === 'alumni'} onClick={() => setActiveTab('alumni')}>
                    <Users size={18} /> Alumni
                </Tab>
            </TabsContainer>

            <AnimatePresence>
                {notification && (
                    <Alert
                        type={notification.type}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                    >
                        {notification.message}
                    </Alert>
                )}
            </AnimatePresence>

            {activeTab === 'events' ? (
                <Grid>
                    {/* Add Event Form */}
                    <ContentCard>
                        <h3 style={{ marginTop: 0, marginBottom: '1.5rem', color: 'var(--primary-blue)' }}>Add New Event</h3>
                        <Form onSubmit={handleSubmitEvent}>
                            <FormGroup>
                                <label>Event Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={eventForm.title}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="e.g. Annual Sports Day"
                                />
                            </FormGroup>

                            <FormGroup>
                                <label>Description</label>
                                <textarea
                                    name="description"
                                    value={eventForm.description}
                                    onChange={handleInputChange}
                                    placeholder="Enter event details..."
                                    rows="4"
                                    style={{
                                        padding: '0.75rem',
                                        border: '1px solid #e2e8f0',
                                        borderRadius: '8px',
                                        fontFamily: "'Inter', sans-serif",
                                        resize: 'vertical'
                                    }}
                                />
                            </FormGroup>

                            <FormGroup>
                                <label>Start Date</label>
                                <input
                                    type="date"
                                    name="startDate"
                                    value={eventForm.startDate}
                                    onChange={handleInputChange}
                                    required
                                />
                            </FormGroup>

                            <FormGroup>
                                <label>End Date</label>
                                <input
                                    type="date"
                                    name="endDate"
                                    value={eventForm.endDate}
                                    onChange={handleInputChange}
                                    required
                                />
                            </FormGroup>

                            <FormGroup>
                                <label>Event Image</label>
                                <FileInputWrapper onClick={() => document.getElementById('fileInput').click()}>
                                    <ImageIcon size={32} color="#94a3b8" />
                                    <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', color: '#64748b' }}>
                                        {eventForm.image ? eventForm.image.name : 'Click to upload image'}
                                    </p>
                                    <input
                                        id="fileInput"
                                        type="file"
                                        onChange={handleFileChange}
                                        accept="image/*"
                                    />
                                </FileInputWrapper>
                            </FormGroup>

                            <Button type="submit" disabled={loading} whileTap={{ scale: 0.98 }}>
                                {loading ? <Loader size={18} className="spin" /> : <Plus size={18} />}
                                Add Event
                            </Button>
                        </Form>
                    </ContentCard>

                    {/* Events List */}
                    <ContentCard>
                        <h3 style={{ marginTop: 0, marginBottom: '1.5rem', color: 'var(--primary-blue)' }}>Current Events</h3>
                        {events.length === 0 ? (
                            <p style={{ color: '#94a3b8', textAlign: 'center', margin: '2rem 0' }}>No events found.</p>
                        ) : (
                            <div style={{ overflowX: 'auto' }}>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Title</th>
                                            <th>Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {events.map((event) => (
                                            <tr key={event._id}>
                                                <td>
                                                    <Thumbnail
                                                        src={event.file && event.file.file_id ? `${API_BASE_URL}/events/image/${event.file.file_id}/` : ''}
                                                        alt="Event"
                                                    />
                                                </td>
                                                <td>
                                                    <strong>{event.title}</strong>
                                                </td>
                                                <td style={{ fontSize: '0.9rem', color: '#64748b' }}>
                                                    {event.startDate}
                                                </td>
                                                <td>
                                                    <ActionButton onClick={() => handleDeleteEvent(event._id)} title="Delete Event">
                                                        <Trash2 size={16} />
                                                    </ActionButton>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        )}
                    </ContentCard>
                </Grid>
            ) : activeTab === 'enquiries' ? (
                <ContentCard>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <h3 style={{ margin: 0, color: 'var(--primary-blue)' }}>Enquiry Details ({enquiries.length})</h3>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <Button style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                                Export CSV
                            </Button>
                        </div>
                    </div>

                    {enquiries.length === 0 ? (
                        <p style={{ color: '#94a3b8', textAlign: 'center', margin: '2rem 0' }}>No enquiries received yet.</p>
                    ) : (
                        <div style={{ overflowX: 'auto' }}>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Name</th>
                                        <th>Contact</th>
                                        <th>Course Interest</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {enquiries.map((enquiry, index) => (
                                        <tr key={index}>
                                            <td style={{ fontSize: '0.9rem', color: '#64748b' }}>
                                                {new Date(enquiry.created_at).toLocaleDateString()}
                                            </td>
                                            <td>
                                                <strong>{enquiry.name}</strong>
                                            </td>
                                            <td>
                                                <div style={{ fontSize: '0.9rem' }}>{enquiry.mobile}</div>
                                                <div style={{ fontSize: '0.85rem', color: '#64748b' }}>{enquiry.email}</div>
                                            </td>
                                            <td>
                                                <Badge>{enquiry.course}</Badge>
                                                {enquiry.branch && <div style={{ fontSize: '0.85rem', marginTop: '0.25rem', color: '#64748b' }}>{enquiry.branch}</div>}
                                            </td>
                                            <td>
                                                <span style={{ fontSize: '1.2rem' }}>📩</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    )}
                </ContentCard>
            ) : (
                <ContentCard>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <h3 style={{ margin: 0, color: 'var(--primary-blue)' }}>Alumni Registration ({alumni.length})</h3>
                    </div>

                    {alumni.length === 0 ? (
                        <p style={{ color: '#94a3b8', textAlign: 'center', margin: '2rem 0' }}>No alumni registered yet.</p>
                    ) : (
                        <div style={{ overflowX: 'auto' }}>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Registered Date</th>
                                        <th>Reg No</th>
                                        <th>Name</th>
                                        <th>Batch / Dept</th>
                                        <th>Contact</th>
                                        <th>Profession</th>
                                        <th>Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {alumni.map((alum, index) => (
                                        <tr key={index}>
                                            <td style={{ fontSize: '0.9rem', color: '#64748b' }}>
                                                {new Date(alum.created_at).toLocaleDateString()}
                                            </td>
                                            <td>
                                                <strong>{alum.register_number}</strong>
                                            </td>
                                            <td>
                                                <strong>{alum.name}</strong>
                                                <div style={{ fontSize: '0.85rem', color: '#64748b' }}>DOB: {alum.dob}</div>
                                            </td>
                                            <td>
                                                <div>{alum.academic_year}</div>
                                                <Badge>{alum.department}</Badge>
                                            </td>
                                            <td>
                                                <div style={{ fontSize: '0.9rem' }}>{alum.phone}</div>
                                                <div style={{ fontSize: '0.85rem', color: '#64748b' }}>{alum.email}</div>
                                            </td>
                                            <td>
                                                <strong>{alum.designation || '-'}</strong>
                                                <div style={{ fontSize: '0.85rem', color: '#64748b' }}>{alum.organization}</div>
                                            </td>
                                            <td style={{ fontSize: '0.85rem', maxWidth: '200px' }}>
                                                {alum.address || '-'}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    )}
                </ContentCard>
            )
            }
        </PageContainer >
    );
};

export default AdminDashboard;
