import React from "react";
import TableContent from "./TableContent";

const PointTable = props => {
  return <div className="point-table">
    <div className="point-table-header row">
      <div className="col">Team</div>
      <div className="col">Match</div>
      <div className="col">Win</div>
      <div className="col">Loss</div>
      <div className="col">Draw</div>
      <div className="col">Points</div>
      <div className="col">Goal F</div>
      <div className="col">Goal A</div>
      <div className="col">Goal D</div>
    </div>
    <TableContent/>
  </div>;
}

export default PointTable;