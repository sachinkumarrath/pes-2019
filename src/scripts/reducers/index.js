import { combineReducers } from "redux";

import matches from "./matches";
import pointTable from "./pointTable";
import seriesList from "./seriesList";

export default combineReducers({
  matches,
  pointTable,
  seriesList
});