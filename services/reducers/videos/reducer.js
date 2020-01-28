import { SET_SEARCH_KEY, SEARCH_VIDEOS, CLEAR_VIDEOS } from './actionTypes';

const initialState = {
    searchKey: "",
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
        default:
            return state;
    }
}