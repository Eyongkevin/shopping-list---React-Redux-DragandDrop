import React, { Component } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Phone from './Phone'
import ShoppingCart from './ShoppingCart'
import MyCart from './MyCart'

class Container extends Component {
    render(){
        const { phones } = this.props
        return(
            <div class="ui container">
                <div className="main-header">
                    <h2 class="ui icon center aligned header">
                        <i aria-hidden="true" class="mobile circular icon"></i>
                        <div class="content title">Phone Shope</div>
                    </h2>
                </div>
                <div class="ui grid">
                <h1 className="mycart-header">My cart</h1>
                    <div class="left floated five wide column my-cart">                       
                        <MyCart />
                    </div>
                <div class="right floated five wide column">
                    <DndProvider backend={ HTML5Backend } >
                        <div class="ui row">
                            <h3 class="brand-heading">Phone Brands</h3>
                        </div>
                        <div class="ui row">
                            <div className="shopping-list">
                                {Object.keys(phones).map((phone) =>(
                                    <Phone key={phone} brand={phones[phone].brand} />
                                ))}
                            </div>
                            <ShoppingCart />                            
                        </div>  
                    </DndProvider>                 
                </div>
                </div>            
            </div>            
            
        )
    }
}

export default Container


