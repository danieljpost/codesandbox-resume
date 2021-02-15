import React from "react";
import DateRange from "./dateRange";

function Gig(props) {
  if (true) {
  }
  return ChronologicalGig(props);
}
function ChronologicalGig(props) {
  // the verbosity of the gig object is controlled by app state, passed in as props.verbosity
  // TODO: at max verbosity (>=90%) also show which skills are used
  const location =
    props.location && props.showlocation ? " (" + props.location + ")" : "";
  const title = props.type === "contract" ? "" : props.title + ", ";
  const maxResponsibilities = props.verbosity / 2;
  const maxAccomplishments = props.verbosity / 2;
  const accomplishments = props.accomplishments
    .filter((v, i) => i < maxAccomplishments)
    .map((a, i) => <div key={i}>{a}</div>);
  const responsibilities =
    props.verbosity > 2 &&
    props.responsibilities &&
    props.responsibilities
      .filter((v, i) => i < maxResponsibilities)
      .map((a, i) => <div key={i}>{a}</div>);

  return (
    <article className="gig">
      <legend className={props.gigType}>{props.gigType}</legend>
      <p>verbosity {props.verbosity}</p>
      <header>
        {title}
        {props.company}
        {location}
      </header>
      <DateRange startDate={props.startDate} endDate={props.endDate} />
      <hr />
      {accomplishments}
      <hr />
      {responsibilities}
      <hr />
    </article>
  );
}

function ContractGig(props) {
  // the verbosity of the gig object is controlled by app state, passed in as props.verbosity
  // TODO: at max verbosity (>=90%) also show which skills are used
  const location =
    props.location && props.showlocation ? " (" + props.location + ")" : "";
  const title = props.type === "contract" ? "" : props.title + ", ";
  const maxResponsibilities = props.verbosity / 2;
  const maxAccomplishments = props.verbosity / 2;
  const accomplishments = props.accomplishments
    .filter((v, i) => i < maxAccomplishments)
    .map((a, i) => <div key={i}>{a}</div>);
  const responsibilities =
    props.verbosity > 2 &&
    props.responsibilities &&
    props.responsibilities
      .filter((v, i) => i < maxResponsibilities)
      .map((a, i) => <div key={i}>{a}</div>);

  return (
    <article className="gig">
      <legend className={props.gigType}>{props.gigType}</legend>
      <p>verbosity {props.verbosity}</p>
      <header>
        {title}
        {props.company}
        {location}
      </header>
      <DateRange startDate={props.startDate} endDate={props.endDate} />
      <hr />
      {accomplishments}
      <hr />
      {responsibilities}
      <hr />
    </article>
  );
}
function OwnerGig(props) {
  // the verbosity of the gig object is controlled by app state, passed in as props.verbosity
  // TODO: at max verbosity (>=90%) also show which skills are used
  const location =
    props.location && props.showlocation ? " (" + props.location + ")" : "";
  const title = props.type === "contract" ? "" : props.title + ", ";
  const maxResponsibilities = props.verbosity / 2;
  const maxAccomplishments = props.verbosity / 2;
  const accomplishments = props.accomplishments
    .filter((v, i) => i < maxAccomplishments)
    .map((a, i) => <div key={i}>{a}</div>);
  const responsibilities =
    props.verbosity > 2 &&
    props.responsibilities &&
    props.responsibilities
      .filter((v, i) => i < maxResponsibilities)
      .map((a, i) => <div key={i}>{a}</div>);

  return (
    <article className="gig">
      <legend className={props.gigType}>{props.gigType}</legend>
      <p>verbosity {props.verbosity}</p>
      <header>
        {title}
        {props.company}
        {location}
      </header>
      <DateRange startDate={props.startDate} endDate={props.endDate} />
      <hr />
      {accomplishments}
      <hr />
      {responsibilities}
      <hr />
    </article>
  );
}

export default Gig;
