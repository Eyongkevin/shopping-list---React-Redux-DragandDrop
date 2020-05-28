import { RECEIVE_PHONES } from '../actions/phones'

export default function phones(state={}, action){
    switch(action.type){
        case RECEIVE_PHONES:
            return {
                ...state,
                ...action.phones
            }
        default:
            return state
    }
}