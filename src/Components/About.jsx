import React from 'react';
import kane from "../images/Aishani.jpeg";


const About = () => {
  return (
    <section>
    <div className="about-container">
      <div className="about-row">
        {/* Left Column for Image */}
        <div className="about-image">
          <img src={kane} alt="Profile" className="about-profile-image" />
        </div>

        {/* Right Column for Content */}
        <div className="about-content">
          <h2 className='section-title'>About Me</h2>
          <p>
            Hi, I'm Aishani Chauhan, a third-year Information Technology engineering student at Thadomal Shahani Engineering College, Bandra. I'm a passionate web developer with a strong focus
            on crafting intuitive and visually stunning user experiences. My love for
            frontend development stems from the perfect blend of creativity and logic
            it offers. I enjoy transforming ideas into responsive, pixel-perfect
            websites using modern frameworks like React, while ensuring they are
            accessible and optimized for performance. Constantly learning and
            experimenting, I thrive on keeping up with the latest trends in web design
            and development to bring innovative ideas to life.
          </p>

          <div className="skills-certificates-container">
            {/* Skills Section */}
            <div className="skills">
              <h2 className="section-title">My Skills</h2>
              <div className="skill-grid">
                <div className="skill">
                  <i className="fab fa-html5" title="HTML5"></i>
                  <p>HTML</p>
                </div>
                <div className="skill">
                  <i className="fab fa-css3-alt" title="CSS3"></i>
                  <p>CSS</p>
                </div>
                <div className="skill">
                  <i className="fab fa-bootstrap" title="Bootstrap"></i>
                  <p>Bootstrap</p>
                </div>
                <div className="skill">
                  <i className="fab fa-js" title="JavaScript"></i>
                  <p>JavaScript</p>
                </div>
                <div className="skill">
                  <i className="fab fa-node" title="Node.js"></i>
                  <p>Node.js</p>
                </div>
                <div className="skill">
                  <i className="fab fa-react" title="React"></i>
                  <p>React</p>
                </div>
                <div className="skill">
                  <i className="fab fa-java" title="Java"></i>
                  <p>Java</p>
                </div>
                <div className="skill">
                  <i className="fas fa-database" title="MySQL"></i>
                  <p>MySQL</p>
                </div>
                <div className="skill">
                  <i className="fab fa-python" title="Python"></i>
                  <p>Python</p>
                </div>
              </div>
            </div>

            {/* Certificates Section */}
            <div className="certificates">
              <h2 className='section-title'>Certificates</h2>
              <ul>
                <li><a href='https://drive.google.com/file/d/16mJhSp2f3GiFQO1Qe-BA0I9KzjNxR3ln/view?usp=sharing'>Web Development Bootcamp</a></li>
                <li><a href='https://drive.google.com/file/d/19xRl3qa27jh8PCBY9cB9PtrjKhU0026B/view'>Java Programming Masterclass</a></li>
                <li><a href='https://drive.google.com/file/d/1TjCqMBcWuvgrGNRs_6Tn8BCy5ZbZj7Zq/view'>HackerRank Java (Basic)</a></li>
                <li><a href='https://drive.google.com/file/d/1kcUZSbN5QEP0cX1aFNEs3UKfiscYu3rF/view'>HackerRank SQL (Basic)</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default About;
