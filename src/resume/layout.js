import React from "react";

function Layout(props) {
  console.log("got state here", props.state);

  if ("b" === props.layout) {
    return (
      <LayoutB
        state={props.state}
        name={props.name}
        phone={props.phone}
        email={props.email}
        availability={props.availability}
        intro={props.intro}
        skills={props.skills}
        gigs={props.gigs}
        recommendations={props.recommendations}
      />
    );
  }

  return (
    <LayoutA
      state={props.state}
      skillshortlist={props.skillshortlist}
      name={props.name}
      phone={props.phone}
      email={props.email}
      availability={props.availability}
      intro={props.intro}
      skills={props.skills}
      gigs={props.gigs}
      recommendations={props.recommendations}
    />
  );
}

/**
 * Default layout:
 *
 * 3 column info header
 * Intro
 * ?Assessments?
 * Experience
 *   - Consulting gigs
 *   - Fulltime gigs
 * Recommendations
 * Print-Only Footer
 * @param {} props
 */
function LayoutA(props) {
  return (
    <>
      <pre>Tier: {props.state.jobTier}</pre>
      <pre>Layout: {props.state.layout}</pre>
      <pre>Verbosity: {props.state.verbosity}</pre>
      <pre>skillsMinPriority: {props.state.skillsMinPriority}</pre>
      <pre>Dark Mode: {props.state.darkmode ? "on" : "off"}</pre>

      <hr />

      <hr />

      <header className="h-card">
        {props.name} {props.phone} {props.email}
      </header>
      <h4>{props.state.jobTier} Introduction</h4>
      <header>{props.intro}</header>
      <h4>Skills {props.skills.length}</h4>
      <ul className="ul-skills layout-c">{props.skills}</ul>
      <h4>Experience</h4>
      {props.gigs}
      <h4>Recommendations</h4>
      {props.recommendations}
    </>
  );
}

/**
 * Alternate layout:
 *
 * 3 column info header
 * Intro
 * Experience
 *   - Chronological gigs
 * ?Assessments?
 * Recommendations
 * Print-Only Footer
 * @param {} props
 */
function LayoutB(props) {
  return (
    <>
      <header className="h-card">
        {props.name} {props.phone} {props.email}
      </header>
      <header>{props.intro}</header>
      <h4>Skills</h4>
      <ul className="ul-skills layout-c">{props.skills}</ul>

      <h4>Experience</h4>
      {props.gigs}

      <h4>Recommendations</h4>
      {props.recommendations}
    </>
  );
}

export default Layout;
