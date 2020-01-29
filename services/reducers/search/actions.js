import {
  SET_LANGUAGE,
  SET_SEARCH_KEY,
  ADD_ARTICLES,
  CLEAR_ARTICLES,
  SET_TAGS,
  SET_IMAGES,
  SET_VIDEOS
} from "./actionTypes";

export const addArticles = articles => {
  return { type: ADD_ARTICLES, payload: articles };
};

export const setSearchKey = searchKey => {
  return { type: SET_SEARCH_KEY, payload: searchKey };
};

export const clearArticles = () => {
  return { type: CLEAR_ARTICLES, payload: "" };
};

export const setTags = videos => {
  return { type: SET_TAGS, payload: videos };
};

export const setImages = videos => {
  return { type: SET_IMAGES, payload: videos };
};

export const setVideos = videos => {
  return { type: SET_VIDEOS, payload: videos };
};
