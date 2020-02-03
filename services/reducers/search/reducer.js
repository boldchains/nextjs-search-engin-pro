import {
  SET_SEARCH_KEY,
  SET_LOCATION_INFO,
  ADD_ARTICLES,
  CLEAR_ARTICLES,
  SET_VIDEOS,
  SET_IMAGES,
  SET_ALL_TAGS,
  SET_CATEGORY_TAGS,
  SET_ARTICLE_TAGS,
  SET_CATEGORY_TAG,
  SET_ARTICLE_TAG
} from "./actionTypes";

const defaultTag = { _id: "All", selected: true };

const initialState = {
  searchKey: "",
  location: {},
  articles: [],
  videos: [],
  images: [],
  allTags: [],
  articleTags: [defaultTag],
  categoryTags: [defaultTag],
  selectedCTag: "",
  selectedATag: "",
  page: 0
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case SET_LOCATION_INFO:
      return {
        ...state,
        location: payload
      };
    case SET_ARTICLE_TAG:
      return {
        ...state,
        selectedATag: payload
      };
    case SET_CATEGORY_TAG:
      return {
        ...state,
        selectedCTag: payload
      };
    case SET_ALL_TAGS:
      return {
        ...state,
        allTags: payload
      };
    case SET_SEARCH_KEY:
      return {
        ...state,
        searchKey: payload
      };
    case SET_CATEGORY_TAGS:
      return {
        ...state,
        categoryTags:
          payload && payload.length > 0
            ? [defaultTag, ...payload]
            : [defaultTag]
      };
    case SET_ARTICLE_TAGS:
      return {
        ...state,
        articleTags:
          payload && payload.length > 0
            ? [defaultTag, ...payload]
            : [defaultTag]
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
        page: 0
      };
    default:
      return state;
  }
}
