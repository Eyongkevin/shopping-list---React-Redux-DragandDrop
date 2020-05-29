import React, { Component } from 'react'


class Phone extends Component{
    render(){
        const { name } = this.props;
        return(
            <div className='phone'>
                { name }
            </div>
        )
    }
}

export default Phone