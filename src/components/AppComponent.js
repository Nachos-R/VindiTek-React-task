import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddButton from './AddButton';
import Inputs from './Inputs';
import Result from './Result';
import { getInitialResult } from '../modules/inputs';

class AppContainer extends Component {
  componentDidMount() {
    this.props.getInitialResult();
  }

  render() {
    return (
      <div className="container">
        <Result />
        <Inputs />
        <AddButton />
      </div>
    );
  }
}

export default connect(
  null,
  { getInitialResult }
)(AppContainer);
