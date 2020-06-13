import React, { Component } from 'react'
import { DragSource } from 'react-dnd';
import { connect } from 'react-redux'

import { ItemTypes } from './Constants';
import { moveIncart } from '../actions/phones'

// phone DnD spec
const phoneSpec = {
    beginDrag(props){
        return{
            name: props.brand,
            id: props.id
            
        }
    },
    endDrag(props, monitor, component){
        if (monitor.didDrop()){
            const dragItem = monitor.getItem();
            const dropResult = monitor.getDropResult();           
            console.log("You dropped ", dragItem.name, ' into '+ dropResult.name)
             // Move action goes here
            props.dispatch(moveIncart(dragItem.id))
        }else{
            return;
        }
    }
}

// phone DragSource collect
let collect = ( connect, monitor ) =>{
    return{
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Phone extends Component{
    render(){
        const { isDragging, connectDragSource } = this.props;
        const { phones, id } = this.props;
        const {
            brand,
            capacity,
            price} = phones[id];


        const opacity = isDragging? 0.4: 1;
        const style={
            opacity: opacity
        };
        const phoneClass = isDragging? 'ui card phone drag': 'ui card phone';
        return connectDragSource(
            <div className={phoneClass} style={style}>
                <div className="image"><img src={`/images/${brand}.jpg`} /></div>
                <div className="content">
                    <div className="phone-name">{ brand }</div>
                    <div className="meta">{ capacity }</div>
                </div>
                <div className="extra content">
                    <a>
                    <i aria-hidden="true" className="money icon"></i>
                    $ { price }
                    </a>
                </div>
            </div>
        )
    }
}

function mapStateToProps({phones}){

    return{
        phones,
    }
  }
export default connect(mapStateToProps)(DragSource(ItemTypes.PHONE, phoneSpec, collect)(Phone));

