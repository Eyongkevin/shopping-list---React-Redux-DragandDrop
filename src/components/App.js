import React, { Component } from 'react';
import { connect } from 'react-redux'
import { _getPhones } from '../utils/_DATA'
import { receivePhones } from '../actions/phones'


class App extends Component {
  componentDidMount(){
    _getPhones()
      .then((phones) =>{
        this.props.dispatch(receivePhones(phones))
      })
  }
  render(){
    const { phones } = this.props
  
    return (
      <div>
        {Object.keys(phones).map((phone) =>(
          <p key={phone}>
            {phones[phone].brand}
          </p>
        ))}
      </div>
      
    );
  }
}

function mapStateToProps({phones}){
  return{
    phones
  }
}

export default connect(mapStateToProps)(App);
