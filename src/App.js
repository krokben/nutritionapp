import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import rdiActions from './actions/rdiActions';
import Header from './components/Header';
import RdiSettings from './components/RdiSettings';

class App extends Component {
  render() {
    return (
      <div>
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
