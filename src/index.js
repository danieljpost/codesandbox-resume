import React from "react";
import { render } from "react-dom";
import Resume from "./resume/resume";

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

const resumeElement = document.getElementById("resume");
// TODO:
// - connect this to global "state"
// - pass state on to all child components
const configDefaults = {
  darkmode: "on" === localStorage.getItem("dark-mode-preference"),
  verbosity: 8,
  recommendations: 10,
  chronology: "Hybrid",
  sequence: "Contracts First",
  sequenceOptions: ["Contracts First", "Fulltime First"],
  showRecommendations: true,
  layout: "A",
  skillsMinPriority: 3,
  skillsMinExpertise: 5,
  jobTier: "Front End",
  jobTierOptions: [
    "DevOps",
    "Back End",
    "Front End",
    "Software Engineer",
    "User Experience",
    "User Interface",
    "Business",
    "Consulting",
    "Team Lead"
  ],
  chronologyOptions: ["Hybrid", "Chronological"],
  layoutOptions: ["A", "B"]
};

let configState = configDefaults;
let reset = function () {
  localStorage.clear();
  window.document.location.reload();
};

// TODO: if there's a pathname element to window.location
// - try to fetch the configuration from the backend,
//   merge with defaults before rendering anything
// - do not display configurator
// TODO: once I've found a configuration I like, persist it and name it
// so that configuration can be retrieved later

// obtain data from canonical source
// TODO: at some point soon will need to munge json data,
// as the JSON is going to become standardized
// might become a two-fetch situation to fetch
// - the standard JSON
// - the rest
let kvetch = fetch("https://danieljpost.pro/resume.json");
kvetch
  .then((response) => response.json())
  .then((data) => {
    render(
      <Resume reset={reset} config={configState} myData={data} />,
      resumeElement
    );
  });
