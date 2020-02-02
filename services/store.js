import { createStore } from "redux";
import rootReducer from "./reducers";

export const makeStore = (initialState, options) => {
  return createStore(rootReducer, initialState);
};
