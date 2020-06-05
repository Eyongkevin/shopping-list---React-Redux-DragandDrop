import React, { Component } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { connect } from 'react-redux'


import ShoppingCart from './ShoppingCart'
import MyCart from './MyCart'
import DisplayPhone from './DisplayPhone'

class Container extends Component {
    render(){
        const { inCart_phones, outCart_phones } = this.props
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
                                <DisplayPhone displayPhones = {outCart_phones} />
                            </div>
                            <ShoppingCart inCart_phones={inCart_phones} />                            
                        </div>  
                    </DndProvider>                 
                </div>
                </div>            
            </div>            
            
        )
    }
}

function mapStateToProps({phones}){
    const inCart_phones = Object.keys(phones).filter((phone) => phones[phone].inCart == 'true')
    const outCart_phones = Object.keys(phones).filter((phone) => !inCart_phones.includes(phone))

    return{
        inCart_phones,
        outCart_phones,
    }
  }

export default connect(mapStateToProps)(Container)


