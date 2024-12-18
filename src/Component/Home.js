import React from 'react';
import video from "../Images/video.mp4";
import "./home.css";
import Gallery from './Gallery';
import Footer from './Footer';
import { FaDumbbell, FaClock, FaSpa, FaUsers, FaChartLine, FaHeart } from "react-icons/fa";
import trainer from "../Images/trainer1.jpeg"
import dummy from "../Images/dummy.jpeg"
function Home() {
  return (
    <>
      <div className="video-background">
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <div className="overlay-content">
          <h1>Achieve Your <span className="highlight">Fitness Goals</span></h1>
          <p>Strength | Endurance | Transformation</p>
          <button className="cta-button">Get Started</button>
        </div>
      </div>

      <section className="benefits">
        <h2 className="fronth2">Exclusive <span className="highlight">Membership Benefits</span></h2>
        <div className="benefits-container">
          <div className="benefit-card">
            <FaClock className="benefit-icon" />
            <h3>24/7 Access</h3>
            <p>Access our gym facilities anytime, any day.</p>
          </div>
          <div className="benefit-card">
            <FaUsers className="benefit-icon" />
            <h3>Free Fitness Classes</h3>
            <p>Join exciting group fitness sessions led by experts.</p>
          </div>
          <div className="benefit-card">
            <FaChartLine className="benefit-icon" />
            <h3>Personalized Plans</h3>
            <p>Get tailored workout plans designed for your goals.</p>
          </div>
          <div className="benefit-card">
            <FaSpa className="benefit-icon" />
            <h3>Sauna & Spa</h3>
            <p>Relax and rejuvenate with sauna and spa facilities.</p>
          </div>
        </div>
      </section>

      <section className="trainers">
        <h2 className="fronth2">Meet Our <span className="highlight">Expert Trainers</span></h2>
        <div className="trainer-container">
          <div className="trainer-card">
            <img src={trainer} alt="Trainer 1" />
            <h3>Snehal Shirture</h3>
            <p>Strength & Conditioning Specialist</p>
          </div>
          <div className="trainer-card">
            <img src={trainer} alt="Trainer 2" />
            <h3>Snehal Shirture</h3>
            <p>Yoga & Flexibility Coach</p>
          </div>
          <div className="trainer-card">
            <img src={trainer} alt="Trainer 3" />
            <h3>Snehal Shirture</h3>
            <p>HIIT & Cardio Expert</p>
          </div>
        </div>
      </section>

      <section className="transformations">
        <h2 className="fronth2">Our Members' <span className="highlight">Transformation Stories</span></h2>
        <div className="transformation-container">
          <div className="transformation-card">
            <img src={dummy} alt="Before After" />
            <p>"I lost 20 kg in just 6 months with the help of FitZone trainers!"</p>
            <h4>- Sejal Nehete</h4>
          </div>
          <div className="transformation-card">
            <img src={dummy} alt="Before After" />
            <p>"I gained 10 kg of lean muscle and transformed my physique!"</p>
            <h4>- Harshal Mahajan</h4>
          </div>
        </div>
      </section>

      <section className="reviews">
        <h2 className="fronth2">What Our Clients <span className="highlight">Say</span></h2>
        <div className="review-container">
          <div className="review-card">
            <p>"FitZone is the best gym in town! The facilities and trainers are top-notch!"</p>
            <h4>- Laura Davis</h4>
          </div>
          <div className="review-card">
            <p>"My fitness journey was a game-changer at FitZone. Highly recommend it!"</p>
            <h4>- Tom Evans</h4>
          </div>
          <div className="review-card">
            <p>"Amazing experience! I saw incredible results in just a few months!"</p>
            <h4>- Rachel Green</h4>
          </div>
        </div>
      </section>

      <Gallery />

      <Footer />
    </>
  );
}

export default Home;
