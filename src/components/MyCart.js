import React, { Component } from 'react';


class MyCart extends Component {
    render(){
        return(
            <div>
                <div className="ui cards">
                    <div className="ui card centered">
                        <div className="content">
                        <img
                            src="/images/phone.jpg"
                            className="ui mini right floated image"
                        />
                        <div className="header">Test_Phone</div>
                        <div className="meta">$ 80</div>
                        <div className="meta price">12 minutes</div>
                        <div className="description">
                            8G RAM, 16G memory
                        </div>
                        </div>
                        <div className="extra content">
                        <div className="ui two buttons">
                            <button className="ui green basic button">Buy</button>
                            <button className="ui red basic button">Decline</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyCart;