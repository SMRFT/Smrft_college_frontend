import React from 'react';
import styled from 'styled-components';

import FirstAidImg from '../../Components/Images/FirstAid.png';
import WomenImg from '../../Components/Images/Women.png';
import QuizImg from '../../Components/Images/Quiz.png';
import SportsDayImg from '../../Components/Images/sportsday.png';
import SportEventImg from '../../Components/Images/sportevent.png';
import SportsEvent1Img from '../../Components/Images/sportsevent1.png';
import CulturalDayImg from '../../Components/Images/culturalday.png';
import PongalImg from '../../Components/Images/pongal.png';
import ChristmasImg from '../../Components/Images/christmas.png';
import RepublicDayImg from '../../Components/Images/Republicday.png';
import RepublicImg from '../../Components/Images/repuplic.png';
import IndependenceImg from '../../Components/Images/Independence.png';
import IndependanceImg from '../../Components/Images/Independance.png';
import TeachersDayImg from '../../Components/Images/Teacherday.png';
import YRCImg from '../../Components/Images/YRC.png';
import YogaImg from '../../Components/Images/yogaday.png';
import Yoga1Img from '../../Components/Images/yogaday1.png';
import NSSImg from '../../Components/Images/NSS.png';
import TreePlantationImg from '../../Components/Images/Treeplantation.png';
import TreePlantation1Img from '../../Components/Images/Treeplantation1.png';

