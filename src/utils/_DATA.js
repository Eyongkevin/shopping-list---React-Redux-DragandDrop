let phones = {
    Techno:{
        brand: "Techno",
        inCart: 'false' // or "in"
    },
    Apple:{
        brand: "Iphone",
        inCart: "false"
    },
    Samsung:{
        brand: "Samsung",
        inCart: "false" 
    },
    Hauwei:{
        brand: "Hauwei",
        inCart: "true"
    },
    HTC:{
        brand: "HTC",
        inCart: "true"
    }
}

export function _getPhones (){
    return new Promise((res, rej) =>{
        setTimeout(() => res({...phones}), 1000);
    });
}

export function setInCart({id, inCart}){
    return new Promise((res, rej) =>{
        setTimeout(() =>{
            phones = {
                ...phones,
                [id]:{
                    ...phones[id],
                    inCart: inCart
                }
            }
            res()
        }, 500);
    });
}