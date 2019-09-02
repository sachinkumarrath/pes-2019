import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";
import Home from "./components/home/Home";

let store;

if (process.env.NODE_ENV === "production") {
  store = createStore(rootReducer, compose(
    applyMiddleware(thunk)
  ));
} else {
  const composeWithDevTools = require("redux-devtools-extension");
  store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
  ));
}

const BaseComponent = () => {
  return <Home />;
};

ReactDOM.render(
  <Provider store={store}>
    <BaseComponent/>
  </Provider>, 
  document.getElementById("base-container")
);
