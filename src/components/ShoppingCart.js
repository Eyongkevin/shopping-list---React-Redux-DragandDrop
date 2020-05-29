import React, { Component } from 'react'
import Phone from './Phone'


class ShoppingCart extends Component{
    render(){
        return(
            <div className="shopping-cart">
                <Phone name="Test_Phone" />
            </div>
        )
    }
}

export default ShoppingCart;