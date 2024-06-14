import { StrictMode, React } from "react";
import { render } from "react-dom";
import Resume from "./resume/resume";
import dotenv from "dotenv";

import "./styles.scss";

dotenv.config();
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
const configDefaults = {
  darkmode: "on" === localStorage.getItem("dark-mode-preference"),
  verbosity: 6,
  recommendations: 6,
  chronology: "Hybrid",
  sequence: "Contracts First",
  sequenceOptions: ["Contracts First", "Fulltime First"],
  showRecommendations: true,
  layout: "A",
  skillsShown: 3,
  skillsVerbosity: 5,
  jobTier: "User Interface",
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
  layoutOptions: ["A", "B"],
  magicUrl: window.location.href
};

let configState = configDefaults;
let reset = function () {
  localStorage.clear();
  window.document.location.reload();
};

window.ShowLoading = true;
// Stupid JavaScript Tricks:
{
  let loadingMessages = process.env.loadingMessages.split(",");
  window.loadingMessages = loadingMessages;
  let zinger = document.getElementById("zinger");
  let giggle = function () {
    let i = 0;
    return async (ms, j, msg) => {
      if (window.ShowLoading) {
        i++;
        // console.log(i, ms, j, msg);
        render(
          <>
            <span className="dbg" key={i}>
              {j}
            </span>
            {msg}...
          </>,
          zinger
        );
      } else {
        // console.log(arguments);
      }
    };
  };
  let wut = giggle();

  async function makeapromise(milliseconds, sequenceid, message) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(() => true);
      }, milliseconds);
    }).then(() => wut(milliseconds, sequenceid, message));
  }

  async function go() {
    let c = () => {};
    for (let i = 0; i < 20; i++) {
      let which = Math.floor(
        Math.random() * Math.floor(loadingMessages.length)
      );
      let loadingText = loadingMessages[which];
      let ms = Math.floor(Math.random() * 10000.0);
      // intentionally not using await below.
      makeapromise(ms, i, loadingText).catch(c);
    }
  }
  go();
}

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
  .then(
    (data) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          window.ShowLoading = false;
          resolve(data);
        }, process.env.latency);
      })
  )
  .then((data) => {
    render(
      <StrictMode>
        <Resume reset={reset} config={configState} myData={data} />
      </StrictMode>,
      resumeElement
    );
  });
