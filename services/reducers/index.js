import { combineReducers } from 'redux';
import articlesReducer from './articles/reducer';
import videosReducer from './videos/reducer';

export default combineReducers({
    articles: articlesReducer,
    videos: videosReducer
});