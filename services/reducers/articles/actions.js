import { SET_LANGUAGE, SET_SEARCH_KEY, ADD_ARTICLES, CLEAR_ARTICLES } from './actionTypes';

export const addArticles = articles => {
    return { type: ADD_ARTICLES, payload: articles };
};

export const setSearchKey = searchKey => {
    return { type: SET_SEARCH_KEY, payload: searchKey };
};

export const clearArticles = () => {
    return { type: CLEAR_ARTICLES, payload: '' };
};