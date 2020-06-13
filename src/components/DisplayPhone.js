import React, { Component } from 'react';
import { connect } from 'react-redux'
import { CSSTransitionGroup } from 'react-transition-group'

import Phone from './Phone'

class DisplayPhone extends Component {
    render(){
        const { displayPhones } = this.props
        return(
            <div>
                <CSSTransitionGroup
                        transitionName="transPhones"
                        transitionAppear={true}
                        transitionAppearTimeout={500}
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>
                    
                    {displayPhones
                        .map((phone) =>(
                            <Phone key={phone} id={phone} />
                            
                    ))}
                </CSSTransitionGroup>
            </div>
        )
    }
}


export default connect()(DisplayPhone);