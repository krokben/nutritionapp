import React, { Component } from 'react';
import rdiActions from './actions/rdiActions';

class App extends Component {
  render() {
    return (
      <div>
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
