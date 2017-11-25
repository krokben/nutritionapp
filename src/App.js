import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BEMHelper from 'react-bem-helper';
import './App.css';
import appActions from './actions/appActions';
import rdiActions from './actions/rdiActions';
import Header from './components/Header';
import Menu from './components/Menu';
import RdiSettings from './components/RdiSettings';

const bem = new BEMHelper({name: 'app'});

class App extends Component {
  render() {
    return (
      <div {...bem()}>
        <Header appActions={this.props.appActions} />
        {this.props.app.menu && <Menu app={this.props.app} appActions={this.props.appActions} />}
        {this.props.app.rdiSettings && <RdiSettings rdi={this.props.rdi} />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActions, dispatch),
    rdiActions: bindActionCreators(rdiActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
