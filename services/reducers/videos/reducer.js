import { SET_SEARCH_KEY, SET_VIDEOS, SET_IS_FETCHING } from './actionTypes';

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
        case SET_VIDEOS:
            return {
                ...state,
                data: payload
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