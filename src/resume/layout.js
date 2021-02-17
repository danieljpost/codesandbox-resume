import React from "react";

function Layout(props) {
  // TODO: this gets moved to the BOTTOM of layouts
  const stuff = () => {
    if (false) {
      return props.state.toJsonPrettyPrinted();
    }
    return (
      <>
        <hr />
        <aside id="as-configured">
          <pre>Downloaded from {props.state.magicUrl}</pre>
          <pre>Tier: {props.state.jobTier}</pre>
          <pre>Layout: {props.state.layout}</pre>
          <pre>Verbosity: {props.state.verbosity}</pre>
          <pre>chronology: {props.state.chronology}</pre>
          <pre>Sequence: {props.state.sequence}</pre>
          <pre>Recommendations: {props.state.recommendations}</pre>
          <pre>skillsMinPriority: {props.state.skillsMinPriority}</pre>
          <pre>Dark Mode: {props.state.darkmode ? "on" : "off"}</pre>
          <pre>Show Location: {props.state.showlocation ? "on" : "off"}</pre>
        </aside>
      </>
    );
  };
  let recommendations = "";
  if (props.recommendations.length) {
    recommendations = (
      <>
        <h4>Recommendations</h4>
        {props.recommendations}
      </>
    );
  }
  if ("b" === props.layout) {
    return (
      <>
        <LayoutB
          state={props.state}
          name={props.name}
          phone={props.phone}
          email={props.email}
          availability={props.availability}
          intro={props.intro}
          skills={props.skills}
          experience={props.experience}
          recommendations={recommendations}
        />
        {stuff()}
      </>
    );
  }

  return (
    <>
      <LayoutA
        state={props.state}
        skillshortlist={props.skillshortlist}
        name={props.name}
        phone={props.phone}
        email={props.email}
        availability={props.availability}
        intro={props.intro}
        skills={props.skills}
        experience={props.experience}
        recommendations={recommendations}
      />
      {stuff()}
    </>
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
      <header className="h-card">
        {props.name} {props.phone} {props.email}
      </header>
      <h4>Introduction</h4>
      <header>{props.intro}</header>
      <h4>Skills</h4>
      <ul className="ul-skills layout-a">{props.skills}</ul>
      <h4>Experience</h4>
      {props.experience}

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
 *
 * @param {} props
 */
function LayoutB(props) {
  // no, layout B does not actually differ from layout A. So far.
  return (
    <>
      <header className="h-card">
        {props.name} {props.phone} {props.email}
      </header>
      <header>{props.intro}</header>
      <h4>Skills</h4>
      <ul className="ul-skills layout-a">{props.skills}</ul>

      <h4>Experience</h4>
      {props.gigs}

      <h4>Recommendations</h4>
      {props.recommendations}
    </>
  );
}

export default Layout;
