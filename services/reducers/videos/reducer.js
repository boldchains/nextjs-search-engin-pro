import { SET_SEARCH_KEY, SEARCH_VIDEOS, CLEAR_VIDEOS, SET_IS_FETCHING } from './actionTypes';

const initialState = {
    searchKey: "",
    isFetching: false,
    data: []
};

export default function (state = initialState, {type, payload}) {
    switch(type) {
        case SET_SEARCH_KEY:
            return {
                ...state,
                searchKey: payload
            };
        case SEARCH_VIDEOS:
            return {
                ...state,
                data: [...state.data, ...payload]
            };
        case CLEAR_VIDEOS:
            return {
                ...state,
                data: []
            };
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: payload
            }
        default:
            return state;
    }
}