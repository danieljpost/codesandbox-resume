import Axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import Resume from "./resume/resume";
import Configurator from "./configurator/configurator";

import "./styles.css";

const configuratorElement = document.getElementById("configurator");
const resumeElement = document.getElementById("resume");

ReactDOM.render(<Configurator />, configuratorElement);

// obtain data from canonical source
Axios.get("https://danieljpost.pro/resume.json").then((resp) => {
  ReactDOM.render(<Resume myData={resp.data} />, resumeElement);
});
