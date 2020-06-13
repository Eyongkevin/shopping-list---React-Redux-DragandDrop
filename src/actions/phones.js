export const RECEIVE_PHONES = 'RECEIVE_PHONES'
export const MOVE_INCART = 'MOVE_INCART'

export function receivePhones(phones){
    return{
        type: RECEIVE_PHONES,
        phones
    }
}

export function moveIncart(phone_id){
    const timestamp = Date.now()
    return{
        type: MOVE_INCART,
        id: phone_id,
        timestamp
    }
}