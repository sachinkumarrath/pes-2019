import React from "react";
import ReactDOM from "react-dom";

const BaseComponent = () => {
  return <div>Hello</div>
};

ReactDOM.render(
  <BaseComponent/>, 
  document.getElementById("base-container")
);

