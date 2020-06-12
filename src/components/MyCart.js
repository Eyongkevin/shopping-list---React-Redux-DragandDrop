import React, { Component } from 'react';
import { connect } from 'react-redux'
import { CSSTransitionGroup } from 'react-transition-group'

class MyCart extends Component {
    render(){
        const { inCart_phones, phones } = this.props;
        
        return(
            <div>
                <CSSTransitionGroup
                        transitionName="transPhones"
                        transitionAppear={true}
                        transitionAppearTimeout={500}
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>
                                             
                    {inCart_phones.length
                    ? inCart_phones.map(phone =>(
                        <div key={phone} class="ui cards">
                            <div class="ui card centered">
                                <div class="content">
                                <img
                                    src="/images/phone.jpg"
                                    class="ui mini right floated image"
                                />
                                <div class="header">{phones[phone].brand}</div>
                                <div class="meta">$ 80</div>
                                <div class="meta price">12 minutes</div>
                                <div class="description">
                                    8G RAM, 16G memory
                                </div>
                                </div>
                                <div class="extra content">
                                <div class="ui two buttons">
                                    <button class="ui green basic button">Buy</button>
                                    <button class="ui red basic button">Decline</button>
                                </div>
                                </div>
                            </div>
                        </div>
                        ))
                    : (
                        <div class="ui placeholder">No Phone in your cart...</div>
                    )}
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

export default connect(mapStateToProps)(MyCart);