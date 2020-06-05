import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'

import { ItemTypes } from './Constants'
import DisplayPhone from './DisplayPhone'

// DnD Spec
const ShoppingCartSpec = {
    drop(){
        return { name: 'ShoppingCart'}
    }
}
// DnD DropTarget - collect
let collect = ( connect, monitor )=>{
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    };
}

class ShoppingCart extends Component{
    render(){
        const { inCart_phones } = this.props
        const { canDrop, isOver, connectDropTarget } = this.props;
        const  isActive = canDrop && isOver;

        let backgroundColor = '#FFFFFF';
        if (isActive){
            backgroundColor ='#F7F7BD';
        } else if (canDrop){
            backgroundColor = '#F7F7F7';
        }
        const style={
            backgroundColor: backgroundColor
        };

        return connectDropTarget(
            <div className="shopping-cart" style={ style } >
                { !inCart_phones.length  &&
                    (isActive
                    ? 'Humm, phone!'
                    : 'Drag here to order!')
                }
                { inCart_phones.length
                ? <DisplayPhone displayPhones = {inCart_phones} />
                : null
                }
            </div>
        )
    }
}

export default DropTarget(ItemTypes.PHONE, ShoppingCartSpec, collect)(ShoppingCart);