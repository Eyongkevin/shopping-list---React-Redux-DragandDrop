let phones = {
    Techno:{
        brand: "Techno",
        capacity: "2G RAM, 16G memory",
        price: 180,
        timestamp: null,
        inCart: 'false' // or "in"
    },
    Iphone:{
        brand: "Iphone",
        capacity: "4G RAM, 64G memory",
        price: 324.26,
        timestamp: null,
        inCart: "false"
    },
    Samsung:{
        brand: "Samsung",
        capacity: "8G RAM, 128G memory",
        price: 434.95,
        timestamp: null,
        inCart: "false" 
    },
    Hauwei:{
        brand: "Hauwei",
        capacity: "6G RAM, 128G memory",
        price: 450.99,
        timestamp: null,
        inCart: "false"
    },
    HTC:{
        brand: "HTC",
        capacity: "4G RAM, 32G memory",
        price: 399.99,
        timestamp: null,
        inCart: "false"
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
