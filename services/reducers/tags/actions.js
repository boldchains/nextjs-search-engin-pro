import { SET_TAGS, SET_IS_FETCHING } from "./actionTypes";

export const setTags = videos => {
  return { type: SET_TAGS, payload: videos };
};

export const setIsFetching = flag => {
  return { type: SET_IS_FETCHING, payload: flag };
};
