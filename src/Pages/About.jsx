import React from "react";
import "../styles/About.css"; // Import CSS for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>We are a passionate team dedicated to providing the best services.</p>
      <div className="team">
        <div className="team-member">
          <img src="https://via.placeholder.com/100" alt="Team Member" />
          <h3>John Doe</h3>
          <p>CEO & Founder</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/100" alt="Team Member" />
          <h3>Jane Smith</h3>
          <p>Lead Designer</p>
        </div>
      </div>
    </div>
  );
};

export default About;
