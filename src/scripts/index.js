import React from "react";
import ReactDOM from "react-dom";

import Home from "./components/home/Home";

const BaseComponent = () => {
  return <Home />;
};

ReactDOM.render(
  <BaseComponent/>, 
  document.getElementById("base-container")
);
