export const RECEIVE_PHONES = 'RECEIVE_PHONES'

export function receivePhones(phones){
    return{
        type: RECEIVE_PHONES,
        phones
    }
}