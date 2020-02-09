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
  SET_ARTICLES_LOADING,
  GET_VIDEO_DETAIL,
  RESET_VIDEO_DETAIL,
  SET_VIDEO_LOADING,
  SET_SHOW_ADVACNED_SEARCH
} from "./actionTypes";

import {
  CORS_PROXY_URL,
  ARTICLES_API_URL,
  IMAGES_API_URL,
  VIDEOS_API_URL,
  TAGS_API_URL,
  ARTICLES_LIMIT,
  VIDEO_DETAIL_URL
} from "utils/Consts.js";

// import testVideosResponse from "./videos.js";
// import testDetail from "./detail.js";

export const getLocation = queryLang => async dispatch => {
  dispatch({ type: GET_LOCATION, payload: queryLang });
};

export const addArticles = params => async dispatch => {
  const url = `${CORS_PROXY_URL + ARTICLES_API_URL}?l=${
    params.lang ? params.lang : "en"
  }&page=${params.page}&q=${params.query}`;

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

export const getImages = params => async dispatch => {
  const ts = Date.now();
  const url = `${IMAGES_API_URL}?l=${params.lang ? params.lang : "en"}&page=${
    params.page
  }&q=${params.query}&ts=${ts}${params.ctag && "&tag=" + params.ctag}`;
  try {
    const response = await fetch(CORS_PROXY_URL + url);
    const jsonResp = await response.json();
    dispatch({ type: GET_IMAGES, payload: jsonResp.alluserphotos });
  } catch (err) {}
};

export const getVideos = params => async dispatch => {
  const query = params.ctag
    ? params.ctag
    : "" + " " + params.query
    ? params.query
    : "";
  try {
    const url = `${VIDEOS_API_URL}?part=snippet&q=${query}&maxResults=30&key=${process.env.apiKey}`;

    const response = await fetch(url);
    const jsonResp = await response.json();
    dispatch({ type: GET_VIDEOS, payload: jsonResp.items });
    // dispatch({ type: GET_VIDEOS, payload: testVideosResponse.items });
  } catch (err) {}
};

export const getVideoDetail = params => async dispatch => {
  const url = `${VIDEO_DETAIL_URL}?id=${params.id}&part=contentDetails,snippet,statistics&key=${process.env.apiKey}`;
  try {
    dispatch({ type: SET_VIDEO_LOADING });
    const rep = await fetch(url);
    const jsonResp = await rep.json();
    dispatch({
      type: GET_VIDEO_DETAIL,
      payload: jsonResp.items && jsonResp.items[0]
      // payload: testDetail.items && testDetail.items[0]
    });
  } catch (err) {}
};

export const resetVideoDetail = () => {
  return { type: RESET_VIDEO_DETAIL };
};

export const setShowAdvancedSearch = isShow => {
  return { type: SET_SHOW_ADVACNED_SEARCH, payload: isShow };
};

export const setArticleTag = tag => {
  return { type: SET_ARTICLE_TAG, payload: tag };
};

export const setCategoryTag = tag => {
  return { type: SET_CATEGORY_TAG, payload: tag };
};
