import {
  SET_LANGUAGE,
  SET_SEARCH_KEY,
  ADD_ARTICLES,
  CLEAR_ARTICLES,
  SET_ALL_TAGS,
  SET_ARTICLE_TAGS,
  SET_CATEGORY_TAGS,
  SET_CATEGORY_TAG,
  SET_ARTICLE_TAG,
  SET_IMAGES,
  SET_VIDEOS
} from "./actionTypes";

export const setLanugage = lang => {
  return { type: SET_LANGUAGE, payload: lang };
};

export const addArticles = articles => {
  return { type: ADD_ARTICLES, payload: articles };
};

export const setSearchKey = searchKey => {
  return { type: SET_SEARCH_KEY, payload: searchKey };
};

export const clearArticles = () => {
  return { type: CLEAR_ARTICLES, payload: "" };
};

export const setAllTags = payload => {
  return { type: SET_ALL_TAGS, payload };
};

export const setArticleTags = tags => {
  return { type: SET_ARTICLE_TAGS, payload: tags };
};

export const setCategoryTags = tags => {
  return { type: SET_CATEGORY_TAGS, payload: tags };
};

export const setArticleTag = tag => {
  return { type: SET_ARTICLE_TAG, payload: tag };
};

export const setCategoryTag = tag => {
  return { type: SET_CATEGORY_TAG, payload: tag };
};

export const setImages = images => {
  return { type: SET_IMAGES, payload: images };
};

export const setVideos = videos => {
  return { type: SET_VIDEOS, payload: videos };
};
