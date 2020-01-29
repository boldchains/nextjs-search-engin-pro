import { combineReducers } from "redux";
import searchReducer from "services/reducers/search/reducer.js";

export default combineReducers({
  searchStates: searchReducer
});
