import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { API_BASE_URL } from '../../apiConfig';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, X, Clock, CheckCircle, Activity, Hourglass, ArrowRight } from 'lucide-react';

const PageContainer = styled.div`
    min-height: 100vh;
    background-color: var(--bg-light);
    font-family: 'Inter', sans-serif;
    padding-bottom: 4rem;
`;

const HeroSection = styled.div`
    background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-dark) 100%);
    color: white;
    padding: 5rem 1.5rem;
    text-align: center;
    position: relative;
    overflow: hidden;
    margin-bottom: -4rem; /* Overlap effect */

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }
`;

const HeroTitle = styled(motion.h1)`
    font-family: 'Playfair Display', serif;
    font-size: 3.5rem;
    margin-bottom: 1rem;
    position: relative;
    z-index: 10;

    @media (max-width: 768px) {
        font-size: 2.25rem;
    }
`;

const HeroSubtitle = styled(motion.p)`
    font-size: 1.25rem;
    max-width: 600px;
    margin: 0 auto;
    opacity: 0.9;
    position: relative;
    z-index: 10;
`;

const ContentWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    position: relative;
    z-index: 20;
`;

const TabContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
    background: white;
    padding: 1rem;
    border-radius: 99px;
    box-shadow: 0 10px 40px -10px rgba(0,0,0,0.1);
    display: inline-flex;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    
    @media (max-width: 640px) {
        width: 100%;
        border-radius: 20px;
        flex-direction: column;
        left: 0;
        transform: none;
    }
`;

const TabButton = styled.button`
    background: ${props => props.active ? 'var(--primary-blue)' : 'transparent'};
    color: ${props => props.active ? 'white' : '#64748b'};
    border: none;
    padding: 0.75rem 2rem;
    border-radius: 99px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 1rem;
    
    &:hover {
        background: ${props => props.active ? 'var(--primary-blue)' : '#f1f5f9'};
        color: ${props => props.active ? 'white' : 'var(--primary-blue)'};
    }
`;

const EventsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2.5rem;
    
    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`;

const StyledCard = styled(motion.div)`
    background: white;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0,0,0,0.05);
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    
    &:hover {
        transform: translateY(-12px);
        box-shadow: 0 25px 50px rgba(0,0,0,0.1);
        
        img {
            transform: scale(1.1);
        }
    }
`;

const CardImage = styled.div`
    height: 240px;
    overflow: hidden;
    position: relative;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s ease;
    }

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(0,0,0,0.4), transparent 50%);
    }
`;

const DateBox = styled.div`
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    background: white;
    padding: 0.6rem 1rem;
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1;
    z-index: 10;
    
    .month {
        font-size: 0.75rem;
        font-weight: 800;
        text-transform: uppercase;
        color: #94a3b8;
        letter-spacing: 1px;
        margin-bottom: 2px;
    }
    
    .day {
        font-size: 1.75rem;
        font-weight: 800;
        color: var(--primary-blue);
    }
`;

const StatusTag = styled.div`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    padding: 0.4rem 0.8rem;
    border-radius: 99px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    z-index: 10;
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);

    background: ${props => {
        if (props.status === 'ongoing') return 'rgba(255, 255, 255, 0.9)';
        if (props.status === 'upcoming') return 'rgba(255, 255, 255, 0.9)';
        return 'rgba(241, 245, 249, 0.9)';
    }};
    
    color: ${props => {
        if (props.status === 'ongoing') return '#d97706';
        if (props.status === 'upcoming') return '#0284c7';
        return '#64748b';
    }};
    
    display: flex;
    align-items: center;
    gap: 0.35rem;
`;

const CardBody = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const EventTitle = styled.h3`
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    color: #1e293b;
    margin: 0 0 1rem;
    line-height: 1.3;
`;

const EventMeta = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #64748b;
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
    font-weight: 500;
`;

const ActionButton = styled.button`
    margin-top: auto;
    background: transparent;
    color: var(--primary-blue);
    border: none;
    padding: 0;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: gap 0.2s;
    
    &:hover {
        gap: 0.75rem;
    }
`;

const NoEvents = styled.div`
    text-align: center;
    padding: 5rem 2rem;
    background: white;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    color: #64748b;
    
    h3 {
        color: #1e293b;
        margin-bottom: 0.5rem;
        font-family: 'Playfair Display', serif;
    }
`;

// Modal Styles (Refined)
const ModalOverlay = styled(motion.div)`
    position: fixed;
    inset: 0;
    background: rgba(15, 23, 42, 0.85); /* Darker backdrop */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    padding: 2rem;
    backdrop-filter: blur(10px);
`;

const ModalPanel = styled(motion.div)`
    background: white;
    border-radius: 32px;
    width: 100%;
    max-width: 800px;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.4);
`;

const ModalClose = styled.button`
    position: absolute;
    top: 2rem;
    right: 2rem;
    background: white;
    border: none;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    z-index: 20;
    transition: transform 0.2s;
    
    &:hover {
        transform: rotate(90deg) scale(1.1);
    }
`;

const ModalHero = styled.div`
    height: 400px;
    position: relative;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, white 0%, transparent 60%);
    }
`;

const ModalContent = styled.div`
    padding: 3rem;
    position: relative;
    margin-top: -80px; /* Pull content up */
`;

