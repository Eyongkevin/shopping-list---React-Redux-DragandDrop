import React, { Component } from 'react'
import { DragSource } from 'react-dnd';

import { ItemTypes } from './Constants';

// phone DnD spec
const phoneSpec = {
    beginDrag(props){
        console.log("begin drag")
        return{
            name: props.brand
            
        }
    },
    endDrag(props, monitor, component){
        if (monitor.didDrop()){
            const dragItem = monitor.getItem();
            const dropResult = monitor.getDropResult();
            // Move action goes here
            console.log("You dropped ", dragItem.name, ' into '+ dropResult.name)
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

export default DragSource(ItemTypes.PHONE, phoneSpec, collect)(Phone);




