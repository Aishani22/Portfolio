import React, { useState } from "react";
import image0 from "../images/kane.png";
import image1 from "../images/game.png";
import image2 from "../images/drinks.png";
import image3 from "../images/blog.png";
import kane1 from "../images/kane1.png";
import kane2 from "../images/kane2.png";
import kane3 from "../images/kane3.png";
import kane4 from "../images/kane4.png";
import game1 from "../images/game1.png";
import game2 from "../images/game2.png";
import game3 from "../images/game3.png";
import game4 from "../images/game4.png";
import game5 from "../images/game5.png";
import game6 from "../images/game6.png";
import game7 from "../images/game7.png";
import game8 from "../images/game8.png";
import game9 from "../images/game9.png";
import drinks1 from "../images/drinks1.png";
import drinks2 from "../images/drinks2.png";
import drinks3 from "../images/drinks3.png";
import blog1 from "../images/blog1.png";
import blog2 from "../images/blog2.png";
import blog3 from "../images/blog3.png";
import blog4 from "../images/blog4.png";
import eyeIcon from "../images/eye.png";
import github from "../images/socials/github.svg";

const imageAltText = "desktop with books and laptop";
const images = [image0, image1, image2, image3];

const projectList = [
  {
    title: "Kane Williamson: A Fanpage Website",
    description:
      "A simple, static, and user-friendly website that offers informative content about my favorite cricketer, Kane Williamson.",
    url: "https://aishani22.github.io/Kane_Williamson/",
    git: "https://github.com/Aishani22/Kane_Williamson",
    images: [
      { src: kane1, caption: "Kane Williamson's debut in each format" },
      { src: kane2, caption: "Introduction about Kane Williamson" },
      { src: kane3, caption: "Kane Williamson: The Batsman and The Bowler" },
      { src: kane4, caption: "Hobbies of Kane Williamson" }
    ],
    tools: "HTML, CSS"
  },
  {
    title: "PyGround: Python-based Gaming Platform",
    description:
      "A Python-based GUI application for interesting games such as Snake Game, Ping Pong, Turtle Race, Guess the Logo, Hangman, etc.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
    git: "https://github.com/Aishani22/PyGround",
    images: [
      { src: game1, caption: "Snake Game" },
      { src: game2, caption: "Rock Paper Scissors" },
      { src: game3, caption: "Ping Pong" },
      { src: game4, caption: "Turtle Crossing" },
      { src: game5, caption: "Turtle Race" },
      { src: game6, caption: "Etch a Sketch" },
      { src: game7, caption: "Guess the Capital" },
      { src: game8, caption: "Brand and Logo Guessing" },
      { src: game9, caption: "Hangman" }
    ],
    tools: "Python and libraries"
  },
  {
    title: "Let's Have a Drink: Explore and Discover Drink Recipes",
    description:
      "A user-friendly web application that allows users to easily search for recipe of specific drinks or discover recipes of random drinks.",
    url: "https://drinks-project.onrender.com/",
    git: "https://github.com/Aishani22/Drinks_Project",
    images: [
      { src: drinks1, caption: "Random Drink" },
      { src: drinks2, caption: "Drink with searched item as 'Coffee'" },
      { src: drinks3, caption: "Drink with searched item as 'Wine'" }
    ],
    tools: "HTML, CSS, JavaScript, Node.js, Express.js, EJS, API"
  },
  {
    title: "Post-It: An Engaging Blogging Website",
    description:
      "A platform for sharing, reading, and discovering engaging blogs on various topics, creating a space for users to explore diverse perspectives.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
    git: "https://github.com/khalidqureshii/PostIt.git",
    images: [
      { src: blog1, caption: "Login and Register Page" },
      { src: blog2, caption: "Home Page" },
      { src: blog3, caption: "Discovering Posts" },
      { src: blog4, caption: "Create a New Blog" }
    ],
    tools: "HTML, CSS, JavaScript, Node.js, Express.js, EJS, React, MongoDB"
  }
];

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null); // State to track the selected project
  const [activeImageIndex, setActiveImageIndex] = useState(0); // State for the currently displayed image index

  const handleCardClick = (index) => {
    setActiveProject(index);
    setActiveImageIndex(0); // Start from the first image when opening a project
  };

  const closeCarousel = () => {
    setActiveProject(null);
  };

  const handleNextImage = () => {
    if (activeProject !== null) {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % projectList[activeProject].images.length);
    }
  };

  const handlePrevImage = () => {
    if (activeProject !== null) {
      setActiveImageIndex(
        (prevIndex) =>
          (prevIndex - 1 + projectList[activeProject].images.length) % projectList[activeProject].images.length
      );
    }
  };

  return (
    <section className="padding" id="portfolio">
      <h2 className="text-center">PROJECTS</h2>
      <div className="d-flex flex-wrap justify-content-center gap-3 p-3">
        {projectList.map((project, index) => (
          <div
            className="card"
            style={{ width: "21rem", margin: "0.5rem", cursor: "pointer" }}
            key={index}
            onClick={() => handleCardClick(index)}
          >
            <img
              src={images[index]}
              className="card-img-top"
              alt="desktop with books and laptop"
            />
            <div className="card-body" style={{ position: "relative" }}>
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
              <div className="toolsDiv">
                <p className="smaller"><span className= "tools">Tools used: </span> {project.tools}</p>
              </div>
              <div
                style={{
                  paddingTop: "20px",
                  bottom: "15px",
                  left: "20px",
                  width: "100%",
                  justifyContent: "left",
                }}
              >
                <a
                  href={project.git}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-block" }}
                >
                  <img
                    src={github}
                    alt="GitHub repository"
                    style={{
                      width: "24px",
                      height: "24px",
                      cursor: "pointer",
                      backgroundColor: "#7AB2D3",
                    }}
                  />
                </a>
                {index % 2 === 0 && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "inline-block", marginLeft: "15px" }}
                  >
                    <img
                      src={eyeIcon}
                      alt="View project"
                      style={{
                        width: "24px",
                        height: "24px",
                        cursor: "pointer",
                      }}
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeProject !== null && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          onClick={closeCarousel}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div
            className="modal-dialog modal-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {projectList[activeProject].images[activeImageIndex].caption}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={closeCarousel}
                ></button>
              </div>
              <div className="modal-body">
                <div
                  id="carouselExample"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {projectList[activeProject].images.map((image, index) => (
                      <div
                        key={index}
                        className={`carousel-item ${index === activeImageIndex ? "active" : ""}`}
                      >
                        <img
                          src={image.src}
                          className="d-block w-100"
                          alt={`Slide ${index + 1}`}
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                    onClick={handlePrevImage}
                  >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                    onClick={handleNextImage}
                  >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