const UpcomingEvents = () => {
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [activeTab, setActiveTab] = useState('upcoming');
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        axios.get(`${API_BASE_URL}/events/`)
            .then((response) => setEvents(response.data))
            .catch((error) => console.error('Error fetching events:', error));
    }, []);

    useEffect(() => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const sortAsc = (a, b) => new Date(a.startDate) - new Date(b.startDate);
        const sortDesc = (a, b) => new Date(b.startDate) - new Date(a.startDate);

        let filtered = [];
        if (activeTab === 'ongoing') {
            filtered = events.filter(e => {
                const s = new Date(e.startDate);
                const end = e.endDate ? new Date(e.endDate) : s;
                return s <= today && end >= today;
            }).sort(sortAsc);
        } else if (activeTab === 'upcoming') {
            filtered = events.filter(e => new Date(e.startDate) > today).sort(sortAsc);
        } else {
            filtered = events.filter(e => {
                const s = new Date(e.startDate);
                const end = e.endDate ? new Date(e.endDate) : s;
                return end < today;
            }).sort(sortDesc);
        }
        setFilteredEvents(filtered);
    }, [events, activeTab]);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    const getMonth = (d) => new Date(d).toLocaleDateString('en-US', { month: 'short' });
    const getDay = (d) => new Date(d).toLocaleDateString('en-US', { day: 'numeric' });

    return (
        <PageContainer>
            <HeroSection>
                <HeroTitle
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Discover All Events
                </HeroTitle>
                <HeroSubtitle
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    From academic milestones to cultural celebrations, explore what's happening at Shanmuga College.
                </HeroSubtitle>
            </HeroSection>

            <ContentWrapper>
                <TabContainer
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <TabButton active={activeTab === 'ongoing'} onClick={() => setActiveTab('ongoing')}>
                        <Activity size={18} /> In Progress
                    </TabButton>
                    <TabButton active={activeTab === 'upcoming'} onClick={() => setActiveTab('upcoming')}>
                        <Hourglass size={18} /> Upcoming
                    </TabButton>
                    <TabButton active={activeTab === 'completed'} onClick={() => setActiveTab('completed')}>
                        <CheckCircle size={18} /> Completed
                    </TabButton>
                </TabContainer>

                {filteredEvents.length === 0 ? (
                    <NoEvents>
                        <h3>No events found</h3>
                        <p>There are currently no {activeTab.replace('-', ' ')} events to display.</p>
                    </NoEvents>
                ) : (
                    <EventsGrid>
                        {filteredEvents.map((event) => (
                            <StyledCard
                                key={event._id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                            >
                                <CardImage>
                                    <DateBox>
                                        <span className="month">{getMonth(event.startDate)}</span>
                                        <span className="day">{getDay(event.startDate)}</span>
                                    </DateBox>
                                    <StatusTag status={activeTab}>
                                        {activeTab === 'ongoing' ? 'Live' : activeTab}
                                    </StatusTag>
                                    {event.file?.file_id ? (
                                        <img src={`${API_BASE_URL}/events/image/${event.file.file_id}`} alt={event.title} />
                                    ) : (
                                        <div style={{ width: '100%', height: '100%', background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>No Image</div>
                                    )}
                                </CardImage>
                                <CardBody>
                                    <EventTitle>{event.title}</EventTitle>
                                    <EventMeta>
                                        <Clock size={16} />
                                        {event.endDate ? `${formatDate(event.startDate)} - ${formatDate(event.endDate)}` : formatDate(event.startDate)}
                                    </EventMeta>
                                    <ActionButton onClick={() => setSelectedEvent(event)}>
                                        Read More <ArrowRight size={18} />
                                    </ActionButton>
                                </CardBody>
                            </StyledCard>
                        ))}
                    </EventsGrid>
                )}
            </ContentWrapper>

            <AnimatePresence>
                {selectedEvent && (
                    <ModalOverlay
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedEvent(null)}
                    >
                        <ModalPanel
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 100 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <ModalClose onClick={() => setSelectedEvent(null)}>
                                <X size={24} />
                            </ModalClose>

                            <ModalHero>
                                {selectedEvent.file?.file_id ? (
                                    <img src={`${API_BASE_URL}/events/image/${selectedEvent.file.file_id}`} alt={selectedEvent.title} />
                                ) : (
                                    <div style={{ width: '100%', height: '100%', background: '#f1f5f9' }} />
                                )}
                            </ModalHero>

                            <ModalContent>
                                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', marginBottom: '1rem', color: '#1e293b' }}>
                                    {selectedEvent.title}
                                </h2>

                                <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid #f1f5f9' }}>
                                    <div>
                                        <div style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '0.25rem' }}>Date & Time</div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500', color: '#334155' }}>
                                            <Calendar size={18} className="text-blue-600" />
                                            {formatDate(selectedEvent.startDate)}
                                            {selectedEvent.endDate && ` - ${formatDate(selectedEvent.endDate)}`}
                                        </div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '0.25rem' }}>Event Status</div>
                                        <div style={{ fontWeight: '600', color: 'var(--primary-blue)', textTransform: 'capitalize' }}>
                                            {activeTab === 'ongoing' ? 'In Progress' : activeTab}
                                        </div>
                                    </div>
                                </div>

                                <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#475569' }}>
                                    {selectedEvent.description ? (
                                        selectedEvent.description.split('\n').map((para, index) => (
                                            <p key={index} style={{ marginBottom: '1rem' }}>{para}</p>
                                        ))
                                    ) : (
                                        <p style={{ fontStyle: 'italic', color: '#94a3b8' }}>No details available.</p>
                                    )}
                                </div>
                            </ModalContent>
                        </ModalPanel>
                    </ModalOverlay>
                )}
            </AnimatePresence>
        </PageContainer>
    );
};

export default UpcomingEvents;
