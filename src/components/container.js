import React, { Component } from 'react';
import Phone from './Phone'
import ShoppingCart from './ShoppingCart'

class Container extends Component {
    render(){
        const { phones } = this.props
        return(
            
            <div className='container'>
                
                <div className="shopping">
                    <h1>Phone Brands</h1>
                    {Object.keys(phones).map((phone) =>(
                        <Phone key={phone} name={phones[phone].brand} />
                    ))}
                    <ShoppingCart />
                </div>
                <dive className="shoppingDetails">
                        <h1>Shopping Details</h1>
                        {/* display shopping detail here. */}
                </dive>
                
            </div>
        )
    }
}

export default Container


