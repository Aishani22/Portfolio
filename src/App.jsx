/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Aishani Chauhan",
  title: "Full Stack Web Developer",
  desc: "Crafting intuitive user interfaces with a blend of creativity and code!",
  email: "aishanichauhan23@gmail.com",
  gitHub: "Aishani22", // GitHub username
  instagram: "aishani970", // Instagram username
  linkedIn: "aishani-chauhan-325453326/", // LinkedIn profile handle (last part of the URL)
  twitter: "chauhan_aishani", // Twitter handle
  youTube: "@aishanichauhan6091", // YouTube channel name/handle
};


const primaryColor = "#1E3A5F";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} desc={siteProps.desc}/>
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
