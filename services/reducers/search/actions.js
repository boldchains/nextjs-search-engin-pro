import axios from "axios";
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
  LOCATION_DETECT_API,
  CORS_PROXY_URL,
  ARTICLES_API_URL,
  IMAGES_API_URL,
  VIDEOS_API_URL,
  TAGS_API_URL,
  ARTICLES_LIMIT
} from "utils/Consts.js";

export const getLocation = queryLang => dispatch =>
  axios({
    method: "GET",
    url: LOCATION_DETECT_API,
    headers: []
  })
    .then(response => {
      if (response.status === 200) {
        const { countryCode } = response.data;
        const location = queryLang ? queryLang : countryCode.toLowerCase();
        dispatch({
          type: GET_LOCATION,
          payload: location
        });
      }
    })
    .catch(err => {});

export const addArticles = params => dispatch => {
  const url = `${CORS_PROXY_URL + ARTICLES_API_URL}?l=${params.lang}&page=${
    params.page
  }&q=${params.query}`;

  const queue = axios({
    method: "GET",
    url: url,
    headers: []
  });

  dispatch({ type: SET_ARTICLES_LOADING });
  queue
    .then(response => {
      if (response.status === 200) {
        const list = response.data.articles;
        const articles = list.map((item, index) => ({
          key: (params.page * ARTICLES_LIMIT + index).toString(),
          src: item.image && item.image.url ? item.image.url : "",
          photo: item,
          width: 4,
          height: 3
        }));
        dispatch({ type: ADD_ARTICLES, payload: articles });
      }
    })
    .catch(err => {});
};

export const clearArticles = () => {
  return { type: CLEAR_ARTICLES, payload: "" };
};

export const getAllTags = () => dispatch =>
  axios
    .get(CORS_PROXY_URL + TAGS_API_URL)
    .then(response => {
      if (response.status === 200) {
        dispatch({ type: GET_ALL_TAGS, payload: response.data.listtags });
      }
    })
    .catch(err => {});

export const getImages = () => dispatch =>
  axios({
    method: "GET",
    url: IMAGES_API_URL,
    headers: []
  }).then(response => dispatch({ type: GET_IMAGES, payload: response.data }));

export const getVideos = () => dispatch =>
  axios({
    method: "GET",
    url: VIDEOS_API_URL,
    headers: []
  }).then(response => dispatch({ type: GET_VIDEOS, payload: response.data }));

export const setArticleTag = tag => {
  return { type: SET_ARTICLE_TAG, payload: tag };
};

export const setCategoryTag = tag => {
  return { type: SET_CATEGORY_TAG, payload: tag };
};
