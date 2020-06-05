import React, { Component } from 'react';
import { connect } from 'react-redux'

import Phone from './Phone'

class DisplayPhone extends Component {
    render(){
        const { phones, displayPhones } = this.props
        return(
            <div>
                {displayPhones
                    .map((phone) =>(
                        <Phone key={phone} id={phone} brand={phones[phone].brand} />
                        
                ))}
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