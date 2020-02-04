import {
  GET_LOCATION,
  ADD_ARTICLES,
  CLEAR_ARTICLES,
  GET_VIDEOS,
  GET_IMAGES,
  GET_ALL_TAGS,
  SET_CATEGORY_TAG,
  SET_ARTICLE_TAG,
  SET_ARTICLES_LOADING
} from "./actionTypes";

const defaultTag = { _id: "All", selected: true };

const initialState = {
  searchKey: "",
  location: {},
  articles: {
    list: [],
    preloadList: Array.from(new Array(20)).map(item => ({
      src: "",
      width: 4,
      height: 3
    })),
    loading: false
  },
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
    case GET_LOCATION:
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
    case GET_ALL_TAGS:
      return {
        ...state,
        allTags: payload
      };
    case GET_VIDEOS:
      return {
        ...state,
        videos: payload
      };
    case GET_IMAGES:
      return {
        ...state,
        images: payload
      };
    case ADD_ARTICLES:
      return {
        ...state,
        articles: {
          ...state.articles,
          list: [...state.articles.list, ...payload],
          loading: false
        },
        page: state.page + 1
      };
    case SET_ARTICLES_LOADING:
      return {
        ...state,
        articles: {
          ...state.articles,
          loading: true
        }
      };
    case CLEAR_ARTICLES:
      return {
        ...state,
        articles: {
          ...state.articles,
          list: [],
          loading: false
        },
        page: 0
      };
    default:
      return state;
  }
}
