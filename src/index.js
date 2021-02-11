import React from "react";
import { render } from "react-dom";
import Resume from "./resume/resume";
import Configurator from "./configurator/configurator";

import "./styles.scss";

const isSmallScreen =
  window.screen && Math.max(window.screen.width, window.screen.height) < 900;

// use Dark mode by default on small screens
if (isSmallScreen) {
  if (null === localStorage.getItem("dark-mode-preference")) {
    window.document.body.classList.add("dark-mode");
    localStorage.setItem("dark-mode-preference", "on");
  }
}

const configuratorElement = document.getElementById("configurator");
const resumeElement = document.getElementById("resume");
// TODO:
// - connect this to global "state"
// - pass state on to all child components
const configDefaults = {
  darkmode: "on" === localStorage.getItem("dark-mode-preference"),
  verbosity: 8,
  layout: "A",
  skillsMinPriority: 3,
  skillsMinExpertise: 5,
  jobTier: "Front End",
  showRecommendations: true
};

let configState = configDefaults;

render(<Configurator config={configState} />, configuratorElement);
render(
  <div className="loading">Loading Resume source data...</div>,
  resumeElement
);

// TODO: routing
// if there's a pathname element to window.location,
// try to fetch the configuration from the backend,
// merge with defaults before rendering anything
// a Promise
// TODO: configuration
// once I've found a configuration I like, persist it and name it
// so that configuration can be retrieved later
console.log(window.location);

// obtain data from canonical source
let kvetch = fetch("https://danieljpost.pro/resume.json");
kvetch
  .then((response) => response.json())
  .then((data) => {
    render(<Resume config={configState} myData={data} />, resumeElement);
  });
