import React from "react";

function Skill(props) {
  // TODO: make more/less verbose depending on state
  const d = [
    props.description,
    props.url,
    `My Skill level is ${props.expertise}/10`,
    "Category: " + props.category
  ].join("\n");
  return (
    <li>
      <a
        href={props.url}
        title={d}
        data-category={props.category}
        data-expertise={props.expertise}
      >
        {props.name}
      </a>
    </li>
  );
}

export default Skill;
