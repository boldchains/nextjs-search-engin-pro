import { combineReducers } from "redux";
import articlesReducer from "./articles/reducer";
import videosReducer from "./videos/reducer";
import imagesReducer from "./images/reducer";
import tagsReducer from "./tags/reducer";

export default combineReducers({
  articles: articlesReducer,
  videos: videosReducer,
  images: imagesReducer,
  tags: tagsReducer
});
