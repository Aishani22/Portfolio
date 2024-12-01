import React from "react";
import PropTypes from "prop-types";
import girl from "../images/animated_girl1.jpg"; // Your background image

const Home = ({ name, title, desc }) => {
  return (
    <section id="home" className="min-height">
      <div className="content-wrapper">
        <div className="text-container">
          <h1>{name}</h1>
          <h2>{title}</h2>
        </div>
        <div className="image-container">
          <img className="background" src={girl} alt="Background Image" />
        </div>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
