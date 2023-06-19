import React from 'react';

const ThreeReasons = () => {
  return (
    <div className="three-features" id="three-features">
      <div className="three-features__container">
        <div className="three-features__item">
          <h2>01</h2>
          <p className="bold">We provide services</p>
          <p className="light">
            Tell us your goal and we will work together to achieve it.
          </p>
        </div>
        <div className="line"></div>
        <div className="three-features__item">
          <h2>02</h2>
          <p className="bold">We are international bridges</p>
          <p className="light">
            Through our company you can freely enter the foreign market.
          </p>
        </div>
        <div className="line"></div>
        <div className="three-features__item">
          <h2>03</h2>
          <p className="bold">We create</p>
          <p className="light">
            We implement innovation on the basic of author's projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThreeReasons;
