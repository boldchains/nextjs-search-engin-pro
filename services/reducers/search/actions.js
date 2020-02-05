import fetch from "isomorphic-unfetch";
import {
  GET_LOCATION,
  ADD_ARTICLES,
  CLEAR_ARTICLES,
  GET_ALL_TAGS,
  SET_CATEGORY_TAG,
  SET_ARTICLE_TAG,
  GET_IMAGES,
  GET_VIDEOS,
  SET_ARTICLES_LOADING
} from "./actionTypes";

import {
  CORS_PROXY_URL,
  ARTICLES_API_URL,
  IMAGES_API_URL,
  VIDEOS_API_URL,
  TAGS_API_URL,
  ARTICLES_LIMIT
} from "utils/Consts.js";

export const getLocation = queryLang => async dispatch => {
  dispatch({ type: GET_LOCATION, payload: queryLang });
};

export const addArticles = params => async dispatch => {
  const queryString = params.query ? params.query.trim().replace(" ", "+") : "";
  const url = `${CORS_PROXY_URL + ARTICLES_API_URL}?l=${
    params.lang ? params.lang : "en"
  }&page=${params.page}&q=${queryString}`;

  dispatch({ type: SET_ARTICLES_LOADING });

  try {
    const response = await fetch(url);
    const jsonResp = await response.json();

    const articles =
      jsonResp.articles &&
      jsonResp.articles.map((item, index) => ({
        key: (params.page * ARTICLES_LIMIT + index).toString(),
        src: item.image && item.image.url ? item.image.url : "",
        photo: item,
        width: 4,
        height: 3
      }));
    dispatch({ type: ADD_ARTICLES, payload: articles });
  } catch (err) {}
};

export const clearArticles = () => {
  return { type: CLEAR_ARTICLES, payload: "" };
};

export const getAllTags = () => async dispatch => {
  try {
    const response = await fetch(CORS_PROXY_URL + TAGS_API_URL);
    const jsonResp = await response.json();

    dispatch({ type: GET_ALL_TAGS, payload: jsonResp.listtags });
  } catch (err) {}
};

export const getImages = () => async dispatch => {
  try {
    const response = await fetch(CORS_PROXY_URL + IMAGES_API_URL);
    const jsonResp = await response.json();
    dispatch({ type: GET_IMAGES, payload: jsonResp.alluserphotos });
  } catch (err) {}
};

export const getVideos = () => async dispatch => {
  try {
    const response = await fetch(VIDEOS_API_URL);
    const jsonResp = await response.json();
    dispatch({ type: GET_VIDEOS, payload: jsonResp });
  } catch (err) {}
};

export const setArticleTag = tag => {
  return { type: SET_ARTICLE_TAG, payload: tag };
};

export const setCategoryTag = tag => {
  return { type: SET_CATEGORY_TAG, payload: tag };
};
