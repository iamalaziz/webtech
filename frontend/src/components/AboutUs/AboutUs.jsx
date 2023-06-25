import React from 'react';
import Mission from '../../assets/images/mission.png';
import Vision from '../../assets/images/binoculars.png';

const AboutUs = () => {
  return (
    <section className="about">
      <h2>About Us</h2>
      <div className="about__container">
        <p className="about__text">
          Webtech is a team with more than 10 years of experience in creating
          and developing startups. We have tested the problems encountered in
          startups in our own body and can help you to positively cope with
          various situations in your business.
        </p>
        <div className="about__cards">
          <div className="card">
            <div className="card__title">
              <img src={Mission} alt="Mission" />
              <h3>Mission</h3>
            </div>
            <p>Our every single project should reach IPO level!</p>
          </div>
          <div className="card">
            <div className="card__title">
              <img src={Vision} alt="Vision" />
              <h3>Vision</h3>
            </div>
            <p>
              Becoming a holding consisting minimum 100 companies reaching
              revenue in total $300 billion.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-text">
        <span>web</span>tech
      </div>
    </section>
  );
};

export default AboutUs;
