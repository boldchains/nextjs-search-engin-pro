import { SET_SEARCH_KEY, SET_IMAGES, SET_IS_FETCHING } from "./actionTypes";

export const setImages = videos => {
  return { type: SET_IMAGES, payload: videos };
};

export const setSearchKey = searchKey => {
  return { type: SET_SEARCH_KEY, payload: searchKey };
};

export const setIsFetching = flag => {
  return { type: SET_IS_FETCHING, payload: flag };
};
