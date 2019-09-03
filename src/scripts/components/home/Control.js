import React from "react";

const Control = props => {
  return <div className="control-section">
    Select the year and month : &nbsp;
    <select name="year">
      <option>select</option>
    </select>
    &nbsp;
    <select name="month">
      <option>select</option>
    </select>
  </div>;
};

export default Control;