import React from "react";
import DateRange from "./dateRange";

function Gig(props) {
  // TODO: the verbosity of the gig object
  // is controlled by app state
  const location = props.location ? " (" + props.location + ")" : "";
  const title = props.type === "contract" ? "" : props.title + ", ";
  const accomplishments = props.accomplishments.map((a, i) => (
    <div key={props.title + i}>{a}</div>
  ));
  const responsibilities =
    props.responsibilities &&
    props.responsibilities.map((a, i) => <div key={i}>{a}</div>);

  return (
    <article className="gig">
      <legend className={props.type}>{props.type}</legend>
      <header>
        {title}
        {props.company}
        {location}
      </header>
      <DateRange startDate={props.startDate} endDate={props.endDate} />
      {accomplishments}
      {responsibilities}
    </article>
  );
}

export default Gig;
