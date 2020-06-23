import React, { Component } from 'react';


class MyCart extends Component {
    render(){
        return(
            <div>
                <div class="ui cards">
                    <div class="ui card centered">
                        <div class="content">
                        <img
                            src="/images/phone.jpg"
                            class="ui mini right floated image"
                        />
                        <div class="header">Test_Phone</div>
                        <div class="meta">$ 80</div>
                        <div class="meta">12 minutes</div>
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
            </div>
        )
    }
}

export default MyCart;