import React from "react";

function DateRange(props) {
  // TODO: internationalize, etc.
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
    if (!d) {
      return "Present";
    }
    const match = d.match(regexpYmd);
    const month = months[match[2]];
    const year = match[1];
    return `${month} ${year}`;
  };
  const startDate = transformDate(props.startDate);
  const endDate = transformDate(props.endDate);
  return (
    <span className="date right">
      <time dateTime={props.startDate}>{startDate}</time>
      &nbsp;-&nbsp;
      <time dateTime={props.endDate || "now"}>{endDate}</time>
    </span>
  );
}

export default DateRange;
