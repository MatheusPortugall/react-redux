import * as types from '../actions/types';

const INITIAL_STATE = {
    data: [],
    loading: false,
    error: false,
}


export default function reducer(state = INITIAL_STATE, action){
    switch(action.type) {
        case types.ADICIONAR_DADO:
            return { ...state, data: action.payload, loading: false, error: true };
        default:
            return state;
    }
}