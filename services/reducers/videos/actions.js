import { SET_SEARCH_KEY, SEARCH_VIDEOS, CLEAR_VIDEOS } from './actionTypes';

export const searchVideos = videos => {
    return { type: SEARCH_VIDEOS, payload: videos };
};

export const setSearchKey = searchKey => {
    return { type: SET_SEARCH_KEY, payload: searchKey };
};

export const clearArticles = () => {
    return { type: CLEAR_VIDEOS, payload: '' };
};