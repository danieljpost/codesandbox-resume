import React from "react";
import DateRange from "./dateRange";

function Gig(props) {
  // TODO: if verbosity is maxed out, add "skills used" to each Gig
  let techMap = ["dang"];
  if (props.technologies) {
    techMap = props.technologies.map((t, i) => t.skillName);
  }
  let skillsUsed = props.verbosity > 9 ? techMap : [];
  let useProps = { ...props, skillsUsed };
  if ("contract" === props.gigType) {
    return ContractGig(useProps);
  } else if ("owner" === props.gigType) {
    return OwnerGig(useProps);
  }
  return ChronologicalGig(useProps);
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

  let skillsUsed = "";
  if (props.skillsUsed.length) {
    let someSkills = props.skillsUsed.join(", ");
    skillsUsed = <div>Skills used: {someSkills}</div>;
  }
  return (
    <>
      <article className="gig chronologicalGig">
        {/* <legend className={props.gigType}>{props.gigType}</legend> */}
        <header>
          <DateRange startDate={props.startDate} endDate={props.endDate} />
          {title}
          {props.company}
          {location}
        </header>
        {accomplishments}
        {responsibilities}
        {skillsUsed}
      </article>
    </>
  );
}

function ContractGig(props) {
  // the verbosity of the gig object is controlled by app state, passed in as props.verbosity
  // TODO: at max verbosity (>=90%) also show which skills are used
  const location =
    props.location && props.showlocation ? " (" + props.location + ")" : "";
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

  let skillsUsed = "";
  if (props.skillsUsed.length) {
    let someSkills = props.skillsUsed.join(", ");
    skillsUsed = <div>Skills used: {someSkills}</div>;
  }
  let dateRange = null;
  if (props.verbosity > 2.5) {
    dateRange = (
      <DateRange startDate={props.startDate} endDate={props.endDate} />
    );
  }

  return (
    <article className="gig contractGig">
      {/* <legend className={props.gigType}>{props.gigType}</legend> */}
      <header>
        {dateRange}
        {props.company}
        &nbsp;
        {location}
      </header>

      {accomplishments}
      {responsibilities}
      {skillsUsed}
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

  let skillsUsed = "";
  if (props.skillsUsed.length) {
    let someSkills = props.skillsUsed.join(", ");
    skillsUsed = <div>Tools used: {someSkills}</div>;
  }
  return (
    <section className="gig ownerGig">
      <header>
        <DateRange startDate={props.startDate} endDate={props.endDate} />
        {title}
        {props.company}
        {location}
      </header>
      {accomplishments}
      {responsibilities}
      {skillsUsed}
      {props.contracts}
    </section>
  );
}

export default Gig;
