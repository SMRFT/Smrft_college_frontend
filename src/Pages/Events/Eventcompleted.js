import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { API_BASE_URL } from '../../apiConfig';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, X, Clock, CheckCircle } from 'lucide-react';

// Styled components
const PageContainer = styled.div`
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    
    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

const SectionTitle = styled.h2`
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    color: var(--primary-blue);
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
    
    &::after {
        content: '';
        display: block;
        width: 60px;
        height: 3px;
        background: var(--accent-gold);
        margin: 1rem auto 0;
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
`;

const EventCard = styled(motion.div)`
    background: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0,0,0,0.05);
    opacity: 0.9; /* Slightly faded to indicate past */
    transition: all 0.3s ease;

    &:hover {
        opacity: 1;
        transform: translateY(-5px);
        box-shadow: 0 15px 35px rgba(0,0,0,0.1);
    }
`;

const ImageContainer = styled.div`
    height: 200px;
    overflow: hidden;
    position: relative;
    filter: grayscale(20%); /* Slight grayscale for past events */
    transition: filter 0.3s ease;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
    }

    ${EventCard}:hover & {
        filter: grayscale(0%);
    }

    ${EventCard}:hover & img {
        transform: scale(1.05);
    }
`;

const DateBadge = styled.div`
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: rgba(241, 245, 249, 0.95);
    padding: 0.5rem 0.75rem;
    border-radius: 8px;
    font-weight: 700;
    color: #64748b;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.1;
    
    span:first-child {
        font-size: 0.8rem;
        text-transform: uppercase;
        color: #94a3b8;
    }
    
    span:last-child {
        font-size: 1.25rem;
    }
`;

const CompletedBadge = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: #10b981;
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.25rem;
`;

const CardContent = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const Subtitle = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    color: #64748b;
    margin-bottom: 0.75rem;
    font-weight: 600;
`;

const Title = styled.h3`
    font-family: 'Playfair Display', serif;
    font-size: 1.25rem;
    color: #334155;
    margin: 0 0 1rem;
    line-height: 1.4;
`;

const ViewButton = styled.button`
    margin-top: auto;
    background: #f1f5f9;
    border: none;
    color: #475569;
    padding: 0.75rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    
    &:hover {
        background: #e2e8f0;
        color: #1e293b;
    }
`;

// Modal Styles (Same as UpcomingEvents)
const ModalOverlay = styled(motion.div)`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 1rem;
    backdrop-filter: blur(4px);
`;

const ModalContent = styled(motion.div)`
    background: white;
    border-radius: 20px;
    width: 100%;
    max-width: 600px;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
`;

const CloseButton = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: white;
    border: none;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    z-index: 10;
    
    &:hover {
        background: #f1f5f9;
        color: #ef4444;
    }
`;

const ModalImage = styled.div`
    height: 300px;
    width: 100%;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const ModalBody = styled.div`
    padding: 2rem;
`;

const ModalInfoRow = styled.div`
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #f1f5f9;
    
    div {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        
        span:first-child {
            font-size: 0.85rem;
            color: #64748b;
            text-transform: uppercase;
            font-weight: 600;
        }
        
        span:last-child {
            font-weight: 500;
            color: var(--text-primary);
        }
    }
`;

const EventsCompleted = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/events/`)
      .then((response) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const past = response.data.filter(event => {
          const eventDate = new Date(event.startDate);
          return eventDate < today;
        }).sort((a, b) => new Date(b.startDate) - new Date(a.startDate)); // Sort descending (newest first)

        setEvents(past);
      })
      .catch((error) => console.error('Error fetching events:', error));
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getMonth = (dateString) => new Date(dateString).toLocaleDateString('en-US', { month: 'short' });
  const getDay = (dateString) => new Date(dateString).toLocaleDateString('en-US', { day: 'numeric' });

  return (
    <PageContainer>
      <SectionTitle>Completed Events</SectionTitle>

      {events.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#64748b' }}>No completed events found.</p>
      ) : (
        <Grid>
          {events.map((event) => (
            <EventCard
              key={event._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ImageContainer>
                <DateBadge>
                  <span>{getMonth(event.startDate)}</span>
                  <span>{getDay(event.startDate)}</span>
                </DateBadge>
                <CompletedBadge>
                  <CheckCircle size={12} /> Completed
                </CompletedBadge>
                {event.file?.file_id ? (
                  <img src={`${API_BASE_URL}/events/image/${event.file.file_id}`} alt={event.title} />
                ) : (
                  <div style={{ width: '100%', height: '100%', background: '#e2e8f0' }} />
                )}
              </ImageContainer>
              <CardContent>
                <Title>{event.title}</Title>
                <Subtitle>
                  <Clock size={16} />
                  {event.endDate ? `${formatDate(event.startDate)} - ${formatDate(event.endDate)}` : formatDate(event.startDate)}
                </Subtitle>
                <ViewButton onClick={() => setSelectedEvent(event)}>
                  View Recap
                </ViewButton>
              </CardContent>
            </EventCard>
          ))}
        </Grid>
      )}

      <AnimatePresence>
        {selectedEvent && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
          >
            <ModalContent
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={() => setSelectedEvent(null)}>
                <X size={20} />
              </CloseButton>

              <ModalImage>
                {selectedEvent.file?.file_id ? (
                  <img src={`${API_BASE_URL}/events/image/${selectedEvent.file.file_id}`} alt={selectedEvent.title} />
                ) : (
                  <div style={{ width: '100%', height: '100%', background: '#e2e8f0' }} />
                )}
              </ModalImage>

              <ModalBody>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: '#334155', marginBottom: '1.5rem', marginTop: 0 }}>
                  {selectedEvent.title}
                </h2>

                <ModalInfoRow>
                  <div>
                    <span>Date</span>
                    <span>{formatDate(selectedEvent.startDate)}</span>
                  </div>
                  <div>
                    <span>Status</span>
                    <span style={{ color: '#10b981' }}>Completed</span>
                  </div>
                </ModalInfoRow>

                <div style={{ lineHeight: '1.8', color: '#475569' }}>
                  {selectedEvent.description ? (
                    selectedEvent.description.split('\n').map((para, index) => (
                      <p key={index} style={{ marginBottom: '1rem' }}>{para}</p>
                    ))
                  ) : (
                    <p>No additional details provided for this event.</p>
                  )}
                </div>
              </ModalBody>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </PageContainer>
  );
};

export default EventsCompleted;
