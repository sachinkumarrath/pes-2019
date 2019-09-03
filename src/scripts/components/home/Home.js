import React, {Component} from "react";

export default class Home extends Component {
  render (){
    return <div>
      <h2>PES - Sep 2019</h2>
      <div className="point-table">
        <div className="point-table-header row">
          <div class="col">Team</div>
          <div class="col">Match</div>
          <div class="col">Win</div>
          <div class="col">Loss</div>
          <div class="col">Draw</div>
          <div class="col">Points</div>
          <div class="col">Goal F</div>
          <div class="col">Goal A</div>
          <div class="col">Goal Diff</div>
        </div>
        <div className="point-table-content row">
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
        </div>
      </div>
    </div>;
  }
}