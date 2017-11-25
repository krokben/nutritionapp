import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BEMHelper from 'react-bem-helper';
import './App.css';
import rdiActions from './actions/rdiActions';
import Header from './components/Header';
import RdiSettings from './components/RdiSettings';

const bem = new BEMHelper({name: 'app'});

class App extends Component {
  render() {
    return (
      <div {...bem()}>
        <Header />
        <RdiSettings />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    rdiActions: bindActionCreators(rdiActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
