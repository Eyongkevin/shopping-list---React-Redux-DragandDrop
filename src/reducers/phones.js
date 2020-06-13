import { RECEIVE_PHONES } from '../actions/phones'
export const MOVE_INCART = 'MOVE_INCART'

export default function phones(state={}, action){
    switch(action.type){
        case RECEIVE_PHONES:
            return {
                ...state,
                ...action.phones
            }
        case MOVE_INCART:
            return{
                ...state,
                [action.id]:{
                    ...state[action.id],
                    timestamp:action.timestamp,
                    inCart: 'true'
                }
            }
        default:
            return state
    }
}