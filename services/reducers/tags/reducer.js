import { SET_TAGS, SET_IS_FETCHING } from './actionTypes';

const initialState = {
    isFetching: false,
    data: []
};

export default function (state = initialState, {type, payload}) {
    switch(type) {
        case SET_TAGS:
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