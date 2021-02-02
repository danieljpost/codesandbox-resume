import React from "react";
import RecommendationDate from "./recommendationDate";

function Recommendation(props) {
  const when = <RecommendationDate when={props.when} />;
  return (
    <article className="recommendation">
      <blockquote>{props.recommendation}</blockquote>
      <label>
        <a href={props.linkedIn}>{props.name}</a>, {when}
      </label>
      <em>{props.relationship}</em>
    </article>
  );
}

export default Recommendation;
