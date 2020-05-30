import React, { Component } from 'react'
import Phone from './Phone'


class ShoppingCart extends Component{
    render(){
        return(
            <div className="cart-item">
                <Phone name="Test_Phone" />
            </div>
        )
    }
}

export default ShoppingCart;