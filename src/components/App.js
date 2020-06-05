import React, { Component } from 'react';
import { connect } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'

import '../index.css'
import { _getPhones } from '../utils/_DATA'
import { receivePhones } from '../actions/phones'
import Container from './container'


class App extends Component {
  componentDidMount(){
    _getPhones()
      .then((phones) =>{
        this.props.dispatch(receivePhones(phones))
      })
  }
  render(){
 
    return (
      <Container />
    );
  }
}


export default connect()(App);
