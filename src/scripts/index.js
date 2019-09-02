import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import rootReducer from "./reducers";
import Home from "./components/home/Home";

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

const BaseComponent = () => {
  return <Home />;
};

ReactDOM.render(
  <Provider store={store}>
    <BaseComponent/>
  </Provider>, 
  document.getElementById("base-container")
);
