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
        const { brand } = this.props;
        const { isDragging, connectDragSource } = this.props;

        const opacity = isDragging? 0.4: 1;
        const style={
            opacity: opacity
        };
        const phoneClass = isDragging? 'ui card phone drag': 'ui card phone';
        return connectDragSource(
            <div className={phoneClass} style={style}>
                <div className="image"><img src="/images/phone.jpg" /></div>
                <div className="content">
                    <div className="phone-name">{ brand }</div>
                    <div className="meta">8G RAM, 16G memory</div>
                </div>
                <div className="extra content">
                    <a>
                    <i aria-hidden="true" className="money icon"></i>
                    $ 80
                    </a>
                </div>
            </div>
        )
    }
}

export default connect()(DragSource(ItemTypes.PHONE, phoneSpec, collect)(Phone));

