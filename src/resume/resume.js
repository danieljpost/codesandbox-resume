import React from "react";
import Layout from "./layout";
import Gig from "./gig";
import Recommendation from "./recommendation";
import Skill from "./skill";

function Resume(props) {
  const [state, setState] = React.useState(props.config);

  // TODO: choose layout types via app state.

  // TODO: this is controlled by app state
  const myTier = "User Interface";
  // TODO: consolidate into contactinfo object
  const phone = <div className="p-tel">612-367-6902</div>;
  const name = <div>Daniel J. Post</div>;
  const email = (
    <div>
      <a className="u-email" href="mailto:contact@danieljpost.pro">
        contact@danieljpost.pro
      </a>
    </div>
  );

  // const companies = props.myData.companies.map(
  //   (v, i) => { return <section>{v.name}, {v.url}</section>}
  // );
  const sortGigsByDate = (a, b) => {
    if (a.startDate > b.startDate) {
      return -1;
    }
    if (a.startDate < b.startDate) {
      return 1;
    }
    // a must be equal to b
    return 0;
  };
  const sortSkillsByPriority = (a, b) => {
    if (a.expertise > b.expertise) {
      return -1;
    }
    if (a.expertise < b.expertise) {
      return 1;
    }
    // a must be equal to b
    return 0;
  };
  const filterSkillsByTier = (skill) => {
    return skill.tiers.includes(myTier);
  };
  const filterSkillsbyPriority = (skill) => {
    return skill.priority > 10 - props.config.verbosity;
  };

  // const skillCategories = props.myData.skills.map((v, i) => v.category);

  // TODO: filter gigs by date, type depending on verbosity request
  // TODO: change gig layout depending on verbostiy or style request
  const gigs = props.myData.gigs.sort(sortGigsByDate).map((v, i) => {
    let company = props.myData.companies.find((c) => {
      return c._id === v.companyId;
    });
    return (
      <Gig
        _id={v._id}
        key={v._id}
        type={v.gigType}
        title={v.title}
        location={v.location}
        companyId={v.companyId}
        company={company.fullname}
        endDate={v.endDate}
        startDate={v.startDate}
        longDesc={v.longDesc}
        shortDesc={v.shortDesc}
        accomplishments={v.accomplishments}
        skills={v.skills}
      />
    );
  });

  // TODO: filter by date depending on verbosity request
  const recommendations = props.myData.recommendations.map((v, i) => {
    return (
      <Recommendation
        key={i}
        when={v.when}
        name={v.name}
        title={v.title}
        linkedIn={v.linkedIn}
        relationship={v.relationship}
        recommendation={v.recommendation}
      />
    );
  });

  // TODO: filter by tier from state, group by category, by experience depending on verbosity request
  const skills = props.myData.skills
    .filter(filterSkillsbyPriority)
    .filter(filterSkillsByTier)
    .sort(sortSkillsByPriority)
    .map((v, i) => {
      return (
        <Skill
          key={i}
          name={v.name}
          title={v.sname}
          url={v.url}
          expertise={v.expertise}
          category={v.category}
          description={v.description}
          _id={v._id}
        />
      );
    });

  const skillshortlist = props.myData.skills.map((s, i) => (
    <span key={i}>"{s.sname}"&nbsp;</span>
  ));

  // TODO: choose intro based on state
  const intro = props.myData.intros[myTier];

  return (
    <main className={props.config.darkmode ? "dark" : "default"}>
      <Layout
        config={state}
        skillshortlist={skillshortlist}
        name={name}
        email={email}
        phone={phone}
        intro={intro}
        gigs={gigs}
        recommendations={recommendations}
        skills={skills}
      />
    </main>
  );
}

export default Resume;