const Activities = () => {
  // Import images for each event category
  const firstAidImages = [FirstAidImg];
  const womenMentalHealthImages = [WomenImg];
  const quizImages = [QuizImg];
  const sportsImages = [SportsDayImg, SportEventImg, SportsEvent1Img];
  const culturalImages = [CulturalDayImg];
  const pongalImages = [PongalImg];
  const christmasImages = [ChristmasImg];
  const republicDayImages = [RepublicDayImg, RepublicImg];
  const independenceDayImages = [IndependenceImg, IndependanceImg];
  const teachersDayImages = [TeachersDayImg];
  const womensDayImages = [YRCImg];
  const yogaDayImages = [YogaImg, Yoga1Img];
  const nssImages = [NSSImg];
  const treePlantationImages = [TreePlantationImg, TreePlantation1Img];

  const renderImages = (images, altPrefix) => (
    <div className="activities-image-grid">
      {images.map((img, index) => (
        <div key={index} className="activities-image-card">
          <img src={img} alt={`${altPrefix} ${index + 1}`} />
        </div>
      ))}
    </div>
  );

  return (
    <StyledBody>
      <div className="activities-container">
        <h2>Co-curricular & Extra-curricular Activities</h2>
        <p>
          The college has an Active Student Nurses Association (SNA). The SNA executive comprises of the SNA President, SNA Advisor, Vice president, Secretary, and Treasurer.
          These are various committees functioning under the SNA, headed by student chairpersons and coordinated and guided by the teaching staff of the college.
          The activities planned are coordinated and executed by the SNA body.
        </p>
        <p>
          All important festivals and events such as Fresher’s Day, Teacher’s Day, College Week, etc., are celebrated by the student body, and picnics are also organized.
          The students actively participate in various cultural and sports competitions, and the winners are encouraged to participate in state or national-level SNA competitions.
        </p>

        <section>
          <h3>CNE: F(ir)ast Aid – Dare to Care</h3>
          {renderImages(firstAidImages, 'First Aid')}

          <h3>Women & Mental Health – Magnifying Quality Nursing Practice</h3>
          {renderImages(womenMentalHealthImages, 'Women Mental Health')}
        </section>

        <section>
          <h3>Quiz Competition</h3>
          <p>
            An intercollegiate quiz competition “IWIN” was conducted on 21.04.2017, with 7 teams participating. Kamala College of Nursing won the rolling shield.
          </p>
          {renderImages(quizImages, 'Quiz')}
        </section>

        <section>
          <h3>Sports Day</h3>
          <p>
            Sports competitions were conducted from 27.03.2017 to 31.03.2017 for faculty and students.
          </p>
          <p>Sports events were also held at other institutions.</p>
          {renderImages(sportsImages, 'Sports Day')}
        </section>

        <section>
          <h3>Recreation</h3>
          <p>
            Cultural Day - Cultural competitions were conducted from 27.03.2017 to 31.03.2017 for faculty and students.
          </p>
          {renderImages(culturalImages, 'Cultural Day')}

          <h3>Annual Day (12.05.2017)</h3>
          <p>
            The program started at 4:00 PM with a prayer song by II year B.Sc(N) students, followed by a welcome dance by Ms. G. Umamaheswari, III B.Sc(N).
            The welcome address was given by Aneetta Ann James, III year B.Sc(N). The lighting of the kuthuvilakku was done by Mrs. Jayalakshmi Panneerselvam, correspondent, Shanmuga College of Nursing, and by dignitaries.
            The Nightingale lamp was lit by Chief Guest Mrs. Chitralekha, Nursing Superintendent at Pranav Hospital, Salem.
            A speech on Nurse’s Day theme was delivered by Mrs. T. Mercy Chandriga, Vice Principal, Shanmuga School of Nursing, Salem.
          </p>
          <p>
            The speech continued by Mrs. Vungngaih, IV B.Sc(N) student, on the topic of “History of Florence Nightingale,” highlighting her service during the First World War and the development of the nursing profession.
            The presidential address was given by Dr. P.S. Panneerselvam, MS, MNAMS, FICS, Chairman of Shanmuga College of Nursing, Salem.
            After the cake cutting and sharing, a speech regarding Nurse’s Day was given by Ms. Chitraleka Nursing Superintendent at Pranav Hospital, Salem.
          </p>
          <p>
            The annual report was read by Prof. S. Annam, Principal of Shanmuga College of Nursing, Salem.
            The Chief Guest address was given by Hon. Judge Thiru P. Balasubramanian, M.A, B.L., Special District Judge, MCOP Tribunal, Salem.
            Students were awarded for academic, cultural, and sports achievements. Cultural events were performed by college students, and the program concluded with a vote of thanks by Ms. C.M. Nivadha, III B.Sc(N), ending with the national anthem at 8:30 PM.
          </p>

          <h3>Triple X Programme</h3>
          <p>
            The Triple X programme (X-mas, New Year & Pongal) was celebrated on 22.12.2016 between 2:00 PM and 4:00 PM in the Shanmuga campus, featuring various entertainment programs like dance, songs, and skits.
          </p>
          {renderImages(pongalImages, 'Pongal')}
          {renderImages(christmasImages, 'Christmas')}
        </section>

        <section>
          <h3>Republic Day Celebration</h3>
          <p>
            Republic Day was celebrated on 26.01.2017 at Shanmuga Hospital premises from 8:00 AM to 9:00 AM. Certificates and momentos were distributed to participants of the CNE programme, and a patriotic speech and dance were presented by B.Sc and GNM students.
          </p>
          {renderImages(republicDayImages, 'Republic Day')}
        </section>

        <section>
          <h3>Independence Day</h3>
          <p>
            Independence Day was celebrated on 15.08.2016 at the Shanmuga Hospital premises from 7:45 AM to 9:30 AM, with flag hoisting by Dr. P.S. Panneerselvam, Chairman SCON. Certificates and prizes were distributed to presenters of the CNE programme.
          </p>
          {renderImages(independenceDayImages, 'Independence Day')}
        </section>

        <section>
          <h3>Teacher’s Day</h3>
          <p>
            Teacher’s Day was celebrated on 07.10.2016 between 2:00 PM and 4:00 PM in the Shanmuga Auditorium, featuring cultural programmes conducted by faculty members.
          </p>
          {renderImages(teachersDayImages, 'Teachers Day')}
        </section>

        <section>
          <h3>Other Events</h3>
          <p>
            YRC - Women’s Day on March 8th, 2017.
          </p>
          {renderImages(womensDayImages, 'Womens Day')}

          <h3>International Yoga Day Celebration – June 21, 2017</h3>
          <p>
            A mass yoga demonstration for students was held at Gandhi Stadium, Salem on June 21. Students of II year B.Sc(N) and II GNM, about 60 in total, performed yoga to emphasize its importance in daily life.
            The event was attended by the Principal, Mrs. S. Annam, Mr. Anie Thomas Kuruvilla (organizer), and Mr. Silverston (co-organizer).
            The program was inaugurated by the Director of the yoga session, who spoke about Yoga Day's significance. A display was performed by the students, and they actively participated, demonstrating various Asanas under the guidance of a yoga instructor, ending with refreshments.
          </p>
          {renderImages(yogaDayImages, 'Yoga Day')}
        </section>

        <section>
          <h3>NSS Activities</h3>
          <h3>Clean India</h3>
          {renderImages(nssImages, 'NSS')}

          <h3>Tree Plantation</h3>
          <p>
            A Tree Plantation Programme was held in our college on 21st July 2017. First-year B.Sc(N) and GNM students actively participated, along with our Principal Prof. S. Annam and 3 teachers.
            Students were divided into 12 groups to plant saplings in the college premises.
            The teacher explained the benefits of the programme, and students took an oath to care for the trees planted, committing to water them daily.
            In total, 25 plants were successfully planted during the monsoon season, and the programme concluded with the students actively supporting the growth of the plants.
          </p>
          {renderImages(treePlantationImages, 'Tree Plantation')}
        </section>

        <section>
          <h3>Guidance and Counseling</h3>
          <p>
            Guidance and counseling are provided to students regularly as needed. Each teacher is allotted a group of students for guidance and counseling.
            Students receive counseling upon admission to the first-year courses, with ongoing support and monitoring of their performance.
          </p>
        </section>
      </div>
    </StyledBody>
  );
};

export default Activities;

const StyledBody = styled.div`
  .activities-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Poppins', sans-serif;
    color: #333;
  }

  h2, h3 {
    color: #2c3e50;
    margin-bottom: 20px;
    border-bottom: 2px solid #e74c3c;
    display: inline-block;
    padding-bottom: 5px;
  }

  h2 {
    font-size: 2.5rem;
    margin-top: 20px;
  }

  h3 {
    font-size: 1.8rem;
    margin-top: 30px;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 20px;
    text-align: justify;
  }

  section {
    margin-bottom: 40px;
    background: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }

  .activities-image-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .activities-image-card {
    background: #fff;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
  }

  .activities-image-card:hover {
    transform: scale(1.05);
  }

  .activities-image-card img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 6px;
  }

  @media (max-width: 768px) {
    .activities-container {
      padding: 15px;
    }

    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    .activities-image-grid {
      grid-template-columns: 1fr;
    }
  }
`;
