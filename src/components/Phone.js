import React, { Component } from 'react'


class Phone extends Component{
    render(){
        const { name } = this.props;
        return(
            <div class="ui card phone">
                <div class="image"><img src="/images/phone.jpg" /></div>
                <div class="content">
                    <div class="phone-name">{ name }</div>
                    <div class="meta">8G RAM, 16G memory</div>
                </div>
                <div class="extra content">
                    <a>
                    <i aria-hidden="true" class="money icon"></i>
                    $ 80
                    </a>
                </div>
            </div>
        )
    }
}

export default Phone


