import React from "react";
import RecommendationDate from "./recommendationDate";

function Recommendation(props) {
  const when = <RecommendationDate when={props.when} />;
  return (
    <aside className="recommendation">
      <blockquote>{props.recommendation}</blockquote>
      <label>
        <a href={props.linkedIn}>{props.name}</a> {when}
      </label>
      <br />
      <cite>{props.relationship}</cite>
    </aside>
  );
}

export default Recommendation;
