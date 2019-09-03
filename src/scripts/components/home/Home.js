import React, {Component} from "react";

import Control from "./Control";
import PointTable from "./PointTable";

export default class Home extends Component {
  render (){
    return <div className="home-page">
      <div className="home-header">PES - Sep 2019</div>
      <Control />
      <PointTable />
    </div>;
  }
}