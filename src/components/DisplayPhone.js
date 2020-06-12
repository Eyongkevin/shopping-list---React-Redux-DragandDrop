import React, { Component } from 'react';
import { connect } from 'react-redux'
import { CSSTransitionGroup } from 'react-transition-group'

import Phone from './Phone'

class DisplayPhone extends Component {
    render(){
        const { phones, displayPhones } = this.props
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
                            <Phone key={phone} id={phone} brand={phones[phone].brand} />
                            
                    ))}
                </CSSTransitionGroup>
            </div>
        )
    }
}

function mapStateToProps({phones}){

    return{
        phones,
    }
  }

export default connect(mapStateToProps)(DisplayPhone);