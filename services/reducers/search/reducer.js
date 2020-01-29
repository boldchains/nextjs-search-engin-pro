import {
  SET_SEARCH_KEY,
  SET_LANGUAGE,
  ADD_ARTICLES,
  CLEAR_ARTICLES,
  SET_VIDEOS,
  SET_IMAGES,
  SET_CATEGORY_TAGS,
  SET_ARTICLE_TAGS
} from "./actionTypes";

const initialState = {
  searchKey: "",
  lang: "en",
  articles: [],
  videos: [],
  images: [],
  articleTags: [],
  categoryTags: [],
  page: 1
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case SET_LANGUAGE:
      return {
        ...state,
        lang: payload
      };
    case SET_SEARCH_KEY:
      return {
        ...state,
        searchKey: payload
      };
    case SET_CATEGORY_TAGS:
      return {
        ...state,
        categoryTags: payload
      };
    case SET_ARTICLE_TAGS:
      return {
        ...state,
        articleTags: payload
      };
    case SET_VIDEOS:
      return {
        ...state,
        videos: payload
      };
    case SET_IMAGES:
      return {
        ...state,
        images: payload
      };
    case ADD_ARTICLES:
      return {
        ...state,
        articles: [...state.articles, ...payload],
        page: state.page + 1
      };
    case CLEAR_ARTICLES:
      return {
        ...state,
        articles: [],
        page: 1
      };
    default:
      return state;
  }
}
