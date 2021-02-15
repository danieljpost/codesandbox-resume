import React from "react";

function RecommendationDate(props) {
  // TODO: internationalize, etc.
  // this probably would involve importing some date module
  // having hardcoded months is teh dumb
  const regexpYmd = /(\d{4})-(\d{2})-(\d{2})/;
  const months = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December"
  };
  const transformDate = (d) => {
    const match = d.match(regexpYmd);
    const month = months[match[2]];
    const year = match[1];
    const day = match[3];
    return `${month} ${day}, ${year}`;
  };

  const when = transformDate(props.when);
  return <time dateTime={props.when}>{when}</time>;
}

export default RecommendationDate;
