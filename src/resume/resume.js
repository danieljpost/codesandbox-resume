import React from "react";
import Configurator from "../configurator/configurator";
import Layout from "./layout";
import Gig from "./gig";
import Recommendation from "./recommendation";
import Skill from "./skill";

function Resume(props) {
  const [state, setState] = React.useState(props.config);

  const handleChangeCheck = (event) => {
    if ("darkmode" === event.target.name) {
      console.log("got here", event.target.checked);
      localStorage.setItem(
        "dark-mode-preference",
        event.target.checked ? "on" : "off"
      );
    }
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({
      ...state,
      [name]: isNaN(value) ? value : Number(value)
    });
    console.warn("State is", state);
  };

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

  // Gig filtering is done here, now but may be moved to the Layout in the future
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
    return skill.tiers.includes(state.jobTier);
  };
  const filterSkillsbyPriority = (skill) => {
    return skill.priority >= state.skillsMinPriority;
  };

  // const skillCategories = props.myData.skills.map((v, i) => v.category);

  // TODO: filter gigs by date, type depending on verbosity request
  // TODO: change gig layout depending on verbostiy or style request
  // Gig filtering is done here, now but may be moved to the Layout in the future
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

  const ownerGigs = props.myData.gigs.filter((g) => g.gigType === "owner");
  const contractGigs = props.myData.gigs.filter(
    (g) => g.gigType === "contract"
  );
  const employeeGigs = props.myData.gigs.filter(
    (g) => g.gigType === "employee"
  );

  // if (true) {
  let experience = props.myData.gigs.sort(sortGigsByDate).map((v, i) => {
    let company = props.myData.companies.find((c) => {
      return c._id === v.companyId;
    });
    return (
      <Gig
        _id={v._id}
        verbosity={state.verbosity}
        key={v._id}
        gigType={v.gigType}
        title={v.title}
        showlocation={state.showlocation}
        location={v.location}
        companyId={v.companyId}
        company={company.fullname}
        endDate={v.endDate}
        startDate={v.startDate}
        longDesc={v.longDesc}
        shortDesc={v.shortDesc}
        responsibilities={v.responsibilities}
        accomplishments={v.accomplishments}
        skills={v.skills}
      />
    );
  });
  // }

  // TODO: filter by date depending on verbosity request
  const recommendations = props.myData.recommendations
    .filter((v, i) => i < state.verbosity / 2)
    .map((v, i) => {
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
    // .filter(filterSkillsByTier)
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

  // choose intro based on state
  const intro = props.myData.intros[state.jobTier];

  return (
    <main className={props.config.darkmode ? "dark" : "default"}>
      <Configurator
        handleChange={handleChange}
        handleChangeCheck={handleChangeCheck}
        reset={props.reset}
        state={state}
      />
      <Layout
        state={state}
        name={name}
        email={email}
        phone={phone}
        intro={intro}
        experience={experience}
        recommendations={recommendations}
        skills={skills}
      />
    </main>
  );
}

export default Resume;
