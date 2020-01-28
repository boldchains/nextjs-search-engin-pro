import { SET_SEARCH_KEY, SET_VIDEOS, CLEAR_VIDEOS, SET_IS_FETCHING } from './actionTypes';

export const setVideos = videos => {
    return { type: SET_VIDEOS, payload: videos };
};

export const setSearchKey = searchKey => {
    return { type: SET_SEARCH_KEY, payload: searchKey };
};

export const clearArticles = () => {
    return { type: CLEAR_VIDEOS, payload: '' };
};

export const setIsFetching = (flag) => {
    return { type: SET_IS_FETCHING, payload: flag}
}