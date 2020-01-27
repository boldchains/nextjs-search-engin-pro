import { SET_SEARCH_KEY, SET_LANGUAGE, ADD_ARTICLES, CLEAR_ARTICLES } from './actionTypes';

const initialState = {
    searchKey: "",
    lang: 'en',
    data: [],
    page: 1
};

export default function (state = initialState, {type, payload}) {
    switch(type) {
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
        case ADD_ARTICLES:
            return {
                ...state,
                data: [...state.data, ...payload],
                page: state.page + 1
            };
        case CLEAR_ARTICLES:
            return {
                ...state,
                data: [],
                page: 1
            };
        default:
            return state;
    }
}